import React, { useLayoutEffect } from 'react'
import { Text, View } from 'react-native';
import { MEALS } from '../data/dummy-data';



function MealDetailScreen({route, navigation}) {
    
    const mealID = route.params.mealId
    
    const mealDetail = MEALS.find((meal)=>meal.id === mealID)

    useLayoutEffect(()=>{

    },[])
  return (
    <View>
        <Text>{mealDetail.title}</Text>
    </View>
  )
}

export default MealDetailScreen