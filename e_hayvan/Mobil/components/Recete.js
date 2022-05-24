
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Alert,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';

function Recete() {
  const [receteListesi,setReceteListesi] = useState([])
    useEffect(() => {
        axios.get('http://10.0.2.2:8000/recete/')
        .then((response) =>{
            
            setReceteListesi(response.data);
            
        })
        .catch(error => console.log(error));
    }, []);
    return (
          
            <View>
              {receteListesi.map((recete) => 
                <View style={styles.box}>
                  <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/filled-like.png'}}/>
                  <View style={styles.boxContent}>
                    <Text style={styles.title}>Recete No:{recete.receteNo} </Text>
                    <Text style={styles.description}>İlaç Barkod: {recete.ilacId}</Text>
                  </View>
                </View>
              )}
              </View>
    );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height:100,
  },
  icon:{
    width:20,
    height:20,
    alignSelf:'center',
    marginRight:10
  },
  box: {
    padding:20,
    marginTop:5,
    marginBottom:5,
    backgroundColor: '#DCDCDC',
    flexDirection: 'row',
  },
  boxContent: {
    flex:1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft:10,
  },
  description:{
    fontSize:15,
    color: "#778899",
  },
  title:{
    fontSize:20,
    color:"#778899",
  },
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
  export default Recete;