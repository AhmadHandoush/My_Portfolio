import "./contact.css";
import Title from "../title";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <section className="contact w-full pb-5" id="contact">
      <Title title={"Contact me"} />
      <div className="w-full flex-center">
        <form className="flex column gap-5 w-9/10 lg:w-5/10" data-aos="zoom-in">
          <div className="flex column gap-1">
            <label className="text-white">Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full p-3"
            />
          </div>
          <div className="flex column gap-1">
            <label className="text-white">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email "
              className="w-full p-3"
            />
          </div>
          <div className="flex column gap-2">
            <label className="text-white"> Message</label>
            <textarea placeholder="Enter Your Message" className="p-3" />
          </div>
          <button
            type="submit"
            className="bg-secondary text-white p-3"
            disabled={true}
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
