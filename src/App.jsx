import React, { useState, useEffect, useRef } from "react";

import HomeStart from "./Components/Home-Start.jsx";
import Navbar from "./Components/Navbar.jsx";
import Competences from "./Components/compétences.jsx";
import Skill from "./Components/Skill.jsx";
import Portfoglio from "./Components/Portfoglio.jsx";
import upLogo from "./assets/upLogo.png";
import EmailForm from "./Components/Email.jsx";
import Cv from "./Components/Cv.jsx";
import CvPDF from "/cv-alternance.pdf";

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

  const competencesRef = useRef(null);
  const skillRef = useRef(null);
  const portfoglioRef = useRef(null);
  const emailFormRef = useRef(null);
  const cvRef = useRef(null);

  const downloadCv = () => {
    const link = document.createElement("a");
    link.href = CvPDF;
    link.download = "cv-alternance.pdf";
    link.click();
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
    <>
      <HomeStart />
      <Navbar onCvClick={downloadCv} />
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

      <div className={`upBtn ${showScroll ? "visible" : ""}`}>
        <img onClick={scrollToTop} src={upLogo} alt="Retour en haut" />
        <Cv onDownload={downloadCv} />
      </div>
    </>
  );
}

export default App;
