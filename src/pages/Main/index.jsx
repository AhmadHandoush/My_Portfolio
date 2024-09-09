import About from "../../components/About";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Projects from "../../components/Projects";
import "./main.css";

function Main() {
  return (
    <main className="main bg-primary relative">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default Main;
