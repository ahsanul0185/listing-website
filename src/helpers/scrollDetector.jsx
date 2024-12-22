import React, { useRef, useEffect, useState } from "react";

const ScrollDetectionComponent = (pageRef) => {

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (pageRef.current) {
          setScrolled(pageRef.current.scrollTop > 0);
      }
    };

    const element = pageRef.current; // Save reference to avoid re-reading it
    if (element) {
      element.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (element) {
        element.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return {scrolled}
};

export default ScrollDetectionComponent;
