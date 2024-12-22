import React from 'react'
import bg from '/img/home_section_1.jpg'
import HeroForm from '../components/HeroForm'

const Hero = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }} className={`relative h-[80vh] bg-cover bg-center z-0`}>
      {/* Overlay */}
      <div className='absolute w-full h-full top-0 left-0 bg-black/60 -z-10'/>
      
      <div className='container mx-auto flex flex-col items-center justify-center h-full'>
        {/* Hero Title */}
        <h2 className='text-white text-center uppercase font-black text-xl sm:text-2xl md:text-[2rem] lg:text-[2.7rem]'>Find what you need!</h2>
        <p className='text-center text-white text-sm sm:text-base md:text-2xl font-medium px-6 pt-2 pb-4 md:pt-3 md:pb-6'>Discover top rated hotels, shops and restaurants around the world</p>

        {/* Hero Form */}
        <div className='w-full'>
          <HeroForm />
        </div>
      </div>
    </div>
  )
}

export default Hero