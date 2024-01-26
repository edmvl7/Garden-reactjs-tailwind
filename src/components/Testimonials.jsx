import React from 'react';
import { testimonialsData } from '../data';
import {  FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export const Testimonials = () => {
  
  const isMobile = window.innerWidth <= 768;

  const scrollValue = isMobile ? 500 : 618;

  const sliderLeft  = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft -= scrollValue;
  }

  const sliderRight  = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft += scrollValue;
  }

  return (
    <div  id='testimonials' className='mb-12 mt-0 md:pt-4'>
      <h1 className='text-center font-semibold text-4xl text-green-700 my-12 '>Testimonials</h1>
      <div className='relative flex items-center  px-8 md:px-24'>
        <FaAngleLeft onClick={sliderLeft} size={30} className='text-green-600 cursor-pointer transition-transform duration-300 hover:scale-125' />
        <div id='slider' className='w-full h-full scrollbar-hide overflow-x-scroll scroll whitespace-nowrap scroll-smooth flex'>
          {testimonialsData.testimonials.map(testimonial => (
            <div className=' w-[618px] md:w-[618px] inline-bock cursor-pointer border rounded-md ms-3 p-8' key={testimonial.id}>
              <div className='w-[618px] max-w-[618px] overflow-hidden'>
                <div className='flex'>
                  <img src={testimonial.image} alt="img" className='h-12 w-12 bg-contain rounded-full'/>
                  <div className="flex flex-col ps-5 py-3">
                    <h4 className='text-lg'>{testimonial.name}</h4>
                  </div>
                </div> 
                <div className='mt-4'>
                  <img src={testimonial.note} alt="note" className='h-10' />  
                  <p>{testimonial.title}</p>         
                  <p style={{ whiteSpace: 'pre-line' }} className='me-52  md:me-20 text-sm mt-3'>{testimonial.testimonial}</p> 
                </div>
              </div>
            </div>
          ))}
        </div>
        <FaAngleRight onClick={sliderRight} size={30}  className='text-green-600 cursor-pointer transition-transform duration-300 hover:scale-125'
/>
      </div>
    </div>
  )
}
