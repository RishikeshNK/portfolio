import headshot from "../assets/rishi.jpg";

// TODO: Abstract out the constant information i.e. About Me paragraphs
const AboutMe = () => (
  <section className="flex flex-col min-h-screen text-gray-100 p-4 sm:p-6">
    <div className="max-w-4xl mx-auto text-center lg:flex lg:items-center">
      <div className="lg:w-2/3">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-4">
          About Me
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6">
          I am a Computer Science and Mathematics major (Hons.) at{" "}
          <span className="font-semibold">Northeastern University</span> in
          Boston, MA. I&apos;m currently in my second year, actively seeking
          opportunities for co-ops and internships in the field of software
          engineering, data science and quantitative finance from{" "}
          <span className="font-semibold">January 2024</span> to{" "}
          <span className="font-semibold">June 2024</span>.
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6">
          In the past, I&apos;ve had the priviledge of building softwares for an{" "}
          <a
            className="font-semibold"
            href="https://omninosolutions.com/"
            target="_blank"
            rel="noreferrer"
          >
            IT startup
          </a>{" "}
          and an{" "}
          <a
            className="font-semibold"
            href="https://www.collegey.com/"
            target="_blank"
            rel="noreferrer"
          >
            Ed-tech platform
          </a>
          .
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6">
          When I&apos;m not coding, I&apos;m usually working out, trying to find
          the next multibagger stock, or hanging out with my friends!
        </p>
      </div>
      <div className="lg:w-1/3">
        <div className="flex justify-center">
          <img
            src={headshot}
            alt="headshot"
            className="rounded-full w-40 md:w-44 lg:w-48 h-auto mx-auto mb-4"
          />
        </div>
      </div>
    </div>
  </section>
);

export default AboutMe;
