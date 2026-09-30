// Last edited by you@example.com @ 30/09/26 16:14.
import About from "./Components/About";
import Contact from "./Components/Contact";
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
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
