import React from 'react'
// import ScrollUpButton from "react-scroll-up-button";
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button"; //Add this line Here


const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="dark:text-white font-bold">
      <ScrollUpButton style={{background:"#0D9488"}}/>
        <div className="text-center p-3">
        All Copyright © : Mahmoud Gaber {currentYear}
        </div>
      </footer>
  )
}

export default Footer
