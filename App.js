import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home , Example, Number} from './index'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={"Home"}>
          <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{
        headerShown: false,
        }}/>
        <Stack.Screen 
          name="Example" 
          component={Example} 
          options={{
        headerShown: false,
        }}/>
        <Stack.Screen 
          name="Number" 
          component={Number} 
          options={{
        headerShown: false,
        }}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}