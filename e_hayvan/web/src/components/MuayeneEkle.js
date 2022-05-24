import React,{useState} from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

function MuayeneEkle() {
    const[sikayet,setSikayet] =useState('')
    const[küpeNo,setKüpeNo] = useState('')
    const[randevuId,setRandevuId] = useState('')
    const[poliklinikId,setPoliklinikId] = useState('')
    const[muayeneYapildiMi,setMuayeneYapildiMi] =useState('')
    const[vetId,setVetId] = useState('1')
    
    const handleSubmit = () => {
        axios
        .post("http://127.0.0.1:8000/muayene/" , {sikayet , küpeNo , randevuId , poliklinikId , muayeneYapildiMi ,vetId})
        .then((response) => {
            console.log(response);
        })
    } 
    return(
            <div className="MuayeneEkle">
                <Navbar/>
                <div className="form-body">
                <div className="row">
                    <div className="form-holder">
                        <div className="form-content">
                            <div className="form-items">
                                <h3>Muayene Ekle</h3>
                                <form className="requires-validation" novalidate>
        
                                    <div className="col-md-12">
                                    <input className="form-control" type="text" name="küpeNo" placeholder="Hayvanın Küpe Numarası" required value={küpeNo}  onChange={(e) => setKüpeNo(e.target.value)}/>
                                    </div>
        
                                    <div className="col-md-12">
                                        <input className="form-control" type="text" name="sikayet" placeholder="Hayvanın rahatsızlığı" required  onChange={(e) => setSikayet(e.target.value)} value={sikayet}/>
                                    </div>
                                    <div className="col-md-12">
                                        <input className="form-control" type="text" name="randevuId" placeholder="Randevu Kodu" required  onChange={(e) => setRandevuId(e.target.value)} value={randevuId}/>
                                    </div>
                                    <div className="col-md-12">
                                        <input className="form-control" type="text" name="poliklinikId" placeholder="Poliklinik No" required  onChange={(e) => setPoliklinikId(e.target.value)} value={poliklinikId}/>
                                    </div>
                                    
        
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="muayeneYapildiMi" value={muayeneYapildiMi} id="invalidCheck" required onChange={(e) => setMuayeneYapildiMi(true)}/>
                                <label className="form-check-label">Muayene tamamlandı</label>
                                </div>
                        
        
                                    <div className="form-button mt-3">
                                        <button id="submit" type="submit" className="btn btn-primary"  onClick={() => {handleSubmit()}} ><Link to="/muayene">Muayene Ekle</Link></button>
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
export default MuayeneEkle;