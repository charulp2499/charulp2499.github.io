import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Publications from "@/components/sections/Publications";
import Leadership from "@/components/sections/Leadership";
import Thoughts from "@/components/sections/Thoughts";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Publications />
        <Leadership />
        <Thoughts />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
