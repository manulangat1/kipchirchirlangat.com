import React from "react";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function Dashboard() {
  return (
    <section style={{ height: "100vh", width: "100%" }}>
      <Home />
      <Skills />
      <Contact />
      <Footer />
    </section>
  );
}

export default Dashboard;
