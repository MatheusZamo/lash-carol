"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, CalendarHeart, EyeClosed, Clock } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [floatingEleents, setFloatingElements] = useState<
    Array<{ id: number; x: number; y: number; delay: number }>
  >([]);
  console.log(floatingEleents);
  useEffect(() => {
    setIsVisible(true);

    // Gerar elementos flutuantes
    const elements = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setFloatingElements(elements);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const benefits = [
    "Resultado Natural",
    "Certificado Internacional",
    "Técnicas Avançadas",
    "Produtos Premium",
  ];

  return (
    <>
      <style>{`
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .hero-gradient-bg {
          animation: gradient-x 8s ease infinite;
        }
        .hero-float {
          animation: float 3s ease-in-out infinite;
        }
        .hero-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>

      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20"
      >
        {/* Background com gradiente animado */}
        <div className="hero-gradient-bg absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-100 to-rose-100"></div>

        <div className="relative z-10 container mx-auto max-w-7xl">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Lado esquerdo - Conteúdo */}
            <div
              className={`space-y-6 text-center transition-all duration-1000 lg:space-y-8 lg:text-left ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              {/* Badge de destaque */}
              <div className="inline-flex items-center space-x-2 rounded-full bg-rose-100 px-3 py-2 text-xs font-medium text-rose-700 lg:px-4 lg:py-1 lg:text-sm">
                <CheckCircle className="h-3 w-3 lg:h-4 lg:w-4" />
                <span>Profissional Certificada</span>
              </div>

              {/* Título principal */}
              <div>
                <h1 className="mb-4 bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-3xl leading-tight font-bold text-transparent sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  Cílios dos
                  <span className="block bg-gradient-to-r from-rose-500 to-pink-400 bg-clip-text text-transparent">
                    Seus Sonhos
                  </span>
                </h1>
              </div>

              {/* Descrição */}
              <p className="mx-auto max-w-lg text-base leading-relaxed text-rose-500 sm:text-lg lg:mx-0 lg:text-xl">
                Transforme seu olhar com técnicas profissionais de extensão de
                cílios. Realce sua beleza natural com resultados incríveis e
                duradouros.
              </p>

              {/* Lista de benefícios */}
              <div className="mx-auto grid max-w-md grid-cols-1 gap-3 sm:grid-cols-2 lg:mx-0 lg:gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="hero-fade-in flex items-center space-x-3"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="h-2 w-2 flex-shrink-0 rounded-full bg-rose-500"></div>
                    <span className="text-sm font-medium text-rose-700 lg:text-base">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* Botões de ação */}
              <div className="flex flex-col justify-center gap-3 sm:flex-row lg:justify-start lg:gap-4">
                <Button
                  size="lg"
                  className="w-full transform cursor-pointer bg-rose-500 px-6 py-3 text-base text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-rose-600 sm:w-auto lg:px-8 lg:py-4 lg:text-lg"
                  onClick={() => scrollToSection("contato")}
                >
                  <CalendarHeart className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                  Agendar
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full transform cursor-pointer border-rose-500 bg-white/80 px-6 py-3 text-base text-rose-600 transition-all duration-300 hover:scale-105 hover:bg-rose-50 sm:w-auto lg:px-8 lg:py-4 lg:text-lg"
                  onClick={() => scrollToSection("servicos")}
                >
                  <EyeClosed className="mr-2 h-4 w-4 lg:h-7 lg:w-7" />
                  Técnicas
                </Button>
              </div>
            </div>

            {/* Lado direito - Foto e cards */}
            <div
              className={`relative order-first transition-all delay-300 duration-1000 lg:order-last ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              {/* Container principal da foto */}
              <div className="relative flex justify-center">
                {/* Foto da profissional */}
                <div className="relative h-80 w-64 overflow-hidden rounded-3xl bg-gradient-to-br from-rose-300 to-pink-300 shadow-2xl sm:h-96 sm:w-72 lg:h-96 lg:w-80">
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-rose-200 to-pink-200">
                    <div className="text-6xl text-rose-600 sm:text-7xl lg:text-8xl">
                      <Image
                        src="/test.jpg"
                        alt="foto perfil"
                        width={400}
                        height={400}
                      />
                    </div>
                  </div>
                </div>

                {/* Card flutuante - Experiência */}
                <Card className="hero-float absolute top-12 -left-2 border-rose-200 bg-white/90 shadow-lg backdrop-blur-sm sm:top-16 sm:-left-6 lg:-left-8">
                  <CardContent className="p-3 lg:p-4">
                    <div className="text-xl font-bold text-rose-600 lg:text-2xl">
                      3+
                    </div>
                    <div className="text-xs whitespace-nowrap text-rose-700 lg:text-sm">
                      Anos de Experiência
                    </div>
                  </CardContent>
                </Card>

                {/* Card flutuante - Clientes */}
                <Card
                  className="hero-float absolute -right-2 bottom-12 border-rose-200 bg-white/90 shadow-lg backdrop-blur-sm sm:-right-8 sm:bottom-16 lg:-right-5"
                  style={{ animationDelay: "1s" }}
                >
                  <CardContent className="p-3 lg:p-4">
                    <div className="text-xl font-bold text-rose-600 lg:text-2xl">
                      250+
                    </div>
                    <div className="text-xs whitespace-nowrap text-rose-700 lg:text-sm">
                      Clientes Felizes
                    </div>
                  </CardContent>
                </Card>

                {/* Card flutuante */}
                <Card
                  className="hero-float absolute bottom-2 -left-2 border-rose-200 bg-white/90 shadow-lg backdrop-blur-sm sm:bottom-4 sm:-left-4"
                  style={{ animationDelay: "0.5s" }}
                >
                  <CardContent className="flex items-center space-x-2 p-3 lg:p-4">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-rose-500 to-pink-500 lg:h-8 lg:w-8">
                      <Clock className="h-3 w-3 text-white lg:h-4 lg:w-4" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-rose-700 lg:text-sm">
                        Retenção 30+
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
