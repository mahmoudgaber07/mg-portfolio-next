import React from 'react'
import Image from "next/image";

const Services = ({img,title,list}) => {
  return (
    // <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
    //         <Image src={img} alt="code" className="mx-auto"/>
    //         <h3 className="text-lg font-bold pt-8 pb-2">{title}</h3>
    //         <ul className="text-md py-2 leading-8 text-gray-800">
    //           {list.map((el)=>(
    //             <li key={el}><span className="text-teal-600">{el}</span></li>
    //           )
    //           )}
    //         </ul>
    // </div>
    <div className='flex flex-col justify-center items-center mt-8 mt-md-0'>
      <div className='group h-96 w-96 [perspective:1000px]'>
        <div className='relative h-full w-full rounded-xl shadow-xl transition-all ease-in-out duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] bg-teal-600'>
          <div className='absolute inset-0'>
            {/* <Image src={img} alt='code' className='h-full w-full rounded-xl bg-black/40 shadow-black/40'/> */}
          </div>
          <h2 className='absolute bottom-0 left-0 right-0 top-0 grid place-items-center inset-0 group-hover:hidden text-white'>#{title}</h2>
          <div className='absolute inset-0 h-full w-full rounded-xl bg-black/40 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
            <ul className='flex min-h-full flex-col items-center justify-center'>
                {list.map((el)=>(
                  <li className='leading-8' key={el}><span className="text-white">{el}</span></li>
                )
                )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
