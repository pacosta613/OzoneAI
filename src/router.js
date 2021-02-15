import { StackNavigator } from "react-navigation";

import Login from "./screens/Login";

export const SignedOut = StackNavigator({

  Login: {
    screen: Login,
    navigationOptions: {
      title: "Login"
    }
  }
});