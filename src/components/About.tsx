import aboutImage from "@/assets/jai-section.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { elementRef: textRef, isVisible: textVisible } = useScrollAnimation({ delay: 200 });
  const { elementRef: imageRef, isVisible: imageVisible } = useScrollAnimation({ delay: 400 });

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Text Content */}
          <div ref={textRef} className={`space-y-4 sm:space-y-6 transition-all duration-1000 ${textVisible ? 'animate-fade-in-left' : 'opacity-0 translate-x-[-40px]'}`}>
          <h2 className="font-georgia text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-primary mb-4 sm:mb-6 leading-tight">
            {t('about.title')}
          </h2>
            
            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
              <p>
                {t('about.description')}
              </p>
            </div>
            
            <div className="pt-4 sm:pt-6">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-accent">21</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{t('hero.stats.experience')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-accent">1000+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{t('about.alumni')}</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div ref={imageRef} className={`relative mt-8 lg:mt-0 transition-all duration-1000 ${imageVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-[40px]'}`}>
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={aboutImage} 
                alt="Students learning in classroom" 
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-maroon/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;