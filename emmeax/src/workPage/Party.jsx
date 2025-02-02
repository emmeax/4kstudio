import React from 'react'
import co_2 from '../assets/workimage/co_2.png'
import Footer from './Footer'

const Party = () => {
  return (
    <div className='flex flex-col items-center min-h-screen bg-[#C9C9C9]  font-outfit'>
       <div className="text-center mt-10 px-4">
                <h1 className="text-4xl font-bold md:text-5xl text-blue-900 font-outfit">
                CG RELEASE PARTY
                </h1>
            </div>

            <div className="mt-8 px-4 text-center">
                <p className="text-[#848282] mb-10 font-bold font-outfit">
                Design we worked on for recording artiste, CG’s single release party.
                </p>
            </div>

        <div className='flex  gap-4'> 
            <img src={co_2} className=' h-[420px]' alt="" />
        </div>
        <div className='mt-20'>
        <Footer />
        </div>
    </div>
  )
}

export default Party