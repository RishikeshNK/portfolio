const base = {
  hoverAnimation: "hover:text-[#00C299] hover:cursor-pointer duration-300",
  heading:
    "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-4",
};

const navbar = {
  primaryText: "text-[#00C299]",
  hoverPointer: "hover:cursor-pointer",
  navLogo:
    "text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold tracking-tight",
  navItem: "text-sm md:text-base lg:text-lg xl:text-xl",
};

const hero = {
  marginBottom: "mb-2 sm:mb-3",
  heroText:
    "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold ",
  heroGradient:
    "text-transparent bg-clip-text bg-gradient-to-r from-[#00C299] to-[#0077B6]",
  subText: "text-xs sm:text-sm md:text-base lg:text-lg",
  typingText: "font-semibold block mb-1",
  separatorLine: "border-t border-gray-600 pt-2 sm:pt-3",
  projectsAnimation:
    "text-[#00C299] hover:text-[#c3eaff] transition duration-300 hover:cursor-pointer",
  iconSize: "text-xl sm:text-3xl",
};

const aboutMe = {
  aboutText: "text-xs sm:text-sm md:text-base lg:text-lg mb-4",
  iconSize: "text-3xl sm:text-3xl md:text-4xl lg:text-5xl",
  techLabel: "text-xs opacity-0 group-hover:opacity-100 transition-opacity",
};

const projectCard = {
  titleText: "text-base sm:text-lg md:text-xl lg:text-2xl font-semibold",
  descriptionText: "text-xs sm:text-sm md:text-base lg:text-lg",
  linkText:
    "text-[#00C299] hover:text-[#c3eaff] text-xs sm:text-sm md:text-base lg:text-lg font-semibold",
};

const footer = {
  footerText: "text-white py-4 text-xs sm:text-sm md:text-base lg:text-lg",
  linkText: "text-[#00C299] hover:text-[#c3eaff]",
};

export { base, navbar, hero, aboutMe, projectCard, footer };
