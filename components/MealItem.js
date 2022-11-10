import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

function MealItem({mealItem}) {
  return (
    <View style={styles.mealItem}>
        <Pressable
        //   onPress={}
          android_ripple={{color: '#ccc'}}
        style={({pressed})=>pressed?styles.buttonPressed:null}
        >
            <View style={styles.innerContainer}>
            <View>
                <Image style={styles.image} source={{uri:mealItem.imageUrl}} />
             <Text style={styles.title}>{mealItem.title}</Text>
            </View>
            <View style={styles.details}>
                <Text style={styles.detailItem}>{mealItem.duration}m</Text>
                <Text  style={styles.detailItem}>{mealItem.complexity}</Text>
                <Text style={styles.detailItem}>{mealItem.affordability}</Text>
            </View>
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
    details:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        padding:8,
    },
    detailItem:{
        marginHorizontal:4,
        fontSize:12,
    }
})