import React, { Component } from 'react'; //Este import va en todas las vistas, hace referencia a un pedacito de react
import { } from 'react-bootstrap';
import './style/Style.css';
import LogoNav from '../components/images/logo-nav.png';
import { Link } from "react-router-dom";

class NavMenu extends Component {
    render() {
        return (
            <div className="Menu">
                <div className="">
                    <nav className="padd navbar-dark back-nav">
                        <Link className="twhite color-link" to="/Home"><img src={LogoNav} className="left logo-nav" alt="logo" /></Link>
                    </nav>
                </div>
            </div>
        );
    }
}

export default NavMenu;