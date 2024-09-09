import Title from "../title";
import Soft from "./components/soft";
import Tech from "./components/tech";
import "./about.css";

function About() {
  return (
    <section className="about flex column gap-5 pb-5" id="skills">
      <Title title={"Skills"} />
      <section className="skills flex gap-5 text-white w-9/10 flex-between mx-auto">
        <Tech />
        <Soft />
      </section>
    </section>
  );
}

export default About;
