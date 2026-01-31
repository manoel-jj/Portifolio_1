export default function LabsHTB() {
  const sherlocks = [
    {
      title: "Sherlock – Confluence SSH Brute Force",
      level: "Very Easy",
      htbLink: "https://labs.hackthebox.com/achievement/sherlock/2385747/631",
      cover: "/Labs/brutus.png",
      desc: `
Investigação forense baseada em logs Unix (auth.log e wtmp) em um servidor
Confluence comprometido via brute force em SSH. A análise envolveu identificação
do ataque, rastreamento de acessos não autorizados, verificação de escalonamento
de privilégios, persistência e indícios de execução de comandos após o acesso inicial.
      `,
      skills: [
        "Log Analysis",
        "SSH Brute Force",
        "Linux",
        "auth.log",
        "wtmp",
        "Incident Investigation",
        "SOC Analysis"
      ]
    },
    {
      title: "Sherlock – Phishing & Malware Delivery",
      level: "Very Easy",
      htbLink: "https://labs.hackthebox.com/achievement/sherlock/2385747/985",
      cover: "/Labs/phish.png",
      desc: `
Análise de um incidente de phishing direcionado a um time financeiro, envolvendo
um e-mail aparentemente legítimo com link suspeito e anexo .zip contendo malware.
Foram analisados os headers do e-mail para identificar o vetor de ataque, origem,
técnicas de engenharia social e o método de entrega do payload malicioso.
      `,
      skills: [
        "Email Header Analysis",
        "Phishing",
        "Malware Delivery",
        "Threat Analysis",
        "SOC Investigation",
        "Blue Team"
      ]
    }
  ];

  return (
    <section id="labs" className="py-20 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-12">
        Labs & Investigações — Hack The Box (Sherlock)
      </h2>

      <div className="space-y-8">
        {sherlocks.map((lab, index) => (
          <div
            key={index}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:bg-zinc-800 transition"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div className="flex items-center gap-3">
                <img
                  src={lab.cover}
                  alt="Hack The Box Sherlock"
                  className="w-8 h-8 rounded-md opacity-80"
                />

                <h3 className="text-xl font-semibold">
                  {lab.title}
                </h3>
              </div>

              <span className="text-sm text-green-400 mt-2 md:mt-0">
                Difficulty: {lab.level}
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              {lab.desc}
            </p>

            <div className="mt-4">
              <a
                href={lab.htbLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-green-400 hover:underline"
              >
                View on Hack The Box →
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {lab.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full bg-black border border-zinc-700 text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
