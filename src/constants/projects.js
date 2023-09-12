import simutrade from "../assets/simutrade.jpg";
import shrinkit from "../assets/shrinkit.png";

const projects = [
  {
    image: simutrade,
    title: "SimuTrade API",
    description:
      "SimuTrade API is a RESTful API that provides a platform for managing and trading simulated stocks and portfolios.",
    live: null,
    code: "https://github.com/RishikeshNK/simutrade-api",
    technologies: ["ExpressJS", "Docker", "Prisma", "Postgres", "JWT"],
  },
  {
    image: shrinkit,
    title: "ShrinkIt",
    description: "Your links, trimmed and ready to share, in an instant.",
    live: null,
    code: "https://github.com/RishikeshNK/shrinkit",
    technologies: [
      "ExpressJS",
      "MongoDB",
      "NodeJS",
      "ReactJS",
      "TypeScript",
      "ChakraUI",
    ],
  },
];

export default projects;
