import { Button } from "@/components/ui/button";
import { Calendar, Users, BookOpen, Phone } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const AdmissionsCTA = () => {
  const { t } = useLanguage();
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { containerRef: featuresRef, visibleItems } = useStaggeredAnimation(3, 200);
  const { elementRef: buttonsRef, isVisible: buttonsVisible } = useScrollAnimation({ delay: 600 });
  const { elementRef: contactRef, isVisible: contactVisible } = useScrollAnimation({ delay: 800 });

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center">
          {/* Main Heading */}
          <div ref={headerRef} className={`transition-all duration-1000 ${headerVisible ? 'animate-fade-in-down' : 'opacity-0 translate-y-[-40px]'}`}>
            <h2 className="font-georgia text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium mb-4 sm:mb-6 leading-tight">
              {t('admissions.title')}
            </h2>
            
            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed px-4">
              {t('admissions.description')}
            </p>
          </div>
          
          {/* Features Row */}
          <div ref={featuresRef} className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 max-w-4xl mx-auto">
            <div className={`flex flex-col items-center text-center transition-all duration-800 ${visibleItems[0] ? 'animate-scale-in' : 'opacity-0 scale-80'}`}>
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-accent/20 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Calendar className="w-6 sm:w-8 h-6 sm:h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">{t('admissions.feature1.title')}</h3>
              <p className="opacity-80 text-sm sm:text-base">{t('admissions.feature1.desc')}</p>
            </div>
            
            <div className={`flex flex-col items-center text-center transition-all duration-800 ${visibleItems[1] ? 'animate-scale-in' : 'opacity-0 scale-80'}`}>
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-accent/20 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Users className="w-6 sm:w-8 h-6 sm:h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">{t('admissions.feature2.title')}</h3>
              <p className="opacity-80 text-sm sm:text-base">{t('admissions.feature2.desc')}</p>
            </div>
            
            <div className={`flex flex-col items-center text-center transition-all duration-800 ${visibleItems[2] ? 'animate-scale-in' : 'opacity-0 scale-80'}`}>
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-accent/20 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <BookOpen className="w-6 sm:w-8 h-6 sm:h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">{t('admissions.feature3.title')}</h3>
              <p className="opacity-80 text-sm sm:text-base">{t('admissions.feature3.desc')}</p>
            </div>
          </div>
          
          {/* CTA Button */}
          <div ref={buttonsRef} className={`flex justify-center items-center max-w-lg mx-auto mb-8 sm:mb-12 transition-all duration-1000 ${buttonsVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[40px]'}`}>
            <Button 
              variant="accent" 
              size="xl" 
              className="w-full sm:min-w-[250px] h-12 sm:h-14 text-sm sm:text-base flex items-center gap-2"
              onClick={() => window.location.href = 'tel:+919876543210'}
            >
              <Phone className="w-4 h-4" />
              {t('admissions.cta')}
            </Button>
          </div>
          
          {/* Contact Info */}
          <div ref={contactRef} className={`text-center opacity-90 px-4 transition-all duration-1000 ${contactVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <p className="text-sm sm:text-base lg:text-lg mb-2">{t('admissions.contact.title')}</p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center text-sm sm:text-base lg:text-xl font-semibold">
              <span>{t('admissions.contact.phone')}</span>
              <span className="hidden sm:inline">|</span>
              <span>{t('admissions.contact.email')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsCTA;