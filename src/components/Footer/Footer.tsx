import { Container, Typography } from "@mui/material";
import React, { Fragment } from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const Footer = () => {
    const iconList = [
        {
            id:1,
            link:'https://github.com/manulangat1',
            name:'Github',
            icon: <GitHubIcon />
        }, 
        {
            id:2,
            link:'https://www.linkedin.com/in/emmanuel-langat-7b547a158/',
            name:'Linkdin',
            icon: <LinkedInIcon />
        }, 
        {
            id:3,
            link:'https://github.com/manulangat1',
            name:'Twitter',
            icon: <TwitterIcon />
        }, 
    ]

  return (
    <Fragment>
      <footer
        style={{ textAlign: "center", padding: "3rem", background: "#2f4454" , color:'#ffffff'}}
      >
        <Container maxWidth="xl">
          <Typography variant="h6" gutterBottom>
            Kipchirchir Langat
          </Typography>
          <p>{new Date().getFullYear()}</p>
        </Container>
      </footer>
    </Fragment>
  );
};

export default Footer;
