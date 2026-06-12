import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <div id="projects" className='pt-16 pb-16'>
        <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>A small selection of recent <br /> <span className='text-cyan-300'>Projects</span>
        </h1>
        <div className='w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16'>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center"
     data-aos-delay="0">
                <Image src= '/images/Q1.png' alt ="img" width = {800} height ={650} className='rounded-lg'/>
                <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>AI-Powered Blogging Application</h1>
                <h1 className='pt-2 font-medium text-white/80'>MERN Stack, REST API, Google Gemini API</h1>
            </div>
             <div data-aos="fade-up" data-aos-anchor-placement="top-center"
     data-aos-delay="100">
                <Image src= '/images/Q2.png' alt ="img" width = {800} height ={650} className='rounded-lg'/>
                <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>Movie Recommendation System</h1>
                <h1 className='pt-2 font-medium text-white/80'>Machine Learning, Python</h1>
            </div>
             <div data-aos="fade-up" data-aos-anchor-placement="top-center"
     data-aos-delay="200">
                <Image src= '/images/Q3.png' alt ="img" width = {800} height ={650} className='rounded-lg'/>
                <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>AI-Powered Interview Preparation Application</h1>
                <h1 className='pt-2 font-medium text-white/80'>MERN Stack, REST API, Google Gemini API</h1>
            </div>
             <div data-aos="fade-up" data-aos-anchor-placement="top-center"
     data-aos-delay="300">
                <Image src= '/images/Screenshot (666).png' alt ="img" width = {800} height ={650} className='rounded-lg'/>
                <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>Personal Portfolio Website</h1>
                <h1 className='pt-2 font-medium text-white/80'>Next JS, Tailwind CSS</h1>
            </div>
        </div>
      
    </div>
  )
}

export default Projects
