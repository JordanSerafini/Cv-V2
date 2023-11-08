import React, { useState, useEffect, useRef } from 'react';

import HomeStart from './Components/Home-Start.jsx';
import Navbar from './Components/Navbar.jsx';
import Competences from './Components/compétences.jsx';
import Skill from './Components/Skill.jsx';
import Portfoglio from './Components/Portfoglio.jsx';
import upLogo from './assets/upLogo.png';
import EmailForm from './Components/Email.jsx';
import Cv from './Components/Cv.jsx';

import './App.css';


const useIntersectionObserver = (ref, callback, options = {}) => {
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      callback(entry.isIntersecting);
    }, { ...options, threshold: [0.25], rootMargin: "-100px 0px" });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options, callback]);
};




function App() {
  const [showScroll, setShowScroll] = useState(false);

  const competencesRef = useRef(null);
  const skillRef = useRef(null);
  const portfoglioRef = useRef(null);
  const emailFormRef = useRef(null);
  const cvRef = useRef(null);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };



  // Utilisation de useIntersectionObserver pour chaque section
  useIntersectionObserver(competencesRef, (isVisible) => {
    if (isVisible) competencesRef.current.style.opacity = 1;
  });
  useIntersectionObserver(skillRef, (isVisible) => {
    if (isVisible) skillRef.current.style.opacity = 1;
  });
  useIntersectionObserver(portfoglioRef, (isVisible) => {
    if (isVisible) portfoglioRef.current.style.opacity = 1;
  });
  useIntersectionObserver(emailFormRef, (isVisible) => {
    if (isVisible) emailFormRef.current.style.opacity = 1;
  });
  useIntersectionObserver(cvRef, (isVisible) => {
    if (isVisible) cvRef.current.style.opacity = 1;
  });

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  return (
    <>
      <HomeStart />
      <Navbar />
      <div ref={competencesRef} style={{ opacity: 0, transition: 'opacity 1s ease-out' }}>
  <Competences />
</div>
<div ref={skillRef} style={{ opacity: 0, transition: 'opacity 1s ease-out' }}>
  <Skill />
</div>
<div ref={portfoglioRef} style={{ opacity: 0, transition: 'opacity 1s ease-out' }}>
  <Portfoglio />
</div>
<div ref={emailFormRef} style={{ opacity: 0, transition: 'opacity 1s ease-out' }}>
  <EmailForm />
</div>


      <div className={`upBtn ${showScroll ? 'visible' : ''}`} onClick={scrollToTop}>
        <img src={upLogo} alt="Retour en haut" />
        <Cv />
      </div>
    </>
  );
}

export default App;
