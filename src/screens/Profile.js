import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function Profile() {

  return (
    <View style={styles.container}>
      <Text> Welcome to Ozone AI</Text>
      <TouchableOpacity style={styles.button} onPress={() => alert('Sign out')}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

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