import React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Routes from '../routes';
import Carrinho from '../../assets/carrinho.jpg';
import Carousel from 'react-native-snap-carousel'; const data = [
 { id: 1, source: require('../../assets/carrinho.jpg') },
 { id: 2, source: require('../../assets/suascompras.png')},
 { image: 'https://picsum.photos/200/302' },
 { image: 'https://picsum.photos/200/303' },
 { image: 'https://picsum.photos/200/304' },
];

  export default function MyCarousel() {
 const navigation = useNavigation();
 const renderItem = ({ item }) => {
return (
<View style={styles.item}><Image source={item.source} style={styles.image} /></View>
 );
}; 
return (
<View style={styles.container}> 
   <View style={styles.header}>
     <Image 
     source={require('../../assets/logo.png')}
     style={{width:80, height:50}}
     resizeMode = "contain"
     />
     <Text style={{color:'#FFF', fontSize:17 , fontWeight: 'bold', marginRight: 35}}>QRMarket</Text>
     <TouchableOpacity
     onPress={() => navigation.navigate('Login')}
     >
     <Image 
     source={require('../../assets/logout.png')}
     style={{width:30, height:30}}
     resizeMode = "contain"
     />
     </TouchableOpacity>
   </View>
   <View>
     <Carousel
     data={data}
     renderItem={renderItem}
     sliderWidth={400}
     itemWidth={380}
  />
   <View style={styles.CompreAgr}>
      <Text style={styles.Tetx}>Faça suas compras on-line</Text>
      <TouchableOpacity
       onPress={() => navigation.navigate('Produtos')}
       style={styles.CompreAgora}>
         <Text style={styles.Bot}>Compre agora!</Text>
      </TouchableOpacity>
   </View>
   </View>
</View>
 
 );


   
}const styles = StyleSheet.create({
 container:{
    backgroundColor: '#FFF',
    flex: 1
 },
 item: {
 backgroundColor: '#bdb7b7',
 borderRadius: 5,
 height: 250,
 padding: 0,
 marginLeft: 5,
 marginRight: 5,
 alignItems: 'center'
 },
 header:{
   backgroundColor:'#0744a6',
   flexDirection:'row',
   alignItems:'center',
   justifyContent:'space-between',
   padding:7,
},
 CompreAgr:{
    alignItems:'center',
    border: 'bold',
    borderWidth: 2,
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10
 },
 Tetx:{
   marginTop: 10,
   marginBottom: 15,
   fontSize:25,
 },
 CompreAgora:{
    backgroundColor: '#4688f2',
    borderRadius:7,
    marginTop: 10,
    marginBottom: 20
 },
 Bot:{
 fontSize:25,
 marginTop:10,
 marginBottom:10,
 marginLeft:10,
 marginRight:10
 },
 image: {
 width: 380,
 height: 250,
 },
 textoT: {
    marginTop: 100,
    marginLeft: 20,
    fontSize: 20,
 },
 ImagemCar:{
    marginTop: 50,
    marginLeft: 30,
    height: 150,
    width: 200,
 },
 teste: {
    flexDirection: 'row',
 }
});