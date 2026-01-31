import Image from "next/image";

const badges = [
    {
      link: "https://academy.hackthebox.com/achievement/badge/d12bc0c1-9718-11f0-9254-bea50ffe6cb4",
      image: "/badges/1.webp",
      title: "Hack The Box Academy",
      desc: "Conquista obtida através de labs práticos focados em fundamentos de segurança e análise inicial de ataques."
    },
    {
      link: "https://academy.hackthebox.com/achievement/badge/092c6e67-c0a0-11f0-9254-bea50ffe6cb4",
      image: "/badges/2.webp",
      title: "Hack The Box Academy",
      desc: "Estudos práticos em análise de tráfego, identificação de comportamentos suspeitos e segurança em redes."
    },
    {
      link: "https://academy.hackthebox.com/achievement/badge/8b56b288-ae75-11f0-9254-bea50ffe6cb4",
      image: "/badges/3.webp",
      title: "Hack The Box Academy",
      desc: "Labs voltados para fundamentos de Blue Team, monitoramento e resposta a incidentes."
    },
    {
      link: "https://academy.hackthebox.com/achievement/badge/93485fc0-5e5c-11f0-bcfd-bea50ffe6cb4",
      image: "/badges/4.webp",
      title: "Hack The Box Academy",
      desc: "Análise prática de logs Windows e Linux para detecção de atividades maliciosas."
    },
    {
      link: "https://academy.hackthebox.com/achievement/badge/57c236d8-529d-11f0-bcfd-bea50ffe6cb4",
      image: "/badges/5.webp",
      title: "Hack The Box Academy",
      desc: "Conceitos aplicados de detecção de brute force e acessos não autorizados."
    },
    {
      link: "https://academy.hackthebox.com/achievement/badge/f151d7fa-318e-11f0-bcfd-bea50ffe6cb4",
      image: "/badges/6.webp",
      title: "Hack The Box Academy",
      desc: "Triagem de alertas e investigação de eventos em ambiente SOC."
    },
    {
      link: "https://academy.hackthebox.com/achievement/badge/1cd26d7f-3bc8-11f0-bcfd-bea50ffe6cb4",
      image: "/badges/7.webp",
      title: "Hack The Box Academy",
      desc: "Aplicação de boas práticas de resposta a incidentes e análise de impacto."
    },
    {
      link: "https://academy.hackthebox.com/achievement/badge/c5a97c68-4494-11f0-bcfd-bea50ffe6cb4",
      image: "/badges/8.webp",
      title: "Hack The Box Academy",
      desc: "Fundamentos de segurança ofensiva e defensiva aplicados em laboratório."
    },
    {
      link: "https://academy.hackthebox.com/achievement/badge/77bb6203-4143-11f0-bcfd-bea50ffe6cb4",
      image: "/badges/9.webp",
      title: "Hack The Box Academy",
      desc: "Análise de eventos suspeitos e correlação de logs para detecção de ameaças."
    },
    {
      link: "https://academy.hackthebox.com/achievement/badge/6da12ef0-4c4c-11f0-bcfd-bea50ffe6cb4",
      image: "/badges/10.webp",
      title: "Hack The Box Academy",
      desc: "Monitoramento contínuo e identificação de padrões anômalos em sistemas."
    },
    {
      link: "https://academy.hackthebox.com/achievement/badge/9c4022f8-72be-11f0-b52a-bea50ffe6cb4",
      image: "/badges/11.webp",
      title: "Hack The Box Academy",
      desc: "Estudos práticos focados em fundamentos de SIEM e análise de alertas."
    },
    {
      link: "https://academy.hackthebox.com/achievement/badge/f9c04eb9-b598-11f0-9254-bea50ffe6cb4",
      image: "/badges/12.webp",
      title: "Hack The Box Academy",
      desc: "Aplicação prática de conceitos de Threat Detection e investigação." 
    },
    {
      link: "https://academy.hackthebox.com/achievement/badge/90b655a3-63e2-11f0-bcfd-bea50ffe6cb4",
      image: "/badges/13.webp",
      title: "Hack The Box Academy",
      desc: "Análise de incidentes e entendimento do ciclo de ataque."
    },
    {
      link: "https://academy.hackthebox.com/achievement/badge/73ad33d4-311e-11f0-bcfd-bea50ffe6cb4",
      image: "/badges/14.webp",
      title: "Hack The Box Academy",
      desc: "Estudos aplicados em segurança defensiva e investigação de eventos."
    },
    {
      link: "https://academy.hackthebox.com/achievement/badge/77275ec7-407d-11f0-bcfd-bea50ffe6cb4",
      image: "/badges/15.webp",
      title: "Hack The Box Academy",
      desc: "Prática contínua em ambientes controlados de segurança ofensiva e defensiva."
    },
    {
      link: "https://academy.hackthebox.com/achievement/badge/d5c030b4-708f-11f0-bcfd-bea50ffe6cb4",
      image: "/badges/16.webp",
      title: "Hack The Box Academy",
      desc: "Consolidação de conhecimentos em SOC, monitoramento e resposta a incidentes."
    }
  ];

const loopBadges = [...badges, ...badges];

export default function BadgesCarousel() {
  return (
    <section id="badges" className="overflow-hidden">
      <div className="relative">
        <div className="flex gap-6 w-max animate-carousel hover:[animation-play-state:paused]">

          {loopBadges.map((badge, index) => (
            <div
              key={index}
              className="min-w-[280px] bg-zinc-900 rounded-xl p-6"
            >
              <div className="relative w-full h-40 mb-4">
                <Image
                  src={badge.image}
                  alt={badge.title}
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {badge.title}
              </h3>

              <p className="text-sm text-gray-400">
                {badge.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
