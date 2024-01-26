import React from 'react'
import image1 from  '../assets/images/hero/image1.jpg'
import image2 from  '../assets/images/hero/image2.jpg'
import image3 from  '../assets/images/hero/image3.jpg'

export const Hero = () => {
  return (
    <>
        <div id='home' className='mx-0 md:px-12 lg:px-24'>
            <div className='flex flex-col md:flex-row md:gap-4'>
                <div className='w-full md:w-1/2  md:py-36 order-last md:order-first'>
                    <div className='flex flex-col md:text-left md:gap-6'>
                        <div className='md:flex md:flex-col mx-3 md:justify-start'>
                            <h1 className='text-3xl  md:text-4xl  lg:text-5xl text-center md:text-start font-bold text-green-600'>Faire <span className='text-orange-400'>éclore</span> des jardins, cultiver des <span className='text-orange-400'>vies</span></h1>
                            <p className='text-center text-base mt-4 md:mt-6 md:text-base lg:text-lg md:text-start text-[#464343'>Du jardin à votre foyer, une passion verte. Chez GJarden, nous donnons vie à vos espaces extérieurs avec expertise et dévouement. Cultivons ensemble des jardins qui reflètent votre style et apportent une touche de nature à votre quotidien.</p>
                            <div className='flex justify-center mt-6 md:justify-start'>
                                <button className='mt-2 border-none w-fit rounded-lg bg-[#16a34a] text-white font-semibold py-3 px-4 hover:bg-[#46b770]'>Découvrez nos projets</button>
                            </div>
                        </div>
                    </div>    
                </div>
                <div className='w-full md:w-1/2 order-first  md:order-last'>
                    <div className="flex justify-center mt-8 py-10 md:py-24 gap-1">
                        <div className='w-1/4 h-52  md:w-28 md:h-60 lg:w-44 lg:h-80  bg-red-700 8 mb-8  rounded-md'>
                            <img src={image1} alt="img" className='h-full w-full bg-contain rounded-md'/>
                        </div>
                        <div className='w-1/4 h-52  md:w-28 md:h-60 lg:w-44 lg:h-80 bg-green-700 mt-4 rounded-md'>
                            <img src={image2} alt="img" className='h-full w-full bg-contain  rounded-md'/>
                        </div>
                        <div className='w-1/4 h-52  md:w-28 md:h-60 lg:w-44 lg:h-80 bg-blue-700 8 mb-8 rounded-md'>
                            <img src={image3} alt="img" className='h-full w-full bg-contain rounded-md'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
