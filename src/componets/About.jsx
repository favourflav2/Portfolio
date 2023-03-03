import React from 'react'

export default function About() {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
            </div>

            <div>
            </div>
        </div>
        <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8 '>
                <div className='text-4xl font-bold sm:text-right '>
                    <p>Hi, I'm Favour Please Take A Look Around</p>
                </div>

                <div>
                    <p>
                    I've rigorously been working on the MERN stack. Using the backend to create users via MongoDb, setting up my server using express and node. And then using react to build my frontend with redux managing my state.

                    </p>
                </div>
            </div>

      </div>
    </div>
  )
}

