import React from 'react'
import img_mobile from '/img/mobile.svg'
import img_app_android from '/img/app_android.svg'
import img_app_apple from '/img/app_apple.svg'
import SectionTitle from '../components/SectionTitle'

const DomainApp = () => {
  return (
    <div className="py-14 md:py-[4rem]">
      <div className="container section-padding">
        {/* title  */}
        <SectionTitle
          title="DOMAIN App Available"
                  description="Cum doctus civibus efficiantur in imperdiet deterruisset."
                  isBlackText={true}
        />

              <div className='text-center max-w-[450px] my-16 mx-auto'>
              <img src={img_mobile} className='w-full' alt="" />
              </div>

              <div className='flex items-center justify-center gap-1 md:gap-5'>
                  <img src={ img_app_android} alt="" />
                  <img src={ img_app_apple} alt="" />
              </div>
              <p className='text-center text-xs text-gray-600 mt-5'>*An eum dolores tractatos, aeterno menandri deseruisse ut eum.</p>

      </div>
    </div>
  )
}

export default DomainApp