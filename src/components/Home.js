import React, { Component } from 'react'; //Este import va en todas las vistas, hace referencia a un pedacito de react
import { Carousel } from 'react-bootstrap';
import './style/Style.css';
import { Link } from "react-router-dom";
import Uno from '../components/images/Uno.jpg';
import Dos from '../components/images/Dos.jpg';
import Tres from '../components/images/Tres.jpg';
import Estudiante from '../components/images/estudiante.png';
import Inscribete from '../components/images/inscribete.png';
import Donar from '../components/images/donar.png';

import NavMenu from '../components/NavMenu.js';

class Home extends Component {
    render() {
        return (
            <div className="Home">
< NavMenu />
            <Carousel ClassName="top">
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src={Uno} />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src={Dos}/>
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src={Tres} />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>;
<div>
   <Link className="twhite" to="/Donar1"><img src={Donar} className="img-icon top" alt="" /></Link> 
   <Link className="twhite" to="/Inscribete"><img src={Inscribete} className="img-icon top" alt="" /></Link> 
   <Link className="twhite" to="/Login"><img src={Estudiante} className="img-icon top" alt="" /></Link> 
    </div>
            </div>
        );
    }
}

export default Home;