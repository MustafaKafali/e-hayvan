import React,{useEffect,useState} from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Ilaclar(){
    const [ilacListesi,setIlacListesi] = useState([]);

    useEffect(() => {
        axios
        .get("/ilac")
        .then((response) =>{
            console.log({ilacListesi});
            setIlacListesi(response.data);
            
        });
        
    }, []);
    const handleDelete = async (id) => {
         axios.delete(`/ilac/${id}`)
          .then(() => {
          })
          .catch(() => {
          });
      };
        return(
            <div className='ilac'>
            <Navbar/>
            <div className="container">
            <div className="row">
                <div className="col-md-offset-1 col-md-10">
                    <div className="panel">
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-sm-12 col-xs-12">
                                   <label>İlaçlar</label>
                                </div>
                            </div>
                        </div>
                        <div className="panel-body table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Düzenle</th>
                                        <th>No</th>
                                        <th>İlaç Adı</th>
                                        <th>Stok Miktarı</th>
                                        <th>Fiyat</th>
                                        <th>Sil</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ilacListesi.map(ilac => {
                                        return(
                                            <tr key={ilac.id}>
                                                <td><a href="#" className="btn btn-primary">Düzenle</a></td>
                                                <td>{ilac.id}</td>
                                                <td>{ilac.ad}</td>
                                                <td>{ilac.stokMiktari}</td>
                                                <td>{ilac.fiyat}</td>
                                                <td><Link to="/ilac" className="btn btn-danger" onClick={() => handleDelete(ilac.id)}>Sil</Link></td>
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

export default Ilaclar;