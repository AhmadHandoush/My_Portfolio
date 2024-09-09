import Header from "../Header";

import "./hero.css";
import { useEffect, useState } from "react";

function Hero() {
  let text = "Hii! i'm ahmad handoush, full stack web developer.";
  let Tomorrow = "tomorrow's";

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => {
        const nextChar = text[index];
        if (nextChar !== undefined) {
          return prev + nextChar;
        }
        clearInterval(interval);
        return prev;
      });
      index++;
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero pt-5 relative" id="About">
      <div className="stars"></div>
      <div className="stars-right"></div>
      <Header />
      <div className=" info center flex column gap-3 w-9/10 lg:w-5/10 ">
        <h1 className="text-white text-2xl lg:text-6xl  font-bold ">
          Building{" "}
          <span className="text-secondary animated-text">
            {Tomorrow.split("").map((char, index) => (
              <span
                key={index}
                className="animated-letter"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {char}
              </span>
            ))}
          </span>{" "}
          tech today
        </h1>
        <h3 className="text-white text-2xl">{displayedText}</h3>
      </div>
    </section>
  );
}

export default Hero;
