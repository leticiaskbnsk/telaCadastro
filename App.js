import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  function button(){
    if(usuario === '' || senha === ''){
      alert("PREENCHA OS CAMPOS")
      return;
    }
    const data = {
      usuario,
      senha
    }

    console.log(data);

  }

  function cadastro() {
    // alert(usuario);
    // alert(senha);
    //Fazer chamada no back-end para cadastro.
  }


  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <Image style={{width:400,height:200}} source={require('./assets/fundo.imag.jpg')} />

      <TextInput placeholder="Usuário" style={styles.TextInput} onChangeText={text=>setUsuario(text)} />
      <TextInput secureTextEntry={true} placeholder="Senha" style={styles.TextInput} onChangeText={text=>setSenha(text)} />


      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>ACESSAR</Text>
      </TouchableOpacity>  

      <TouchableOpacity style={styles.buttonRegister} onPress={()=>cadastro()}>
        <Text style={styles.registerText} >CADASTRAR</Text>
      </TouchableOpacity>

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#27282D',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },
  TextInput:{
    width:'100%',
    height:40,
    backgroundColor:'white',
    borderRadius:20,
    paddingLeft:10,
    marginBottom:20
  },
  button:{
    width:'100%',
    backgroundColor: '#5271FF',
    borderRadius:4,
    paddingVertical:8,
    marginTop:5,
    justifyContent:'center',
    alignItems: 'center'
  },
  buttonRegister:{
    width:'100%',
    backgroundColor: '#5271FF',
    borderRadius:4,
    paddingVertical:8,
    marginTop:5,
    justifyContent:'center',
    alignItems: 'center'
  }
});
