"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Star } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Conteúdo do texto - lado esquerdo */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="mb-6 flex justify-center lg:justify-start">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-6 w-6 animate-pulse fill-current text-rose-400"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>

            <h1 className="mb-6 text-center text-4xl leading-tight font-bold text-rose-800 md:text-6xl lg:text-left lg:text-7xl">
              Realce sua
              <span className="block animate-pulse text-rose-400">
                Beleza Natural
              </span>
            </h1>

            <p className="mb-8 max-w-2xl text-center text-lg text-rose-400 md:text-xl lg:text-left">
              Extensão de cílios profissional que valoriza seu olhar e destaca
              sua personalidade única
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Button
                size="lg"
                className="transform bg-rose-400 px-8 py-3 text-lg text-white transition-all duration-300 hover:scale-105 hover:bg-rose-600"
                onClick={scrollToContact}
              >
                Agendar Consulta
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="transform border-rose-500 bg-transparent px-8 py-3 text-lg text-rose-600 transition-all duration-300 hover:scale-105 hover:bg-rose-50"
                onClick={() =>
                  document
                    .getElementById("servicos")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Ver Serviços
              </Button>
            </div>
          </div>

          {/* Foto da profissional - lado direito */}
          <div
            className={`transition-all delay-300 duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="relative">
              {/* Elementos decorativos de fundo */}
              <div className="absolute inset-0 rotate-6 transform rounded-full bg-gradient-to-br from-rose-200 to-pink-200"></div>
              <div className="absolute inset-2 -rotate-3 transform rounded-full bg-gradient-to-br from-rose-100 to-pink-100"></div>

              {/* Container da foto */}
              <div className="relative mx-auto flex h-80 w-80 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-rose-300 to-pink-300 lg:h-96 lg:w-96">
                {/* Placeholder para a foto da profissional */}
                <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-rose-200 to-pink-200">
                  <div className="text-8xl text-rose-600">
                    {" "}
                    <Image
                      src="/carol.png"
                      alt="carol"
                      width={300}
                      height={300}
                    />
                  </div>
                </div>
              </div>

              {/* Elementos decorativos flutuantes */}
              <div className="absolute top-10 -left-4 animate-bounce">
                <Sparkles className="h-6 w-6 text-rose-400" />
              </div>
              <div className="absolute -right-4 bottom-10 animate-pulse">
                <Sparkles className="h-8 w-8 text-pink-400" />
              </div>
              <div
                className="absolute top-1/2 -left-8 animate-bounce"
                style={{ animationDelay: "1s" }}
              >
                <Sparkles className="h-5 w-5 text-rose-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
