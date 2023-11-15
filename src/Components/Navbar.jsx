import React, { useState } from 'react';

import dlLogo from '../assets/dlLogo.gif';
import CvPDF from '/cv-alternance.pdf';


function Navbar() {


  const [isModalOpen, setIsModalOpen] = useState(false);

    function downloadCv() {
        const link = document.createElement("a");
        link.href = CvPDF;
        link.download = "cv-alternance.pdf";
        link.click();
    }

    function handleDownloadClick() {
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
    }

    function confirmDownload() {
        downloadCv();
        closeModal();
    }

    function handleOverlayClick(e) {
        // Vérifie si le clic est sur l'overlay et non sur la modal elle-même
        if (e.target.className === "Modal") {
            closeModal();
        }
    }

  const scrollToComponent = (componentId) => {
    const element = document.getElementById(componentId);
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (

    

    <header className="Header">
      <div className="Header-Tile">Jordan S</div>
      <div className="Navbar">
        <div className="Navbar-Item" onClick={() => scrollToComponent('competences')}>Home</div>
        <div className="Navbar-Item Item-Cv" onClick={handleDownloadClick}>
          Cv
          <img className='Dl-Logo' src={dlLogo} alt="" />
          </div>
        <div className="Navbar-Item" onClick={() => scrollToComponent('portfoglio')}>Portfoglio</div>
        <div className="Navbar-Item" onClick={() => scrollToComponent('contact')}>Contact</div>
      </div>

      {isModalOpen && (
                <div className="Modal" onClick={handleOverlayClick}>
                    <div className="Modal-content" onClick={e => e.stopPropagation()}>
                        <p className='Modal-Text'>Voulez-vous télécharger le CV ?</p>
                        <div className="Modal-Btn-Container">
                        <button className='Modal-Btn' onClick={confirmDownload}>Confirmer</button>
                        <button className='Modal-Btn' onClick={closeModal}>Annuler</button>
                        </div>
                    </div>
                </div>
            )}
      
    </header>
  )
}

export default Navbar;
