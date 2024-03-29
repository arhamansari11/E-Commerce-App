import React from "react";
import Navbar from "../Components/Navbar";
import '../Styles/Home.css'
import Heading from "../Components/Heading";
// import Footer from "../Components/Footer"
import Crousel from "../Components/Crousel";

function Home() {
  return (
    <div>
      <Navbar />
      <Heading/>
      <Crousel/>
    </div>
  );
}

export default Home;
