import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image, Animated,Picker, TouchableOpacity} from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Usuario({route}){
   const navigation = useNavigation();
   
   
return(
    <ScrollView>
    <SafeAreaView>
        <View style={styles.header}>
            <TouchableOpacity
            onPress={() => navigation.navigate('Produtos')}
            style={styles.head}
            >
            <Image source={require('../../../assets/setaesquerda.png')} style={{width: 70, height:40,}} resizeMode='contain'></Image>
           
            </TouchableOpacity>
            <TouchableOpacity><Image source={require('../../../assets/carrinho.png')} style={{width: 70, height:40,}} resizeMode='contain'></Image></TouchableOpacity>
        </View>
        <View>
        <Text style={{color: '#000' , fontSize: 30 , fontWeight: 'bold' }}> Bebidas: </Text>
           <TouchableOpacity
           style={styles.caixa}
           >
            <Image source={require('../../../assets/KOKAKOLA.png')} style={{width: 80, height:120,marginLeft:15, marginBottom: 20}} resizeMode='contain'></Image>
            <TouchableOpacity>
           <Text style={styles.textocaixa}>Coca Cola Original 350ml</Text>
           <Text style={{fontSize: 27, marginLeft:5}}>R$ 4,59</Text>
           </TouchableOpacity>
           </TouchableOpacity>
           <TouchableOpacity
           style={styles.caixa}
           >
            <Image source={require('../../../assets/PEPSI.png')} style={{width: 80, height:120,marginLeft:15}} resizeMode='contain'></Image>
            <TouchableOpacity>
           <Text style={styles.textocaixa}>Pepsi Original 350ml</Text>
           <Text style={{fontSize: 27, marginLeft:5}}>R$ 3,09</Text>
           </TouchableOpacity>
           </TouchableOpacity>
           <TouchableOpacity
           style={styles.caixa}
           >
            <Image source={require('../../../assets/GUARANA.png')} style={{width: 80, height:140,marginLeft:15}} resizeMode='contain'></Image>
            <TouchableOpacity>
           <Text style={styles.textocaixa}>Guaraná Antarctica 350ml</Text>
           <Text style={{fontSize: 27, marginLeft:5}}>R$ 2,59</Text>
           </TouchableOpacity>
           </TouchableOpacity>
           <TouchableOpacity
           style={styles.caixa}
           >
            <Image source={require('../../../assets/JESUS.png')} style={{width: 80, height:140,marginLeft:15}} resizeMode='contain'></Image>
            <TouchableOpacity>
           <Text style={styles.textocaixa}>Guaraná Jesus 350ml</Text>
           <Text style={{fontSize: 27, marginLeft:5}}>R$ 3,19</Text>
           </TouchableOpacity>
           </TouchableOpacity>
           <TouchableOpacity
           style={styles.caixa}
           >
            <Image source={require('../../../assets/LARANJA.png')} style={{width: 80, height:140,marginLeft:15}} resizeMode='contain'></Image>
            <TouchableOpacity>
           <Text style={styles.textocaixa}>Fanta Laranja 350ml</Text>
           <Text style={{fontSize: 27, marginLeft:5}}>R$ 3,69</Text>
           </TouchableOpacity>
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
        height: 100,
        flexDirection:'row',
        alignItems:'center',
        
    },
    textocaixa:{
        fontFamily: 'sans-serif',
        fontSize: 25,
        marginTop: 5,
        marginLeft: 7,
    }

  });