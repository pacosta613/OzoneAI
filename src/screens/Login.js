import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { onLogin } from "../auth";

export default function Login() {
  return (
    <View style={styles.container}>
      <Text> Login Form </Text>
        <View>
          <TextInput placeholder="Enter Email" />
          <TextInput
            secureTextEntry={true}
            placeholder="Enter Password"
          />
        </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  }
})