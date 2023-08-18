import ReactTyped from "react-typed";

const Hero = () => {
  return (
    <header className="flex flex-col justify-center items-center text-white min-h-screen p-6 md:p-10">
      <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-center mb-4">
        Hi! I am{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C299] to-[#0077B6]">
          Rishikesh Kanabar
        </span>
      </h1>
      <p className="text-base sm:text-sm md:text-md lg:text-lg mb-4 text-center">
        {" "}
        <span className="font-bold block mb-1">
          <ReactTyped
            strings={[
              "Full-Stack Web Developer",
              "Data Scientist",
              "Quantitative Analyst",
            ]}
            typeSpeed={60}
            backSpeed={30}
            loop
          />
        </span>
        Crafting Digital Experiences, One Line of Code at a Time
      </p>
      <nav className="border-t border-gray-600 pt-4 text-center">
        <a
          href="#projects"
          className="text-[#00C299] hover:text-[#c3eaff] font-semibold transition duration-300"
        >
          Explore My Work
        </a>
      </nav>
    </header>
  );
};

export default Hero;
