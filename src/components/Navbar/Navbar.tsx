import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  // MenuList,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { Fragment } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  // const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
  //   null
  // );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };
  const pages = [
    {
      id: 1,
      page: "Home",
    },
    {
      id: 2,
      page: "Home",
    },
    {
      id: 3,
      page: "Home",
    },
  ];
  return (
    <Fragment>
      <AppBar position="static" style={{ background:'#254e58'}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography variant="h6"> KIPCHIRCHIR LANGAT</Typography>
            <div style={{ flexGrow: "1" }}></div>
            <Box
              sx={{
                // flexGrow: 1,
                display: { xs: "flex", sm: "none", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", sm: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem

                    key={page.id}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography
                      
                      textAlign="center"
                    >
                      {page.page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            
            {pages.map((page) => (
              <MenuItem key={page.id} sx={{
                display: { xs: "none", sm: "none", md: "none" },
              }} onClick={handleCloseNavMenu}>
                <Typography sx={{
                        display: { xs: "none", sm: "none", md: "none" },
                      }} textAlign="center">{page.page}</Typography>
              </MenuItem>
            ))}
          </Toolbar>
        </Container>
      </AppBar>
    </Fragment>
  );
};

export default Navbar;
