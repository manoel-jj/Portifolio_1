import Hero from "./components/Hero";
import BadgesCarousel from "./components/BadgesCarousel";
import LabsHTB from "./components/LabsHTB";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Contato from "./components/Contato";

const SECTION_CLASS = "py-8 px-6 max-w-7xl mx-auto";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* HERO */}
      <Hero />

      {/* BADGES */}
      <section id="badges" className="py-10 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-3">
          Hack The Box Badges
        </h2>
        <p className="text-muted-foreground mb-5 max-w-3xl">
          Conquistas obtidas na Hack The Box Academy, com foco em SOC,
          análise de logs e segurança defensiva.
        </p>
        <BadgesCarousel />
      </section>

      {/* PROJETOS */}
      <section id="projects" className={SECTION_CLASS}>
        <Projects />
      </section>

      {/* FORMAÇÃO */}
      <section id="education" className={SECTION_CLASS}>
        <Education />
      </section>

      {/* CERTIFICAÇÕES */}
      <section id="certificates" className={SECTION_CLASS}>
        <Certificates />
      </section>

      {/* LABS HTB */}
      <section id="labs" className={SECTION_CLASS}>
        <LabsHTB />
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-10 px-6 max-w-7xl mx-auto">
        <Contato />
      </section>

    </main>
  );
}
