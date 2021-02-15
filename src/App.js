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

import Welcome                        from "./screens/Welcome";
import Login                          from "./screens/Login";
import Earn                           from "./screens/Earn";
import { isLogin }                    from "./action/api";
import TabBarNav                      from "./navigations/TabBarNav";
import MainStackNavigator             from "../src/navigations/MainStackNavigator";
import { NavigationContainer }        from '@react-navigation/native'
import { Provider }                     from 'react-redux';
import promise                          from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import store                            from './reducers/index'

const createStoreWithMiddleware         = applyMiddleware(promise)(createStore)(store);

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,
      checkedLogin: false
    };
  }

  componentDidMount() {

    // isLogin()
    //   .then(res => this.setState({ isLogin: res, checkedLogin: true }))
    //   .catch(err => console.log("An error occurred"));
  }

  render() {
    const { checkedLogin, isLogin } = this.state;

    // if (!checkedLogin) {
      return ( <Provider store={createStoreWithMiddleware}><MainStackNavigator /></Provider> );
    // }

    // return ( <Provider store={createStoreWithMiddleware}><NavigationContainer><TabBarNav /></NavigationContainer></Provider> );
  }
}
