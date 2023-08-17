const Hero = () => {
  return (
    <div className="bg-indigo-100 flex flex-col items-center justify-center min-h-screen p-6 md:p-10">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-indigo-600 text-center mb-2">
        Hi! I am <span className="text-indigo-900">Rishikesh Kanabar 👋</span>
      </h1>
      <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-4 text-center">
        <span className="font-semibold block mb-1">
          Full-Stack Web Developer
        </span>
        {/* Think of something less cheesy =P */}
        Crafting Digital Experiences, One Line of Code at a Time
      </p>
      <div className="border-t border-indigo-200 pt-4 text-center">
        <a
          href="#projects"
          className="text-indigo-600 hover:text-gray-400 font-semibold transition duration-300"
        >
          Explore My Work
        </a>
      </div>
    </div>
  );
};

export default Hero;
