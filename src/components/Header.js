import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core';
import logo from "./../assets/img/logo.png";


const Header = () => (
  <AppBar> 
      <Toolbar>
          <img src={ logo } alt="este es el logo" width="35" height="35"></img>
          &nbsp;
          <h1> APP Nutricional</h1>
      </Toolbar>

  </AppBar>
)

export default Header