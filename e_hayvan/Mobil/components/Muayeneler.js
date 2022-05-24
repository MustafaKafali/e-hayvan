import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
  import {
    StyleSheet,
    Text,
    View,
  } from "react-native";
class Muayeneler extends Component {
    render(){
    
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Muayeneler</Text>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },
      text:{
        color: "#6a7393",
        alignItems:"center",
        height: 50,
        fontSize: 40,
        marginBottom:25,
      },
  })
  export default Muayeneler;