/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Welcome from "./screens/Welcome";
import Login    from "./screens/Login";
import { isLogin } from "./auth";
import { createRootNavigator } from "./router";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,
      checkedLogin: false
    };
  }

  componentDidMount() {
    console.log("im right here")
    isLogin()
      .then(res => this.setState({ isLogin: res, checkedLogin: true }))
      .catch(err => alert("An error occurred"));
  }

  render() {
    const { checkedLogin, isLogin } = this.state;

    if (!checkedLogin) {
      return null;
    }

    const Layout = createRootNavigator(isLogin);
    return <Login />;
  }
}
