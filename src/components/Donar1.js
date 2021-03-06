import React, { Component } from 'react'; //Este import va en todas las vistas, hace referencia a un pedacito de react
import { input, Button } from 'react-bootstrap';
import './style/Style.css';
import NavMenu from '../components/NavMenu.js';
import { Link } from "react-router-dom";
import Donar from '../components/images/donar1.jpg';



class Donar1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: this.props.users,
            pointBalance: this.props.pointBalance,
        }
    }

    handleChangeInput = (event, id) => {
        // console.log(event, id);
        if (event.target.id === "user") {
            this.props.handleChangeInputUser(event.target.value);
        } else if (event.target.id === "pass") {
            this.props.handleChangeInputPass(event.target.value);
        }
    }

    render() {
        return (
            <div>
            <div className="Donador1 ">
                < NavMenu />
                <h3 className="top font-header">Ingresa tu número de cliente</h3>
            </div>
                <div className="margin">
                    <input id="user" onChange={this.handleChangeInput} type="text" className="form-control field" placeholder="Número de cliente Banamex" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div >
                    <h3 className="top font-header">Ingresa tu NIP</h3>
                    </div>
                <div className="margin">
                    <input id="pass" onChange={this.handleChangeInput} type="password" className="form-control field" placeholder="NIP" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div>
                    <Button bsStyle="" className="top color-btn color-btn-purple" bsSize="large" ><Link className="twhite color-link" to="/Donar2">Siguiente</Link></Button>
                    </div>

                <div className="margin">
                    <img src={Donar} className="pic top" alt="" />
                </div>

                </div>
        );
    }
}
export default Donar1;