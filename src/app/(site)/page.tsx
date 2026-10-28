import About from "@/components/Portfolio/About";
import Contact from "@/components/Portfolio/Contact";
import Education from "@/components/Portfolio/Education";
import Experience from "@/components/Portfolio/Experience";
import Hero from "@/components/Portfolio/Hero";
import Projects from "@/components/Portfolio/Projects";
import Skills from "@/components/Portfolio/Skills";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Name - Army Medic turned Software Developer",
  description:
    "Portfolio of Your Name, an Army combat medic turned software developer.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}
