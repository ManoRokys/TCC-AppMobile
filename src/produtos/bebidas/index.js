import React, {useState} from 'react';
import {StyleSheet,Modal, Text, View, SafeAreaView, Image,Pressable, Animated, TouchableOpacity} from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
export default function Usuario({route}){
   const navigation = useNavigation();
   const [modalVisible, setModalVisible] = useState(false);
   const [modalVisible1, setModalVisible1] = useState(false);
   const [modalVisible2, setModalVisible2] = useState(false);
   const [modalVisible3, setModalVisible3] = useState(false);
   const [modalVisible4, setModalVisible4] = useState(false);
   const [modalVisible5, setModalVisible5] = useState(false);
   const [selectedValue, setSelectedValue] = useState("1");
   const [selectedValue1, setSelectedValue1] = useState("1");
   const [selectedValue2, setSelectedValue2] = useState("1");
   const [selectedValue3, setSelectedValue3] = useState("1");
   const [selectedValue4, setSelectedValue4] = useState("1");
   const [selectedValue5, setSelectedValue5] = useState("1");
   
return(
    <ScrollView>
    <SafeAreaView>
        <View style={styles.header}>
            <TouchableOpacity
            onPress={() => navigation.navigate('Produtos')}
            style={styles.head}>
            <Image source={require('../../../assets/setaesquerda.png')} style={{width: 70, height:40,}} resizeMode='contain'></Image> 
            </TouchableOpacity>
            <TouchableOpacity><Image source={require('../../../assets/carrinho.png')} style={{width: 70, height:40,}} resizeMode='contain'></Image></TouchableOpacity>
        </View>
        <View>
        <Text style={{color: '#000' , fontSize: 30 , fontWeight: 'bold' }}> Bebidas: </Text>

        
     
    
           <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.caixa}>
           <Image source={require('../../../assets/KOKAKOLA.png')} style={{width: 80, height:120,marginLeft:15, marginBottom: 20}} resizeMode='contain'></Image>
           <View>
           <Text style={styles.textocaixa}>Coca Cola Original 350ml</Text>
           <Text style={{fontSize: 27, marginLeft:5}}>R$ 4,59</Text>

           <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => {setModalVisible(!modalVisible); }}>
           <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',marginTop: 20,}}>
           <View style={styles.modalView}>
           <Image source={require('../../../assets/KOKAKOLA.png')} style={{width: 100, height:120}} resizeMode='contain'></Image>
           <Text style={styles.textocaixa}>Coca Cola Original 350ml</Text>
           <Text style={{fontSize: 27, marginLeft:5}}>R$ 4,59</Text>
           <Text style={styles.modalText}>Selecione a quantidade que quer adicionar ao carrinho!</Text>
            
           <Picker selectedValue={selectedValue} style={{ height: 20, width: 100 }} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)} >
             <Picker.Item label="1" value="1" />
             <Picker.Item label="2" value="2" />
             <Picker.Item label="3" value="3" />
             <Picker.Item label="5" value="5" />
             <Picker.Item label="6" value="6" />
             <Picker.Item label="7" value="7" />
             <Picker.Item label="8" value="8" />
             <Picker.Item label="9" value="9" />
             </Picker>
        
             <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
             <Pressable style={[styles.button, styles.buttonCancelar]}
             onPress={() => setModalVisible(!modalVisible)}>
             <Text style={styles.textStyle}>Cancelar</Text>
             </Pressable>
             <Pressable style={[styles.button, styles.buttonClose]}
             onPress={() => setModalVisible(!modalVisible)}>
             <Text style={styles.textStyle}>Adicionar ao Carrinho</Text>
             </Pressable>
             </View> 
             </View>
             </View>
           </Modal>

           </View>
           </TouchableOpacity>
        
           

           <TouchableOpacity onPress={() => setModalVisible1(true)} style={styles.caixa}>
           <Image source={require('../../../assets/PEPSI.png')} style={{width: 80, height:120,marginLeft:15}} resizeMode='contain'></Image>
           <View>
           <Text style={styles.textocaixa}>Pepsi Original 350ml</Text>
           <Text style={{fontSize: 27, marginLeft:5}}>R$ 3,09</Text>

           <Modal animationType="slide" transparent={true} visible={modalVisible1} onRequestClose={() => {setModalVisible1(!modalVisible1); }}>
           <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',marginTop: 20,}}>
           <View style={styles.modalView}>
           <Image source={require('../../../assets/PEPSI.png')} style={{width: 100, height:120,marginLeft:15}} resizeMode='contain'></Image>
           <Text style={styles.textocaixa}>Pepsi Original 350ml</Text>
           <Text style={{fontSize: 27, marginLeft:5}}>R$ 3,09</Text>
           <Text style={styles.modalText}>Selecione a quantidade que quer adicionar ao carrinho!</Text>

           <Picker selectedValue={selectedValue1} style={{ height: 20, width: 100 }} onValueChange={(itemValue, itemIndex) => setSelectedValue1(itemValue)} >
             <Picker.Item label="1" value="1" />
             <Picker.Item label="2" value="2" />
             <Picker.Item label="3" value="3" />
             <Picker.Item label="5" value="5" />
             <Picker.Item label="6" value="6" />
             <Picker.Item label="7" value="7" />
             <Picker.Item label="8" value="8" />
             <Picker.Item label="9" value="9" />
             </Picker>
        
             <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
             <Pressable style={[styles.button, styles.buttonCancelar]}
             onPress={() => setModalVisible1(!modalVisible1)}>
             <Text style={styles.textStyle}>Cancelar</Text>
             </Pressable>
             <Pressable style={[styles.button, styles.buttonClose]}
             onPress={() => setModalVisible1(!modalVisible1)}>
             <Text style={styles.textStyle}>Adicionar ao Carrinho</Text>
             </Pressable>
             </View> 
             </View>
             </View>
           </Modal>

           </View>
           </TouchableOpacity>

           <TouchableOpacity  onPress={() => setModalVisible2(true)} style={styles.caixa}>
           <Image source={require('../../../assets/GUARANA.png')} style={{width: 80, height:140,marginLeft:15}} resizeMode='contain'></Image>
           <View>
           <Text style={styles.textocaixa}>Guaraná Antarctica 350ml</Text>
           <Text style={{fontSize: 27, marginLeft:5}}>R$ 2,59</Text>

           <Modal animationType="slide" transparent={true} visible={modalVisible2} onRequestClose={() => {setModalVisible2(!modalVisible2); }}>
           <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',marginTop: 20,}}>
           <View style={styles.modalView}>
           <Image source={require('../../../assets/GUARANA.png')} style={{width: 100, height:140,marginLeft:15}} resizeMode='contain'></Image>
           <Text style={styles.textocaixa}>Guaraná Antarctica 350ml</Text>
           <Text style={{fontSize: 27, marginLeft:5}}>R$ 2,59</Text>
           <Text style={styles.modalText}>Selecione a quantidade que quer adicionar ao carrinho!</Text>

           <Picker selectedValue={selectedValue2} style={{ height: 20, width: 100 }} onValueChange={(itemValue, itemIndex) => setSelectedValue2(itemValue)} >
             <Picker.Item label="1" value="1" />
             <Picker.Item label="2" value="2" />
             <Picker.Item label="3" value="3" />
             <Picker.Item label="5" value="5" />
             <Picker.Item label="6" value="6" />
             <Picker.Item label="7" value="7" />
             <Picker.Item label="8" value="8" />
             <Picker.Item label="9" value="9" />
             </Picker>
        
             <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
             <Pressable style={[styles.button, styles.buttonCancelar]}
             onPress={() => setModalVisible2(!modalVisible2)}>
             <Text style={styles.textStyle}>Cancelar</Text>
             </Pressable>
             <Pressable style={[styles.button, styles.buttonClose]}
             onPress={() => setModalVisible2(!modalVisible2)}>
             <Text style={styles.textStyle}>Adicionar ao Carrinho</Text>
             </Pressable>
             </View> 
             </View>
             </View>
           </Modal>

           </View>
           </TouchableOpacity>

           <TouchableOpacity onPress={() => setModalVisible3(true)} style={styles.caixa}>
           <Image source={require('../../../assets/JESUS.png')} style={{width: 80, height:140,marginLeft:15}} resizeMode='contain'></Image>
           <View>
           <Text style={styles.textocaixa}>Guaraná Jesus 350ml</Text>
           <Text style={{fontSize: 27, marginLeft:5}}>R$ 3,19</Text>
           
           <Modal animationType="slide" transparent={true} visible={modalVisible3} onRequestClose={() => {setModalVisible3(!modalVisible3); }}>
           <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',marginTop: 20,}}>
           <View style={styles.modalView}>
           <Image source={require('../../../assets/JESUS.png')} style={{width: 100, height:140,marginLeft:15}} resizeMode='contain'></Image>
           <Text style={styles.textocaixa}>Guaraná Jesus 350ml</Text>
           <Text style={{fontSize: 27, marginLeft:5}}>R$ 3,19</Text>
           <Text style={styles.modalText}>Selecione a quantidade que quer adicionar ao carrinho!</Text>

           <Picker selectedValue={selectedValue3} style={{ height: 20, width: 100 }} onValueChange={(itemValue, itemIndex) => setSelectedValue3(itemValue)} >
             <Picker.Item label="1" value="1" />
             <Picker.Item label="2" value="2" />
             <Picker.Item label="3" value="3" />
             <Picker.Item label="5" value="5" />
             <Picker.Item label="6" value="6" />
             <Picker.Item label="7" value="7" />
             <Picker.Item label="8" value="8" />
             <Picker.Item label="9" value="9" />
             </Picker>
        
             <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
             <Pressable style={[styles.button, styles.buttonCancelar]}
             onPress={() => setModalVisible3(!modalVisible3)}>
             <Text style={styles.textStyle}>Cancelar</Text>
             </Pressable>
             <Pressable style={[styles.button, styles.buttonClose]}
             onPress={() => setModalVisible3(!modalVisible3)}>
             <Text style={styles.textStyle}>Adicionar ao Carrinho</Text>
             </Pressable>
             </View> 
             </View>
             </View>
           </Modal>

           </View>
           </TouchableOpacity>

           <TouchableOpacity  onPress={() => setModalVisible4(true)} style={styles.caixa}>
           <Image source={require('../../../assets/LARANJA.png')} style={{width: 80, height:140,marginLeft:15}} resizeMode='contain'></Image>
           <View>
           <Text style={styles.textocaixa}>Fanta Laranja 350ml</Text>
           <Text style={{fontSize: 27, marginLeft:5}}>R$ 3,69</Text>

           <Modal animationType="slide" transparent={true} visible={modalVisible4} onRequestClose={() => {setModalVisible4(!modalVisible4); }}>
           <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',marginTop: 20,}}>
           <View style={styles.modalView}>
           <Image source={require('../../../assets/LARANJA.png')} style={{width: 100, height:140,marginLeft:15}} resizeMode='contain'></Image>
           <Text style={styles.textocaixa}>Fanta Laranja 350ml</Text>
           <Text style={{fontSize: 27, marginLeft:5}}>R$ 3,69</Text>
           <Text style={styles.modalText}>Selecione a quantidade que quer adicionar ao carrinho!</Text>

           <Picker selectedValue={selectedValue4} style={{ height: 20, width: 100 }} onValueChange={(itemValue, itemIndex) => setSelectedValue4(itemValue)} >
             <Picker.Item label="1" value="1" />
             <Picker.Item label="2" value="2" />
             <Picker.Item label="3" value="3" />
             <Picker.Item label="5" value="5" />
             <Picker.Item label="6" value="6" />
             <Picker.Item label="7" value="7" />
             <Picker.Item label="8" value="8" />
             <Picker.Item label="9" value="9" />
             </Picker>
        
             <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
             <Pressable style={[styles.button, styles.buttonCancelar]}
             onPress={() => setModalVisible4(!modalVisible4)}>
             <Text style={styles.textStyle}>Cancelar</Text>
             </Pressable>
             <Pressable style={[styles.button, styles.buttonClose]}
             onPress={() => setModalVisible4(!modalVisible4)}>
             <Text style={styles.textStyle}>Adicionar ao Carrinho</Text>
             </Pressable>
             </View> 
             </View>
             </View>
           </Modal>

           </View>
           </TouchableOpacity>

           <TouchableOpacity onPress={() => setModalVisible5(true)} style={styles.caixa}>
           <Image source={require('../../../assets/MONSTERS.png')} style={{width: 80, height:140,marginLeft:15}} resizeMode='contain'></Image>
           <View>
           <Text style={{fontFamily: 'sans-serif', fontSize: 18, marginTop: 5,marginLeft: 7,}}>Monster Energy Juice Khaos 473ml</Text>
           <Text style={{fontSize: 27, marginLeft:5}}>R$ 8,99</Text>

           <Modal animationType="slide" transparent={true} visible={modalVisible5} onRequestClose={() => {setModalVisible5(!modalVisible5); }}>
           <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',marginTop: 20,}}>
           <View style={styles.modalView}>
           <Image source={require('../../../assets/MONSTERS.png')} style={{width: 100, height:140,marginLeft:15}} resizeMode='contain'></Image>
           <Text style={{fontFamily: 'sans-serif', fontSize: 18, marginTop: 5,marginLeft: 7,}}>Monster Energy Juice Khaos 473ml</Text>
           <Text style={{fontSize: 27, marginLeft:5}}>R$ 8,99</Text>
           <Text style={styles.modalText}>Selecione a quantidade que quer adicionar ao carrinho!</Text>

           <Picker selectedValue={selectedValue5} style={{ height: 20, width: 100 }} onValueChange={(itemValue, itemIndex) => setSelectedValue5(itemValue)} >
             <Picker.Item label="1" value="1" />
             <Picker.Item label="2" value="2" />
             <Picker.Item label="3" value="3" />
             <Picker.Item label="5" value="5" />
             <Picker.Item label="6" value="6" />
             <Picker.Item label="7" value="7" />
             <Picker.Item label="8" value="8" />
             <Picker.Item label="9" value="9" />
             </Picker>
        
             <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
             <Pressable style={[styles.button, styles.buttonCancelar]}
             onPress={() => setModalVisible5(!modalVisible5)}>
             <Text style={styles.textStyle}>Cancelar</Text>
             </Pressable>
             <Pressable style={[styles.button, styles.buttonClose]}
             onPress={() => setModalVisible5(!modalVisible5)}>
             <Text style={styles.textStyle}>Adicionar ao Carrinho</Text>
             </Pressable>
             </View> 
             </View>
             </View>
           </Modal>

           </View>
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
    },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
      },
      buttonClose: {
        backgroundColor: '#4bb52d',
        marginLeft: 20,
      },
      buttonCancelar: {
        backgroundColor: '#f23030',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginTop: 15,
        textAlign: 'center',
      },
  });