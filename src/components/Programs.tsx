import { BookOpen, Users, Trophy, Palette } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const Programs = () => {
  const { t } = useLanguage();
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { containerRef: cardsRef, visibleItems } = useStaggeredAnimation(4, 150);

  const programs = [
    {
      icon: BookOpen,
      title: t('programs.primary.title'),
      description: t('programs.primary.desc'),
      features: t('programs.primary.features').split(', ')
    },
    {
      icon: Users,
      title: t('programs.secondary.title'), 
      description: t('programs.secondary.desc'),
      features: t('programs.secondary.features').split(', ')
    },
    {
      icon: Trophy,
      title: t('programs.sports.title'),
      description: t('programs.sports.desc'),
      features: t('programs.sports.features').split(', ')
    },
    {
      icon: Palette,
      title: t('programs.arts.title'),
      description: t('programs.arts.desc'),
      features: t('programs.arts.features').split(', ')
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div ref={headerRef} className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${headerVisible ? 'animate-fade-in-down' : 'opacity-0 translate-y-[-40px]'}`}>
          <h2 className="font-georgia text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-primary mb-3 sm:mb-4 leading-tight">
            {t('programs.title')}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            {t('programs.description')}
          </p>
        </div>
        
        {/* Programs Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <Card key={index} className={`h-full bg-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 border-border/50 group ${visibleItems[index] ? 'animate-slide-up' : 'opacity-0 translate-y-[60px]'}`}>
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  {/* Icon */}
                  <div className="mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-xl sm:rounded-2xl flex items-center justify-center shadow-card group-hover:shadow-elegant transition-all duration-300">
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-georgia text-lg sm:text-xl lg:text-2xl font-medium text-primary mb-3 sm:mb-4 group-hover:text-accent transition-colors duration-300 leading-tight">
                    {program.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                    {program.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2 sm:space-y-3">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-muted-foreground">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                        <span className="text-xs sm:text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Bottom Accent */}
                  <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-border/30">
                    <div className="w-8 sm:w-12 h-0.5 sm:h-1 bg-gradient-accent rounded-full group-hover:w-16 sm:group-hover:w-20 transition-all duration-300"></div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;