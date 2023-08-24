import { SiJavascript, SiExpress, SiMongodb } from "react-icons/si";
import {
  DiNodejs,
  DiReact,
  DiPython,
  DiJava,
  DiRust,
  DiGit,
} from "react-icons/di";
import PropTypes from "prop-types";

import { aboutMe } from "../styles";

const Skills = () => {
  const skills = [
    { icon: <SiJavascript />, label: "JavaScript" },
    { icon: <DiNodejs />, label: "NodeJS" },
    { icon: <DiReact />, label: "ReactJS" },
    { icon: <SiExpress />, label: "ExpressJS" },
    { icon: <SiMongodb />, label: "MongoDB" },
    { icon: <DiPython />, label: "Python" },
    { icon: <DiJava />, label: "Java" },
    { icon: <DiRust />, label: "Rust" },
    { icon: <DiGit />, label: "Git" },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {skills.map((skill, index) => (
        <SkillItem key={index} icon={skill.icon} label={skill.label} />
      ))}
    </div>
  );
};

// Skill Items
const SkillItem = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center text-center p-2 group">
      <div className={`${aboutMe.iconSize} mb-2`}>{icon}</div>
      <div className={aboutMe.techLabel}>{label}</div>
    </div>
  );
};

SkillItem.propTypes = {
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
};

export default Skills;
