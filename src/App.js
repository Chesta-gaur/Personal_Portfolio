import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
    </div>
  );
}
