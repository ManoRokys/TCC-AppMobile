
import React from 'react';
import { NavigationContainer} from  '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons}  from '@expo/vector-icons';

import Cadastro from './src/cadastro';
import Login from './src/login';
import Home from '././src/Home';
import produtos from '././src/produtos';
import bebidas from '././src/produtos/bebidas'


const Stack= createNativeStackNavigator();


export default function App(){
  return(
  <NavigationContainer>
  <Stack.Navigator>
  
  <Stack.Screen
       name="Login"
       component={Login}
       options={{
         title: 'QrMarket',
         headerStyle:{
           backgroundColor: '#0744a6'
         },           
       }}        
     >

        
     </Stack.Screen>   
    <Stack.Screen
       name="Cadastro"
       component={Cadastro}
       options={{
         title: 'Cadastro',
         headerStyle:{
           backgroundColor: '#0744a6'
         },           
        }}        
    >
     </Stack.Screen>


     <Stack.Screen
   
       name="Home"
       component={Home}
       options={{
         headerShown: false,
         title: 'Home',
         headerStyle:{
           backgroundColor: '#0744a6'

         },           
        }}        
    >
     </Stack.Screen>

     <Stack.Screen
   
       name="Produtos"
       component={produtos}
       options={{
         headerShown: false,
         title: 'produtos',
         headerStyle:{
           backgroundColor: '#0744a6'

         },           
        }}        
    >
     </Stack.Screen>
     <Stack.Screen
       name="Bebidas"
       component={bebidas}
       options={{
         headerShown: false,
         title: 'Bebidas',
         headerStyle:{
           backgroundColor: '#0744a6'
         },           
       }}        
     >

        
     </Stack.Screen> 
     

  </Stack.Navigator>
</NavigationContainer>
  );
 
    
    
    }
  
  
  


        
         
  

