import React from 'react'
import service1 from  '../assets/images/services/garden1.jpg'
import service2 from  '../assets/images/services/garden2.jpg'
import service3 from  '../assets/images/services/garden3.jpg'


export const Services = () => {
  return (
    <div className='pb-24' id='services'>
        <h1 className='text-center font-semibold text-4xl text-green-600 mb-12'>Nos Services</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 mx-0  lg:px-24'>
            <div className='h-[360px]'>
                <img src={service1 } alt="img" className='h-full w-full bg-contain'/>
            </div>
            <div className='bg-green-50 h-[360px] p-10'>
                <h2 className='text-2xl font-medium mb-4 text-green-700'>Aménagement paysager personnalisé</h2>
                <p>Nous concevons des aménagements paysagers uniques, sur mesure pour chaque client. De la sélection minutieuse des plantes à l'installation de pelouses, de fleurs et de matériaux d'aménagement, notre équipe transforme chaque espace extérieur en un lieu de beauté et de confort, reflétant parfaitement les besoins et les préférences de nos clients.</p>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mx-0 md:px-12 lg:px-24'>
            <div className='h-[360px] md:order-2'>
                <img src={service2} alt="img" className='h-full w-full bg-contain' />
            </div>

            <div className='bg-green-50 h-[360px] p-10'>
                <h2 className='text-2xl font-medium mb-4 text-green-700'>Entretien de jardin</h2>
                <p>Notre équipe dévouée s'engage à offrir un entretien de qualité supérieure, veillant à ce que chaque plante soit soigneusement entretenue pour favoriser sa croissance et sa santé à long terme. Nous comprenons l'importance d'un jardin bien entretenu pour votre bien-être et nous nous efforçons de maintenir un environnement extérieur qui respire la tranquillité et la beauté. En nous confiant l'entretien de votre jardin, vous pouvez vous détendre et profiter de chaque saison sans soucis, sachant que votre espace extérieur est entre de bonnes mains. </p>

            </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mx-0 md:px-12 lg:px-24'>
            <div className='h-[360px]  '>
                <img src={service3} alt="img" className='h-full w-full bg-contain'/>
            </div>
            <div className='bg-green-50 h-[360px] p-10'>
                <h2 className='text-2xl font-medium mb-4 text-green-700'>Installation de systèmes d'irrigation</h2>
                <p>Notre expertise comprend également la conception et l'installation de systèmes d'arrosage automatiques efficaces. Ces systèmes assurent une distribution optimale de l'eau, préservant ainsi la santé des plantes tout en économisant les ressources hydriques. Avec nos solutions d'arrosage innovantes, votre jardin prospère tout en contribuant à la conservation de l'eau et de l'environnement</p>
            </div>
        </div>
            
         
        
        
    </div>
  )
}
