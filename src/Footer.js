import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {Grid} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import './Footer.css';

const social = [
  { name: 'GitHub', icon: GitHubIcon },
  { name: 'Twitter', icon: TwitterIcon },
  { name: 'Facebook', icon: FacebookIcon },
];
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    // <footer className={classes.footer}>
    //   <Container maxWidth="lg">
    //     <Typography variant="h6" align="center" gutterBottom>
    //       {title}
    //     </Typography>
    //     <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
    //       {description}
    //     </Typography>
    //     <Copyright />
    //   </Container>
    // </footer>
    <Grid container className="footer-container">

      <Grid item xs={6} md={4} className="address">
        <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
          Contact
        </Typography>
        <br/>
        <p>Kahilipara Senior Citizen Association</p>
        <p>4th cross jyotia</p>
        <p>Guwahati, Assam 781022</p>
        <br/>
        <p>Tel <span>123-234-456-678</span></p>
        <p>Email <span>info@mysite.com</span></p>
      </Grid>

      <Grid item xs={6} md={4} className="social-media">
        <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
          Social
        </Typography>
        <br/>
        {social.map((network) => (
          <Link display="block" variant="body1" href="#" key={network}>
            <Grid container direction="row" spacing={1} alignItems="center">
              <Grid item>
                <network.icon />
              </Grid>
              <Grid item>{network.name}</Grid>
            </Grid>
          </Link>
        ))}
      </Grid>

      <Grid item xs={12} md={4} className="form-wrapper">
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Or Leave a Message Here
      </Typography>
      <br/>
        <form className="form-fields">
          <input type="text" placeholder="Full Name" className="input-field"/>
          <input type="email" placeholder="Email" className="input-field"/>
          <input type="text" placeholder="Subject" className="input-field"/>
          <textarea placeholder="Your Message..." className="input-field"/>
          <br/>
          <button type="submit" className="btn">Submit</button>
        </form>
      </Grid>
    </Grid>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};