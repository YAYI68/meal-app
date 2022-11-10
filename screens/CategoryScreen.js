import React from 'react';
import { FlatList, View } from "react-native"
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

CATEGORIES

function CategoryScreen({navigation}) {


    const pressHandler = ()=>{
       navigation.navigate("MealDetail")
    }
  return (
      <FlatList 
        key={'#'}
       data={CATEGORIES} 
       renderItem={(itemData)=>(
           <CategoryGridTile 
           title={itemData.item.title} 
           color={itemData.item.color}
           onPress={pressHandler}
           />
       )}
       numColumns={2}
       keyExtractor={(item)=>item.id}
      /> 
  )
}

export default CategoryScreen