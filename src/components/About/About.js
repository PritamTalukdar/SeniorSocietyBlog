import React from 'react'
import './About.css';
import { Grid } from '@material-ui/core';
import Footer from '../../Footer';

function About() {
    return (
        <div className="about-wrapper">
            <div className="img-wrapper"> 
                <img className="img" alt="test" src="https://picsum.photos/768/600"/>
            </div>
            <Grid container className="about">
                <Grid item xs={12} md={6} >
                    <div className="about-left">
                        <h1>About</h1>
                        <span>I’ve always had a passion for good design and a fascination 
                            with the digital world, so it was perhaps inevitable that I 
                            would become a professional Web Developer. While I’m based 
                            in San Francisco, I also work with clients from all over the 
                            country as well as abroad. Since 2000, I’ve provided businesses 
                            and individuals with a wide range of services as either a 
                            member of a small development team or as a solo coder. Get 
                            in touch with me today and see how I can help you bring 
                            your ideas to life.
                        </span>
                    </div>
                </Grid>

                <Grid item xs={12} md={6} className="about-right">
                        <img className="img" alt="test" src="https://picsum.photos/768/600"/>
                </Grid>
            </Grid>
            <Footer />
        </div>
    )
}

export default About
