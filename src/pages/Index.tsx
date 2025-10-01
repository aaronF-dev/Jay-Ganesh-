import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import AdmissionsCTA from "@/components/AdmissionsCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import LanguageToggle from "@/components/LanguageToggle";

const Index = () => {
  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen">
      <LanguageToggle />
      <Hero />
      <div id="about"><About /></div>
      <div id="programs"><Programs /></div>
      <WhyChooseUs />
      <div id="gallery"><Gallery /></div>
      <div id="testimonials"><Testimonials /></div>
      <div id="admissions"><AdmissionsCTA /></div>
      <div id="contact"><Contact /></div>
      <Footer />
      <Chatbot onNavigate={handleNavigate} />
    </main>
  );
};

export default Index;