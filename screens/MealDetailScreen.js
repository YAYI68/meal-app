import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react'
import { Image, Text, View } from 'react-native';
import { MEALS } from '../data/dummy-data';



function MealDetailScreen({route}) {
    const navigation = useNavigation();
    const mealID = route.params.mealId
    const mealDetail = MEALS.find((meal)=>meal.id === mealID)

    useLayoutEffect(()=>{
        navigation.setOptions({
            title:mealDetail.title
        });

    },[navigation])
  return (
    <View>
        <Image source={{uri:mealDetail.imageUrl}} />
        <Text>{mealDetail.title}</Text>
        <View>

        </View>
        <Text>ingredients</Text>
        <Text>Steps</Text>
    </View>
  )
}

export default MealDetailScreen