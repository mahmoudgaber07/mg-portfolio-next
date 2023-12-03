import React from 'react'
import Link from "next/link";
import {AiFillFacebook,AiFillLinkedin,AiFillGithub,AiOutlineBehance,AiOutlineMail} from 'react-icons/ai';

const Social = () => {
  return (
    <div className="social text-5xl flex justify-center flex-wrap gap-16 py-3 text-gray-600" data-aos="flip-down" data-aos-duration="3000">
      <Link className="rounded-full dark:text-white px-2" href="https://www.linkedin.com/in/mahmoudgaber07/" role="button">
        <AiFillLinkedin className='hover:animate-bounce' size='70'/>
      </Link>
      <Link className="rounded-full dark:text-white px-2" href="https://www.facebook.com/MahmoudGaber07/" role="button">
        <AiFillFacebook className='hover:animate-bounce' size='70'/>
      </Link>
      <Link className="rounded-full dark:text-white px-2" href="https://github.com/mahmoudgaber07" role="button">
        <AiFillGithub className='hover:animate-bounce' size='70'/>
      </Link>
      <Link className="rounded-full dark:text-white px-2" href="https://www.behance.net/mahmoudgaber16" role="button">
        <AiOutlineBehance className='hover:animate-bounce' size='70'/>
      </Link>
      <Link className="rounded-full dark:text-white px-2" href = "mailto: mahmoudgaber94@gmail.com" role="button">
        <AiOutlineMail className='hover:animate-bounce' size='70'/>
      </Link>
    </div>
  )
}

export default Social
