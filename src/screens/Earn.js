import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { CardList } from 'react-native-card-list';


export default function Earn() {
  const cards = [
  {
    id: "0",
    title: "Starry Night",
    picture: require('../assets/food.png'),
    content: <Text>Starry Night</Text>
  },
  {
    id: "1",
    title: "Wheat Field",
    picture: require('../assets/entertainment.png'),
    content: <Text>Wheat Field with Cypresses</Text>
  },
  {
    id: "2",
    title: "Bedroom in Arles",
    picture: require('../assets/health_and_beauty.png'),
    content: <Text>Bedroom in Arles</Text>
  },
  {
    id: "3",
    title: "Bedroom in Arles",
    picture: require('../assets/family.png'),
    content: <Text>Bedroom in Arles</Text>
  }
]
  return (
    <View style={styles.container}>
        <CardList cards={cards} />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})