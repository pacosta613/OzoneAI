import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import SmallVideo from '../../small3.mp4';

export default function Login() {

  return (

    <View style={styles.container}>
      <Video source={SmallVideo} style={{ width: 300, height: 300 }} playWhenInactive={true} controls={true}/>
      <Text style={styles.title}>Get Your Data Dividend</Text>
      <Text style={styles.paragraph}>Ozone is the way the Internet should be. Get free tools to make money from your data in just a few clicks.</Text>
      <TouchableOpacity style={styles.button} onPress={() => alert('login')} >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#99A4FB'
  },
  title: {
    marginTop: 20,
    marginBottom: 30,
    fontSize: 45,
    fontWeight: '800',
    color: '#ffffff'
  },
  paragraph: {
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 20,
    fontSize: 21,
    fontWeight: '500',
    color: '#ffffff'
  },
  button: {
    flexDirection: 'row',
    borderRadius: 35,
    marginTop: 10,
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
    fontWeight: '600',
    marginRight: 5
  }
})