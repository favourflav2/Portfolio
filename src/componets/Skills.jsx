import React from 'react'
import reactLogo from '../assets/react.png'
import htmlLogo from '../assets/html2.png'
import cssLogo from '../assets/css.png'
import jsLogo from '../assets/js5.png'
import githubLogo from '../assets/github.png'
import mongo from '../assets/mongo.jpg'
import node from '../assets/node.png'
import sql from "../assets/sql.png"
import typescript from "../assets/typescript.svg.png"

export default function Skills() {
  return (
    <div name='skills' className='bg-[#0a192f] text-gray-300 w-full h-screen'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-300'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                <p className='py-4'>// These are the technologies I've worked with</p>
            </div>
                            {/* Grid Below  */}
            <div className='w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={jsLogo} alt="React" className='w-14 mx-auto mt-4'/>
                    <p className='my-4'>JAVASCRIPT</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={cssLogo} alt="React" className='w-20 mx-auto'/>
                    <p className='my-4'>CSS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={htmlLogo} alt="React" className='w-20 mx-auto'/>
                    <p className='my-4'>HTML</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={reactLogo} alt="React" className='w-20 mx-auto'/>
                    <p className='my-4'>REACT</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={githubLogo} alt="React" className='w-20 mx-auto rounded-[40%]'/>
                    <p className='my-4'>GITHUB</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={node} alt="React" className='w-20 mx-auto rounded-[40%]'/>
                    <p className='my-4'>NODEJS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={mongo} alt="React" className='w-20 mx-auto rounded-[40%]'/>
                    <p className='my-4'>MOOGOOSE</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={sql} alt="React" className='w-20 mx-auto rounded-[40%]'/>
                    <p className='my-4'>PostgreSQL</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={typescript} alt="React" className='w-20 mx-auto rounded-[40%]'/>
                    <p className='my-4'>Typescript</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}
