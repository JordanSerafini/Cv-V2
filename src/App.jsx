import React, { useState, useEffect } from 'react';

import HomeStart from './Components/Home-Start.jsx';
import Navbar from './Components/Navbar.jsx';
import Competences from './Components/compétences.jsx';
import Skill from './Components/Skill.jsx';
import Portfoglio from './Components/Portfoglio.jsx';
import upLogo from './Assets/upLogo.png';

import './App.css';

function App() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) { // par exemple après 400px de défilement
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // pour un effet de défilement doux
    });
  };

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
      <Competences />
      <Skill />
      <Portfoglio />
      <div className={`upBtn ${showScroll ? 'visible' : ''}`} onClick={scrollToTop}>
      <img src={upLogo} alt="Retour en haut" />
    </div>
      
    </>
  );
}

export default App;
