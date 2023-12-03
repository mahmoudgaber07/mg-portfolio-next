import React from 'react'
import Image from "next/image";
import Link from "next/link";

const Work = ({img,visit,view,title}) => {
  return (
    <div className="basis-1/4 flex-1 relative group">
        <h3 className="text-3xl text-bold py-5 text-teal-500">{title}</h3>
        <Image src={img} style={{height:"800px",marginTop:"1rem"}} className="rounded-lg object-cover width={'100%'} height={'100%'}" alt="work"/>
        <div className="bg-transparent absolute top-0 w-full h-full hidden group-hover:block transition-opacity duration-300 delay-100">
          <Link href={visit} target="_blank">
          <button className="rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-5 px-12 inset-center">Visit</button>
          </Link>  
          <button className="rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-5 px-12 inset-center mt-20" onClick={view}>View</button>
        </div>
    </div>
  )
}

export default Work
