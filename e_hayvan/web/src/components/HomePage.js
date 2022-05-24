import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function HomePage() {
        return (
            <div className='HomePage'>
                <Navbar/>
            <div className="container bootstrap snippets bootdeys">
                <div className="row">
                    
                        <div className="col-md-4 col-sm-6 content-card">
                            <div className="card-big-shadow">
                                <div className="card card-just-text" data-radius="none">
                                    <div className="content">
                                        <h4 className="title"><Link to="/home">e-Hayvan</Link></h4>
                                        <p className="description">Hoşgeldiniz. 
                                        e-Hayvan hayvan sahipleri ve veterinerlere kolaylık sağlayacak bir sağlık sistemidir. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                </div>
            </div>
            </div>
        )
    }

export default HomePage;