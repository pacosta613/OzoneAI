import { AsyncStorage } from "@react-native-community/async-storage";

export const ACCESS_TOKEN = "access-token";

export const onLogin = () => AsyncStorage.setItem(ACCESS_TOKEN);

export const onSignOut = () => AsyncStorage.removeItem(ACCESS_TOKEN);

export const isLogin = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(ACCESS_TOKEN)
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};