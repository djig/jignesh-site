import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SkipLink } from "@/components/SkipLink";
import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";

export default function HomePage() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main">
        <Hero />
        <Work />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
