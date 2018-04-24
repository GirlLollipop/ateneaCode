import React, { Component } from 'react'; //Este import va en todas las vistas, hace referencia a un pedacito de react
import { input, Button } from 'react-bootstrap';
import './style/Style.css';
import NavMenu from '../components/NavMenu.js';
import { Link } from "react-router-dom";



class Donar2 extends Component {
    render() {
        return (
            <div>
                <div className="Donador1">
                    < NavMenu />
                    <h3 className="top font-header">Tu saldo en puntos es de</h3>
                </div>
                <div>
                    <h2 className="top font-header">1200</h2>
                </div>
                <div>
                    <h3 className="top font-header">¿Cuántos puntos quieres donar?</h3>
                </div>
                <div>
                    <input type="text" className="form-control field" placeholder="Contraseña" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div>
                    <Button bsStyle="success" className="top"><Link className="twhite color-link" to="/Donar3">SIGUIENTE</Link></Button>
                </div>

            </div>
        );
    }
}
export default Donar2;