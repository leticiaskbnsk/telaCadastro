import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from "react-native";
import React, {useState} from "react";

export default function buttonRegister() {
    
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [genero, setGenero] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    
    return (
        <View style={styles.container}>
        <StatusBar hidden />

        <Image style={{width:400,height:200}} source={require('./assets/fundo2.imag.jpg')} />

        <TextInput placeholder="Nome completo" style={styles.TextInput} onChangeText={text=>setNomeCompleto(text)} />
        <TextInput placeholder="Usuário" style={styles.TextInput} onChangeText={text=>setUsuario(text)} />
        <TextInput placeholder="Data de Nascimento" style={styles.TextInput} onChangeText={text=>setDataNascimento(text)} />
        <TextInput placeholder="Gênero" style={styles.TextInput} onChangeText={text=>setGenero(text)} />
        <TextInput placeholder="Cidade" style={styles.TextInput} onChangeText={text=>setCidade(text)} />
        <TextInput placeholder="UF" style={styles.TextInput} onChangeText={text=>setUf(text)} />
        <TextInput secureTextEntry={true} placeholder="Senha" style={styles.TextInput} onChangeText={text=>setSenha(text)} />

        
        <TouchableOpacity style={styles.buttonCadastrar} onPress={()=>cadastro()}>
            <Text style={styles.registerText} >CADASTRAR</Text>
        </TouchableOpacity>

        </View>
    );
}
const styles = StyleSheet.create({
    TextInput:{
    width:'100%',
    height:40,
    backgroundColor:'white',
    borderRadius:20,
    paddingLeft:10,
    marginBottom:20
},
    buttonCadastrar:{
    width:'100%',
    backgroundColor: '#5271FF',
    borderRadius:4,
    paddingVertical:8,
    marginTop:5,
    justifyContent:'center',
    alignItems: 'center'
    }   
});