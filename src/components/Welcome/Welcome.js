import React from 'react';
import './Welcome.css';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';

const useStyles = makeStyles((theme)=> ({
    root:{
        // marginBottom: 20,
        // top: '30px',
    },
}));

export default function Welcome(props) {
    const classes = useStyles();
    
    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} md={6} className="left">
                <LeftBanner />  
            </Grid>

            <Grid item xs={12} md={6} className="right">
                <RightBanner />
            </Grid>
        </Grid>
    )
}
