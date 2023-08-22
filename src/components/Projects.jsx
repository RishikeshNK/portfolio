import projects from "../constants/projects";

const Projects = () => {
  return (
    <div className="text-gray-100 flex flex-col items-center justify-center">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
        Projects
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 py-10 px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-100 p-4 rounded-lg w-full flex flex-col items-center"
          >
            {project.image && (
              <img
                src={project.image}
                alt={`Project ${index + 1}`}
                className="mb-4 rounded-lg max-w-full w-64"
              />
            )}
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-center">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-center">
              {project.description}
            </p>
            <div className="mt-2">
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-center">
                {project.technologies.join(" ⋅ ")}
              </p>
            </div>
            <div className="mt-2 flex gap-2 justify-center">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00C299] hover:text-[#c3eaff] text-xs sm:text-sm md:text-base lg:text-lg font-semibold"
                >
                  Live
                </a>
              )}
              {project.code && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm md:text-base lg:text-lg text-[#00C299] hover:text-[#c3eaff] font-semibold"
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
