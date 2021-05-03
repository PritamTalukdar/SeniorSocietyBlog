import React from 'react';
import {
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import { Grid } from '@material-ui/core';

import Welcome from '../Welcome/Welcome';
import Blog from '../../Blog';
import About from '../About/About';
import Gallery from 'react-photo-gallery';
import { photos } from '../../Photos';

import './Header2.css';
import icon from './../../assets/Icon.png';

export default function Header2(props) {
  return (
    <>
      <Grid container className="nav-wrapper">
        <Grid item sg={0} xs={2} md={6} className="nav-icon">
            <img src={icon} alt="icon header 2"/>
        </Grid>
        
        <Grid item sg={12} xs={10} md={6} className="nav-items-wrapper">
          <nav>
            <NavLink to="/welcome" exact activeClassName="active" className="nav-items">Welcome</NavLink>
            <NavLink to="/home" exact activeClassName="active" className="nav-items">Home</NavLink>
            <NavLink to="/about" activeClassName="active" className="nav-items">About</NavLink>
            <NavLink to="/gallery" activeClassName="active" className="nav-items">Gallery</NavLink>
          </nav>
        </Grid>   
      </Grid>
      <div>
         {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
            {/* <Route path="/welcome">
            <img src={icon}/>
            </Route>
             */}
        </Switch>
      </div>

      
    </>
  );
}


