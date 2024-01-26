import React from 'react'
import work1 from  '../assets/images/work/work1.jpg'
import work2 from  '../assets/images/work/work2.jpg'
import work3 from  '../assets/images/work/work3.jpg'
import work4 from  '../assets/images/work/work4.jpg'
import work5 from  '../assets/images/work/work5.jpg'
import work6 from  '../assets/images/work/work6.jpg'

export const Work = () => {
  return (
    <div id='work' className='mx-0 md:px-12 lg:px-24 mb-12'>
        <h1 className='text-center font-semibold text-4xl text-green-600 mb-12'>Notre Travail</h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-1' >
            <div className='h-[450px] '>
                <img src={work1} alt="img" className='h-full w-full bg-contain'/>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-1'>
                <div className=' h-[450px] '>
                    <img src={work6} alt="img" className='h-full w-full bg-contain'/>
                </div>
                <div className='h-[450px]  '>
                    <img src={work3} alt="img" className='h-full w-full bg-contain'/>
                </div>
            </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-1 mt-1' >
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-1'>
                <div className='h-[450px] '>
                    <img src={work4} alt="img" className='h-full w-full bg-contain'/>
                </div>
                <div className='h-[450px]  '>
                    <img src={work5} alt="img" className='h-full w-full bg-contain'/>
                </div>
            </div>
            <div className='h-[450px] '>
                <img src={work2} alt="img" className='h-full w-full bg-contain'/>
            </div>
            
        </div>
        <div>
            
        </div>
    </div>
  )
}
