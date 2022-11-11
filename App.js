import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import { CATEGORIES } from './data/dummy-data';
import CategoryScreen from './screens/CategoryScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import MealListScreen from './screens/MealListScreen';
import IconButton from './components/IconButton';
import FavouritesScreen from './screens/FavouritesScreen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const DrawerComponent = ()=>{
  return (
    <Drawer.Navigator 
    screenOptions={{
      headerStyle:{backgroundColor:'#351401'},
       headerTintColor:'white',
       sceneContainerStyle:{
        backgroundColor:'#3f2f25',
       },
       drawerContentStyle:{
        backgroundColor:'#351401',
       },
       drawerInactiveTintColor:"white",
       drawerActiveTintColor:"#351401",
       drawerActiveBackgroundColor:"#e4baa1",
     }}
    >
      <Drawer.Screen  name='Categories' 
      component={CategoryScreen} 
      options={{
          title:"All Categories",
          drawerIcon:({color,size})=><IconButton icon={'list'} size={size} color={color} />
      }}
      />
       <Drawer.Screen  name='Favourites' 
      component={FavouritesScreen} 
      options={{
          title:"All Favourites",
          drawerIcon:({color,size})=><IconButton icon={'star'} size={size} color={color} />
      }}
      />
    </Drawer.Navigator>
  )
}

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
        component={DrawerComponent}
         options={{headerShown:false,}}
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
          name="MealDetail" 
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
