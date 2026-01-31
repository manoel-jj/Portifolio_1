const projects = [
  {
    name: "Hashing-authentication",
    description:
      "Sistema de autenticação simples desenvolvido em Python que permite o registro e login de usuários com armazenamento seguro de senhas utilizando o algoritmo de hashing bcrypt .",
    tech: ["Python"],
    link: "https://github.com/manoel-jj/Hashing-authentication",
  },
  {
    name: "Port-scanner",
    description:
      "O Port Scanner é uma ferramenta desenvolvida em Python para escanear portas de um endereço IP ou hostname, verificando se estão abertas ou fechadas.",
    tech: ["TCP","Python"],
    link: "https://github.com/manoel-jj/port-scanner",
  },
];

export default function Projects() {
  return (
    <>
      <h2 className="text-3xl font-bold mb-10">Projetos</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-xl p-6 hover:scale-[1.02] transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              {project.name}
            </h3>

            <p className="text-gray-400 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 rounded-full bg-zinc-800"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Ver no GitHub →
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
