import React, { Component } from 'react'
import { NavigationContainer }      from '@react-navigation/native'
import { createStackNavigator }     from '@react-navigation/stack'
import { createAppContainer }       from 'react-navigation';


// import Home 	from '../screens/Home'
import Earn 	from '../screens/Earn'
import Login 	from '../screens/Login'
import Welcome 	from '../screens/Welcome'
import Profile  from "../screens/Profile";
import TabBarNav from "./TabBarNav"


const Stack = createStackNavigator()


function MainStackNavigator() {
	console.log("main stack")
  	return (
  		<NavigationContainer>
	      	<Stack.Navigator>

		      <Stack.Screen name="Welcome" component={Welcome} />
		      <Stack.Screen name="Login" component={Login} />
		      <Stack.Screen name="Earn" component={TabBarNav} />
		    </Stack.Navigator>
	    </NavigationContainer>
  	)
}

export default MainStackNavigator