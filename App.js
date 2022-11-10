import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CATEGORIES } from './data/dummy-data';
import CategoryScreen from './screens/CategoryScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import MealListScreen from './screens/MealListScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
     <>
     <StatusBar style="light" />
     <NavigationContainer>
      <Stack.Navigator 
       screenOptions={{
        headerStyle:{backgroundColor:'#351401'},
         headerTintColor:'white',
         contentStyle:{
          backgroundColor:'#3f2f25',
         }
       }}
      >
        <Stack.Screen 
        name='MealsCategories'
        component={CategoryScreen}
         options={{title:'All Categories',    
        }}
         />
        <Stack.Screen 
        name="MealList" 
        component={MealListScreen} 
        // options={({route,navigation})=>{
        //   catID=route.params.categoryId
        //   const mealTitle = CATEGORIES.find(category=>category.id===catID)
        //   return {title:mealTitle.title,}
        // }}
        />
        <Stack.Screen 
          name="MealDetails" 
          component={MealDetailScreen}
        />
      </Stack.Navigator>
      </NavigationContainer> 
     </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
