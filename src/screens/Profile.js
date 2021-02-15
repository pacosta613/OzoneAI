import React, {Component} from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { onSignOut } from "../action/api";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default class Profile extends React.Component {
  constructor(props) {
    super(props);
  } 

  signOut() {
    console.log("this props ", AsyncStorage.getItem("access-token"))

    onSignOut()
    console.log("this props ", AsyncStorage.getItem("access-token"))
    this.props.navigation.navigate('Login')
  }

  render() {
    console.log("this props ", this.props)
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Welcome to Ozone AI</Text>
        <TouchableOpacity style={styles.button} onPress={this.signOut.bind(this)}>
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#803e72'
  },
  text: {
    color: '#ffffff',
    fontSize: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 60,
  },
  button: {
    flexDirection: 'row',
    borderRadius: 35,
    marginTop: 10,
    marginRight: 100,
    marginBottom: 10,
    width: 160,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5264F9',

    
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '400',
  }
})