import React, { Component } from 'react'; 
import { Button } from 'react-bootstrap';
import './style/Style.css';
import NavMenu from '../components/NavMenu.js';
import { Link } from "react-router-dom"; 




class Donar3 extends Component {
    render() {
        return (
            <div>
                <div className="Donador3">
                    < NavMenu />
                    <h3 className="top font-header">Donaras la cantidad de 1200 puntos</h3>
                </div>
                
                <div>
                    <Button bsStyle="success" className="top"><Link className="twhite color-link" to="/Donar4">Confirmar</Link></Button>
                </div>

            </div>
        );

    }
}
export default Donar3;