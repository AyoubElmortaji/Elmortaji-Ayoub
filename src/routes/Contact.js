import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";


import Formfile from '../components/Formfile';
const contact = () => {
  return (
    <div>



    <Navbar/>
    
    <Heroimg2 heading="CONTACT" text="Let's have a chat"/>

    <Formfile/>
    <Footer/>
    </div>
  )
}

export default contact