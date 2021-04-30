import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  SafeAreaView,
  StyleSheet,
  Text, 
  TextInput, 
  View, 
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
 } from 'react-native';

export default function App() {
  return (

<SafeAreaView style={styles.container}>
  <View style={styles.content}>
    <KeyboardAvoidingView style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.logobox}>
          <Text style={styles.logo}>
            LOGO/ILUSTRA
          </Text>
        </View>

        <View style={styles.contInputs}>
          <TextInput 
            style={styles.inputsUsuario}
            placeholder={"Digite seu Usuário"}
          />
          <TextInput 
            style={styles.inputsSenha}
            placeholder={"Digite sua Senha"}
          />
          
        </View>
        
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonProps} activeOpacity={0.7}>
          <Text style={styles.textButton}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
     



    </KeyboardAvoidingView>
  </View>
</SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems:'center',
    justifyContent:'space-around',
    backgroundColor: 'grey',
  },
  content:{
    flex: 1,
    height: '70%',
    width: '100%',
    
  },  

  logobox:{ 
    marginTop:20,
    width:'100%',
    height: 200,
    backgroundColor:'cyan',
  },
  logo:{
       
    textAlign: 'center',  
    fontSize:40,
    fontWeight:'bold'

  },
  contInputs:{
    alignItems:'center',
    backgroundColor:'red',
    width:'100%',
    
  
  },  
  inputsUsuario:{
    
    width:240,
    height:40,
    backgroundColor:'white',
    textAlign:'center',
    borderRadius:7,
  },
  inputsSenha:{
    marginTop:8,
    width:240,
    height:40,
    backgroundColor:'white',
    textAlign:'center',
    borderRadius:7,
  },

    buttonContainer:{
      alignItems:'center',
      justifyContent:'space-between',
      backgroundColor:'red',
      width:'100%',
      
      
    },  
    buttonProps:{
      backgroundColor:'green',
      alignItems:'center',
      justifyContent:'center',
      width:240,
      height:40,
      borderRadius:7,
      


    },

});