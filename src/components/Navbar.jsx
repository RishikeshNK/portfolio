const Navbar = () => {
  const navItems = [
    { label: "About Me", href: "#about-me" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
  ];
  return (
    <nav className="bg-white py-4 fixed w-full top-0 shadow-lg z-10">
      <div className="container mx-auto flex items-center justify-between px-4">
        <a
          href="#"
          className="text-indigo-600 text-2xl font-semibold"
          title="Home"
        >
          Rishi
        </a>
        <ul className="flex space-x-8">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="text-indigo-600 hover:text-gray-400 transition duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
