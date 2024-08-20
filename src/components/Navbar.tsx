import { Link } from "react-scroll";
import { AppConfig } from "../utils/AppConfig";

const Navbar = () => {
  const resumeLink = "Rishi-Kanabar.pdf";

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 p-3 backdrop-blur bg-opacity-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link
            to="top"
            smooth={true}
            duration={600}
            offset={-80}
            className="nav-logo hover-pointer"
            title="Home"
          >
            &lt;RK /&gt;
          </Link>
          <ul className="flex space-x-4 text-white">
            {AppConfig.navItems.map((item, index) => (
              <li key={index} className="nav-item hover-animation">
                <Link to={item.href} smooth={true} duration={600} offset={-90}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="nav-item hover-animation">
              <a href={resumeLink}>Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
