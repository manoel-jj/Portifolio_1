import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between px-6 max-w-7xl mx-auto gap-12">
      
      {/* Conteúdo (ESQUERDA) */}
      <div className="flex-1">
        <span className="text-sm uppercase tracking-widest text-gray-400">
          Portfólio
        </span>

        <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
          Manoel Jailton <br />
          <span className="text-blue-500">Cybersecurity & SOC Analyst</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-400">
          Profissional de TI com foco em Cibersegurança, SOC Analyst e Defesa
          Cibernética. Experiência prática com Hack The Box, projetos reais de
          redes, segurança e análise de logs.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition"
          >
            Ver Projetos
          </a>

          <a
            href="#badges"
            className="px-6 py-3 rounded-lg border border-gray-600 hover:border-white transition"
          >
            Conquistas HTB
          </a>
          {/*  BOTÃO CONTATO */}
          <a
            href="#contato"
            className="px-6 py-3 rounded-lg bg-green-500 text-black font-medium hover:bg-green-600 transition"
          >
            Entrar em Contato
          </a>
        </div>
      </div>

      {/* Imagem (DIREITA) */}
      <div className="flex-1 flex justify-center md:justify-end">
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          
          {/* Anel externo */}
          <div className="absolute inset-0 rounded-full border-2 border-blue-500/50" />

          {/* Foto */}
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <Image
              src="/profile.png"
              alt="Manoel Jailton"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

    </section>
  );
}
