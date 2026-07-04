import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "./HeroSection";
import Experiences from "./Experiences";
import Skills from "./Skills";
import Projects from "./Projects";
import AboutUs from "./AboutUs";
import Contact from "./Contact";

export default function Index() {
  return (
    <div className="w-full bg-[#0A0A0A] text-white overflow-x-hidden">
      <Navbar />
      
      {/* HERO SECTION */}
      <section id="hero" className="w-screen min-h-screen">
        <HeroSection />
      </section>

      {/* EXPERIENCES SECTION */}
      <section id="experiences" className="w-full">
        <Experiences />
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="w-full">
        <Skills />
      </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="w-full">
            <Projects />
        </section>

      {/* ABOUT SECTION */}
      <section id="about" className="w-full">
        <AboutUs />
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="w-full">
        <Contact />
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
