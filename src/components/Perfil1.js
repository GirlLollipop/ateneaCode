import React, { Component } from 'react'; //Este import va en todas las vistas, hace referencia a un pedacito de react
import { Button, Jumbotron } from 'react-bootstrap';
import './style/Style.css';
import NavMenu from '../components/NavMenu.js';
import { Link } from "react-router-dom";



class Perfil1 extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="Inscribete2">
                        < NavMenu />
                        <Jumbotron>
                            <h1 className="font-header">¡BIENVENIDA!</h1>
                            <p className="font-body">Te has inscrito a tu primer curso de programación</p>
                            <p className="font-body"> CREAR SITIOS CON HTML5 </p>
                            <p className="font-body">Al concluir tu curso podrás obtener tu diploma </p>
                             <Button bsStyle="primary">INGRESAR A CURSO</Button>                      
            
                        </Jumbotron>;
                        </div>
                    <div className="card">
                        <Button bsStyle="primary " bsSize="large" block><p className="font-header">VER MIS CURSOS</p></Button>  
                    </div>
                    <div className="card">
                        <Button bsStyle="primary top" bsSize="large" block><p className="font-header">PREFERENCIAS</p></Button>
                    </div>  
                    <div>
                        <Button bsStyle="success" className="top color-btn"><Link className="twhite color-link" to="/Red">SIGUIENTE</Link></Button>
                        </div>
            
                </div>
            </div>
            
        );
    }
}
export default Perfil1;