import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { GraduationCap, Award, BookOpen, Users, Brain, Heart, Music } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Autoplay from "embla-carousel-autoplay";
import { useLanguage } from "@/contexts/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: carouselRef, isVisible: carouselVisible } = useScrollAnimation({ delay: 300 });
  const { elementRef: decorationRef, isVisible: decorationVisible } = useScrollAnimation({ delay: 600 });

  const staffMembers = [
    {
      name: "Dr. Meera Patel",
      role: "staff.principal",
      qualification: "Ph.D. in Education",
      experience: "25+ years",
      specialization: "Educational Leadership",
      image: "https://ik.imagekit.io/u1orvlllk/NISHIKANT%20PARADKAR.jpg?updatedAt=1759169347174",
      icon: GraduationCap
    },
    {
      name: "Mr. Raj Kumar Singh",
      role: "staff.mathHead",
      qualification: "M.Sc. Mathematics",
      experience: "18+ years",
      specialization: "Advanced Mathematics",
      image: "https://ik.imagekit.io/u1orvlllk/GAURI%20KUMAMEKAR.jpg?updatedAt=1759169519173",
      icon: Award
    },
    {
      name: "Mrs. NISHTHA KARMALKAR",
      role: "staff.englishTeacher",
      qualification: "M.A. English Literature",
      experience: "15+ years",
      specialization: "Language Arts & Literature",
      image: "https://ik.imagekit.io/u1orvlllk/NISHTHA%20KARMALKAR.jpg?updatedAt=1759169608681",
      icon: BookOpen
    },
    {
      name: "Dr. Suresh Joshi",
      role: "staff.scienceHead",
      qualification: "Ph.D. in Physics",
      experience: "20+ years",
      specialization: "Physics & Environmental Science",
      image: "https://ik.imagekit.io/u1orvlllk/MRUNAL%20HADKAR.jpg?updatedAt=1759169661574",
      icon: Award
    },
    {
      name: "Ms. Kavya Reddy",
      role: "staff.computerTeacher",
      qualification: "M.Tech. Computer Science",
      experience: "12+ years",
      specialization: "Programming & Digital Literacy",
      image: "https://ik.imagekit.io/u1orvlllk/RAHUL%20MONDKAR.jpg?updatedAt=1759169720287",
      icon: BookOpen
    },
    {
      name: "Mr. Ashwin Patel",
      role: "staff.peInstructor",
      qualification: "B.P.Ed., M.Sc. Sports Science",
      experience: "10+ years",
      specialization: "Sports & Fitness",
      image: "https://ik.imagekit.io/u1orvlllk/SAUJANYA%20PATANKAR.jpg?updatedAt=1759169772262",
      icon: Award
    },
    
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div ref={headerRef} className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${headerVisible ? 'animate-fade-in-down' : 'opacity-0 translate-y-[-40px]'}`}>
          <h2 className="font-georgia text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-primary mb-3 sm:mb-4 leading-tight">
            {t('staff.title')}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            {t('staff.description')}
          </p>
        </div>
        
        {/* Staff Carousel */}
        <div ref={carouselRef} className={`relative transition-all duration-1000 ${carouselVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[40px]'}`}>
          <Carousel 
            className="w-full"
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: false,
                stopOnMouseEnter: false
              })
            ]}
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {staffMembers.map((staff, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-card border-border/50 group">
                    <CardContent className="p-6">
                      {/* Staff Image */}
                      <div className="relative mb-6">
                        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-accent/20 group-hover:border-accent/40 transition-colors">
                          <img 
                            src={staff.image}
                            alt={staff.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        {/* Icon Badge */}
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-accent rounded-full flex items-center justify-center border-2 border-background">
                          <staff.icon className="w-4 h-4 text-accent-foreground" />
                        </div>
                      </div>
                      
                      {/* Staff Info */}
                      <div className="text-center space-y-2">
                        <h3 className="font-semibold text-lg text-primary group-hover:text-accent transition-colors">
                          {staff.name}
                        </h3>
        <p className="text-accent font-medium text-sm">
          {t(staff.role)}
        </p>
                        <p className="text-xs text-muted-foreground">
                          {staff.qualification}
                        </p>
                        <div className="pt-2 space-y-1">
          <p className="text-xs text-primary font-medium">
            {t('staff.experience')}: {staff.experience}
          </p>
                          <p className="text-xs text-muted-foreground">
                            {staff.specialization}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-12 border-accent/20 hover:border-accent text-accent hover:text-accent-foreground hover:bg-accent" />
            <CarouselNext className="hidden sm:flex -right-12 border-accent/20 hover:border-accent text-accent hover:text-accent-foreground hover:bg-accent" />
          </Carousel>
        </div>
        
        {/* Bottom Decoration */}
        <div ref={decorationRef} className={`mt-16 text-center transition-all duration-1000 ${decorationVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center justify-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;