import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function Login() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Anonymous login')}
      >
        <Text style={styles.buttonText}>Login 🔥</Text>
      </TouchableOpacity>
    </View>
  )
}