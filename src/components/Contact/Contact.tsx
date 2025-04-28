import React, { Fragment, useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  // FormLabel,
  Grid,
  // Input,
  // InputLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Snackbar from "@mui/material/Snackbar";

interface stateI {
  email: string;
  message: string;
  open: boolean;
}
const Contact = () => {
  const [state, setState] = useState<stateI>({
    email: "",
    message: "",
    open: false,
  });

  const iconList = [
    {
      id: 1,
      link: "https://github.com/manulangat1",
      name: "Github",
      icon: <GitHubIcon />,
    },
    {
      id: 2,
      link: "https://www.linkedin.com/in/emmanuel-langat-7b547a158/",
      name: "Linkdin",
      icon: <LinkedInIcon />,
    },
    {
      id: 3,
      link: "https://twitter.com/langatmanuK",
      name: "Twitter",
      icon: <TwitterIcon />,
    },
  ];
  const onClick = (link: string) => window.open(link, "__blank");

  const onChange = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    setState({ ...state, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  return (
    <Fragment>
      <section id="contact" style={{ background: "#f7f7f7" }}>
        <Container maxWidth="xl" style={{ padding: "2rem" }}>
          <Grid spacing={2} container>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Typography
                variant="h6"
                gutterBottom
                style={{ textAlign: "center" }}
              >
                Contact me via this form
              </Typography>
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "70%",
                  padding: "2rem",
                }}
              >
                <FormControl style={{ marginBottom: "1rem" }}>
                  <TextField
                    value={state.email}
                    name="email"
                    onChange={onChange}
                    id="outlined-basic"
                    label="Your mail here"
                    color="primary"
                    type="email"
                    variant="outlined"
                  />
                  <FormHelperText id="my-helper-text">
                    We'll never share your email.
                  </FormHelperText>
                </FormControl>
                <FormControl style={{ marginBottom: "1rem" }}>
                  <TextField
                    value={state.message}
                    name="message"
                    onChange={onChange}
                    id="outlined-basic"
                    label="Your message here"
                    variant="outlined"
                  />
                </FormControl>
                <Button type="submit" variant="outlined">
                  Contact me
                </Button>
              </form>
              <Snackbar
                open={state.open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Your message has been noted, i will be getting in touch soon"
                // action={action}
              />
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              xl={6}
              style={{ padding: "3rem" }}
            >
              <Typography variant="h6" gutterBottom>
                You can also find me at my social's
              </Typography>
              <List>
                {iconList.map((icon) => (
                  <ListItem key={icon.id} disablePadding>
                    <ListItemButton onClick={() => onClick(icon.link)}>
                      <ListItemIcon>{icon.icon}</ListItemIcon>
                      <ListItemText>{icon.name}</ListItemText>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Container>
      </section>
    </Fragment>
  );
};

export default Contact;
