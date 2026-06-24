import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import "../../App.css";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: "rgb(15 23 42)",
        boxShadow: "none",
      }}
      className="background-color site-header"
    >
      <Container maxWidth={false} className="site-container">
        <Toolbar disableGutters className="site-navbar">
          <NavLink className="navLink brand-link" to="/">
            <Box className="brand-mark" aria-hidden="true">
              KL
            </Box>
            <Box>
              <Typography component="span" className="brand-name">
                Kipchirchir Langat
              </Typography>
              <Typography component="span" className="brand-role">
                Software Engineer
              </Typography>
            </Box>
          </NavLink>

          <Box component="nav" className="nav-menu" aria-label="Primary">
            <NavLink className="navLink nav-menu-link blog-nav-link" to="/blog">
              Blog
            </NavLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
