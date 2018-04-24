import React, { Component } from 'react'; //Este import va en todas las vistas, hace referencia a un pedacito de react
import { Button, Jumbotron } from 'react-bootstrap';
import './style/Style.css';
import NavMenu from '../components/NavMenu.js';
import { Link } from "react-router-dom";
import Redes from '../components/images/redes.png';



class Red extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="Red">
                        < NavMenu />
                        <div>
                            <img src={Redes} className="pic top" alt="" />
                        </div>
                        <Jumbotron>
                            <h1 className="font-header">Invita a más MUJERES al programa y obtén mayores BENEFICIOS</h1>
                            
                        
                            <Button bsStyle="" bsSize="large"  class="color-btn-purple " block>SABER MÁS</Button>
                        </Jumbotron>;
                        </div>
                    <Button bsStyle="" className="top" bsSize="large"><Link className="twhite color-link color-btn-purple" to="/Home">CERRAR SESIÓN</Link></Button>
                    <div>
                    </div>
                </div>
            </div>

        );
    }
}
export default Red;