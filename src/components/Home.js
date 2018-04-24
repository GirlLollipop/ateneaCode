import React, { Component } from 'react'; //Este import va en todas las vistas, hace referencia a un pedacito de react
import { Carousel } from 'react-bootstrap';
import './style/Style.css';
import { Link } from "react-router-dom";
import Uno from '../components/images/uno.jpg';
import Dos from '../components/images/dos.jpg';
import Tres from '../components/images/tres.jpg';
import Estudiante from '../components/images/estudiante.png';
import Inscribete from '../components/images/inscribete.png';
import Donar from '../components/images/donar.png';

import NavMenu from '../components/NavMenu.js';

class Home extends Component {
    render() {
        return (
            <div className="Home">
< NavMenu />
      <section className="carrusel">
<Carousel className="">
  <Carousel.Item>
    <img src={Uno} className="" alt="" />
    <Carousel.Caption>    
</Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img src={Dos} className="" alt="" />
    <Carousel.Caption>              
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img src={Tres} className="" alt="" />
    <Carousel.Caption>        
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>;
</section>
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