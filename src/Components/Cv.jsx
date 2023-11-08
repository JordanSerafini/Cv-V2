import React from 'react';
import downloadLogo from '../assets/downloadLogo.jpeg'; // Notez que cette importation n'est pas utilisée
import DlLogo from '../assets/DlLogo.png';
import CvPDF from '../../public/cv-alternance.pdf'; // Assurez-vous que le chemin d'accès au fichier est correct

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
