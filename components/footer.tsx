"use client";

import { useEffect, useState } from "react";
import { Instagram, MessageCircle, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
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

    const element = document.getElementById("footer");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const year = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-gradient-to-br from-rose-800 to-rose-900 text-white"
    >
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-8 grid gap-8 md:grid-cols-4">
            {/* Logo e descrição */}
            <div className="md:col-span-2">
              <h3 className="mb-4 text-3xl font-bold text-rose-100">
                Lash Carol Silva
              </h3>
              <p className="mb-6 leading-relaxed text-rose-200">
                Transformando olhares e elevando a autoestima com técnicas
                profissionais de extensão de cílios. Sua beleza natural merece
                ser destacada.
              </p>
              <div className="flex space-x-4">
                <div className="transform cursor-pointer rounded-full bg-rose-400 p-3 transition-all duration-300 hover:scale-110 hover:bg-rose-600">
                  <Instagram className="h-5 w-5" />
                </div>
                <div className="transform cursor-pointer rounded-full bg-rose-400 p-3 transition-all duration-300 hover:scale-110 hover:bg-rose-600">
                  <MessageCircle className="h-5 w-5" />
                </div>
              </div>
            </div>

            {/* Links rápidos */}
            <div>
              <h4 className="mb-4 text-xl font-semibold text-rose-100">
                Links Rápidos
              </h4>
              <ul className="space-y-2">
                {["Home", "Sobre", "Serviços", "Depoimentos", "Contato"].map(
                  (item, index) => (
                    <li key={item}>
                      <button
                        className="transform text-rose-200 transition-all duration-300 hover:translate-x-2 hover:text-white"
                        onClick={() => {
                          const element = document.getElementById(
                            item.toLowerCase().replace("ç", "c"),
                          );
                          if (element)
                            element.scrollIntoView({ behavior: "smooth" });
                        }}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {item}
                      </button>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h4 className="mb-4 text-xl font-semibold text-rose-100">
                Contato
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-rose-200 transition-colors duration-300 hover:text-white">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">
                    Praça Senhor Bom Jesus, 56 - Bom Jesus
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-rose-200 transition-colors duration-300 hover:text-white">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">(11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-3 text-rose-200 transition-colors duration-300 hover:text-white">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">contato@lashstudio.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Linha divisória */}
          <div className="border-t border-rose-700 pt-8">
            <div className="flex flex-col items-center justify-between md:flex-row">
              <p className="mb-4 text-sm text-rose-200 md:mb-0">
                &copy; {year} Lash Carol Silva. Todos os direitos reservados.
              </p>

              {/* Crédito do desenvolvedor */}
              <div className="flex items-center space-x-2 text-sm text-rose-200">
                <span className="cursor-pointer font-semibold text-rose-100 transition-colors duration-300 hover:text-white">
                  Desenvolvido por Mh Developer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
