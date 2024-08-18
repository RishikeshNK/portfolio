import headshot from "../assets/rishi.jpg";
import { AppConfig } from "../utils/AppConfig";
import { Skills } from "./skills";

const AboutMe = () => (
  <section className="flex flex-col h-screen text-gray-100 p-4 py-0 sm:p-6">
    <div className="max-w-4xl mx-auto text-center lg:flex lg:items-center">
      <div className="lg:w-2/3">
        <h2 className="subheading" id="about-me">
          About Me
        </h2>
        <p className="about-text">{AppConfig.aboutMe.first}</p>
        <p className="about-text">{AppConfig.aboutMe.second}</p>
        <p className="about-text">{AppConfig.aboutMe.third}</p>
      </div>
      <div className="lg:w-1/3">
        <div className="flex justify-center">
          <img
            src={headshot}
            alt="headshot"
            className="rounded-full w-40 md:w-44 lg:w-48 h-auto mx-auto mb-4"
          />
        </div>
      </div>
    </div>
    <Skills />
  </section>
);

export default AboutMe;
