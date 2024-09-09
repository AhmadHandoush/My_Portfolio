import "./footer.css";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

function Footer() {
  return (
    <footer className=" p-3 text-white flex column gap-5 " id="footer">
      <div className=" info  flex justify-between  gap-3 w-9/10 mx-auto">
        <div className="git ">
          <a
            href="https://github.com/Ahmadhandoush"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-1 items-center"
          >
            <span>
              <FaGithub />
            </span>
            <span>AhmadHandoush</span>
          </a>
        </div>
        <div className="email">
          <a
            href="mailto:ahmadhandoush5@gmail.com"
            className="flex gap-1 items-center"
          >
            <span>
              <FaEnvelope />
            </span>
            <span>ahmadhandoush5@gmail.com</span>
          </a>
        </div>
        <div className="phone">
          <a href="tel:+961 81303288" className="flex-center gap-1">
            <span>
              <IoCall />
            </span>
            <span>+961 81 30 32 88</span>
          </a>
        </div>
      </div>
      <div className="bottom flex-center">
        <small className="flex items-center gap-1">
          <span className="text-xl">&copy;</span>Copy Rights Reserved.
          <span className="span text-secondary">
            {new Date().getFullYear()}
          </span>
        </small>
      </div>
    </footer>
  );
}

export default Footer;
