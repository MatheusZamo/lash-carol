"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    const element = document.getElementById("depoimentos");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Maria Silva",
      text: "Simplesmente perfeito! Os cílios ficaram naturais e duradouros. A profissional é muito cuidadosa e atenciosa.",
      rating: 5,
      service: "Volume Russo",
    },
    {
      name: "Ana Costa",
      text: "Melhor investimento que fiz! Acordo todos os dias me sentindo linda. O trabalho é impecável.",
      rating: 5,
      service: "Extensão Clássica",
    },
    {
      name: "Juliana Santos",
      text: "Profissional incrível! Explicou todo o processo e o resultado superou minhas expectativas.",
      rating: 5,
      service: "Híbrido",
    },
    {
      name: "Carla Oliveira",
      text: "Atendimento excepcional e resultado maravilhoso. Recomendo de olhos fechados!",
      rating: 5,
      service: "Mega Volume",
    },
  ];

  return (
    <section id="depoimentos" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-rose-800 md:text-5xl">
              Depoimentos
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-rose-700">
              Veja o que as clientes dizem sobre a experiência e os resultados
              incríveis
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <Card className="border-rose-200 bg-gradient-to-br from-rose-50 to-pink-50">
                      <CardContent className="p-8 text-center">
                        <Quote className="mx-auto mb-6 h-12 w-12 text-rose-300" />

                        <p className="mb-6 text-lg leading-relaxed text-rose-700 italic">
                          &quot;{testimonial.text}&quot;
                        </p>

                        <div className="mb-4 flex justify-center">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-5 w-5 fill-current text-rose-400"
                            />
                          ))}
                        </div>

                        <div className="text-lg font-semibold text-rose-800">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-rose-500">
                          {testimonial.service}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Indicators */}
            <div className="mt-8 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-rose-500" : "bg-rose-200"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-rose-600">500+</div>
              <div className="text-rose-700">Clientes Satisfeitas</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-rose-600">5.0</div>
              <div className="text-rose-700">Avaliação Média</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-rose-600">98%</div>
              <div className="text-rose-700">Taxa de Retorno</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
