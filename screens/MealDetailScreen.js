import { useRoute } from '@react-navigation/native'
import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import MealItem from '../components/MealItem'
import { MEALS } from '../data/dummy-data'



function MealDetailScreen({route}) {
    // const route = useRoute()
    const catID = route.params.categoryId
    const displayMeal = MEALS.filter((meal)=>meal.categoryIds.indexOf(catID) >=0)
  return (
     <View style={styles.container}>
        <FlatList  data={displayMeal} 
         renderItem={(itemData)=>(
            <MealItem mealItem={itemData.item} />
         )}
         keyExtractor={(item)=>item.id}
        />
     </View>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})