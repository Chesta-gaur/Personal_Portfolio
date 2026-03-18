import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 150,
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
