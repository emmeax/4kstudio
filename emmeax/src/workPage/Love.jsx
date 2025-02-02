import React from 'react'
import Footer from './Footer'
import Asake from '../assets/workimage/Asake.png'

const Love = () => {
  return (
    <div className='flex flex-col items-center min-h-screen bg-[#C9C9C9]  font-outfit'>
    <div className="text-center mt-10 px-4">
             <h1 className="text-4xl font-bold md:text-5xl text-blue-900 font-outfit">
             WHY LOVE?
             </h1>
         </div>
         <div className="mt-8 px-4 text-center">
             <p className="text-[#848282] mb-10 font-bold font-outfit">
             Concept design we worked on for Asake’s Unreleased Single, ‘Why Love?’
             </p>
         </div>

     <div className='flex  gap-4'> 
         <img src={Asake} className=' h-[420px]' alt="" />
     </div>
     <div className='mt-20'>
     <Footer/>
     </div>
 </div>
  )
}

export default Love