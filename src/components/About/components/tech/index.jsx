import { Link } from "react-router-dom";
import Subtitle from "../sub-title";
import "./tech.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Tech() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  let skills = [
    {
      name: "HTML",
      image: "./html.png",
      link: "https://www.w3schools.com/html/",
    },
    {
      name: "CSS",
      image: "./css.png",
      link: "https://www.w3schools.com/css/",
    },
    {
      name: "Javascript",
      image: "./js.png",
      link: "https://www.w3schools.com/js/",
    },
    {
      name: "PHP",
      image: "./php.png",
      link: "https://www.php.net/",
    },
    {
      name: "React",
      image: "./React_Native.png",
      link: "https://react.dev/",
    },
    {
      name: "Laravel",
      image: "./laravel.png",
      link: "https://laravel.com/",
    },
    {
      name: "Node",
      image: "./node.png",
      link: "https://nodejs.org/en",
    },
    {
      name: "MySQL",
      image: "./sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "MangoDB",
      image: "./mangooo.png",
      link: "https://www.mongodb.com/",
    },
  ];
  return (
    <div className="tech p-4 flex column">
      <Subtitle title={"tech skills"} />
      <ul className="skills gap-5" data-aos="fade-down">
        {skills.map((skill, index) => (
          <li key={index}>
            <Link to={`${skill.link}`} target="_blank">
              <div className="skill w-50 h-50 bg-white">
                <img
                  src={skill.image}
                  alt={skill.name}
                  title={skill.name}
                  className="s-image"
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tech;
