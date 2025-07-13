"use client";

import { useEffect, useState, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: isMobile ? 0.1 : 0.3, // Threshold menor no mobile
        rootMargin: isMobile ? "0px 0px -10% 0px" : "0px", // Margem adicional no mobile
      },
    );

    const element = document.getElementById("servicos");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [isMobile]);

  const handleAgendarClick = useCallback(() => {
    const contatoElement = document.getElementById("contato");
    if (contatoElement) {
      // Timeout para evitar problemas de performance
      setTimeout(() => {
        contatoElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, []);

  const services = [
    {
      title: "Extensão Clássica",
      description:
        "Técnica tradicional que adiciona um fio sintético para cada cílio natural, criando um look elegante.",
      price: "R$ 120",
      duration: "2h",
      features: [
        "Efeito natural",
        "Duração 3-4 semanas",
        "Ideal para iniciantes",
      ],
      popular: false,
    },
    {
      title: "Volume Russo",
      description:
        "Técnica avançada que utiliza múltiplos fios ultrafinos para criar volume e densidade incríveis.",
      price: "R$ 180",
      duration: "2h30",
      features: ["Volume intenso", "Duração 4-5 semanas", "Efeito glamouroso"],
      popular: true,
    },
    {
      title: "Híbrido",
      description:
        "Combinação perfeita entre clássico e volume, oferecendo naturalidade com um toque de glamour.",
      price: "R$ 150",
      duration: "2h15",
      features: ["Melhor dos dois mundos", "Duração 3-4 semanas", "Versátil"],
      popular: false,
    },
    {
      title: "Mega Volume",
      description:
        "Para quem deseja o máximo em volume e drama. Técnica premium para ocasiões especiais.",
      price: "R$ 220",
      duration: "3h",
      features: ["Volume extremo", "Duração 4-6 semanas", "Efeito dramático"],
      popular: false,
    },
    {
      title: "Lifting de Cílios",
      description:
        "Curvatura natural dos seus próprios cílios com tinta, realçando o olhar sem extensões.",
      price: "R$ 80",
      duration: "1h30",
      features: ["Cílios naturais", "Duração 6-8 semanas", "Baixa manutenção"],
      popular: false,
    },
  ];

  return (
    <section
      id="servicos"
      className="bg-gradient-to-br from-rose-50 to-pink-50 py-20"
    >
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-rose-800 md:text-5xl">
              Meus Serviços
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-rose-700">
              Ofereço uma variedade de técnicas de extensão de cílios para
              atender todos os estilos e preferências. Cada serviço é
              personalizado para você.
            </p>
          </div>

          {/* Layout com 3 primeiros cards e 2 últimos centralizados */}
          <div className="space-y-6">
            {/* Primeira linha: 3 cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.slice(0, 3).map((service, index) => (
                <Card
                  key={index}
                  className={`relative transform border-2 transition-all duration-300 ${
                    // Remover hover effects no mobile para melhor performance
                    !isMobile ? "hover:scale-105 hover:shadow-xl" : ""
                  } ${
                    service.popular
                      ? "border-rose-400 bg-rose-50"
                      : "border-rose-200 bg-white"
                  }`}
                  style={{
                    // Animação delay apenas se não for mobile
                    animationDelay: !isMobile ? `${index * 0.2}s` : "0s",
                  }}
                >
                  {service.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 transform bg-rose-500 text-white">
                      Mais Popular
                    </Badge>
                  )}

                  <CardHeader className="pb-4 text-center">
                    <CardTitle className="text-xl text-rose-800">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm leading-relaxed text-rose-700">
                      {service.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-rose-600">
                        {service.price}
                      </span>
                      <span className="text-sm text-rose-500">
                        {service.duration}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-rose-700"
                        >
                          <div className="mr-2 h-1.5 w-1.5 rounded-full bg-rose-400"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`mt-4 w-full cursor-pointer transition-all duration-300 ${
                        service.popular
                          ? "bg-rose-500 text-white hover:bg-rose-600"
                          : "bg-rose-100 text-rose-700 hover:bg-rose-200"
                      }`}
                      onClick={handleAgendarClick}
                    >
                      Agendar Agora
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Segunda linha: 2 cards centralizados */}
            <div className="flex justify-center">
              <div className="grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
                {services.slice(3, 5).map((service, index) => (
                  <Card
                    key={index + 3}
                    className={`relative transform border-2 transition-all duration-300 ${
                      // Remover hover effects no mobile para melhor performance
                      !isMobile ? "hover:scale-105 hover:shadow-xl" : ""
                    } ${
                      service.popular
                        ? "border-rose-400 bg-rose-50"
                        : "border-rose-200 bg-white"
                    }`}
                    style={{
                      // Animação delay apenas se não for mobile
                      animationDelay: !isMobile
                        ? `${(index + 3) * 0.2}s`
                        : "0s",
                    }}
                  >
                    {service.popular && (
                      <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 transform bg-rose-500 text-white">
                        Mais Popular
                      </Badge>
                    )}

                    <CardHeader className="pb-4 text-center">
                      <CardTitle className="text-xl text-rose-800">
                        {service.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-sm leading-relaxed text-rose-700">
                        {service.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-rose-600">
                          {service.price}
                        </span>
                        <span className="text-sm text-rose-500">
                          {service.duration}
                        </span>
                      </div>

                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-sm text-rose-700"
                          >
                            <div className="mr-2 h-1.5 w-1.5 rounded-full bg-rose-400"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Button
                        className={`mt-4 w-full cursor-pointer transition-all duration-300 ${
                          service.popular
                            ? "bg-rose-500 text-white hover:bg-rose-600"
                            : "bg-rose-100 text-rose-700 hover:bg-rose-200"
                        }`}
                        onClick={handleAgendarClick}
                      >
                        Agendar Agora
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
