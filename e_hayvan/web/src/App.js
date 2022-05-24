import React,{Component} from 'react';
import './components/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Asilar from './components/Asilar'; import Hayvan from './components/Hayvan'; import HomePage from './components/HomePage';
import Ilaclar from './components/Ilaclar'; import LoginPage from './components/LoginPage'; import MuayeneEkle from './components/MuayeneEkle';
import Muayeneler from './components/Muayeneler'; import Profil from './components/Profil'; import Recete from './components/Recete';
import ReceteEkle from './components/ReceteEkle'; import SignUp from './components/SignUp';
class App extends Component {
  
  render(){
    return (
      <Router>
        <div className='App'>
        <div className='content'>
           <Switch>
             <Route exact path="/" component={LoginPage}/>
             <Route exact path="/home" component={HomePage}/>
             <Route exact path="/ilac" component={Ilaclar}/>
             <Route exact path="/asi" component={Asilar}/>
             <Route exact path="/recete" component={Recete}/>
             <Route exact path="/muayene" component={Muayeneler}/>
             <Route exact path="/muayenekayit" component={MuayeneEkle}/>
             <Route exact path="/recetekayit" component={ReceteEkle}/>
             <Route exact path="/profil" component={Profil}/>
             <Route exact path="/hayvan" component={Hayvan}/>
             <Route exact path="/kaydol" component={SignUp}/>
           </Switch>
        </div> 
      </div>
      </Router>
      
    )

  }
    
}

export default App
