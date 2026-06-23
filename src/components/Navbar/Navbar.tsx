import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "../../App.css";

const Navbar = () => {
  return (
    <Fragment>
      <AppBar position="static" style={{ background: "#254e58" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <NavLink className="navLink" to="/">
              <Typography variant="h6"> KIPCHIRCHIR LANGAT</Typography>
            </NavLink>

            <div style={{ flexGrow: "1" }}></div>
            <div
              style={{ flexGrow: "1", display: "flex", flexDirection: "row" }}
            >
              <Typography variant="h6">
                <NavLink className="navLink" to="/blog">
                  Blog
                </NavLink>
              </Typography>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </Fragment>
  );
};

export default Navbar;
