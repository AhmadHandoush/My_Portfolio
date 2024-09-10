import { Link } from "react-scroll";
import "./header.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Header() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <nav
      className="text-white  w-9/10 ml-auto mr-auto md:w-9/10 md:gap-4  lg:w-3/10 mx-auto p-2 flex-center rounded "
      data-aos="fade-down"
    >
      <ul className="flex gap-2 md:gap-5 text-lg">
        <li>
          <Link to="About" smooth={true} duration={100} spy={true} exact="true">
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={100}
            spy={true}
            exact="true"
          >
            {" "}
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={100}
            spy={true}
            exact="true"
          >
            {" "}
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={100}
            spy={true}
            exact="true"
          >
            {" "}
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
