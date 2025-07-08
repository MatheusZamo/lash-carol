"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Sparkles, Zap, Crown, Star } from "lucide-react";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    const element = document.getElementById("servicos");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Eye,
      title: "Extensão Clássica",
      description:
        "Técnica tradicional que adiciona um fio sintético para cada cílio natural, criando um look elegante e natural.",
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
      icon: Sparkles,
      title: "Volume Russo",
      description:
        "Técnica avançada que utiliza múltiplos fios ultrafinos para criar volume e densidade incríveis.",
      price: "R$ 180",
      duration: "2h30",
      features: ["Volume intenso", "Duração 4-5 semanas", "Efeito glamouroso"],
      popular: true,
    },
    {
      icon: Zap,
      title: "Híbrido",
      description:
        "Combinação perfeita entre clássico e volume, oferecendo naturalidade com um toque de glamour.",
      price: "R$ 150",
      duration: "2h15",
      features: ["Melhor dos dois mundos", "Duração 3-4 semanas", "Versátil"],
      popular: false,
    },
    {
      icon: Crown,
      title: "Mega Volume",
      description:
        "Para quem deseja o máximo em volume e drama. Técnica premium para ocasiões especiais.",
      price: "R$ 220",
      duration: "3h",
      features: ["Volume extremo", "Duração 4-6 semanas", "Efeito dramático"],
      popular: false,
    },
    {
      icon: Star,
      title: "Lifting de Cílios",
      description:
        "Curvatura natural dos seus próprios cílios com tinta, realçando o olhar sem extensões.",
      price: "R$ 80",
      duration: "1h30",
      features: ["Cílios naturais", "Duração 6-8 semanas", "Baixa manutenção"],
      popular: false,
      color: "from-rose-200 to-pink-200",
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

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`relative transform border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  service.popular
                    ? "border-rose-400 bg-rose-50"
                    : "border-rose-200 bg-white"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {service.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 transform bg-rose-500 text-white">
                    Mais Popular
                  </Badge>
                )}

                <CardHeader className="pb-4 text-center">
                  <div className="mx-auto mb-4 w-fit rounded-full bg-rose-100 p-3">
                    <service.icon className="h-8 w-8 text-rose-600" />
                  </div>
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
                    className={`mt-4 w-full transition-all duration-300 ${
                      service.popular
                        ? "bg-rose-500 text-white hover:bg-rose-600"
                        : "bg-rose-100 text-rose-700 hover:bg-rose-200"
                    }`}
                    onClick={() =>
                      document
                        .getElementById("contato")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Agendar Agora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
