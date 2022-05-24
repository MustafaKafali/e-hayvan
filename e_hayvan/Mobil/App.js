
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import SignUp from './components/SignUp';
import HomePage from './components/HomePage';
import Muayeneler from './components/Muayeneler';
import Randevu from './components/Randevu';
import Recete from './components/Recete';
import Hayvan from './components/Hayvan';
import Profile from './components/Profile';
const Stack = createNativeStackNavigator();
class App extends React.Component {
  render(){ 
    return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Giriş Yap" component={Login} />
        <Stack.Screen name="Kayıt Ol" component={SignUp}/>
        <Stack.Screen name="Ana Sayfa" component={HomePage}/>
        <Stack.Screen name="Muayeneler" component={Muayeneler}/>
        <Stack.Screen name="Randevular" component={Randevu}/>
        <Stack.Screen name="Reçeteler" component={Recete}/>
        <Stack.Screen name="Hayvanlar" component={Hayvan}/>
        <Stack.Screen name="Profil" component={Profile}/>
      </Stack.Navigator>
    </NavigationContainer>
  );}
 
}
export default App;
