import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
        return (
               <div className="wrapper">
                <nav className="navbar navbar-expand-lg ftco_navbar ftco-navbar-light" id="ftco-navbar">
                    <div className="container">
                    <Link to="/home" className="navbar-brand">e-Hayvan</Link>
                        <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto mr-md-3">
                        <li className="nav-item"><Link to="/ilac" className="nav-link">İlaçlar</Link></li>
                        <li className="nav-item"><Link to="/asi" className="nav-link">Aşılar</Link></li>
                        <li className="nav-item"><Link to="/hayvan" className="nav-link">Hayvanlar</Link></li>
                        <li className="nav-item"><Link to="/muayene" className="nav-link">Muayeneler</Link></li>
                        <li className="nav-item"><Link to="/recete" className="nav-link">Reçeteler</Link></li>
                        <li className="nav-item"><Link to="/" className="nav-link">Çıkış yap</Link></li>
                        </ul>
                        </div>
                    </div>
                </nav>

            </div>
        )
}

export default Navbar;