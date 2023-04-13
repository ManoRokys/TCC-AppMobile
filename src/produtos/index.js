import React, {useState} from 'react';
import {Alert,StyleSheet, Text, View, SafeAreaView, Image, Animated,Picker, TouchableOpacity} from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import ListItem from '../ListItem';
import { height } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import seta from '../../assets/Seta.png';

export default function Usuario({route}){
   const navigation = useNavigation();

   
return(
    <ScrollView>
    <SafeAreaView>
        <View style={styles.header}>
            <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.head}
            >
            <Image source={require('../../assets/logo.png')} style={{width: 80, height:50,}} resizeMode='contain'></Image>
           
            </TouchableOpacity>
            <TouchableOpacity><Image source={require('../../assets/carrinho.png')} style={{width: 70, height:40,}} resizeMode='contain'></Image></TouchableOpacity>
        </View>
        <View>
        <Text style={{color: '#000' , fontSize: 30 , fontWeight: 'bold' }}> Produtos: </Text>
           <TouchableOpacity
           style={styles.caixa}
           onPress={() => navigation.navigate('Bebidas')}
           >
           <Text style={styles.textocaixa}>Bebidas</Text>
           <Image source={seta} style={{width: 50, height:50}}></Image>
           </TouchableOpacity>
           <TouchableOpacity
           style={styles.caixa}
           >
           <Text style={styles.textocaixa}>Produto de limpeza</Text>
           <Image source={seta} style={{width: 50, height:50}}></Image>
           </TouchableOpacity>
           <TouchableOpacity
           style={styles.caixa}
           >

           <Text style={styles.textocaixa}>Frios e Laticínios</Text>
           <Image source={seta} style={{width: 50, height:50}}></Image>
           </TouchableOpacity>
           <TouchableOpacity
           style={styles.caixa}
           >

           <Text style={styles.textocaixa}>Padaria</Text>
           <Image source={seta} style={{width: 50, height:50}}></Image>
           </TouchableOpacity>
           <TouchableOpacity
           style={styles.caixa}
           >

           <Text style={styles.textocaixa}>Higiene</Text>
           <Image source={seta} style={{width: 50, height:50}}></Image>
           </TouchableOpacity>
           <TouchableOpacity
           style={styles.caixa}
           >

           <Text style={styles.textocaixa}>Hortifruti</Text>
           <Image source={seta} style={{width: 50, height:50}}></Image>
           </TouchableOpacity>
           <TouchableOpacity
           style={styles.caixa}
           >

           <Text style={styles.textocaixa}>Pet Shop</Text>
           <Image source={seta} style={{width: 50, height:50}}></Image>
           </TouchableOpacity>
           <TouchableOpacity
           style={styles.caixa}
           >

           <Text style={styles.textocaixa}>Mercearia</Text>
           <Image source={seta} style={{width: 50, height:50}}></Image>
           </TouchableOpacity>
           <TouchableOpacity
           style={styles.caixa}
           >

           <Text style={styles.textocaixa}>Carnes</Text>
           <Image source={seta} style={{width: 50, height:50}}></Image>
           </TouchableOpacity>
        </View>
    </SafeAreaView>
   </ScrollView>
)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header:{
        backgroundColor:'#0744a6',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:7,
    },
    caixa: {
        marginLeft: 2,
        marginBottom: 5,
        marginTop:2,
        border: 'bold',
        borderRadius: 3,
        borderColor: '#FFF',
        elevation: 4,
        width: 404,
        height: 72,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    textocaixa:{
        fontFamily: 'sans-serif',
        fontSize: 25,
        marginTop: 5,
        marginLeft: 70,
    }

  });