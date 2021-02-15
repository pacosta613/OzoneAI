import AsyncStorage from '@react-native-async-storage/async-storage';
import axios                            	from 'axios';  

var apiUrl = "https://www.ozone.ai/api/v1"

export const LOGIN 				= 'LOGIN';
export const SIGNOUT 			= 'SIGNOUT';
export const ACCESS_TOKEN 		= "ACCESS_TOKEN";


export const isLogin = () => {
	console.log("AsyncStorage ", AsyncStorage.getItem('access-token'))
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem('access-token')
      .then(res => {
      	console.log("res ", res)
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};

export function loginFunc(userObj) {
	console.log("userObj ", userObj)
	return axios.post(`${apiUrl}/auth/sign_in`, userObj)
    .then((res) => {
    	console.log("res first response <---> ", res)
    	
      if (res.status === 200) {
      	console.log("i am passing", res.data.data)
      	console.log("i am passing", res.headers["access-token"])
      	AsyncStorage.setItem('access-token', res.headers["access-token"])
        return {
	      	type: LOGIN,
	      	payload: {
	      		auth: res.data.data,
	      		token: res.headers["access-token"]
	      	}
      	}
      } else {
        throw res;
      }
    })
    .catch((err) => {
      return {
        type: LOGIN,
        payload: {
          status: err,
        }
      }
    })
};

export function getAccessToken(token) {
  return {
    type: GET_ACCESS_TOKEN,
    token,
  }
}

export function onSignOut () {
	console.log("just signed out")
	AsyncStorage.clear();
	console.log("AsyncStorage ", AsyncStorage.getItem("access-token"))
} 
