"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Instagram, MessageCircle } from "lucide-react";

const Contact = () => {
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

    const element = document.getElementById("contato");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      info: "Praça Senhor Bom Jesus, 56 - Bom Jesus, Belo Horizonte - MG, 31230-620",
    },
    {
      icon: Phone,
      title: "Telefone",
      info: "(31) 97302-5556",
    },
    {
      icon: Instagram,
      title: "Instagram",
      info: "@lashcarolsilva",
    },
    {
      icon: Clock,
      title: "Horário",
      info: "Terça-Sexta: 8h às 18h\nSábado: 8h às 16h",
    },
  ];

  return (
    <section
      id="contato"
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
              Entre em Contato
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-rose-700">
              Pronta para transformar seu olhar? Entre em contato e agende seu
              horário
            </p>
          </div>

          {/* WhatsApp CTA */}
          <div className="mb-12 text-center">
            <Card className="mx-auto max-w-md border-rose-200 shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <MessageCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-rose-800">
                    Agende pelo WhatsApp
                  </h3>
                  <p className="text-rose-700">
                    Entre em contato para agendar seu horário
                  </p>
                </div>
                <Button
                  className="w-full transform bg-green-500 py-4 text-lg text-white transition-all duration-300 hover:scale-105 hover:bg-green-600"
                  onClick={() =>
                    window.open(
                      "https://wa.me/5531973025556?text=Olá! Gostaria de agendar uma extensão de cílios.",
                      "_blank",
                    )
                  }
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Conversar no WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="mb-8 grid gap-6 md:grid-cols-2">
              {contactInfo.map((item, index) => (
                <Card
                  key={index}
                  className="border-rose-200 transition-all duration-300 hover:shadow-lg"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="rounded-full bg-rose-100 p-3">
                        <item.icon className="h-6 w-6 text-rose-600" />
                      </div>
                      <div>
                        <h3 className="mb-2 font-semibold text-rose-800">
                          {item.title}
                        </h3>
                        <p className="whitespace-pre-line text-rose-700">
                          {item.info}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
