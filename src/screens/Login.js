import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, Button, TouchableOpacity, Alert  } from "react-native";
import { onLogin } from "../auth";

export default class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: '',
    };
  } 

  onLogin() {
    const { email, password } = this.state;

    Alert.alert('Credentials', `${email} + ${password}`);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Signin with Email </Text>
          <View>
            <TextInput 
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
              style={styles.input} 
              placeholder="Enter Email"  />
            <TextInput style={styles.input}
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
              secureTextEntry={true}
              placeholder="Enter Password"
            />

            <TouchableOpacity style={styles.button} onPress={this.onLogin.bind(this)} >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
      </View>
    )
  }
};

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
  input: {
    marginTop: 10,
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    backgroundColor: '#E8F0FE',
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