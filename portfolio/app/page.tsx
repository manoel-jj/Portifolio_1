// Estrutura base de portfólio em Next.js (React)
// Stack: Next.js + React + Tailwind CSS
// Pronto para personalização

// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Education />
      <Contact />
    </main>
  )
}

function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl font-bold">Manoel Jailton</h1>
      <p className="mt-4 text-xl text-gray-400">Cybersecurity | SOC Analyst | TI</p>
      <div className="mt-6 flex gap-4">
        <a href="#projects" className="px-6 py-3 bg-white text-black rounded-xl">Projetos</a>
        <a href="/cv.pdf" className="px-6 py-3 border rounded-xl">Download CV</a>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Sobre mim</h2>
      <p className="text-gray-400">
        Profissional em transição para a área de Cibersegurança, com foco em SOC Analyst,
        experiência prática em Hack The Box, redes, SIEM, análise de logs e projetos documentados.
      </p>
    </section>
  )
}

function Skills() {
  const skills = ['Linux', 'Redes', 'pfSense', 'SIEM', 'YARA', 'Sigma', 'Python', 'Git', 'SOC'];

  return (
    <section className="py-24 px-6 bg-zinc-900">
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map(skill => (
          <span key={skill} className="px-4 py-2 bg-black rounded-xl border">{skill}</span>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Projetos & Labs</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <ProjectCard title="Hack The Box – SOC Analyst Path" tech="SIEM, Logs, Blue Team" desc="Labs práticos focados em análise de logs, detecção de ataques, triagem de alertas e resposta a incidentes." />
        <ProjectCard title="YARA & Sigma Rules" tech="Threat Hunting" desc="Criação de regras YARA e Sigma para detecção de malware e conversão para SIEM." />
        <ProjectCard title="Rede Corporativa com pfSense" tech="Firewall, VLAN, Network" desc="Projeto de rede segmentada com múltiplas interfaces, firewall, DMZ e documentação para portfólio." />
        <ProjectCard title="Projetos no GitHub" tech="Python, Linux, Automação" desc="Scripts, automações e estudos práticos voltados para segurança e suporte em TI." />
      </div>
    </section>
  )
}

function ProjectCard({ title, tech, desc }: { title: string; tech: string; desc: string }) {
  return (
    <div className="p-6 border rounded-2xl hover:bg-zinc-900 transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-400 mt-1">{tech}</p>
      <p className="text-gray-300 mt-3">{desc}</p>
    </div>
  )
}

function Achievements() {
  const badges = [
    {
      link: "https://academy.hackthebox.com/achievement/badge/d12bc0c1-9718-11f0-9254-bea50ffe6cb4",
      image: "/badges/1.webp",
      title: "Hack The Box Academy",
      desc: "Conquista obtida através de labs práticos focados em fundamentos de segurança e análise inicial de ataques."
    },
    {
      link: "https://academy.hackthebox.com/achievement/badge/092c6e67-c0a0-11f0-9254-bea50ffe6cb4",
      image: "/badges/badge-02.png",
      title: "Hack The Box Academy",
      desc: "Estudos práticos em análise de tráfego, identificação de comportamentos suspeitos e segurança em redes."
    },
    {
      link: "https://academy.hackthebox.com/achievement/badge/8b56b288-ae75-11f0-9254-bea50ffe6cb4",
      image: "/badges/badge-03.png",
      title: "Hack The Box Academy",
      desc: "Labs voltados para fundamentos de Blue Team, monitoramento e resposta a incidentes."
    },
    {
      link: "https://academy.hackthebox.com/achievement/badge/93485fc0-5e5c-11f0-bcfd-bea50ffe6cb4",
      image: "/badges/badge-04.png",
      title: "Hack The Box Academy",
      desc: "Análise prática de logs Windows e Linux para detecção de atividades maliciosas."
    },
    {
      link: "https://academy.hackthebox.com/achievement/badge/57c236d8-529d-11f0-bcfd-bea50ffe6cb4",
      image: "/badges/badge-05.png",
      title: "Hack The Box Academy",
      desc: "Conceitos aplicados de detecção de brute force e acessos não autorizados."
    },
    {
      link: "https://academy.hackthebox.com/achievement/badge/f151d7fa-318e-11f0-bcfd-bea50ffe6cb4",
      image: "/badges/badge-06.png",
      title: "Hack The Box Academy",
      desc: "Triagem de alertas e investigação de eventos em ambiente SOC."
    },
    {
      link: "https://academy.hackthebox.com/achievement/badge/1cd26d7f-3bc8-11f0-bcfd-bea50ffe6cb4",
      image: "/badges/badge-07.png",
      title: "Hack The Box Academy",
      desc: "Aplicação de boas práticas de resposta a incidentes e análise de impacto."
    },
    {
      link: "https://academy.hackthebox.com/achievement/badge/c5a97c68-4494-11f0-bcfd-bea50ffe6cb4",
      image: "/badges/badge-08.png",
      title: "Hack The Box Academy",
      desc: "Fundamentos de segurança ofensiva e defensiva aplicados em laboratório."
    },
    {
      link: "https://academy.hackthebox.com/achievement/badge/77bb6203-4143-11f0-bcfd-bea50ffe6cb4",
      image: "/badges/badge-09.png",
      title: "Hack The Box Academy",
      desc: "Análise de eventos suspeitos e correlação de logs para detecção de ameaças."
    },
    {
      link: "https://academy.hackthebox.com/achievement/badge/6da12ef0-4c4c-11f0-bcfd-bea50ffe6cb4",
      image: "/badges/badge-10.png",
      title: "Hack The Box Academy",
      desc: "Monitoramento contínuo e identificação de padrões anômalos em sistemas."
    },
    {
      link: "https://academy.hackthebox.com/achievement/badge/9c4022f8-72be-11f0-b52a-bea50ffe6cb4",
      image: "/badges/badge-11.png",
      title: "Hack The Box Academy",
      desc: "Estudos práticos focados em fundamentos de SIEM e análise de alertas."
    },
    {
      link: "https://academy.hackthebox.com/achievement/badge/f9c04eb9-b598-11f0-9254-bea50ffe6cb4",
      image: "/badges/badge-12.png",
      title: "Hack The Box Academy",
      desc: "Aplicação prática de conceitos de Threat Detection e investigação." 
    },
    {
      link: "https://academy.hackthebox.com/achievement/badge/90b655a3-63e2-11f0-bcfd-bea50ffe6cb4",
      image: "/badges/badge-13.png",
      title: "Hack The Box Academy",
      desc: "Análise de incidentes e entendimento do ciclo de ataque."
    },
    {
      link: "https://academy.hackthebox.com/achievement/badge/73ad33d4-311e-11f0-bcfd-bea50ffe6cb4",
      image: "/badges/badge-14.png",
      title: "Hack The Box Academy",
      desc: "Estudos aplicados em segurança defensiva e investigação de eventos."
    },
    {
      link: "https://academy.hackthebox.com/achievement/badge/77275ec7-407d-11f0-bcfd-bea50ffe6cb4",
      image: "/badges/badge-15.png",
      title: "Hack The Box Academy",
      desc: "Prática contínua em ambientes controlados de segurança ofensiva e defensiva."
    },
    {
      link: "https://academy.hackthebox.com/achievement/badge/d5c030b4-708f-11f0-bcfd-bea50ffe6cb4",
      image: "/badges/badge-16.png",
      title: "Hack The Box Academy",
      desc: "Consolidação de conhecimentos em SOC, monitoramento e resposta a incidentes."
    }
  ];

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Badges & Achievements</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {badges.map((badge, index) => (
          <a
            key={index}
            href={badge.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group border rounded-2xl p-6 bg-zinc-950 hover:bg-zinc-900 transition"
          >
            <img
              src={badge.image}
              alt="Hack The Box Badge"
              className="w-32 mx-auto group-hover:scale-105 transition"
            />

            <h3 className="mt-6 text-lg font-semibold text-center">
              {badge.title}
            </h3>

            <p className="mt-3 text-sm text-gray-400 text-center">
              {badge.desc}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Formação & Certificações</h2>
      <ul className="space-y-4 text-gray-300">
        <li>🎓 Graduação em Tecnologia da Informação (em andamento)</li>
        <li>📜 CCNA – Cisco Certified Network Associate</li>
        <li>🛡️ Hack The Box Academy – SOC Analyst, Blue Team, YARA & Sigma</li>
        <li>📚 Estudos contínuos em Cibersegurança e Redes</li>
      </ul>
    </section>
  )
}

function Contact() {
  return (
    <section className="py-24 px-6 text-center bg-zinc-900">
      <h2 className="text-3xl font-bold">Vamos conversar?</h2>
      <p className="text-gray-400 mt-4">Aberto a oportunidades em TI e Cibersegurança</p>
      <div className="mt-6 flex justify-center gap-6">
        <a href="https://github.com/" target="_blank">GitHub</a>
        <a href="https://linkedin.com/" target="_blank">LinkedIn</a>
        <a href="mailto:seuemail@email.com">Email</a>
      </div>
    </section>
  )
}
