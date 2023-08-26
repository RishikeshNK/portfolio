import { useEffect, useRef } from "react";

import Typed from "typed.js";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    {
      /* See https://github.com/mattboldt/typed.js */
    }
    const options = {
      strings: [
        "Full-Stack Web Developer",
        "Data Scientist",
        "Quantitative Analyst",
      ],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <header
      className="flex flex-col justify-center items-center text-white text-center min-h-screen p-4 sm:p-6"
      id="top"
    >
      <h1 className="hero-text margin-bottom">
        Hi! I am <br className="sm:hidden" />
        <span className="hero-gradient">Rishikesh Kanabar</span>
      </h1>
      <p className="hero-subtext margin-bottom">
        <span className="typing-text">
          <span ref={el}></span>
        </span>
        Crafting Digital Experiences, One Line of Code at a Time
      </p>
      <nav className="seperator-line">
        <Link
          to="projects"
          smooth={true}
          duration={600}
          offset={-55}
          className="projects-animation sub-text font-semibold"
        >
          Explore My Work
        </Link>
        <div className="flex justify-center mt-2 sm:mt-3 space-x-4">
          <a
            href="https://github.com/RishikeshNK"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="icon-size hover-animation" />
          </a>
          <a
            href="https://linkedin.com/in/rishikeshnk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="icon-size hover-animation" />
          </a>
          <a href="mailto:rishikesh.kanabar@gmail.com" aria-label="Email">
            <FaEnvelope className="icon-size hover-animation" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Hero;
