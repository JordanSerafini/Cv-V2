import React, { useState } from 'react';
import DlLogo from '../assets/dlLogo.png';
import CvPDF from '/cv-alternance.pdf'; // Assurez-vous que le chemin d'accès au fichier est correct

function Cv() {
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

    return (
        <>
            <div className='Download-CV' onClick={handleDownloadClick}>
                <img className='Download-CV-Logo' src={DlLogo} alt="Download CV" />
                <p>CV</p>
            </div>
            
            {isModalOpen && (
                <div className="Modal" onClick={handleOverlayClick}>
                    <div className="Modal-content" onClick={e => e.stopPropagation()}>
                        <p>Voulez-vous télécharger le CV ?</p>
                        <div className="Modal-Btn-Container">
                        <button className='Modal-Btn' onClick={confirmDownload}>Confirmer</button>
                        <button className='Modal-Btn' onClick={closeModal}>Annuler</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Cv;
