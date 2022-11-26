import React, {useState} from 'react';
import {FaChevronUp} from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import "./ScrollButton.css";

const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <div className='sticky-scroll-button d-none d-sm-block'>
        <Button>
            <FaChevronUp onClick={scrollToTop} 
            style={{display: visible ? 'inline' : 'none'}} />
        </Button>
    </div>
  );
}
  
export default ScrollButton;