export default function Education() {
  return (
    <section id="education" className="py-0">
      <h2 className="text-3xl font-bold mb-12">Formação Acadêmica</h2>

      <div className="space-y-6">

        {/* Graduação */}
        <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
          <h3 className="text-lg font-semibold">
            Bacharelado em Sistemas de Informação
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            Estácio de Sá — <span className="text-green-400">em andamento (≈ 60% concluído)</span>
          </p>

          <p className="mt-3 text-gray-400">
            Formação voltada para desenvolvimento de sistemas, fundamentos de
            tecnologia da informação, banco de dados, redes de computadores,
            engenharia de software e segurança da informação.
          </p>
        </div>

        {/* Pós-graduações */}
        <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
          <h3 className="text-lg font-semibold">
            Pós-graduação em Segurança da Informação
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            <span className="text-blue-400">Concluída</span>
          </p>

          <p className="mt-3 text-gray-400">
            Ênfase em segurança defensiva, gestão de riscos, políticas de
            segurança, análise de ameaças, controles de proteção e fundamentos
            de resposta a incidentes.
          </p>
        </div>

        <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
          <h3 className="text-lg font-semibold">
            Pós-graduação em Gestão de Tecnologia da Informação
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            <span className="text-blue-400">Concluída</span>
          </p>

          <p className="mt-3 text-gray-400">
            Foco em governança de TI, gestão de serviços, alinhamento estratégico
            de tecnologia ao negócio, processos, compliance e tomada de decisão
            em ambientes corporativos.
          </p>
        </div>

      </div>
    </section>
  );
}
