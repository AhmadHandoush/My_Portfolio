import { Link } from "react-router-dom";
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
          <Link to={"#About"}> About</Link>
        </li>
        <li>
          <Link to={"#skills"}> Skills</Link>
        </li>
        <li>
          <Link to={"#projects"}> Projects</Link>
        </li>
        <li>
          <Link to={"#contact"}> Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
