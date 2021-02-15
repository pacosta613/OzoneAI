import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function Earn() {

  return (
    <View style={styles.container}>
      <Text> Welcome to Ozone AI</Text>
     
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