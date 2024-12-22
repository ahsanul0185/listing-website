import React from "react";
import { LiaAngleUpSolid } from "react-icons/lia";

const BackToTopButton = ({ pageEl, scrolled }) => {
    
    const handeScrollTop = () => {
        pageEl.current.scrollTo({ top: 0, behavior: "smooth" });
        console.log(pageEl)
    }

  return (
    <button onClick={handeScrollTop} className={`hidden md:grid fixed bottom-6 right-10 bg-gray-500 text-xl text-white hover:bg-primary duration-500 size-12 rounded-full place-items-center z-10 ${scrolled ? "visible opacity-100" : "invisible opacity-0"}`}>
      <LiaAngleUpSolid />
    </button>
  );
};

export default BackToTopButton;
