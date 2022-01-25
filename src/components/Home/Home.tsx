import {
  Button,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  // ListItemText,
  Stack,
} from "@mui/material";
import React, { Fragment } from "react";
// import LANGAT from "../../public/assets/christina.jpg";
// import JavascriptIcon from "@mui/icons-material/Javascript";
import { FaPython, FaNode, FaDocker } from "react-icons/fa";
import Typewriter from "typewriter-effect";
const Home = () => {
  const iconList = [
    {
      id: 1,
      name: "Python", 
      icon: <FaPython size="42px" color="#ffffff" />,
    },
    {
      id: 2,
      name: "Node",
      icon: <FaNode size="42px" color="#ffffff" />,
    },
    {
      id: 3,
      name: "Docker",
      icon: <FaDocker size="42px" color="#ffffff" />,
    },
  ];
  return (
    <Fragment>
      <section style={{ background: "#254e58", color:'#ffffff' }}>
        <Container
          maxWidth="xl"
          style={{ padding: "4rem", minHeight: "40vh", background: "#254e58" }}
        >
          <Grid spacing={6} container>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Typography variant="h3" gutterBottom>
                Kipchirchir Langat
              </Typography>
              <Typography variant="h5" gutterBottom>
                  
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter

                      .typeString("I am a Full Stack Developer")

                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("I am a  Junior Data Scientist")
                      .start()

                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("I am a  Aspiring Data Engineer")
                      .start()

                      .typeString("I am a Full Stack Developer");
                  }}
                />
              </Typography>
              <Stack direction="row">
                {iconList.map((icon) => (
                  <List key={icon.id} disablePadding>
                    <ListItem>
                    <ListItemButton>
                      <ListItemIcon>{icon.icon}</ListItemIcon>
                      {/* <ListItemText>{icon.name}</ListItemText> */}
                    </ListItemButton>
                    </ListItem>
                    
                  </List>
                ))}
              </Stack>
              <Button variant="contained" style={{ margin: "1rem" }}>
                Contact Me
              </Button>
              <Button variant="outlined" style={{ margin: "1rem" }}>
                View Resume
              </Button>
            </Grid>

            <Grid item sm={6} md={6} lg={6} xl={6}>
              <img
                src="https://i.pinimg.com/originals/f1/e7/34/f1e734f9cade86fe737a9aa404ad5677.gif"
                style={{
                  maxWidth: "100%",
                  maxHeight: "400px",
                  borderRadius: "10px",
                }}
                alt="person coding"
              />
            </Grid>
          </Grid>
        </Container>
      </section>
    </Fragment>
  );
};

export default Home;
