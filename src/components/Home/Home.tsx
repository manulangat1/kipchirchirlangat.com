import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { FaBookOpen, FaCode, FaTools } from "react-icons/fa";
import LANGAT from "../../public/assets/EMMANUEL_LANGAT_CV.pdf";
import "../../App.css";

const Home = () => {
  const workItems = [
    {
      id: 1,
      icon: <FaCode />,
      text: "Maintaining and refactoring a large legacy codebase while writing new features.",
    },
    {
      id: 2,
      icon: <FaTools />,
      text: "Building tools for automation.",
    },
    {
      id: 3,
      icon: <FaBookOpen />,
      text: "Learning computer science fundamentals, system design, and documenting the journey.",
    },
  ];

  return (
    <Fragment>
      <Helmet>
        <title>Emmanuel Kipchirchir Langat</title>
        <meta
          name="description"
          content="Software engineer building automation tools, learning system design, and writing about software engineering."
        />
      </Helmet>

      <Box component="section" className="home-hero">
        <Container maxWidth={false} className="site-container">
          <Grid container className="home-hero-grid">
            <Grid item xs={12}>
              <Stack className="home-copy">
                <Typography component="p" className="home-intro">
                  I am a software engineer with a wide range of skills,
                  constantly learning something new every day. I enjoy turning
                  complex problems into simple, beautiful and intuitive
                  experiences.
                </Typography>

                {/* <Typography component="p" className="home-paragraph">
                  I am currently working on{" "}
                  <Link
                    href="https://github.com/b0nbon1/stratal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="home-inline-link"
                  >
                    Stratal.io
                  </Link>
                  , an automation tool for everyone.
                </Typography> */}

                <Box className="home-work-panel">
                  <Typography component="h2" className="home-section-title">
                    My current day-to-day at work involves:
                  </Typography>
                  <Stack component="ul" className="home-work-list">
                    {workItems.map((item) => (
                      <Box
                        component="li"
                        className="home-work-item"
                        key={item.id}
                      >
                        <span className="home-work-icon" aria-hidden="true">
                          {item.icon}
                        </span>
                        <span>{item.text}</span>
                      </Box>
                    ))}
                  </Stack>
                </Box>

                <Typography component="p" className="home-paragraph">
                  You can view my resume to see more about my professional
                  career so far.
                </Typography>

                <Typography component="p" className="home-paragraph">
                  Sometimes I{" "}
                  <Link
                    href="https://kipchirchirlangat.com/blog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="home-inline-link"
                  >
                    write
                  </Link>{" "}
                  about stuff I have learned, personal projects, and anything
                  else I find interesting.
                </Typography>

                <Stack className="home-actions" direction="row">
                  <Button
                    href={LANGAT}
                    target="_blank"
                    rel="noreferrer"
                    variant="contained"
                    className="home-primary-action"
                  >
                    View Resume
                  </Button>
                  {/* <Button
                    href="https://github.com/b0nbon1/stratal"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    className="home-secondary-action"
                    startIcon={<FaGithub />}
                  >
                    Stratal.io
                  </Button> */}
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
};

export default Home;
