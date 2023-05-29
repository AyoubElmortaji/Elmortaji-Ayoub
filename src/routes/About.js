import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
import AboutContent from '../components/AboutContent';
const about = () => {
  return (
    <div>
       <Navbar/>
       
       <Heroimg2 heading="ABOUT" text="We are a company from Morocco, founded by Elmortaji Ayoub"/>
    <AboutContent/>
    <Footer/>
    </div>
  )
}

export default about
