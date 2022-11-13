import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MealList from '../components/MealList'
import { MEALS } from '../data/dummy-data'
import { useFavoriteState } from '../store/context/FavoriteContext'

const FavouritesScreen = () => {
    const {ids} = useFavoriteState();

    const favouriteMeals = MEALS.filter(meal=>ids.includes(meal.id)) 
    
  if(favouriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>
           You have no favourite meals yet. 
        </Text>
      </View>
    )
  }

  return (
    <MealList meals={favouriteMeals} />
  )
}

export default FavouritesScreen

 const styles = StyleSheet.create({
      rootContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
      },
      text:{
        fontSize:20,
        fontWeight:'bold',
        color:'white',
      }
 })