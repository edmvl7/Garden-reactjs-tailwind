import React from 'react';
import contact from '../assets/images/contact.jpg';

export const LastSection = () => {
  return (
    <div className='flex flex-col'>  
      <div className='flex-grow py-12'> 
        <div className='bg-green-50'>
          <div className='flex flex-col md:flex-row mx-0 lg:px-24'>
            <div className='w-full md:w-1/2'>
              <img src={contact} alt="img" className='h-full w-full object-cover'/>
            </div>
            <div className='w-full md:w-1/2 p-8'>
              <h3 className='text-2xl font-medium mb-4 text-green-700'>Transformez vos rêves de jardin en réalité avec notre équipe dévouée !</h3>
              <p className='text-lg text-gray-800'>Vous avez un projet de jardinage en tête ou vous souhaitez simplement entretenir votre espace extérieur? Notre équipe passionnée est là pour vous aider à réaliser vos rêves verts. Avec notre expertise et notre engagement envers la satisfaction client, nous sommes prêts à transformer votre vision en réalité. N'hésitez pas à nous contacter dès aujourd'hui pour discuter de vos besoins et commencer à créer le jardin de vos rêves.</p>
              <button className='border-none rounded-lg bg-[#16a34a] font-semibold text-white py-3 px-4 hidden md:block hover:bg-[#46b770] mt-8'>Contactez-nous</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
