import {
  AppBar,
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
// import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  // const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
  //   null
  // );
  // const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
  //   null
  // );

  // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };
  // const pages = [
  //   {
  //     id: 1,
  //     page: "Home",
  //   },
  //   {
  //     id: 2,
  //     page: "Home",
  //   },
  //   {
  //     id: 3,
  //     page: "Home",
  //   },
  // ];
  return (
    <Fragment>
      <AppBar position="static" style={{ background:'#254e58'}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography variant="h6"> KIPCHIRCHIR LANGAT</Typography>
            <div style={{ flexGrow: "1" }}></div>
            
            {/* {pages.map((page) => (
              <MenuItem key={page.id} sx={{
                display: { xs: "none", sm: "none", md: "none" },
              }} >
                <Typography sx={{
                        display: { xs: "none", sm: "none", md: "none" },
                      }} textAlign="center">{page.page}</Typography>
              </MenuItem>
            ))} */}
          </Toolbar>
        </Container>
      </AppBar>
    </Fragment>
  );
};

export default Navbar;
