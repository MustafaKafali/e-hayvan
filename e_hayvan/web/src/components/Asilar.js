import React,{Component, useEffect, useState} from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';


function Asilar(){
const [asiListesi,setAsiListesi] = useState([]);

useEffect(() => {
    axios
    .get("http://127.0.0.1:8000/ilac/")
    .then((response) =>{
        console.log({asiListesi});
        setAsiListesi(response.data);
        
    });
    
}, []);
console.log({asiListesi});
const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/asi/${id}`)
      .then(() => {
      })
      .catch(() => {
      });
  };
        return(
        <div className='asi'>
            <Navbar/>
            <div className="container">
            <div className="row">
                <div className="col-md-offset-1 col-md-10">
                    <div className="panel">
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-sm-12 col-xs-12">
                                    <label>Aşılar</label>
                                </div>
                            </div>
                        </div>
                        <div className="panel-body table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Aşı Adı</th>
                                        <th>Prospektüs</th>
                                        <th>Fiyat</th>
                                        <th>Sil</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {asiListesi.map(asi => {
                                        if(asi.asiMi == true)
                                        {
                                            return (
                                                <tr>
                                                    <td>{asi.id}</td>
                                                    <td>{asi.ad}</td>
                                                    <td>{asi.prospektus}</td>
                                                    <td>{asi.fiyat}</td>
                                                    <td><a href="#" className="btn btn-danger" onClick={() => handleDelete(asi.asiId)}>Sil</a></td>
                                                </tr>
                                                )
                                        }
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

export default Asilar;