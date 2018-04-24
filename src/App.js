import React, { Component } from 'react';
import './App.css';
import './components/style/Style.css';

import { Switch, Route } from 'react-router-dom';
/*se deben importar los componente que uses de react-bootstrap*/
import { } from 'react-bootstrap';

import Home from './components/Home.js';
import Splash from './components/Splash.js';
import Donar1 from './components/Donar1.js';
import Donar2 from './components/Donar2.js';
import Donar3 from './components/Donar3.js';
import Donar4 from './components/Donar4.js';
import NavMenu from './components/NavMenu.js';
import Login from './components/Login.js';
import Inscribete from './components/Inscribete.js';
import Inscribete2 from './components/Inscribete2.js';
import Inscribete3 from './components/Inscribete3.js';
import Perfil1 from './components/Perfil1.js';
import Red from './components/Red.js';

class App extends Component {
  render() {
    return (
      <div className="App back-body">






        <Switch>
          <Route component={Splash} path="/" exact />
          <Route component={Home} path="/Home" />
          <Route component={Donar1} path="/Donar1" />
          <Route component={Donar2} path="/Donar2" />
          <Route component={Donar3} path="/Donar3" />
          <Route component={Donar4} path="/Donar4" />
          <Route component={NavMenu} path="/NavMenu" />
          <Route component={Login} path="/Login" />
          <Route component={Inscribete} path="/Inscribete" />
          <Route component={Inscribete2} path="/Inscribete2" />
          <Route component={Inscribete3} path="/Inscribete3" />
          <Route component={Perfil1} path="/Perfil1" />
          <Route component={Red} path="/Red" />
        </Switch>
      </div>
    );
  }
}

export default App;
