import { useState, useEffect } from "react";
import Background from "../assets/background.jpeg";

function HomeStart() {
  const firstPart = "JE SUIS JORDAN SERAFINI,";
  const secondPart = "DÉVELOPPEUR WEB";
  const [firstPartToShow, setFirstPartToShow] = useState("");
  const [secondPartToShow, setSecondPartToShow] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isFirstPartTyping, setIsFirstPartTyping] = useState(true);
  const [isSecondPartTyping, setIsSecondPartTyping] = useState(false);

  useEffect(() => {
    let cursorInterval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);

    let typingTimeout;
    let indexFirst = firstPartToShow.length;
    let indexSecond = secondPartToShow.length;

    const typeFirstPart = () => {
      if (indexFirst < firstPart.length) {
        setFirstPartToShow(firstPart.slice(0, indexFirst + 1));
        indexFirst++;
      } else {
        typingTimeout = setTimeout(() => {
          setIsFirstPartTyping(false);
          setIsSecondPartTyping(true);
        }, 1800); // Attendre 2s avant de commencer la seconde partie
      }
    };

    const typeSecondPart = () => {
      if (indexSecond < secondPart.length) {
        setSecondPartToShow(secondPart.slice(0, indexSecond + 1));
        indexSecond++;
      }
    };

    const typeInterval = setInterval(() => {
      if (isFirstPartTyping) {
        typeFirstPart();
      } else if (isSecondPartTyping) {
        typeSecondPart();
      }
    }, 120);

    return () => {
      clearInterval(cursorInterval);
      clearInterval(typeInterval);
      clearTimeout(typingTimeout);
    };
  }, [isFirstPartTyping, isSecondPartTyping]);

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
      <div className="Presentation-Container">
        <h3 className="Bonjour">BIENVENUE ,</h3>
        <div className="Presentation-Text-Container">
          <div className="Presentation-Text">
            <span className="Text-to-Show">{firstPartToShow}</span>
            {isFirstPartTyping && (
              <span
                className={`Cursor ${cursorVisible ? "Cursor-active" : ""}`}
              >
                |
              </span>
            )}
          </div>
          {secondPartToShow && (
            <div className="Presentation-Text">
              <span className="Text-to-Show">{secondPartToShow}</span>
              {isSecondPartTyping && (
                <span
                  className={`Cursor ${cursorVisible ? "Cursor-active" : ""}`}
                >
                  |
                </span>
              )}
            </div>
          )}
        <p className="Presentation-detail">Fullstack Front-end et Back-end.</p>
        </div>
      </div>
    </div>
  );
}

export default HomeStart;
