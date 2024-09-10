import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/footer";
import Banner from "./components/Banner/Banner";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Banner />
      <Footer />
    </>
  );
};

export default App;
