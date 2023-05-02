import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WorkCard from "../components/workCard";
import Heroimg2 from "../components/Heroimg2";
const project = () => {
  return (
    <div>

<Navbar/>
<Heroimg2 heading="PROJECTS" text="Some of my recent projects"/>
<WorkCard/>
    <Footer/>
    </div>
    
  )
}

export default project;