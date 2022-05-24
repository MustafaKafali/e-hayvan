import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";

function Muayeneler (props){
  const [muayeneListesi,setMuayeneListesi] = useState([]);

useEffect(() => {
    axios
    .get("http://127.0.0.1:8000/muayene/")
    .then((response) =>{
        console.log({muayeneListesi});
        setMuayeneListesi(response.data);
        
    });
    
}, []);
console.log({muayeneListesi});
const handleDelete = (muayeneId) => {
  axios
    .delete(`/muayene/${muayeneId}`)
    .then(() => {
    })
    .catch(() => {
    });
};
    
    return (
      <div className="Muayene">
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-md-offset-1 col-md-10">
              <div className="panel">
                <div className="panel-heading">
                  <div className="row">
                    <div className="col-sm-12 col-xs-12">
                      <Link
                        to="/muayenekayit"
                        className="btn btn-sm btn-primary pull-left"
                      >
                        Yeni Muayene Ekle
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="panel-body table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Muayene Kodu</th>
                        <th>Küpe Numarası</th>
                        <th>Şikayet</th>
                        <th>Tarih</th>
                        <th>Sil</th>
                      </tr>
                    </thead>
                    <tbody>
                      {muayeneListesi.map(muayene => {
                        return (
                        <tr key={muayene.id}>
                          <td>{muayene.id}</td>
                          <td>{muayene.küpeNo}</td>
                          <td>{muayene.sikayet}</td>
                          <td>{muayene.tarih}</td>
                          <td><a href="#" className="btn btn-danger" onClick={() => handleDelete(muayene.id)}>Sil</a></td>
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
    );
}

export default Muayeneler;
