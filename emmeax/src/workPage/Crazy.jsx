import Footer from './Footer'
import IMG_8562 from '../assets/workimage/IMG_8562.png'

const Crazy = () => {
  return (
    <div className='flex flex-col items-center min-h-screen bg-[#C9C9C9]  font-outfit'>
       <div className="text-center mt-10 px-4">
                <h1 className="text-4xl font-bold md:text-5xl text-blue-900 font-outfit">
                CRAZY
                </h1>
            </div>

            <div className="mt-8 px-4 text-center">
                <p className="text-[#848282] mb-10 font-bold font-outfit">
                Designs we worked on for Mr. Bash’s Single ‘Crazy’
                </p>
            </div>

        <div className='flex  gap-4'> 
            <img src={IMG_8562} className=' h-[420px]' alt="" />
        </div>
        <div className='mt-20'>
        <Footer/>
        </div>
    </div>
  )
}

export default Crazy