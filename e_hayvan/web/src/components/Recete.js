import React,{useEffect,useState} from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Recete(props){
const [receteListesi,setReceteListesi] = useState([]);
useEffect(() => {
    axios
    .get(`recete`)
    .then((response) =>{
        setReceteListesi(response.data);
            
    });
        
}, []);
const handleDelete = (receteNo) => {
    axios
      .delete(`recete/${receteNo}`)
      .then(() => {
      })
      .catch(() => {
      });
  };
        return(
            <div className='Recete'>
            <Navbar/>
            <div className="container">
            <div className="row">
                <div className="col-md-offset-1 col-md-10">
                    <div className="panel">
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-sm-12 col-xs-12">
                                    <a href="#" className="btn btn-sm btn-primary pull-left"><Link to="/recetekayit">Ekle</Link></a>
                                </div>
                            </div>
                        </div>
                        <div className="panel-body table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Düzenle</th>
                                        <th>Reçete No</th>
                                        <th>Muayene Kodu</th>
                                        <th>İlaç Barkod</th>
                                        <th>Görüntüle</th>
                                        <th>Sil</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {receteListesi.map(recete => {
                                        return(
                                        <tr>
                                            <td><a href="#" className="btn btn-primary">Düzenle</a></td>
                                            <td>{recete.receteNo}</td>
                                            <td>{recete.muayeneId}</td>
                                            <td>{recete.ilacId}</td>
                                            <td><Link to="/ilac" className="btn btn-sm btn-success">Görüntüle</Link></td>
                                            <td><Link to="/recete" className="btn btn-danger" onClick={() => handleDelete(recete.receteNo)}>Sil</Link></td>
                                        </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        )
    
}
export default Recete;