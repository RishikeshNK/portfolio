import { AppConfig } from "../utils/AppConfig";

const Footer = () => {
  return (
    <footer className="footer-text mt-auto text-center">
      © Rishi Kanabar 2024 |{" "}
      <a
        href={AppConfig.socials.source}
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
