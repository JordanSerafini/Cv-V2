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
import chartJSLogo from "../assets/chartJs.png";
import eslintLogo from "../assets/eslintLogo.png";
import sanitizeLogo from "../assets/sanitizeLogo.png";

function SkillCategory({ title, skills }) {
  // Première liste de compétences sans modification
  const firstListSkills = skills.map((skill, index) => (
    <div className="Skill-Logo-Container" key={`first-${index}`}>
      <img src={skill.logo} alt={skill.logo} />
      <p className="Skill-Name">{skill.name}</p>
    </div>
  ));

  // Seconde liste de compétences avec une classe supplémentaire
  const secondListSkills = skills.map((skill, index) => (
    <div className={`Skill-Logo-Container List-2`} key={`second-${index}`}>
      <img src={skill.logo} alt={skill.logo} />
      <p className="Skill-Name">{skill.name}</p>
    </div>
  ));

  return (
    <div className="Skill-Category">
      <div className="Skill-Container-Title">{title}:</div>
      <div className="Skill-Scrolling-Container">
        <div className="Skill-Scrolling-Content">
          {firstListSkills.concat(secondListSkills)}
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
      <div className="Skill-2">
        <h2 className="Skill-Title">Compétences</h2>
        <div className="Skill-List-Container">
          <SkillCategory title="Front-end" skills={frontendSkills} />
          <SkillCategory title="Back-end" skills={backendSkills} />
          <SkillCategory title="Autres" skills={otherSkills} />
        </div>
      </div>
  );
}

export default Skill;
