import React from 'react'
import Image from "next/image";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import LogoB from '../public/MGLOGOB.png'
import LogoW from '../public/MGLOGO.png'
import Link from 'next/link';

const Nav = ({darkMode,setDarkMode}) => {
  return (
    <nav className="py-10 mb-12 flex justify-between" data-aos="fade-left" data-aos-duration="3000">
      {darkMode?(
        <Link href={"/"}>
          <Image src={LogoW} width={70} height={70} alt='Logo'/>
        </Link>
        ):(
          <Link href={"/"}>
            <Image src={LogoB} width={70} height={70} alt='Logo'/>
          </Link>
          )
      }
    {/* <h1 className="text-xl dark:text-white cursor-pointer">MG</h1> */}
    <ul className="flex items-center">
      <li><BsFillMoonStarsFill className="cursor-pointer dark:text-white" onClick={()=>setDarkMode(!darkMode)}/></li>
      <li><Link href="https://drive.google.com/file/d/1GidXiLXrezUqa0w1d0UctUfcHh0bonI9/view?usp=sharing" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8">Resume</Link></li>
    </ul>
  </nav>
  )
}

export default Nav
