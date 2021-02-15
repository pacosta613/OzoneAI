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
      
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: "Profile",
      
    }
  }
});