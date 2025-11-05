"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Button } from "./ui/button";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to a certain distance
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="absolute bottom-0 right-0">
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="size-10 rounded-full shadow-lg transition duration-300 cursor-pointer"
        >
          <FaArrowUp />
        </Button>
      )}
    </div>
  );
};

export default ScrollToTop;
