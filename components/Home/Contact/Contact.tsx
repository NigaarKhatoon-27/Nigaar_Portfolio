import React from 'react'
import { BiEnvelope, BiMap, BiPhone } from 'react-icons/bi'
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { Fa0 } from 'react-icons/fa6'

const Contact = () => {
  return (
    <div id="contact" className='pt-16 pb-16'>
        <div className='w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
            <div>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200'>Schedule a call with me to see if I can help</h1>
                <p className='text-gray-400 mt-6 text-base sm:text-lg'>Reach out to me today and let's discuss how can I help you achieve tour goals.</p>
                <div className='mt-7'>
                    <div className='flex items-center space-x-3 mb-4'>
<BiPhone className='w-9 h-9 text-cyan-300' />
<a
  href="tel:+918355049751"
  className="text-xl font-bold text-gray-400 hover:text-cyan-300 transition-all duration-300"
>
  +91 8355049751
</a>
                    </div>
                    <div className='flex items-center space-x-3 mb-4'>
<BiEnvelope className='w-9 h-9 text-cyan-300' />

<a
  href="mailto:khatoonnigaar953@gmail.com"
  className="text-xl font-bold text-gray-400 hover:text-cyan-300 transition-all duration-300"
>
  khatoonnigaar953@gmail.com
</a>
                    </div>
                    <div className='flex items-center space-x-3 mb-4'>
<BiMap className='w-9 h-9 text-cyan-300' />
<p className='text-xl font-bold text-gray-400'>Kanpur, Uttar Pradesh, India</p>
                    </div>
                </div>
             
                <div className="flex items-center mt-8 space-x-3">

  {/* GitHub */}
  <a
    href="https://github.com/NigaarKhatoon-27"
    target="_blank"
    rel="noopener noreferrer"
    className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center hover:bg-gray-800 transition-all duration-300"
  >
    <FaGithub className="text-white w-6 h-6" />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/nigaar-khatoon-4b2794324/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300"
  >
    <FaLinkedin className="text-white w-6 h-6" />
  </a>

  {/* YouTube */}
  <a
    href="https://www.youtube.com/@YOUR_CHANNEL"
    target="_blank"
    rel="noopener noreferrer"
    className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-300"
  >
    <FaYoutube className="text-white w-6 h-6" />
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/YOUR_INSTAGRAM_USERNAME"
    target="_blank"
    rel="noopener noreferrer"
    className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center hover:bg-pink-500 transition-all duration-300"
  >
    <FaInstagram className="text-white w-6 h-6" />
  </a>

</div>
            </div>

<div data-aos="zoom-in" data-aos-anchor-placement="top-center"
     data-aos-delay="0" className='md:p-10 p-5 bg-[#131332] rounded-lg'>
    <input type ="text" placeholder='Name'
    className='px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70' />

    <input type ="email" placeholder='Email Address'
    className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70' />

    <input type ="text" placeholder='Mobile Number'
    className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70' />

    <textarea placeholder='Your Message'  className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 h-[10rem]'></textarea>
    <button className='mt-8 px-12 py-4 bg-blue-900 hover:bg-blue-900 transition-all duration-300 cursor-pointer text-white rounded-full'>Send Message</button>
</div>

        </div>
      
    </div>
  )
}

export default Contact
