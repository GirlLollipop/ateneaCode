import React, { Component } from 'react'; //Este import va en todas las vistas, hace referencia a un pedacito de react
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import './style/Style.css';
import NavMenu from '../components/NavMenu.js';
import { Link } from "react-router-dom";



class Inscribete2 extends Component {
    render() {
        return (
            <div>
            <div>
                <div className="Inscribete2">
                    < NavMenu />
                    <h3 className="top font-header">¿Cuáles son tus razones para tomar el curso?</h3>
                </div>
                <FormGroup controlId="formControlsTextarea" >
                    <ControlLabel></ControlLabel>
                    <FormControl componentClass="textarea" placeholder="" />
                </FormGroup>
                <div>
                        <Button bsStyle="" className="top color-btn color-btn-purple" bsSize="large"><Link className="twhite color-link" to="/Inscribete3">LEER TÉRMINOS Y CONDICIONES</Link></Button>
                </div>
            </div>
            </div>
        );
    }
}
export default Inscribete2;