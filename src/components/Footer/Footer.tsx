import {
  Box,
  Container,
  Link as MuiLink,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../../App.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const iconList = [
    {
      id: 1,
      link: "https://github.com/manulangat1",
      name: "GitHub",
      icon: <GitHubIcon />,
    },
    {
      id: 2,
      link: "https://www.linkedin.com/in/emmanuel-langat/",
      name: "LinkedIn",
      icon: <LinkedInIcon />,
    },
    {
      id: 3,
      link: "https://twitter.com/langatmanuK",
      name: "Twitter",
      icon: <TwitterIcon />,
    },
  ];

  return (
    <Box component="footer" className="footer">
      <Container maxWidth={false} className="site-container">
        <Stack className="footer-content">
          <Box>
            <Typography variant="h6" component="h2" className="footer-title">
              On the web
            </Typography>
            <Typography variant="body2" className="footer-copy">
              © {currentYear} Emmanuel Kipchirchir Langat
            </Typography>
          </Box>

          <Stack
            component="nav"
            className="footer-list"
            direction="row"
            aria-label="Social links"
          >
            {iconList.map((item) => (
              <MuiLink
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
                aria-label={`Open ${item.name} profile`}
              >
                <span className="footer-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <span>{item.name}</span>
              </MuiLink>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
