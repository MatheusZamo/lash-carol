import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Navigation from "@/components/navigation";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
