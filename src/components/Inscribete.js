import React, { Component } from 'react'; //Este import va en todas las vistas, hace referencia a un pedacito de react
import { input, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import './style/Style.css';
import NavMenu from '../components/NavMenu.js';
import { Link } from "react-router-dom";



class Inscribete extends Component {
    render() {
        return (
            <div>
                <div className="Donador1">
                    < NavMenu />
                    <h3 className="top font-header">Ingresa tus datos</h3>
                </div>
                <div>
                    <input type="text" className="form-control field" placeholder="Nombre completo" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div>
                    <input type="email" className="form-control field" placeholder="Correo electrónico" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div>
                    <input type="email" className="form-control field" placeholder="Confirmar correo" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div>
                    <input type="text" className="form-control field" placeholder="Teléfono" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div>
                    <input type="text" className="form-control field" placeholder="Contraseña" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div>
                    <input type="text" className="form-control field" placeholder="Confirma tu contraseña" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div>
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Cursos</ControlLabel>
                        <FormControl componentClass="select" placeholder="select">
                            <option value="select">CREAR SITIOS CON HTML5</option>
                            <option value="other">CSS</option>
                            <option value="other">JS</option>
                        </FormControl>
                    </FormGroup>
                    <Button bsStyle="success" className="top color-btn"><Link className="twhite color-link" to="/Inscribete2">SIGUIENTE</Link></Button>
                </div>

            </div>
        );
    }
}
export default Inscribete;