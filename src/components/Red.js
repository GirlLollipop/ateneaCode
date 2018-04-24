import React, { Component } from 'react'; //Este import va en todas las vistas, hace referencia a un pedacito de react
import { Button, Jumbotron } from 'react-bootstrap';
import './style/Style.css';
import NavMenu from '../components/NavMenu.js';
import { Link } from "react-router-dom";



class Red extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="Red">
                        < NavMenu />
                        <Jumbotron>
                            <h1 className="font-header">INVITA A MÁS MUJERES AL PROGRAMA Y OBTÉN MAYORES BENEFICIOS</h1>
                            
                            <Button bsStyle="primary" bsSize="large" block>SABER MÁS</Button>
                        </Jumbotron>;
                        </div>
                    <div>
                        <Button bsStyle="success" className="top"><Link className="twhite color-link" to="/">CERRAR SESIÓN</Link></Button>
                    </div>
                </div>
            </div>

        );
    }
}
export default Red;