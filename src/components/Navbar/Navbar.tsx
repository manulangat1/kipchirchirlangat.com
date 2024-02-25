import {
  AppBar,
  Button,
  // Box,
  Container,
  // IconButton,
  // Menu,
  // MenuItem,
  // MenuList,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";
// import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <Fragment>
      <AppBar position="static" style={{ background: "#254e58" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography variant="h6"> KIPCHIRCHIR LANGAT</Typography>
            <div style={{ flexGrow: "1" }}></div>
            <div
              style={{ flexGrow: "1", display: "flex", flexDirection: "row" }}
            >
              <Typography
                style={{ paddingRight: "1rem " }}
                variant="h6"
                onClick={() =>
                  console.log(
                    window.open("https://blog.kipchirchirlangat.com/", "_blank")
                  )
                }
              >
                Blog
              </Typography>
              <Typography
                variant="h6"
                onClick={() =>
                  console.log(
                    window.open("https://github.com/manulangat1", "_blank")
                  )
                }
              >
                Github
              </Typography>
              <Button>
                <NavLink to="/blog">Blog</NavLink>
              </Button>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </Fragment>
  );
};

export default Navbar;
