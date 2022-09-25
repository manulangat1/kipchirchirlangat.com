import React, { Fragment } from "react";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
// import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { Helmet } from "react-helmet";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <Fragment>
      <Helmet>
        ‍
        <title>
          Emmanuel Kipchirchir langat, Langat Kipchirchir Emmanuel , Kipchirchir
          Langat Emmanuel, manulangat1, Farmer
        </title>
        ‍
        <meta
          name="description"
          content="Software engineeer, programmer, web developer , machine learning engineer, Emmanuel Kipchirchir Langat, devsecops engineer, jenkins, AWS, Terrarom and kubbernetties expert"
        />
      </Helmet>
      <Navbar />
      <section style={{ height: "100vh", width: "100%" }}>
        <Home />
        {/* <Projects /> */}
        <Skills />
        <Contact />
        <Footer />
      </section>
    </Fragment>
  );
}

export default App;
