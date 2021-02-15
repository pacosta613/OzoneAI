import * as React from 'react'
import { NavigationContainer } 			from '@react-navigation/native'
import { createBottomTabNavigator } 	from '@react-navigation/bottom-tabs';


// import Home 	from '../screens/Home'
import Earn 	from '../screens/Earn'
import Profile 	from '../screens/Profile'
// import Welcome 	from '../screens/Welcome'

const Tab = createBottomTabNavigator();


function TabBarNav() {
  	return (
	      	<Tab.Navigator>
		      <Tab.Screen name="Earn" component={Earn} />
		      <Tab.Screen name="Profile" component={Profile} />
		    </Tab.Navigator>
  	)
}

export default TabBarNav