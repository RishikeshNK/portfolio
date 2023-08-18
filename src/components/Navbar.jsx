const Navbar = () => {
  const navItems = [
    { label: "About Me", href: "#about-me" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
  ];

  return (
    <nav className="fixed w-full top-0 z-10 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="text-[#00C299] text-3xl font-bold" title="Home">
          Rishi
        </a>
        <ul className="flex space-x-8 text-white">
          {navItems.map((item, index) => (
            <li key={index} className="hover:text-[#00C299]">
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
