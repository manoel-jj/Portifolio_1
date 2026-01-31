import Hero from "./components/Hero";
import BadgesCarousel from "./components/BadgesCarousel";
import LabsHTB from "./components/LabsHTB";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certificates from "./components/Certificates";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* HERO / INTRO */}
      <Hero />

      {/* BADGES – HACK THE BOX */}
      <section id="badges" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          Hack The Box • Badges
        </h2>

        <p className="text-muted-foreground mb-8 max-w-3xl">
          Conquistas obtidas na Hack The Box Academy, demonstrando habilidades
          práticas em cibersegurança, SOC, análise de logs, detecção de ataques
          e fundamentos defensivos.
        </p>

        <BadgesCarousel />
      </section>

      {/* LABS & INVESTIGAÇÕES (SHERLOCK) */}
      <LabsHTB />

      {/* PROJETOS */}
      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
        <Projects />
      </section>

      {/* FORMAÇÃO ACADÊMICA */}
      <section id="education" className="py-20 px-6 max-w-7xl mx-auto">
        <Education />
      </section>

      {/* CERTIFICAÇÕES */}
      <section id="certificates" className="py-20 px-6 max-w-7xl mx-auto">
        <Certificates />
      </section>

    </main>
  );
}
