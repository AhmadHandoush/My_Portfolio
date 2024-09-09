import { useEffect } from "react";
import Subtitle from "../sub-title";
import "./soft.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Soft() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  let skills = [
    "problem solving",
    "communiation skills",
    "decision making",
    "time management",
    "hard work",
  ];
  return (
    <div className="soft p-4 flex column ">
      <Subtitle title={"top soft skills"} />

      <ul className="px-5 flex column gap-4" data-aos="fade-right">
        {skills.map((skill, index) => (
          <li key={index} className="capitalize">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Soft;
