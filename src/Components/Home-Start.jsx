import { useState, useEffect } from 'react';
import Background from '../assets/background.jpeg';

function HomeStart() {
  const fullText = 'JE SUIS JORDAN SERAFINI, DÉVELOPPEUR WEB';
  const [textToShow, setTextToShow] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let cursorInterval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);

    let index = textToShow.length;
    let typingTimeout;

    const typeOrErase = () => {
      if (typing) {
        if (index < fullText.length) {
          setTextToShow(fullText.slice(0, index + 1));
          index++;
        } else {
          // Une fois que le texte complet est affiché, attendez 5 secondes avant de commencer à effacer
          typingTimeout = setTimeout(() => {
            setTyping(false); // Commencer l'effacement
          }, 5000); // Attendre 5 secondes
        }
      } else {
        if (index > 0) {
          setTextToShow(fullText.slice(0, index - 1));
          index--;
        } else {
          // Une fois le texte complètement effacé, attendez 5 secondes avant de recommencer à écrire
          typingTimeout = setTimeout(() => {
            setTyping(true); // Commencer à écrire
          }, 5000); // Attendre 5 secondes
        }
      }
    };

    const typeInterval = setInterval(() => {
      typeOrErase();
    }, 120); // Vitesse d'écriture/effacement

    return () => {
      clearInterval(cursorInterval);
      clearInterval(typeInterval);
      clearTimeout(typingTimeout);
    };
  }, [typing]); // Dépendance de l'effet sur l'état de 'typing'

  return (
    <div className="Home-Start">
      <section className="sticky">
        <div className="bubbles">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        </div>
      </section>
      <img className="Home-Pic" src={Background} alt="Jordan Serafini" />
      <div className='Presentation-Container'>
        <h3 className='Bonjour'>BIENVENUE ,</h3>
        <div className="Presentation-Text-Container">
        <div className="Presentation-Text">
          <span className="Text-to-Show">{textToShow}</span>
          <span className={`Cursor ${cursorVisible ? 'Cursor-active' : ''}`}>|</span>
        </div>
        <p className='Presentation-detail'> Développeur junior front-end et back-end.</p>
      </div>
      </div>
    </div>
  );
}

export default HomeStart;
