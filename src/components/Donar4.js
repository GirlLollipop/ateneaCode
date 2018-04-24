import React, { Component } from 'react'; 
import { Button } from 'react-bootstrap';
import './style/Style.css';
import NavMenu from '../components/NavMenu.js';
import { Link } from "react-router-dom"; 




class Donar4 extends Component {
    render() {
        return (
            <div>
                <div className="Donador3">
                    < NavMenu />
                    <h3 className="top font-header">Gracias a tu donativo tres mujeres podrán tomar un curso de programación</h3>
                </div>
                
                <div>
                    <Button bsStyle="success" className="top"><Link className="twhite color-link" to="/Donar1">VOLVER A DONAR</Link></Button>
                </div>
                <div>
                    <Button bsStyle="success" className="top"><Link className="twhite color-link" to="/">SALIR</Link></Button>
                </div>

            </div>
        );

    }
}
export default Donar4;