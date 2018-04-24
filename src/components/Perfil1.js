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
                            <p className="font-body bold"> CREAR SITIOS CON HTML5 </p>
                            <p className="font-body">Al concluir tu curso podrás obtener tu diploma </p>
                            <Button className="color-btn color-btn-purple top" bsSize="large">Ingresar a curso</Button>                      
            
                        </Jumbotron>;
                        </div>
                    <div className="margin">
                        <Button className="color-btn-purple" bsStyle="" bsSize="large" block><p className="font-header ">VER MIS CURSOS</p></Button>  
                    </div>
                    <div className="margin">
                        <Button className="color-btn-purple" bsStyle=" top" bsSize="large" block><p className="font-header">PREFERENCIAS</p></Button>
                    </div>  
                    <div>
                        <Button bsStyle="" className="top  color-btn-purple"><Link className="twhite color-link" to="/Red">Siguiente</Link></Button>
                        </div>
            
                </div>
            </div>
            
        );
    }
}
export default Perfil1;