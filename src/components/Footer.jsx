import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-auto text-center text-white py-4">
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
        className="text-[#00C299] hover:text-[#c3eaff]"
      >
        Source Code
      </a>
    </footer>
  );
};

export default Footer;
