"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const badges = [
  {
    title: "YARA & Sigma for SOC Analysts",
    image: "/badges/yara-sigma.png",
    description: "Criação e uso de YARA e Sigma rules para hunting de malware."
  },
  {
    title: "Windows Event Logs",
    image: "/badges/windows-logs.png",
    description: "Análise de logs do Windows para detecção de ataques."
  },
  {
    title: "SOC Analyst Path",
    image: "/badges/soc-analyst.png",
    description: "Formação prática focada em operações de segurança (SOC)."
  }
  // 👉 vamos colocar todas depois
];

export default function Badges() {
  return (
    <section id="badges" className="py-24 px-6">
      <h2 className="text-3xl font-semibold mb-10">
        🏆 Hack The Box Achievements
      </h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {badges.map((badge, index) => (
          <SwiperSlide key={index}>
            <div className="bg-zinc-950 border rounded-2xl p-6 h-full hover:-translate-y-2 transition">
              <img
                src={badge.image}
                alt={badge.title}
                className="rounded-xl mb-6"
              />

              <h3 className="text-lg font-semibold mb-2">
                {badge.title}
              </h3>

              <p className="text-sm text-gray-400">
                {badge.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
