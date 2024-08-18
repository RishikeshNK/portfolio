import { SiJavascript, SiExpress, SiMongodb } from "react-icons/si";
import {
  DiNodejs,
  DiReact,
  DiPython,
  DiJava,
  DiRust,
  DiGit,
} from "react-icons/di";
import SkillItem from "./SkillItem";

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

export default Skills;
