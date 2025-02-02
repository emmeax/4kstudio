import React from 'react'
import wales from '../assets/workimage/wales.png'
import sec from '../assets/workimage/sec.png'
import Footer from './Footer'
const WaleSec = () => {
  return (
    <div className='flex flex-col items-center min-h-screen bg-[#C9C9C9]  font-outfit'>
       <div className="text-center mt-10 px-4">
                <h1 className="text-4xl font-bold md:text-5xl text-blue-900 font-outfit">
                WITH LOVE, WALE OGUNS
                </h1>
            </div>

            <div className="mt-8 px-4 text-center">
                <p className="text-[#848282] mb-10 font-bold font-outfit">
                Design we worked on for Wale Oguns’ project; With Love, Wale Oguns.
                </p>
            </div>

        <div className='flex  gap-4'> 
            <img src={sec} className=' h-[420px]' alt="" />
            <img src={wales} className='h-[420px] mr-10' alt="" />
        </div>
        <div className='mt-20'>
        <Footer />
        </div>
    </div>
        
  )
}

export default WaleSec
