import expressLogo from "../assets/expressLogo.png";
import jsLogo from "../assets/jsLogo.png";
import mongoLogo from "../assets/mongoLogo-2.png";
import nodeLogo from "../assets/nodeLogo.png";
import pgLogo from "../assets/pgLogo.png";
import reactLogo from "../assets/reactLogo.png";
import reduxLogo from "../assets/reduxLogo.png";
import tailwindLogo from "../assets/tailwindLogo-2.png";
import socketLogo from "../assets/socketLogo.png";
import dockerLogo from "../assets/dockerLogo.png";
import githubLogo from "../assets/githubLogo.png";
import linkdnLogo from "../assets/linkdnLogo.png"; // Assurez-vous que le nom de fichier est correct et utilisez la même casse
import viteLogo from "../assets/viteLogo.png";
import mochaLogo from "../assets/mochaLogo.png";

function Skill() {
  return (
    <div className='Skill'>
        <div className='Skill-List-Container'>
            <div className="Skill-Container">Front-end:</div>
            <div className="Skill-Logo-Container">
                <img src={jsLogo} alt="" />
                <p>Javascript</p>
            </div>
            <div className="Skill-Logo-Container">
                <img src={reactLogo} alt="" />
                <p>react</p>
            </div>
            <div className="Skill-Logo-Container">
                <img src={tailwindLogo} alt="" />
                <p>tailwind</p>
            </div>
            <div className="Skill-Logo-Container">
                <img src={reduxLogo} alt="" />
                <p>redux</p>
            </div>
            
            <div className="Skill-Container">Back-end:</div>
            <div className="Skill-Logo-Container">
                <img src={nodeLogo} alt="" />
                <p>Node JS</p>
            </div>
            <div className="Skill-Logo-Container">
                <img src={expressLogo} alt="" />
                <p>express</p>
            </div>
            <div className="Skill-Logo-Container">
                <img src={pgLogo} alt="" />
                <p>PostgreSQL</p>
            </div>
            <div className="Skill-Logo-Container">
                <img src={mochaLogo} alt="" />
                <p>mocha/chai</p>
            </div>

            <div className="Skill-Container">Autres:</div>
        </div>
    </div>
  )
}

export default Skill