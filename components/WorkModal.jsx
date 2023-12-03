import React from 'react'
import Image from "next/image";

const WorkModal = ({isVisible,onClose,img}) => {
  if(!isVisible) return;
  const handleClose = (e)=>{
    if(e.target.id ==='wrapper') onClose();
  }
  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" >
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="text-right">
        <button className="w-full justify-center rounded-full border-red-700 bg-slate-400 px-4 py-3 mx-8 my-3 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" onClick={()=>onClose()}>X</button>
      </div>
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0" id='wrapper' onClick={handleClose}>
        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <Image src={img} className="rounded-lg object-cover width={'100%'} height={'100%'}" alt='work'/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default WorkModal
