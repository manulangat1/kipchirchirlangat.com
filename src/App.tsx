import React , {Fragment} from 'react';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
// import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { Helmet } from "react-helmet";

function App() {
  return (
    <Fragment>
      <Helmet>
        ‍<title>Emmanuel Kipchirchir langat, Langat Kipchirchir Emmanuel , Kipchirchir Langat Emmanuel, manulangat1, Farmer</title>‍
        <meta
          name="description"
          content="Software engineeer, programmer, web developer , machine learning engineer, Emmanuel Kipchirchir Langat"
        />
      </Helmet>
      <Navbar />
      <section style={{ height:'100vh'}}>
        <Home />
        {/* <Projects /> */}
        <Contact />
        <Footer />
      </section>
    </Fragment>
  );
}

export default App;
