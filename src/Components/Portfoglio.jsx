import immoLogo from "../assets/immoLogo.jpeg";
import githubLogo from "../assets/githubLogo.png";
import pcLogo from "../assets/pcLogo.jpeg";

function Portfolio() {



  return (
    <div className="Portfolio Section">
      <div className="Portfolio Container">
        <h2 className="Portfolio-Rep Bio-Rep">Mes projets</h2>
        <div className="Portfolio-BackText">
          <p>PORTFOLIO</p>
        </div>

        <div className="Portfolio-Project-Container">


          {/* Projet 1 */}
          <div className="Portfolio-Project Project-1">
            {/* Le lien englobe uniquement le titre et l'image */}
            <a
              href="https://immopros-app.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="Project-Content">
                <h3 className="Project-Title">
                  Projet Principal: <span>Immo-Pros</span>
                </h3>
                <img src={immoLogo} alt="Immo-Pros Project" />
              </div>
            </a>
            <div className="Project-Hover">
              <p>
              Plongez au cœur de mon projet majeur, une application dédiée au monde de l'immobilier qui illustre mon habileté à conjuguer des solutions back-end robustes avec une expérience utilisateur fluide et intuitive sur le front-end. Technologies utilisées : Node.js, React, PostgreSQL, etc.
                <br /><br />
                <a className="Site-Link" href="https://immopros-app.com/" target="_blank" rel="noopener noreferrer">Lien vers le site</a>
              </p>
            </div>
          </div>

       
           {/* Projet 2 */}
           <div className="Portfolio-Project Project-2">
            {/* Le lien englobe uniquement le titre et l'image */}
            <a
              href="https://github.com/JordanSerafini"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="Project-Content">
                <h3 className="Project-Title">
                Expérimentations et Contributions Open Source
                </h3>
                <img src={githubLogo} alt="github site" />
              </div>
            </a>
            <div className="Project-Hover">
              <p>
              Mes contributions sur GitHub témoignent de mon engagement dans la communauté du code open source. Chaque repository est une opportunité d'apprendre, de partager et de collaborer.
                <br /><br />
                <a className="Site-Link" href="https://github.com/JordanSerafini" target="_blank" rel="noopener noreferrer">Lien vers le site</a>
              </p>
            </div>
          </div>
          
          {/* Projet 3 */}
          <div className="Portfolio-Project Project-3">
            <h3 className="Project-Title">Compétences Techniques</h3>
            <p className="Project-Text">
              Ma palette de compétences s'étend sur les technologies les plus
              récentes et les plus demandées du développement web. Je maîtrise
              JavaScript et son écosystème, et j'ai une expérience pratique avec
              des bases de données comme PostgreSQL, des frameworks tels que
              React, ainsi que des outils de développement moderne comme Docker
              et Socket.IO.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
