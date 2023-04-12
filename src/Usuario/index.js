import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image, Animated} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
//import ListItem from '../ListItem';

export default function Usuario({route}){
   const usuarios = [ {id: '3', nome: 'Kemerson da silva martins'},
    {id: '4', nome: 'Maria luiza'},
    {id: '5', nome: 'Pedro Silva'},
    {id: '6', nome: 'Matheus freitas'},
    {id: '7', nome: 'Douglas Shimabukuro'}
]
return(
    <SafeAreaView>
        <View style={styles.header}>
            <Image source={require('../../assets/logo.png')} style={{width: 80, height:50,}} resizeMode='contain'></Image>
            <Text style={{color: '#FFF' , fontSize: 17 , fontWeight: 'bold' }}> Lista de Usuários </Text>
        </View>
        <View>
            <FlatList data={usuarios} keyExtractor={item => item.id} renderItem={({item}) => (<ListItem data={item} deletar={() => alert("Excluir")} editar= {() => alert("editar")}></ListItem>)}>

            </FlatList>
        </View>
    </SafeAreaView>
)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });