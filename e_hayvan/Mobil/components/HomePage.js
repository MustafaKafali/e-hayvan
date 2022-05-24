import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
  import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
  } from "react-native";
class HomePage extends React.Component {
    render(){
    
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Ana Sayfa</Text>
          <TouchableOpacity style={styles.loginBtn} onPress={() => this.props.navigation.navigate("Muayeneler")}>
            <Text style={styles.loginText} >Muayeneler</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn} onPress={() => this.props.navigation.navigate("Randevular")}>
            <Text style={styles.loginText} >Randevular</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn} onPress={() => this.props.navigation.navigate("Reçeteler")}>
            <Text style={styles.loginText} >Reçeteler</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn} onPress={() => this.props.navigation.navigate("Hayvanlar")}>
            <Text style={styles.loginText} >Hayvanlar</Text>
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
      text:{
        color: "#e2e2e2",
        alignItems:"center",
        height: 50,
        fontSize: 40,
        marginBottom:25,
      },
  })
  export default HomePage;