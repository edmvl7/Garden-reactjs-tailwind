import  React  from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Info } from './components/Info'
import { Services } from './components/Services'
import { Work } from './components/Work'
import { Testimonials } from './components/Testimonials'
import { LastSection } from './components/LastSection'
import { Footer } from './components/Footer'
import './App.css'


function App() {
  

  return (
    <>
      <Navbar/>
      <Hero/>
      <Info/>
      <Services/>
      <Work/>
      <Testimonials/>
      <LastSection/>
      <Footer/>
       
    </>
  )
}

export default App
