import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import Spline from '@splinetool/react-spline';
import resume from "../assets/OfficalResume.pdf"
import { Link } from 'react-scroll';


export default function Home() {
  return (
    <div name='home' className='bg-[#0a192f] w-full h-screen'>

        {/* Container */}
        <div className='max-w-[1200px] mx-auto px-8 flex justify-center h-full items-center'>
      <div className='max-w-[1200px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Favour</h1>
        <h2 className='text-4xl sm:text7xl font-bold text-[#8892b0]'>I'm a software developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I’ve built many full stack applications implementing react for my frontend and node js for my backend, please have a look around and view my work section. </p>
        
        <Link to="work"  smooth={true} duration={500}>
        <div>
            <button className='group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work
            <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3'/></span>
            
            </button>
        </div>
        </Link>

      </div>

      {/* <div className=' hidden md:flex  w-full border-gray-300 border-2'>
      <Spline scene="https://prod.spline.design/cn991EvXrsRz0TjN/scene.splinecode" />
  
      </div> */}

      

    </div>
</div>
  )
}
