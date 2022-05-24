import React,{useEffect,useState} from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Hayvan(){
const [hayvanListesi,setHayvanListesi] = useState([]);

useEffect(() => {
    axios
    .get("http://127.0.0.1:8000/hayvan/")
    .then((response) =>{
        console.log({hayvanListesi});
        setHayvanListesi(response.data);
        
    });
    
}, []);
console.log({hayvanListesi});
const handleDelete = (kupeNo) => {
    axios
      .delete(`hayvan/${kupeNo}`)
      .then(() => {
      })
      .catch(() => {
      });
  };
        return(
            <div className='hayvan'>
            <Navbar/>
            <div className="container">
            <div className="row">
                <div className="col-md-offset-1 col-md-10">
                    <div className="panel">
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-sm-12 col-xs-12">
                                   <label>Hayvanlar</label>
                                </div>
                            </div>
                        </div>
                        <div className="panel-body table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Düzenle</th>
                                        <th>Küpe Num.</th>
                                        <th>Ailesi</th>
                                        <th>Cinsi</th>
                                        <th>Sil</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {hayvanListesi.map(hayvan => {
                                        return(
                                        <tr>
                                            <td><a href="#" className="btn btn-primary">Düzenle</a></td>
                                            <td>{hayvan.küpeNo}</td>
                                            <td>{hayvan.aile}</td>
                                            <td>{hayvan.cins}</td>
                                            <td><Link to="/hayvan" className="btn btn-danger" onClick={() => handleDelete(hayvan.kupeNo)}>Sil</Link></td>
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
export default Hayvan;