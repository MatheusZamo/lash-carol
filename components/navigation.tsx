"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-lg backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="text-2xl font-bold text-rose-400">Lash Carol</div>

          {/* Desktop Menu */}
          <div className="hidden space-x-8 md:flex">
            {["home", "sobre", "servicos", "depoimentos", "contato"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-rose-400 capitalize transition-colors hover:text-rose-500"
                >
                  {item === "servicos" ? "serviços" : item}
                </button>
              ),
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="text-rose-400 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mt-2 rounded-lg bg-white/95 p-4 shadow-lg backdrop-blur-sm md:hidden">
            {["home", "sobre", "servicos", "depoimentos", "contato"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full py-2 text-left text-rose-400 capitalize transition-colors hover:text-rose-500"
                >
                  {item === "servicos" ? "serviços" : item}
                </button>
              ),
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
