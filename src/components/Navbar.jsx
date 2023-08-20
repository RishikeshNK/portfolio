const Navbar = () => {
  const navItems = [
    { label: "About Me", href: "#about-me" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
  ];

  {
    /* TODO: Make the navigation bar sticky */
  }
  return (
    <nav className="top-0 z-10 p-4">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="text-[#00C299] text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold tracking-tight"
            title="Home"
          >
            &lt;Rishi /&gt;
          </a>
          <ul className="flex space-x-4 text-white">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="hover:text-[#00C299] duration-300 text-sm md:text-base lg:text-lg xl:text-xl"
              >
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
