import { useRoute } from '@react-navigation/native'
import React, { useLayoutEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import MealItem from '../components/MealItem'
import MealList from '../components/MealList'
import { CATEGORIES, MEALS } from '../data/dummy-data'



function MealListScreen({route,navigation}) {
    // const route = useRoute()
    const catID = route.params.categoryId
    const displayMeal = MEALS.filter((meal)=>meal.categoryIds.indexOf(catID) >=0)

   
   
  useLayoutEffect(()=>{

    const mealTitle = CATEGORIES.find(category=>category.id===catID)
    navigation.setOptions({title: mealTitle.title})

  },[catID,navigation])

  return (
     <MealList meals={displayMeal} />
  )
}

export default MealListScreen

