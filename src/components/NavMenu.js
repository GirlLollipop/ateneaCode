import React, { Component } from 'react'; //Este import va en todas las vistas, hace referencia a un pedacito de react
import { } from 'react-bootstrap';
import './style/Style.css';
import LogoNav from '../components/images/logo-nav.png';

class NavMenu extends Component {
    render() {
        return (
            <div className="Menu">
                <div className="">
                    <nav className="padd navbar-dark back-nav">
                        <img src={LogoNav} className="left logo-nav" alt="logo" />
                    </nav>
                </div>
            </div>
        );
    }
}

export default NavMenu;