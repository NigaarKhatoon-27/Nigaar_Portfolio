"use client";
import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css"
import ClientReviewCard from './ClientReviewCard';
import Image from 'next/image';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
};



const ClientReview = () => {
  return (
    <div id="testimonials" className='pt-16 pb-16'>
        <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>Kind words from satisfied <br />
            <span className='text-cyan-200'>clients</span></h1>
            <div className='mt-16 w-[70%] mx-auto'>
                <Carousel
 
 
  showDots={false}
  responsive={responsive}
  
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={4000}
 
>

 
 <ClientReviewCard
  image="/images/Faiz.png"
  name="Mohd Faiz"
  role="CEO, Landscape"
  review="Nigaar delivered a professional and modern website that exceeded our expectations. Her attention to detail and ability to understand our requirements made the project a great success. I would gladly work with her again."
/>

<ClientReviewCard
  image="/images/Nandu.png"
  name="Nandini Singh"
  role="UI/UX Designer, TCS"
  review="Working with Nigaar was an excellent experience. She transformed design concepts into beautiful, responsive interfaces while maintaining pixel-perfect accuracy and smooth user interactions."
/>

<ClientReviewCard
  image="/images/Pri.png.jpeg"
  name="Priyanshi Sarkar"
  role="Frontend Developer, Infosys"
  review="Nigaar has impressive frontend development skills and a strong understanding of modern web technologies. Her code quality, responsiveness, and dedication to delivering great results stand out."
/>

<ClientReviewCard
  image="/images/Safee.jpg"
  name="Mohd Safee"
  role="CEO, Tech Company"
  review="The website Nigaar built for us was both visually appealing and highly functional. She maintained excellent communication throughout the project and consistently delivered beyond expectations."
/>

<ClientReviewCard
  image="/images/c4.png"
  name="Zaara Doe"
  role="Web Developer, Landscape"
  review="Nigaar is a talented developer who combines technical expertise with creative problem-solving. Her commitment to quality and ability to meet deadlines make her a valuable professional to work with."
/>
</Carousel>;
            </div>
      
    </div>
  )
}

export default ClientReview
