import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../login';
//import { Splash } from '../lotties/Splash';
import Cadastro from '../cadastro';
//import Home from '../Home';
const Stack = createNativeStackNavigator();

function StackNavigator(){
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>

            <Stack.Screen name="Home" component={Home}/> 
            <Stack.Screen name="login" component={Login} />   
            <Stack.Screen name="cadastro" component={Cadastro} /> 
              
        </Stack.Navigator>
    )
}

function AppRoutes(){
    return(
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}
export default AppRoutes;