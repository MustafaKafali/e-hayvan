import React, {  useState ,useEffect, Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import axios from 'axios';
class Profile extends Component{
    render(){
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
              <Image style={styles.avatar}
                source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
            
              <Text style={styles.name}>
                İsmail Kafalı </Text>
                <Text style={styles.name}>
                a@a.com  </Text>
            </View>
        </View>

        <View style={styles.body}>
            <TouchableOpacity style={styles.info} onPress={() => this.props.navigation.navigate("Muayeneler")}>
              <Text style={styles.text} >Muayeneler</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.info} onPress={() => this.props.navigation.navigate("Randevular")}>
              <Text style={styles.text} >Randevular</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.info} onPress={() => this.props.navigation.navigate("Reçeteler")}>
              <Text style={styles.text} >Reçeteler</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.info} onPress={() => this.props.navigation.navigate("Hayvanlar")}>
              <Text style={styles.text} >Hayvanlar</Text>
            </TouchableOpacity>
        </View>
  </View>
);}
}


const styles = StyleSheet.create({
header:{
backgroundColor: "#DCDCDC",
},
headerContent:{
padding:30,
alignItems: 'center',
},
avatar: {
width: 130,
height: 130,
borderRadius: 63,
borderWidth: 4,
borderColor: "white",
marginBottom:10,
},
name:{
fontSize:22,
color:"#000000",
fontWeight:'600',
},
userInfo:{
fontSize:16,
color:"#778899",
fontWeight:'600',
},
body:{
backgroundColor: "#778899",
height:500,
alignItems:'center',
},
item:{
flexDirection : 'row',
},
infoContent:{
flex:1,
alignItems:'flex-start',
paddingLeft:5
},
iconContent:{
flex:1,
alignItems:'flex-end',
paddingRight:5,
},
icon:{
width:30,
height:30,
marginTop:20,
},
info:{
fontSize:18,
marginTop:20,
color: "#FFFFFF",
},
text:{
  color: "#FFFFFF",
  alignItems:"center",
  height: 50,
  fontSize: 15,
  marginBottom:25,
},
});

export default Profile;                                          