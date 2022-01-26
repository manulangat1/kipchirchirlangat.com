import {
  Container,
  Grid,
  ListItem,
  Typography,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import React, { Fragment } from "react";
import { FaPython, FaNode, FaDocker, FaReact , FaCss3} from "react-icons/fa";
import { SiDjango, SiFlask, SiMaterialui} from 'react-icons/si'
const Skills = () => {
  const iconList = [
    {
      id: 1,
      name: "Python",
      icon: <FaPython size={70} color="white" />,
    },
    {
      id: 2,
      name: "Node",
      icon: <FaNode size={70} color="white" />,
    },
    {
      id: 3,
      name: "Docker",
      icon: <FaDocker size={70} color="white" />,
    },
    {
        id: 4,
      name: "Django",
      icon: <SiDjango size={70} color="white" />,
    },
    {
        id: 5,
      name: "Flask",
      icon: <SiFlask size={70} color="white" />,
    },
    {
        id: 6,
      name: "ReactJs",
      icon: <FaReact size={70} color="white" />,
    },
    {
        id: 7,
      name: "MaterialUi",
      icon: <SiMaterialui size={70} color="white" />,
    },
    {
        id: 8,
      name: "CSS 3",
      icon: <FaCss3 size={70} color="white" />,
    }
  ];
  return (
    <Fragment>
        <section style={{background: "#254e58"}}>
      <Container
        maxWidth="xl"
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "2rem",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color:'#f5f5f6'
        }}
      >
        <Typography variant="h4" gutterBottom style={{ padding:'3rem'}}> Here are my strength's</Typography>
        <Grid spacing={2} container>
          {iconList.map((icon) => (
            <Grid key={icon.id} item xs={6} sm={6} md={3} lg={3} xl={3}>
              <ListItem disableGutters key={icon.id} disablePadding style={{ display:'flex', flexDirection:'column', textAlign:'center'}}>
                <ListItemIcon>{icon.icon}</ListItemIcon>
                <ListItemText>{icon.name}</ListItemText>
              </ListItem>
            </Grid>
          ))}
        </Grid>
      </Container>
      </section>
    </Fragment>
  );
};

export default Skills;
