import React, { Component } from 'react'; 
import { Button } from 'react-bootstrap';
import './style/Style.css';
import NavMenu from '../components/NavMenu.js';
import { Link } from "react-router-dom"; 
import mujeres from '../components/images/mujeres.png';




class Donar4 extends Component {
    render() {
        return (
            <div>
                <div className="Donador3">
                    < NavMenu />
                    <div>
                        <img src={mujeres} className="pic top" alt="" />
                        </div>
                    <h3 className="top font-header margin">Gracias a tu donativo tres mujeres podrán tomar un curso de programación</h3>
                </div>
                
                <div>
                    <Button className="color-btn color-btn-purple top" bsSize="large"><Link className="twhite color-link" to="/Donar1">Volver a donar</Link></Button>
                </div>
                <div>
                    <Button className="color-btn color-btn-purple top" bsSize="large"><Link className="twhite color-link" to="/Home">Salir</Link></Button>
                </div>

            </div>
        );

    }
}
export default Donar4;