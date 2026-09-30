// Last edited by you@example.com @ 30/09/26 22:58.
import About from "./Components/About";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import Skills from "./Components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
