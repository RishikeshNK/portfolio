import { AppConfig } from "../utils/AppConfig";

const Experiences = () => {
  return (
    <div className="text-gray-100 flex flex-col items-center justify-center">
      <h2 className="subheading" id="experiences">
        Experiences
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 py-10 px-4">
        {AppConfig.work.map((role, index) => (
          <div
            key={index}
            className="border border-gray-100 p-4 rounded-lg w-full flex flex-col items-center text-center transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:shadow-black"
          >
            {role.image && (
              <img
                src={role.image}
                alt={role.company}
                className="mb-4 rounded-lg max-w-full w-64"
              />
            )}
            <h3 className="title-text">{role.title}</h3>
            <p className="desc-text">{role.dates}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
