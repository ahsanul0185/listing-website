import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const Title = ({title, description}) => {
  return (
      <div className="relative">
                  {/* Left Side */}
                  <div className='flex items-center gap-3'>
                      <div className='hidden md:block relative bg-[#e1e1e1] w-[2px] h-16'>
                          <span className='absolute top-0 right-0 bg-primary w-[2.5px] h-[50%]'></span>
                      </div>
                      <div>
                  <h2 className='text-[#333333] text-[1.3rem] md:text-[1.7rem] font-semibold'>{ title }</h2>
                  <p className='text-base md:text-xl font-light -mt-1'>{ description }</p>
                      </div>
                  </div>
    
                  {/* See All */}
                  <button className='absolute top-1 md:top-auto md:bottom-0 right-0 flex items-center gap-2 text-sm text-primary duration-300 hover:text-black'>
                      See All <BsArrowRight className='text-base' />
                  </button>
              </div>
  )
}

export default Title