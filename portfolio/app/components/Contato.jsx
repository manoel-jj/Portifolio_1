export default function Contato() {
  return (
    <section id="contato" className="py-0 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-6">
        Entre em Contato
      </h2>

      <p className="text-gray-400 max-w-2xl mb-10">
        Quer falar sobre oportunidades, projetos ou networking?
        Preencha o formulário abaixo e retornarei assim que possível.
      </p>

      <form
        action="https://formspree.io/f/xykprvld"
        method="POST"
        className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 max-w-2xl space-y-6"
      >
        {/* Honeypot anti-bot (OWASP) */}
        <input
          type="text"
          name="_gotcha"
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
        />

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            maxLength={100}
            className="w-full rounded-lg bg-black border border-zinc-700 px-4 py-3 text-sm focus:outline-none focus:border-green-400"
            placeholder="email@exemplo.com"
          />
        </div>

        {/* Telefone */}
        <div>
          <label htmlFor="telefone" className="block text-sm mb-2">
            Telefone / WhatsApp
          </label>
          <input
            id="telefone"
            type="tel"
            name="telefone"
            maxLength={20}
            className="w-full rounded-lg bg-black border border-zinc-700 px-4 py-3 text-sm focus:outline-none focus:border-green-400"
            placeholder="(00) 90000-0000"
          />
        </div>

        {/* Mensagem */}
        <div>
          <label htmlFor="message" className="block text-sm mb-2">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            maxLength={500}
            className="w-full rounded-lg bg-black border border-zinc-700 px-4 py-3 text-sm focus:outline-none focus:border-green-400 resize-none"
            placeholder="Escreva sua mensagem..."
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-lg transition"
        >
          Enviar contato
        </button>

        {/* Mensagem neutra (anti-enumeração) */}
        <p className="text-xs text-gray-500 mt-2">
          
        </p>
      </form>
    </section>
  );
}
