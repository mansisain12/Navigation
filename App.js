import React from "react";
import { View,Text } from "react-native";
import Register from "./screens/register";
import Home from "./screens/Home";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {
  const Stack = createNativeStackNavigator();

    return(
    
      <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{headerShown: true}}
        initialRouteName="Home">
          <Stack.Screen name="Registration" component={Register}   />
          <Stack.Screen  name="Home" component={Home} />

        </Stack.Navigator>
      </NavigationContainer>
    )
  }
export default App;