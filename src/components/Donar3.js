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
                </div>

                <div className="card top">
                    <h3 className="top font-header">Donarás la cantidad de</h3>
                    <span className="points">1200 </span>
                    <h3> puntos</h3>                
                </div>
                <Button bsStyle="" className="top color-btn color-btn-purple" bsSize="large"><Link className="twhite color-link" to="/Donar4">Confirmar</Link></Button>
                </div>
        );

    }
}
export default Donar3;