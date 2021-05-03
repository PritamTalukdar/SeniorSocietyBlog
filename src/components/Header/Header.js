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

import './Header.css';

export default function Header(props) {
  return (
    <>
      <Grid container className="topnav-wrapper">
        <Grid item xs={12} md={6} className="left-topnav-wrapper">
            {/*Dummy Left TopBar to maintain symmetry*/}
        </Grid>

        <Grid item xs={12} md={6} className="right-topnav-wrapper">
          <nav>
            <NavLink to="/welcome" exact activeClassName="active" className="topnav-items">Welcome</NavLink>
            <NavLink to="/home" exact activeClassName="active" className="topnav-items">Home</NavLink>
            <NavLink to="/about" activeClassName="active" className="topnav-items">About</NavLink>
            <NavLink to="/gallery" activeClassName="active" className="topnav-items">Gallery</NavLink>
            {/* <NavLink to="/people" activeClassName="active" className="topnav-items">People</NavLink> */}
          </nav>
        </Grid>
      </Grid>

      <div>
         {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
            <Route path="/welcome">
                <Welcome />
            </Route>
            <Route path="/home">
                <Blog />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/gallery">
                <Gallery photos={photos}/>
            </Route>
            {/* <Route path="/people">
                <People />
            </Route> */}
        </Switch>
      </div>
    </>
  );
}

// function People() {
//   return (
//     <>
//     </>
    
//   );
// }

