import { NavigationContainer }      from '@react-navigation/native'
import { createStackNavigator }     from '@react-navigation/stack'
import { createAppContainer }       from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Login    from "./screens/Login";
import Welcome  from "./screens/Welcome";
import Profile  from "./screens/Profile";
import Earn     from "./screens/Earn";

const Stack = createStackNavigator();

function MainStackNavigator() {
    return (

        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={Welcome} />
        </Stack.Navigator>
    )
}

const TabNavigator = createBottomTabNavigator({
  Earn: Earn,
  Profile: Profile,
});

export default createAppContainer(TabNavigator);
