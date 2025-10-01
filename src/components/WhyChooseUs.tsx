import { GraduationCap, Heart, Building, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyChooseUs = () => {
  const { t } = useLanguage();
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { containerRef: cardsRef, visibleItems } = useStaggeredAnimation(4, 200);
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation({ delay: 600 });

  const features = [
    {
      icon: GraduationCap,
      title: t('whychoose.experienced.title'),
      description: t('whychoose.experienced.description'),
      stats: t('whychoose.experienced.stats')
    },
    {
      icon: Heart,
      title: t('whychoose.holistic.title'),
      description: t('whychoose.holistic.description'),
      stats: t('whychoose.holistic.stats')
    },
    {
      icon: Building,
      title: t('whychoose.modern.title'),
      description: t('whychoose.modern.description'),
      stats: t('whychoose.modern.stats')
    },
    {
      icon: Star,
      title: t('whychoose.values.title'),
      description: t('whychoose.values.description'),
      stats: t('whychoose.values.stats')
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-secondary/20 via-background to-accent/5 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl -translate-x-32 sm:-translate-x-48 -translate-y-32 sm:-translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-accent/5 rounded-full blur-3xl translate-x-32 sm:translate-x-48 translate-y-32 sm:translate-y-48"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <div ref={headerRef} className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${headerVisible ? 'animate-fade-in-down' : 'opacity-0 translate-y-[-40px]'}`}>
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-gradient-accent mr-4"></div>
            <Star className="w-6 h-6 text-accent" />
            <div className="w-12 h-0.5 bg-gradient-accent ml-4"></div>
          </div>
          <h2 className="font-georgia text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-primary mb-4 sm:mb-6 leading-tight">
            {t('whychoose.title')}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            {t('whychoose.description')}
          </p>
        </div>
        
        {/* Features Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className={`h-full bg-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 border-border/50 group ${visibleItems[index] ? 'animate-scale-in' : 'opacity-0 scale-80'}`}>
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  {/* Header Section */}
                  <div className="flex items-start space-x-3 sm:space-x-4 lg:space-x-6 mb-4 sm:mb-6">
                    {/* Icon */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-primary rounded-xl sm:rounded-2xl flex items-center justify-center shadow-card group-hover:shadow-elegant transition-all duration-300 flex-shrink-0">
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-primary-foreground" />
                    </div>
                    
                    {/* Title and Stats */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-georgia text-lg sm:text-xl lg:text-2xl font-medium text-primary mb-2 sm:mb-3 group-hover:text-accent transition-colors duration-300 leading-tight">
                        {feature.title}
                      </h3>
                      <div className="inline-flex items-center px-2 sm:px-3 py-1 bg-accent/10 text-accent text-xs sm:text-sm font-semibold rounded-full border border-accent/20">
                        {feature.stats}
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
                    {feature.description}
                  </p>
                  
                  {/* Bottom Accent */}
                  <div className="flex justify-between items-center pt-4 border-t border-border/30">
                    <div className="w-20 h-1 bg-gradient-accent rounded-full group-hover:w-32 transition-all duration-300"></div>
                    <div className="flex space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-accent/60 rounded-full group-hover:bg-accent transition-colors duration-300"></div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Bottom CTA Section */}
        <div ref={ctaRef} className={`mt-12 sm:mt-16 lg:mt-20 text-center transition-all duration-1000 ${ctaVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[40px]'}`}>
          <div className="bg-gradient-primary text-primary-foreground rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 max-w-4xl mx-auto shadow-elegant">
            <h3 className="font-georgia text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium mb-3 sm:mb-4 lg:mb-6 leading-tight">{t('whychoose.cta.title')}</h3>
            <p className="font-georgia text-base sm:text-lg lg:text-xl opacity-90 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto">{t('whychoose.cta.description')}</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="bg-accent text-accent-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold hover:bg-accent/90 transition-colors duration-300 shadow-card">
                {t('whychoose.cta.visit')}
              </button>
              <button className="bg-white/10 text-white border border-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold hover:bg-white/20 transition-colors duration-300">
                {t('whychoose.cta.brochure')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;