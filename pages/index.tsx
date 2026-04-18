import type { NextPage } from "next";
import { NextSeo } from "next-seo";

import Hero from "@/components/Home/Hero";
import Experience from "@/components/Home/Experience";
import Projects from "@/components/Home/Projects";
import Skills from "@/components/Home/Skills";
import Education from "@/components/Home/Education";
import Contact from "@/components/Home/Contact";

const HomePage: NextPage = () => {
  return (
    <>
      <NextSeo title="Saketh Kilaru" titleTemplate="Saketh Kilaru" />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </>
  );
};

export default HomePage;
