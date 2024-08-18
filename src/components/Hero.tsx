import { useEffect, useRef } from "react";

import { AppConfig } from "../utils/AppConfig";

import Typed from "typed.js";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  const el = useRef<HTMLElement | null>(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    // See https://github.com/mattboldt/typed.js

    const options = {
      strings: AppConfig.interests,
      typeSpeed: 60,
      backSpeed: 30,
      loop: true,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, []);

  return (
    <header
      className="flex flex-col justify-center items-center text-white text-center min-h-screen p-4 sm:p-6"
      id="top"
    >
      <h1 className="hero-text margin-bottom">
        Hi! I am <br className="sm:hidden" />
        <span className="hero-gradient">Rishi Kanabar</span>
      </h1>
      <p className="hero-subtext margin-bottom">
        <span className="typing-text">
          <span ref={el}></span>
        </span>
        {AppConfig.cheesyCatchPhrase}
      </p>
      <nav className="seperator-line">
        <Link
          to="experiences"
          smooth={true}
          duration={600}
          offset={-55}
          className="experience-animation sub-text font-semibold"
        >
          View My Experiences
        </Link>
        <div className="flex justify-center mt-2 sm:mt-3 space-x-4">
          <a
            href={AppConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="icon-size hover-animation" />
          </a>
          <a
            href={AppConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="icon-size hover-animation" />
          </a>
          <a href={AppConfig.socials.email} aria-label="Email">
            <FaEnvelope className="icon-size hover-animation" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Hero;
