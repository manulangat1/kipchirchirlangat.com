import React , {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Fragment>
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
