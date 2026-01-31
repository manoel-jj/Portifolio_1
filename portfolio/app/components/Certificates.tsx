"use client";

import { useState } from "react";
import Image from "next/image";

const certificates = [
  {
    title: "AWS Certified Cloud Practitioner",
    image: "/certificados/AWS_page-0001.jpg",
    desc: "Certificação que valida conhecimentos fundamentais em computação em nuvem, incluindo arquitetura AWS, segurança, IAM e conceitos de custos."
  },
  {
    title: "Google Cybersecurity Certificate",
    image: "/certificados/google_page-0001.jpg",
    desc: "Certificação do Google focada em fundamentos de cibersegurança, Python, Linux, SQL, SIEM, IDS, análise de riscos e resposta a incidentes."
  },
  {
    title: "CCNA: Introdução às Redes",
    image: "/certificados/CNA_page-0001.jpg",
    desc: "Fundamentos de redes de computadores, modelos OSI/TCP-IP, endereçamento IP, roteamento, switching e segurança básica."
  },
  {
    title: "Segurança de Endpoint",
    image: "/certificados/endpoint_page-0001.jpg",
    desc: "Proteção de endpoints, malware, hardening, prevenção, detecção e mitigação de ameaças."
  }
];

export default function Certificates() {
  const [activeCert, setActiveCert] = useState<null | typeof certificates[0]>(null);

  return (
    <section id="certificates" className="py-20">
      <h2 className="text-3xl font-bold mb-12">Certificações</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <button
            key={index}
            onClick={() => setActiveCert(cert)}
            className="text-left bg-zinc-900 rounded-xl p-6 hover:-translate-y-1 transition focus:outline-none"
          >
            <div className="relative w-full h-40 mb-4">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-contain rounded-lg"
              />
            </div>

            <h3 className="text-lg font-semibold mb-2">
              {cert.title}
            </h3>

            <p className="text-sm text-gray-400">
              {cert.desc}
            </p>
          </button>
        ))}
      </div>

      {/* MODAL */}
      {activeCert && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-zinc-900 rounded-xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveCert(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
            >
              ✕
            </button>

            <h3 className="text-xl font-semibold mb-4">
              {activeCert.title}
            </h3>

            <div className="relative w-full h-[70vh]">
              <Image
                src={activeCert.image}
                alt={activeCert.title}
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
