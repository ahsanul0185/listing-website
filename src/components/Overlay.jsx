import React from 'react'

const Overlay = ({setIsMobileMenuOpen, isMobileMenuOpen}) => {
  return (
    <div
          onClick={() => setIsMobileMenuOpen(false)}
          className={`fixed top-0 left-0 w-full bg-black/50 duration-500 z-50 delay-300 ${
            isMobileMenuOpen
              ? "visible opacity-100 md:opacity-0 md:invisible h-[900%]"
              : "invisible opacity-0 h-auto"
          }`}
        ></div>
  )
}

export default Overlay