import React, { useState, useEffect } from 'react';

import HomeStart from './Components/Home-Start.jsx';
import Navbar from './Components/Navbar.jsx';
import Competences from './Components/compétences.jsx';
import Skill from './Components/Skill.jsx';
import Portfoglio from './Components/Portfoglio.jsx';
import upLogo from './assets/upLogo.png';
import EmailForm from './Components/Email.jsx';
import Cv from './Components/Cv.jsx';

import './App.css';

function App() {
  const [showScroll, setShowScroll] = useState(false);

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
      <EmailForm />

      <div className={`upBtn ${showScroll ? 'visible' : ''}`} >
      <img onClick={scrollToTop} src={upLogo} alt="Retour en haut" />
      < Cv showScroll={showScroll}/>
    </div>
      
    </>
  );
}

export default App;
