import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import MealDetailScreen from './screens/MealDetailScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
     <>
     <StatusBar style="dark" />
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='MealsCategories' component={CategoryScreen} />
        <Stack.Screen name="MealDetails" component={MealDetailScreen} />
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
