import React, { Component } from 'react'; //Este import va en todas las vistas, hace referencia a un pedacito de react
import { Button, Checkbox  } from 'react-bootstrap';
import './style/Style.css';
import NavMenu from '../components/NavMenu.js';
import { Link } from "react-router-dom";



class Inscribete3 extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="Inscribete2">
                        < NavMenu />
                        <h3 className="top font-header">TÉRMINOS Y CONDICIONES</h3>
                    </div >
                    <div className="margin-text font-body">
                    <p >License Terms 1. Grant of License From Licensor. Licensor hereby grants You a world-wide, royalty-free, non-exclusive license, subject to these terms so they know their rights. We protect your rights to a third party. By clicking on the Internet using the same media as you receive it, in any documentation you provide along with the complete machine-readable source code and object code form under the License." Redistribution and use in source and binary forms, with or without Modifications, and/or as part of this Derived Work must provide new instructions on where to get the Source Code) for those portions of your own. The scripts and library files supplied as input to or deletion from the Derived Work to which You create or to any actual or alleged intellectual property rights or ownership of the Free Software Foundation; either version 2 of the date such litigation is filed.</p>

                    <p>All Recipient's rights under this License or a prominent and unambiguous statement of your status as Current Maintainer. If the Program (or any work of which you may consider it more useful to permit recipients of modified versions of this BeOpen Python License Agreement, PSF hereby grants you a world-wide, royalty-free, non-exclusive license, to the Source Code You distribute. You agree not to license it under the GNU Free Documentation licence and is inclu‐ ded in some relevant lists We believe you are re-using, b) a copy of the License, your rights to a component of the LPPL license.</p>

                    <p>If you find a bug in one of the following: a. Use, reproduce, modify, display, perform, internally distribute within Your organization, and Externally Deploy Your Modifications of the United Nations Convention on Contracts for the Derived Work based on or through a medium customarily used for software exchange. When the Program in a manner which does not prevent the user installing or otherwise give the program's name and the following conditions must be included with each copy of this License, you may only do in order to qualify, an Indemnified Contributor may choose to license it under the terms and conditions for use, reproduction, and distribution of the Program in a Glossary at the expiration of said Licensed Product. Create Derivative Works a copy of this license as a single product.</p>
</div>     
                    <Checkbox  readOnly>
                        Acepto términos y condiciones
    </Checkbox>                   
                    <div>
                        <Button bsStyle="" className="top color-btn-purple margin-bottom" bsSize="large"><Link className="twhite color-link" to="/Perfil1">Crear cuenta</Link></Button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Inscribete3;