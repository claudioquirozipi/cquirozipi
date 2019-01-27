import React, { Component } from 'react';

import Header from './components/header';
import Secction1 from './components/Secction1'
import Secction2 from './components/Secction2'
import Secction3 from './components/Secction3'
import Secction4 from './components/Secction4'
import { Backgroundblue } from './components/container/styled';
import {
  ContainerMain
} from './AppSC';





class App extends Component {
  render() {
    return (
      <ContainerMain>
        <Header/>
        <Secction1/>
        <Secction2/>
        <Backgroundblue>
          <Secction3/>
          <Secction4/>
        </Backgroundblue>
      </ContainerMain>
    );
  }
}

export default App;
