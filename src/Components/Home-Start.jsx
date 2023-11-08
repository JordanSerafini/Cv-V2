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
          typingTimeout = setTimeout(() => {
            setTyping(false); 
          }, 5000); 
        }
      } else {
        if (index > 0) {
          setTextToShow(fullText.slice(0, index - 1));
          index--;
        } else {
          typingTimeout = setTimeout(() => {
            setTyping(true); 
          }, 5000); 
        }
      }
    };

    const typeInterval = setInterval(() => {
      typeOrErase();
    }, 120); 
    return () => {
      clearInterval(cursorInterval);
      clearInterval(typeInterval);
      clearTimeout(typingTimeout);
    };
  }, [typing]); 

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
