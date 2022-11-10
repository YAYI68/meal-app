import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function MealInfo({mealItem}) {
  return (
    <View style={styles.details}>
    <Text style={styles.detailItem}>{mealItem.duration}m</Text>
    <Text  style={styles.detailItem}>{mealItem.complexity}</Text>
    <Text style={styles.detailItem}>{mealItem.affordability}</Text>
</View>
  )
}

export default MealInfo

 const styles = StyleSheet.create({
    details:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        padding:8,
    },
    detailItem:{
        marginHorizontal:4,
        fontSize:12,
    }
 })