import React from "react";
import Navbar from "../Components/Navbar";
import '../Styles/Home.css'
import Heading from "../Components/Heading";
import Crousel from "../Components/Crousel";
import Footer from "../Components/Footer"
import Card from "../Components/Card";

function Home() {
  return (
    <div>
      <Navbar />
      <Heading/>
      <Crousel/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default Home;
