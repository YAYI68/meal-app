import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import MealInfo from '../components/MealInfo';
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
        <Image style={styles.image} source={{uri:mealDetail.imageUrl}} />
        <Text style={styles.title}>{mealDetail.title}</Text>
        <MealInfo 
         mealItem={mealDetail}
         textStyle={styles.detailText}
         />
        <View style={styles.subtitleContainer}>        
        <Text style={styles.subtitle}>Ingredients</Text>
        </View> 
        {mealDetail.ingredients.map((ingredient)=>(
           <Text key={ingredient}>{ingredient}</Text>
        ))}
        <Text style={styles.subtitle}>Steps</Text>
        {mealDetail.steps.map((step)=>(
            <Text key={step}>{step}</Text>
        ))}
    </View>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:350,
    },
    title:{
        fontSize:24,
        margin:8,
        textAlign: 'center',
        fontWeight:'bold',
        color:'white',
    },
    detailText:{
        color:'white',
    },
    subtitle:{
        color:'#e2b497',
        fontSize:20,
        fontWeight:'bold',
        margin:8,
        textAlign: 'center',
     
    },
    subtitleContainer:{
        borderBottomColor:'#e2b497',
        borderBottomWidth:2,
        padding:6,
        marginHorizontal:24,
        marginVertical:4,
    }
})