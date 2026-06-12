import React from 'react'
import ServiceCard from './ServiceCard'
import Image from 'next/image'


const Services = () => {
  return (
    <div id="services" className='pt-16 pb-16'>
      <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>Collaborate with brand <br /> and agencies to create <br /> impactful results</h1>
      <div className='w[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center'> 
        <div data-aos ="fade-right" data-aos-anchor-placement="top-center">
  <ServiceCard
    icon="/images/s1.png"
    name="UI and UX"
    description="Crafting intuitive and user-friendly interfaces that enhance user satisfaction and engagement."
  />
</div>

<div data-aos ="fade-right" data-aos-anchor-placement="top-center" data-aos-selay="100">
  <ServiceCard
    icon="/images/s2.png"
    name="Web and Mobile Apps"
    description="Building responsive, high-performance web and mobile applications tailored to business needs."
  />
</div>

<div data-aos ="fade-right" data-aos-anchor-placement="top-center" data-aos-selay="200">
  <ServiceCard
    icon="/images/s3.png"
    name="Design and Creative"
    description="Creating visually compelling designs and brand identities that leave a lasting impression."
  />
</div>

<div data-aos ="fade-right" data-aos-anchor-placement="top-center" data-aos-selay="300">
  <ServiceCard
    icon="/images/s4.png"
    name="Development"
    description="Developing scalable, secure, and efficient solutions using modern technologies and best practices."
  />
</div>
       
      </div>
    </div>
  )
}

export default Services

