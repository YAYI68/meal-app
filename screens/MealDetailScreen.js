import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import MealInfo from '../components/MealInfo';
import { MEALS } from '../data/dummy-data';



function MealDetailScreen({route}) {
    const navigation = useNavigation();
    const mealID = route.params.mealId
    const mealDetail = MEALS.find((meal)=>meal.id === mealID)

    useLayoutEffect(()=>{
        navigation.setOptions({
            title:mealDetail.title,
            headerRight:()=><Button title='tap me' />
        });

    },[navigation])
  return (
    <ScrollView style={styles.container}>
        <View style={{alignItems:'center'}}>
        <Image style={styles.image} source={{uri:mealDetail.imageUrl}} />
        <Text style={styles.title}>{mealDetail.title}</Text>
        <MealInfo 
         mealItem={mealDetail}
         textStyle={styles.detailText}
         />
         <View style={styles.listContainer}>

        <View style={styles.subtitleContainer}>        
        <Text style={styles.subtitle}>Ingredients</Text>
        </View> 
        {mealDetail.ingredients.map((ingredient)=>(
            <View  style={styles.listItem}>
                <Text style={styles.itemText} key={ingredient}>{ingredient}</Text>
            </View>
        ))}
        <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Steps</Text>
        </View>
        {mealDetail.steps.map((step)=>(
            <View style={styles.listItem}>
                <Text style={styles.itemText} key={step}>{step}</Text>
            </View>
        ))}
         </View>
        </View>
    </ScrollView>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
    container:{
      marginBottom:32,
    },
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
    },
    listItem:{
        borderRadius:6,
        paddingHorizontal:8,
        paddingVertical:4,
        marginHorizontal:12,
        marginVertical:4,
        backgroundColor:'#e2b497',

    },
    itemText:{
        color:'#351401',
        textAlign:'center',
    },
    listContainer:{
        width:'80%',
    }
})