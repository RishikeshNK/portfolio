import { Link } from "react-scroll";
import resume from "../assets/Rishikesh-Kanabar.pdf";
import { base, navbar } from "../styles";

const Navbar = () => {
  const navItems = [
    { label: "About Me", href: "about-me" },
    { label: "Projects", href: "projects" },
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
            className={`${navbar.primaryText} ${navbar.hoverPointer} ${navbar.navLogo}`}
            title="Home"
          >
            &lt;Rishi /&gt;
          </Link>
          <ul className="flex space-x-4 text-white">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`${base.hoverAnimation} ${navbar.navItem}`}
              >
                <Link to={item.href} smooth={true} duration={600} offset={-55}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li className={`${base.hoverAnimation} ${navbar.navItem}`}>
              <a href={resume} download>
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
