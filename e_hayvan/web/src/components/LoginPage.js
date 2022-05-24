import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function LoginPage (){
    const [tcNo,setTcNo] = useState('');
    const [parola,setParola] = useState('');
    const handleSubmit = () => {
        axios.post('http://127.0.0.1:8000/kullanici/' , {tcNo, parola})
        .then(response => {
            console.log(response.data)
          })
        .catch(() => {
        })   
    }
        return (
                <div className='login'>
                    <div className="form" >
                        <div className="form-toggle"></div>
                        <div className="form-panel one">
                            <div className="form-header">
                            <h1>Account  Login</h1>
                            </div>
                            <div className="form-content">
                            <form >
                            <div className="form-group">
                                <label for="username">T.C. Kimlik Numaranızı Giriniz</label>
                                <input type="text" name="Tc" required="required" value={tcNo} onChange={(e) => setTcNo(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label for="password">Parolanızı Giriniz</label>
                                <input type="password" name="parola" required="required" value={parola} onChange={(e) => setParola(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label className="form-remember">
                                    <input type="checkbox"/>Beni Hatırla
                                </label><Link to="/kaydol" className="form-recovery" href="#">Parolamı Unuttum</Link>
                            </div>
                            <div className="form-group">
                                <Link to="/home"><button type="submit" onClick={() => handleSubmit()}>Giriş Yap</button></Link>
                            </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>    
        )

    }

    

export default LoginPage;
