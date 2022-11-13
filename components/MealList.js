import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import MealItem from './MealItem'

function MealList({meals}) {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <FlatList  data={meals} 
         renderItem={(itemData)=>(
            <MealItem
             navigation={navigation}
             mealItem={itemData.item} 
             />
         )}
         keyExtractor={(item)=>item.id}
        />
     </View>
  )
}

export default MealList
const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})