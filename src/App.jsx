import React, { useEffect, useRef, useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./shared/Header";
import MobileMenu from "./shared/MobileMenu";
import Footer from "./shared/Footer";
import ScrollDetectionComponent from "./helpers/scrollDetector";
import Overlay from "./components/Overlay";
import SignInPopup from "./components/SignInPopup";
import ColorSwitcher from "./components/ColorSwitcher";
import BackToTopButton from "./components/BackToTopButton";

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShowSignPopup, setIsShowSignPopup] = useState(false);
  const pageRef = useRef(null);
  const { scrolled } = ScrollDetectionComponent(pageRef);

  const [theme, setTheme] = useState("default")

  return (
    <div className={`overflow-hidden z-0 bg-white theme-${theme}`}>
      {/* Mobile Menu */}
      <MobileMenu />

      {/* Color Switcher */}
      <ColorSwitcher color={theme } setTheme={setTheme} />

      {/* Sign In Popup Box */}
      <SignInPopup isShowSignPopup={isShowSignPopup} setIsShowSignPopup={setIsShowSignPopup} />
      
      {/* Back to top button */}
      <BackToTopButton pageEl={pageRef} scrolled={scrolled } />

      {/* Whole Web Page */}
      <div
        ref={pageRef}
        id="page"
        className={`relative duration-500 z-0 h-screen 
          ${
            isMobileMenuOpen
              ? "translate-x-[75%] md:translate-x-0 h-screen overflow-hidden"
              : "translate-x-0 overflow-y-scroll overflow-x-hidden"
          }
          
          `}
      >
        {/* Overlay for mobile menu */}
        <Overlay setIsMobileMenuOpen={setIsMobileMenuOpen} isMobileMenuOpen={ isMobileMenuOpen} />

        <Header
          isMobileMenuOpen={isMobileMenuOpen}
          setIsShowSignPopup={ setIsShowSignPopup }
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          scrolled={scrolled}
        />
        

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;










// import React, { useEffect, useRef, useState } from "react";
// import Home from "./pages/Home";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./shared/Header";
// import MobileMenu from "./shared/MobileMenu";
// import Footer from "./shared/Footer";
// import ScrollDetectionComponent from "./helpers/scrollDetector";
// import Overlay from "./components/Overlay";
// import SignInPopup from "./components/SignInPopup";

// const App = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isShowSignPopup, setIsShowSignPopup] = useState(false);
//   const pageRef = useRef(null);
//   const { scrolled } = ScrollDetectionComponent(pageRef);

//   return (
//     <div className=" translate-x-1/2">
//       {/* Mobile Menu */}
//       <MobileMenu />

//       <SignInPopup isShowSignPopup={isShowSignPopup} setIsShowSignPopup={ setIsShowSignPopup } />

//       {/* <div
//         ref={pageRef}
//         id="page"
//         className={`relative duration-500 z-0 h-screen 
//           ${
//             isMobileMenuOpen
//               ? "translate-x-[75%] md:translate-x-0 h-screen overflow-hidden"
//               : "translate-x-0 overflow-y-scroll overflow-x-hidden"
//           }
          
//           `}
//       > */}
//         {/* Overlay for mobile menu */}
//         <Overlay setIsMobileMenuOpen={setIsMobileMenuOpen} isMobileMenuOpen={ isMobileMenuOpen} />

//         <Header
//           isMobileMenuOpen={isMobileMenuOpen}
//           setIsShowSignPopup={ setIsShowSignPopup }
//           setIsMobileMenuOpen={setIsMobileMenuOpen}
//           scrolled={scrolled}
//         />
        

//         <Routes>
//           <Route path="/" element={<Home />} />
//         </Routes>
//         <Footer />
//       </div>
//     // </div>
//   );
// };

// export default App;
