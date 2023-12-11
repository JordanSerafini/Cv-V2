import React, { useState, useEffect, useRef } from "react";

import HomeStart from "./Components/Home-Start.jsx";
import Navbar from "./Components/Navbar.jsx";
import Competences from "./Components/compétences.jsx";
import Skill from "./Components/Skill.jsx";
import Portfoglio from "./Components/Portfoglio.jsx";
import MobileNavBar from "./Components/MobileNavBar.jsx";

import upLogo from "./assets/upLogo.png";
import EmailForm from "./Components/Email.jsx";
import Cv from "./Components/Cv.jsx";
import CvPDF from "/cv-alternance.pdf";
import navbarLogo from "./assets/mobileNavLogo.png";

import "./App.css";

const useIntersectionObserver = (ref, callback, options = {}) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        callback(entry.isIntersecting);
      },
      { ...options, threshold: [0.25], rootMargin: "-100px 0px" }
    );

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
  const [showNavbar, setShowNavbar] = useState(false);

  const competencesRef = useRef(null);
  const skillRef = useRef(null);
  const portfoglioRef = useRef(null);
  const emailFormRef = useRef(null);
  const cvRef = useRef(null);

  const handleToggleNavbar = () => {
    if (showNavbar) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  };

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

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
      behavior: "smooth",
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
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  return (
    <div className="App">
      {/* Conditionnellement afficher la Navbar en fonction de l'état showNavbar */}
      {showNavbar && <Navbar className="navbarVisible" />}
      <HomeStart />
      <Navbar />
      <div className="Content">
        <div
          ref={competencesRef}
          id="competences"
          style={{ opacity: 0, transition: "opacity 1s ease-out" }}
        >
          <Competences />
        </div>
        <div
          ref={skillRef}
          id="skill"
          style={{ opacity: 0, transition: "opacity 1s ease-out" }}
        >
          <Skill />
        </div>
        <div
          ref={portfoglioRef}
          id="portfoglio"
          style={{ opacity: 0, transition: "opacity 1s ease-out" }}
        >
          <Portfoglio />
        </div>
        <div
          ref={emailFormRef}
          id="contact"
          style={{ opacity: 0, transition: "opacity 1s ease-out" }}
        >
          <EmailForm />
        </div>
      </div>
      <div className={`upBtn ${showScroll ? "visible" : ""}`}>
        <img onClick={scrollToTop} src={upLogo} alt="Retour en haut" />
      </div>
      {/* Logo pour afficher la navbar en version mobile */}
      {showScroll && !showNavbar && (
        <>
          <div className="navbarToggleBtn">
            <img
              onClick={toggleNavbar}
              src={navbarLogo}
              alt="Afficher la navbar"
            />
          </div>
        </>
      )}
      {showNavbar && (
        <MobileNavBar
          className="mobileNavbar-entering"
          toggleNavbar={toggleNavbar}
        />
      )}{" "}
      <p className="Responsive"> Responsive In progress</p>

    </div>
  );
}

export default App;
