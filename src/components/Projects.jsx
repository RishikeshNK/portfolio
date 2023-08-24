import projects from "../constants/projects";

import { base, projectCard } from "../styles";

const Projects = () => {
  return (
    <div className="text-gray-100 flex flex-col items-center justify-center">
      <h2 className={base.heading} id="projects">
        Projects
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 py-10 px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-100 p-4 rounded-lg w-full flex flex-col items-center text-center transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-gray-800"
          >
            {project.image && (
              <img
                src={project.image}
                alt={`Project ${index + 1}`}
                className="mb-4 rounded-lg max-w-full w-64"
              />
            )}
            <h3 className={projectCard.titleText}>{project.title}</h3>
            <p className={projectCard.descriptionText}>{project.description}</p>
            <div className="mt-2">
              <p className={projectCard.descriptionText}>
                {project.technologies.join(" ⋅ ")}
              </p>
            </div>
            <div className="mt-2 flex gap-2 justify-center">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={projectCard.linkText}
                >
                  Live
                </a>
              )}
              {project.code && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={projectCard.linkText}
                >
                  Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
