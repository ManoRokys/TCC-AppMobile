import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Images from '../../assets/images.jpg';


const LoginScreen = ({ navigation }) => {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  const handleCpfChange = (text) => {
    setCpf(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleLogin = () => {
    // enviar dados para o servidor e verificar se o login é válido
    if (cpf === 'usuario' && password === 'senha') {
      navigation.navigate('Home');
    } else {
      alert('Usuário ou senha inválidos');
    }
  };

  return (
    <ImageBackground source={Images} >
      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>
        <TextInput
      
          style={styles.input}
          placeholder="CPF"
          autoCapitalize="none"
          onChangeText={handleCpfChange}
        />
        <TextInput
        
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={handlePasswordChange}
        />
        <TouchableOpacity
          style={styles.button}

          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Entrar</Text>
      
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
  
     <Text style={styles.cadastroLink}> Ainda não tem uma Conta ? Cadastre-se!</Text>
        </TouchableOpacity>
      </View>
 </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: 'rgba(265, 255, 255, 0.7)',
    borderRadius: 20,
    padding: 60,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '90%',
    padding: 30,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
  },
  cadastroLink: {
  color: '#007bff',
  marginTop: 10,
  },
 CPf:{
  Color:'#000080',
  marginTop: 5,
 },
    });
  
  export default LoginScreen;