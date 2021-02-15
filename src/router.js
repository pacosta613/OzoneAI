import { StackNavigator, TabNavigator } from "react-navigation";

import Login    from "./screens/Login";
import Welcome  from "./screens/Welcome";
import Profile  from "./screens/Profile"

export const SignedOut = StackNavigator({

  Login: {
    screen: Login,
    navigationOptions: {
      title: "Login"
    }
  }
});

export const SignedIn = TabNavigator({
  Earn: {
    screen: Earn,
    navigationOptions: {
      tabBarLabel: "Earn",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="home" size={30} color={tintColor} />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: "Profile",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="user" size={30} color={tintColor} />
      )
    }
  }
});