import React, { Component } from 'react'; //Este import va en todas las vistas, hace referencia a un pedacito de react
import Logo from '../components/images/logo-atenea.png';
import './style/Style.css'; 
import { Link } from "react-router-dom";


class Splash extends Component {
    render() {
        return (
            <div className="Splash back-splash ">
                <div className="Container back-splash">                    
                    <Link className="twhite" to="/Home"><img src={Logo} className="logo-splash" alt="logo" /></Link>
            </div>

            </div>
        );
    }
}

export default Splash;
