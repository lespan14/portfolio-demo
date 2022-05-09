import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, Button,Col} from 'react-bootstrap';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);


  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && 
        <div onClick={scrollToTop}>
          <Button variant="outline-info" alt='Go to top'>Go to Top</Button>{' '}
        </div>}
    </div>
  );
}
