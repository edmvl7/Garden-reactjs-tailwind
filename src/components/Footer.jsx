import React from 'react'

export const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center  md:mt-8 md:pt-0'>
        <h1 className='text-3xl'>Garden</h1>
        <ul className='flex gap-6 py-6 text-sm md:text-m'>
            <li>À propos </li>
            <li>Contactez-nous</li>
            <li>Services</li>
            <li>Termes et conditions</li>              
        </ul>
        <div className='flex justify-center items-center bg-green-700 w-full text-center h-12 '>
            <p className='text-sm md:text-m'>© 2024 All right Reserved</p>
        </div>
    </div>
  )
}
