import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
  import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
  } from "react-native";
  import axios from 'axios';
class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        tcNo:'',
        parola:''
      }
    }
    render(){
    
      return (
        <View style={styles.container}>
          <Text style={styles.baslik}>e-Hayvan</Text>
          <StatusBar style="auto" />
          <View style={styles.inputView}>
          <TextInput
              style={styles.TextInput}
              placeholder="T.C. Kimlik Numarası"
              placeholderTextColor="#ffffff"
              onChangeText={(text) => {
                this.setState({tcNo: text});
              }}
            />
          </View>
    
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Parola"
              placeholderTextColor="#ffffff"
              secureTextEntry={true}
              onChangeText={(text) => {
                this.setState({parola: text});
              }}
            />
          </View>
    
          <TouchableOpacity>
            <Text style={styles.forgot_button}>Parolamı Unuttum</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgot_button} onPress={() => this.props.navigation.navigate("Kayıt Ol")}>Kayıt Ol</Text>
          </TouchableOpacity>
    
    
          <TouchableOpacity style={styles.loginBtn} onPress={() => {
            axios.post("http://10.0.2.2:8000/kullanici/", {
              tcNo: this.state.tcNo,
              parola: this.state.parola
            }).then(response => {
              console.log(response.data)
            }).catch(error => {
              console.log(error)
            })
          this.props.navigation.navigate("Profil")} } >
            <Text style={styles.loginText} >GİRİŞ YAP</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#6a7393",
        alignItems: "center",
        justifyContent: "center",
      },
    baslik:{
      color: "#e2e2e2",
      alignItems:"center",
      height: 50,
      fontSize: 40,
      marginBottom:25,
    },
  
    inputView: {
      backgroundColor: "#e2e2e2",
      color: "#2d2d71",
      borderRadius: 5,
      width: "75%",
      height: 45,
      marginBottom: 20,
      textAlign: "auto",
    },
  
    TextInput: {
      color:"#2d2d71",
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
  
    forgot_button: {
      color:"#ffffff",
      height: 30,
      marginBottom: 10,
    },
  
    loginBtn: {
      width: "70%",
      borderRadius: 4,
      height:40,
      alignItems: "center",
      justifyContent: "center",
      marginTop:10,
      backgroundColor: "#4285F4",
    },
    loginText:{
      color: "#ffffff",
    }
  });
  export default Login;