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
import linkdnLogo from "../assets/linkdnLogo.png";
import viteLogo from "../assets/viteLogo.png";
import mochaLogo from "../assets/mochaLogo.png";
import responsiveLogo from "../assets/responsiveLogo.jpg";
import bootstrapLogo from "../assets/bootstrapLogo.png";
import restLogo from "../assets/restLogo.png";
import chartJSLogo from "../assets/chartJS.png";
import eslintLogo from "../assets/eslintLogo.png";
import sanitizeLogo from "../assets/sanitizeLogo.png";

function SkillCategory({ title, skills }) {
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="Skill-Category">
      <div className="Skill-Container-Title">{title}:</div>
      <div className="Skill-Scrolling-Container">
        <div className="Skill-Scrolling-Content">
          {duplicatedSkills.map((skill, index) => (
            <div className="Skill-Logo-Container" key={index}>
              <img src={skill.logo} alt={skill.name} />
              <p className="Skill-Name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Skill() {
  const frontendSkills = [
    { logo: jsLogo, name: "JS" },
    { logo: reactLogo, name: "React" },
    { logo: reduxLogo, name: "Redux" },
    { logo: tailwindLogo, name: "Tailwind" },
    { logo: viteLogo, name: "Vite" },
    { logo: chartJSLogo, name: "ChartJS" },


    // ... autres logos frontend
  ];

  const backendSkills = [
    { logo: nodeLogo, name: "Node JS" },
    { logo: expressLogo, name: "Express" },
    { logo: pgLogo, name: "Pgsql" },
    { logo: mochaLogo, name: "Mocha" },
    { logo: restLogo, name: "API rest" },
    { logo: restLogo, name: "API rest" },



    // ... autres logos backend
  ];

  const otherSkills = [
    { logo: dockerLogo, name: "Docker" },
    { logo: githubLogo, name: "GitHub" },
    { logo: eslintLogo, name: "Eslint" },
    { logo: eslintLogo, name: "Eslint" },
    { logo: eslintLogo, name: "Eslint" },
    { logo: eslintLogo, name: "Eslint" },


    // ... autres logos autres
  ];

  return (
    <div className="Skill">
      <div className="Skill-Full-Container">
        <h2 className="Skill-Title">Compétences</h2>
        <div className="Skill-List-Container">
          <SkillCategory title="Front-end" skills={frontendSkills} />
          <SkillCategory title="Back-end" skills={backendSkills} />
          <SkillCategory title="Autres" skills={otherSkills} />
        </div>
      </div>
    </div>
  );
}

export default Skill;
