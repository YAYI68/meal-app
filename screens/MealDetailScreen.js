import { useRoute } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MEALS } from '../data/dummy-data'



function MealDetailScreen({route}) {
    // const route = useRoute()
    const catID = route.params.categoryId
    const displayMeal = MEALS.filter((meal)=>meal.categoryId.indexOf(catID) >=0)
  return (
     <View style={styles.container}>
        <Text>MEal Deatail  ---{catID} </Text>
     </View>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})