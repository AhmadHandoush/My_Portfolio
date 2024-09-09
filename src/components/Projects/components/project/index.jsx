import { Link } from "react-router-dom";
import "./project.css";
import { FaGithub } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Project({ project, projects }) {
  const { id, name, image, stacks, link, description } = project;
  const length = stacks.length;
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <li
      className="project text-white flex column gap-5 sm:h-auto lg:flex-row lg:h-72"
      data-aos="fade-right"
    >
      <div className="image w-full lg:w-7/10      ">
        <img src={image} alt={name} className="s-image" />
      </div>
      <div className="content w-full pb-2">
        <div className="flex column p-1 gap-3">
          <h1 className=" text-secondary">{name}</h1>
          <p className="description">{description}</p>
          <div className="stackss flex column">
            <h2>Stacks:</h2>
            <ul className=" stacks flex gap-1 flex-wrap   ">
              {stacks.map((stack, id) => (
                <li key={id}>
                  {stack}
                  {id !== length - 1 ? "-" : "."}
                </li>
              ))}
            </ul>
          </div>
          <div className="github mt-5 ">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <div className=" link flex gap-1 items-center ">
                <FaGithub className="text-3xl" />
                <h3 className="font-bold">Github Repository</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Project;
