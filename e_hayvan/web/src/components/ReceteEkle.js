import React,{useState} from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

function ReceteEkle() {
    const [muayeneId,setMuayeneId] = useState('');
    const [ilacId,setilacId] = useState('');
    const handleSubmit = () => {
        axios
        .post("http://127.0.0.1:8000/recete/" , {muayeneId , ilacId} )
        .then((response) => {
            console.log(response);
        })
    } 
    return(
            <div className="receteEkle">
                <Navbar/>
                <div className="form-body">
                <div className="row">
                    <div className="form-holder">
                        <div className="form-content">
                            <div className="form-items">
                                <h3>recete Ekle</h3>
                                <form className="requires-validation" novalidate>
        
                                    
        
                                    <div className="col-md-12">
                                        <input className="form-control" type="text" name="muayeneId" placeholder="Muayene Kodu" value={muayeneId} onChange={(e) => setMuayeneId(e.target.value)}/>
                                    </div>
                                    <div className="col-md-12">
                                        <input className="form-control" type="text" name="ilacId" placeholder="İlaç Barkod No" required value={ilacId} onChange={(e) => setilacId(e.target.value)}/>
                                    </div>
                                    <div className="form-button mt-3">
                                        <button id="submit" type="submit" className="btn btn-primary"  onClick={() => {handleSubmit()}} ><Link to="/recete">Reçete Ekle</Link></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    );
}
export default ReceteEkle;