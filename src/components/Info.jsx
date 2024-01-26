import React from 'react'
import { BsGraphUpArrow } from "react-icons/bs";
import { BiBuildingHouse } from "react-icons/bi";
import { IoCalendarOutline } from "react-icons/io5";
import { TbUsersGroup } from "react-icons/tb";




export const Info = () => {
  return (
    <>
      <div className='grid grid-cols-2 lg:grid-cols-4 bg-green-200 my-20'>
        <div className='flex flex-col justify-center items-center py-8'>
          <div className='bg-green-50 rounded-full w-12 h-12 flex justify-center items-center'>
            <BsGraphUpArrow className='w-6 h-6'/>
          </div>
          <div className='text-center'>
            <h4 className='text-xl font-semibold mt-2  '>1M+</h4>
            <p>Plantes cultivées</p>
          </div>
        </div>
        <div className='flex flex-col  justify-center items-center md:py-8 lg:py-14'>
          <div className='bg-green-50 rounded-full w-12 h-12 flex justify-center items-center'>
            <BiBuildingHouse className='w-6 h-6'/>
          </div>
          <div className='text-center'>
            <h4 className='text-xl font-semibold mt-2 '>180</h4>
            <p>Projets achevés</p>
          </div>
        </div>
        <div className='flex flex-col  justify-center items-center py-8'>
          <div className='bg-green-50 rounded-full w-12 h-12 flex justify-center items-center'>
            <IoCalendarOutline className='w-6 h-6'/>
          </div>
          <div className='text-center'>
            <h4 className='text-xl font-semibold mt-2 '>25</h4>
            <p>Années d'expérience</p>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center py-8'>
          <div className='bg-green-50 rounded-full w-12 h-12 flex justify-center items-center'>
            <TbUsersGroup className='w-6 h-6'/>
          </div>
          <div className='text-center'>
            <h4 className='text-xl font-semibold mt-2'>151</h4>
            <p>Clients satisfaits</p>
          </div>
        </div>
      </div> 
    </>
  )
}
