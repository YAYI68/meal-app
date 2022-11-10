import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function MealInfo({mealItem,style,textStyle}) {
  return (
    <View style={[styles.details,style]}>
    <Text style={[styles.detailItem,textStyle]}>{mealItem.duration}m</Text>
    <Text  style={[styles.detailItem,textStyle]}>{mealItem.complexity.toUpperCase()}</Text>
    <Text style={[styles.detailItem,textStyle]}>{mealItem.affordability.toUpperCase()}</Text>
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
        fontWeight:'bold',
    },
   
 })