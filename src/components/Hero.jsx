import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Link } from "react-scroll";

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
      className="flex flex-col justify-center items-center text-white min-h-screen p-4 sm:p-6"
      id="top"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-center mb-2 sm:mb-3">
        Hi! I am{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C299] to-[#0077B6]">
          Rishikesh Kanabar
        </span>
      </h1>
      <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-2 sm:mb-3 text-center">
        <span className="font-semibold block mb-1">
          <span ref={el}></span>
        </span>
        Crafting Digital Experiences, One Line of Code at a Time
      </p>
      <nav className="border-t border-gray-600 pt-2 sm:pt-3 text-center">
        <Link
          to="projects"
          smooth={true}
          duration={600}
          offset={-55}
          className="text-[#00C299] hover:text-[#c3eaff] text-sm sm:text-base md:text-lg lg:text-xl font-semibold transition duration-300 hover:cursor-pointer"
        >
          Explore My Work
        </Link>
      </nav>
    </header>
  );
};

export default Hero;
