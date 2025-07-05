"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Users, Clock } from "lucide-react";

const About = () => {
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

    const element = document.getElementById("sobre");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Users, number: "500+", label: "Clientes Satisfeitas" },
    { icon: Award, number: "3+", label: "Anos de Experiência" },
    { icon: Heart, number: "100%", label: "Dedicação" },
    { icon: Clock, number: "1:30", label: "Duração Média" },
  ];

  return (
    <section id="sobre" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-rose-400 md:text-5xl">
              Sobre Mim
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-rose-400">
              Sou uma lash designer apaixonada por realçar a beleza natural de
              cada cliente. Com técnicas avançadas e produtos de alta qualidade,
              transformo olhares e elevo a autoestima.
            </p>
          </div>

          <div className="mx-auto mb-16 max-w-4xl">
            <div className="space-y-6 text-center">
              <p className="text-lg leading-relaxed text-rose-400">
                Acredito que cada pessoa possui uma beleza única que merece ser
                destacada. Meu trabalho vai além da técnica é sobre entender o
                estilo de vida, personalidade e desejos de cada cliente para
                criar um resultado personalizado e natural.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="transform border-rose-200 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <CardContent className="p-6 text-center">
                  <stat.icon className="mx-auto mb-4 h-8 w-8 text-rose-500" />
                  <div className="mb-2 text-2xl font-bold text-rose-400">
                    {stat.number}
                  </div>
                  <div className="text-sm text-rose-400">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
