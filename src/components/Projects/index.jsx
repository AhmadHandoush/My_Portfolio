import Title from "../title";
import Project from "./components/project";
import "./projects.css";

function Projects() {
  const projects = [
    {
      id: 1,
      name: "Trekker Tales",
      image: "./trekker-tales.jpeg",
      description:
        "Mobile App aims to help students get the perefect weekend with their teachers.",
      stacks: [
        "React Js",
        "Laravel",
        "React Native",
        "MySQL",
        "Firebase",
        "Open Ai APi",
      ],
      link: "https://github.com/AhmadHandoush/Trekker-Tales",
    },
    {
      id: 2,
      name: "HND",
      image: "./HND.png",
      description:
        "Full Stack E-commerce Website aims to help people shop online instead of going to the shop.",
      stacks: ["React Js", "Node js", "Express", "MangoDB"],
      link: "https://github.com/AhmadHandoush/Online-Store",
    },
    {
      id: 3,
      name: "Subway-system",
      image: "./Subway.png",
      description:
        "Full Stack Website for a Subway System aims to help passenger to book a seat online.",
      stacks: ["React Js", "Laravel", "MySQL"],
      link: "https://github.com/AhmadHandoush/Subway-System",
    },
  ];
  return (
    <section
      className="projects flex column w-9/10 mx-auto pt-5 pb-5 "
      id="projects"
    >
      <Title title={"projects"} />
      <ul className="flex  gap-5 flex-wrap w-full mt-5">
        {projects.map((project, id) => (
          <Project key={id} project={project} projects={projects} />
        ))}
      </ul>
    </section>
  );
}

export default Projects;
