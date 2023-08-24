import { FaHeart } from "react-icons/fa";

import { footer } from "../styles";

const Footer = () => {
  return (
    <footer className={`${footer.footerText} mt-auto text-center`}>
      Made with <FaHeart className="inline-block text-[#FF6B6B] mb-1" /> by{" "}
      <a
        className="font-semibold"
        href="https://www.linkedin.com/in/rishikeshnk"
        target="_blank"
        rel="noreferrer"
      >
        Rishikesh Kanabar
      </a>{" "}
      |{" "}
      <a
        href="https://github.com/RishikeshNK/portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className={footer.linkText}
      >
        Source Code
      </a>
    </footer>
  );
};

export default Footer;
