import React from 'react';
import DlLogo from '../assets/dlLogo.png';
import CvPDF from '/cv-alternance.pdf'; // Assurez-vous que le chemin d'accès au fichier est correct

function Cv() {

    function downloadCv() {
        const link = document.createElement("a");
        link.href = CvPDF;
        link.download = "cv-alternance.pdf";
        document.body.appendChild(link); 
        link.click(); 
        document.body.removeChild(link); 
    }
    

    return (
        <div className='Download-CV' onClick={downloadCv}>
            
            <img src={DlLogo} alt="Download CV" />
            <p>CV</p>
        </div>
    );
}

export default Cv;
