import { Link } from "react-scroll";

const Navbar = () => {
  const navItems = [
    { label: "About Me", href: "about-me" },
    { label: "Projects", href: "projects" },
    { label: "Skills", href: "skills" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 p-3 backdrop-blur bg-opacity-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link
            to="top"
            smooth={true}
            duration={600}
            offset={-80}
            className="text-[#00C299] text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold tracking-tight hover:cursor-pointer"
            title="Home"
          >
            &lt;Rishi /&gt;
          </Link>
          <ul className="flex space-x-4 text-white">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="hover:text-[#00C299] hover:cursor-pointer duration-300 text-sm md:text-base lg:text-lg xl:text-xl"
              >
                <Link to={item.href} smooth={true} duration={600} offset={-60}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
