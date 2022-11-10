import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import MealInfo from './MealInfo';

function MealItem({mealItem}) {
    const navigation = useNavigation();


    const onPressHandler = ()=>{
        navigation.navigate("MealDetail",{mealId:mealItem.id}) 
      }

  return (
    <View style={styles.mealItem}>
        <Pressable
          onPress={onPressHandler}
          android_ripple={{color: '#ccc'}}
          style={({pressed})=>pressed?styles.buttonPressed:null}
        >
            <View style={styles.innerContainer}>
            <View>
                <Image style={styles.image} source={{uri:mealItem.imageUrl}} />
             <Text style={styles.title}>{mealItem.title}</Text>
            </View>
               <MealInfo mealItem={mealItem} />
            </View>
        </Pressable>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
    mealItem:{
        margin:16,
        borderRadius:8,
        overflow: 'hidden',
        backgroundColor:'white',
        elevation:8,
        shadowColor:'black',
        shadowOffset:{width:0, height:2},
        shadowOpacity:0.35,
        shadowRadius:16,
    },
    innerContainer:{
        borderRadius:8,
        overflow: 'hidden',
    },
    image:{
        width:'100%',
        height:200
    },
    title:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:18,
        margin:8,
    },
    buttonPressed:{
        opacity:0.5,
      },
  
})