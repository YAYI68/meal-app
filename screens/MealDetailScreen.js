import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MEALS } from '../data/dummy-data'



function MealDetailScreen() {
  return (
     <View style={styles.container}>
        <Text>MEal Deatail </Text>
     </View>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})