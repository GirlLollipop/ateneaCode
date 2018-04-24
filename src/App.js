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
  constructor() {
    super();
    this.state = {
      data: {
        users: [
          {
            "id_Client": 55536642,
            "secret_id": "nT4cI5qE0"
          },
          {
            "id_Client": 55536643,
            "secret_id": "nT4cI5qE1"
          },
          {
            "id_Client": 55536644,
            "secret_id": "nT4cI5qE2"
          }
        ],
        pointBalance: [
          {
            "id_Client": 55536642,
            "availablePointBalance": 5000,
            "programConversionRate": 0.2521,
            "currencyCode": "SGD",
            "maximumPointsToRedeem": 1000,
            "minimumPointsToRedeem": 9000
          },
          {
            "id_Client": 55536643,
            "availablePointBalance": 11000,
            "programConversionRate": 0.2521,
            "currencyCode": "SGD",
            "maximumPointsToRedeem": 10000,
            "minimumPointsToRedeem": 8000
          },
          {
            "id_Client": 55536644,
            "availablePointBalance": 15000,
            "programConversionRate": 0.2521,
            "currencyCode": "SGD",
            "maximumPointsToRedeem": 7000,
            "minimumPointsToRedeem": 7000
          },
        ]
      },

      inputValueUser: " ",
      inputValuePass: " ",
    }
  };

  handleChangeInputUser = (value) => {
    // console.log(value);
    this.setState({ inputValueUser: value })

  };

  handleChangeInputPass = (value) => {
    // console.log(value);
    this.setState({ inputValuePass: value })

  };


  render() {
    return (
      <div className="App back-body">

        <Switch>
          <Route component={Splash} path="/" exact />
          <Route component={Home} path="/Home" />
          <Route render={() => <Donar1 users={this.state.users} inputValueUser={this.state.inputValueUser} handleChangeInputUser={this.handleChangeInputUser} inputValuePass={this.state.inputValuePass} handleChangeInputPass={this.handleChangeInputPass} />} path="/Donar1" />
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
