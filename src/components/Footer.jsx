import links from "../constants/links";

const Footer = () => {
  return (
    <footer className="footer-text mt-auto text-center">
      Made by{" "}
      <a
        className="font-semibold"
        href={links.LINKEDIN}
        target="_blank"
        rel="noreferrer"
      >
        Rishikesh Kanabar
      </a>{" "}
      |{" "}
      <a
        href={links.SOURCE}
        target="_blank"
        rel="noopener noreferrer"
        className="link-text"
      >
        Source Code
      </a>
    </footer>
  );
};

export default Footer;
