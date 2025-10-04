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
      name: "Mrs. Tejal Tukaram Vengurlekar",
      role: "Headmistress",
      qualification: "B.Com., B.Ed.",
      image: "https://ik.imagekit.io/zvounggl3c/TEJAL%20VENGURLEKAR.jpg?updatedAt=1759573910299",
      icon: GraduationCap
    },
    {
      name: "Mr. Nishakant Vitthal Paradkar",
      role: "Assistant Teacher",
      qualification: "B.A., B.P.Ed.",
      image: "https://ik.imagekit.io/zvounggl3c/NISHIKANT%20PARADKAR.jpg?updatedAt=1759573905957",
      icon: Award
    },
    {
      name: "Mr. Pankaj Prabhakar Rane",
      role: "Assistant Teacher",
      qualification: "B.Sc., B.P.Ed.",
      image: "https://ik.imagekit.io/zvounggl3c/PANKAJ%20RANE.jpg?updatedAt=1759573901708",
      icon: BookOpen
    },
    {
      name: "DMrs. Harsha Sachin Sawant",
      role: "Assistant Teacher",
      qualification: "B.Sc., B.Ed.",
      image: "https://ik.imagekit.io/zvounggl3c/HARSHA%20SAWANT.jpg?updatedAt=1759573911496",
      icon: Award
    },
    {
      name: "Ms. Kavya Reddy",
      role: "staff.computerTeacher",
      qualification: "M.Tech. Computer Science",
      image: "https://ik.imagekit.io/u1orvlllk/RAHUL%20MONDKAR.jpg?updatedAt=1759169720287",
      icon: BookOpen
    },
    {
      name: "Mrs. Snehal Devdatta Todankar",
      role: "Assistant Teacher",
      qualification: "D.T.Ed.,M.A., B.Ed.",
      image: "https://ik.imagekit.io/zvounggl3c/SNEHAL%20TODANKAR.jpg?updatedAt=1759573910260",
      icon: Award
    },
     {
      name: "Miss. Anita Isidore Fernandes",
      role: "Assistant Teacher",
      qualification: "M.A., M.Ed.",
      image: "https://ik.imagekit.io/zvounggl3c/ANITA%20FERNANDES.jpg?updatedAt=1759573907401",
      icon: Award
    },
    {
      name: "Mrs. Swati Avinash Patkar",
      role: "Assistant Teacher",
      qualification: "B.Sc.",
      image: "https://ik.imagekit.io/zvounggl3c/SWATI%20PATKAR.jpg?updatedAt=1759573910167",
      icon: Award
    },
    {
      name: "Mr. Rahul Mohan Mondkar",
      role: "Assistant Teacher",
      qualification: "Diploma in Sculpture & Modelling",
      image: "https://ik.imagekit.io/zvounggl3c/RAHUL%20MONDKAR.jpg?updatedAt=1759573906571",
      icon: Award
    },
    {
      name: "Mrs. Pranjal Pravin Ghatwal",
      role: "Assistant Teacher",
      qualification: "H.S.C, D.T.Ed",
      image: "https://ik.imagekit.io/zvounggl3c/PRANJAL%20GHATMAL.jpg?updatedAt=1759573909964",
      icon: Award
    },
    {
      name: "Mrs. Smita Mahesh Waingankar",
      role: "Assistant Teacher",
      qualification: "S.Y.B.A.  Montessori Training, C.T.C. D.Ed.",
      image: "https://ik.imagekit.io/zvounggl3c/SMITA%20WAINGANKAR.jpg?updatedAt=1759573909644",
      icon: Award
    },
    {
      name: "Mrs. Poonam  Pramod Gosavi",
      role: "Assistant Teacher",
      qualification: "B.Com., B.Ed.",
      image: "https://ik.imagekit.io/zvounggl3c/POONAM%20GOSAVI.jpg?updatedAt=1759573906865",
      icon: Award
    },
    {
      name: "Mrs. Sheeja S.V.",
      role: "Assistant Teacher",
      qualification: "B.Com., B.Ed.",
      image: "https://ik.imagekit.io/zvounggl3c/SHEEJA%20S.V.jpg?updatedAt=1759573911176",
      icon: Award
    },
    {
      name: "Mrs. Nishtha Mahesh Karmalkar",
      role: "Assistant Teacher",
      qualification: "B.Com., Montessori Training, D. T. Ed.",
      image: "https://ik.imagekit.io/zvounggl3c/NISHTHA%20KARMALKAR.jpg?updatedAt=1759573910980",
      icon: Award
    },
    {
      name: "Miss. Manasi Vivek Khadapkar",
      role: "Assistant Teacher",
      qualification: "B.Com.",
      image: "https://ik.imagekit.io/zvounggl3c/MANASI%20KHADAPKAR.jpg?updatedAt=1759573909662",
      icon: Award
    },
    {
      name: "Miss. Gauri Pandurang Kumamekar",
      role: "Clerk",
      qualification: "B.Com",
      image: "https://ik.imagekit.io/zvounggl3c/GAURI%20KUMAMEKAR.jpg?updatedAt=1759573908492",
      icon: Award
    },
    {
      name: "Mr. Dipak Tukaram Jadhav",
      role: "Clerk",
      qualification: "B.Com",
      image: "https://ik.imagekit.io/zvounggl3c/DIPAK%20JADHAV.jpg?updatedAt=1759573905344",
      icon: Award
    },
    {
      name: "Mr. Satish Jagannath Parab",
      role: "Peon",
      qualification: "S.S.C ",
      image: "https://ik.imagekit.io/zvounggl3c/SATISH%20PARAB.jpg?updatedAt=1759573901980",
      icon: Award
    },
    {
      name: "Mrs. Deesha Dipak Dhuri",
      role: "Peon",
      qualification: "S.S.C",
      image: "https://ik.imagekit.io/zvounggl3c/DISHA%20DHURI.jpg?updatedAt=1759573911156",
      icon: Award
    },
    {
      name: "Mr.Rupesh Madhukar Masurkar",
      role: "Peon",
      qualification: "H.S.C, ITI",
      image: "https://ik.imagekit.io/zvounggl3c/RUPESH%20MASURKAR.jpg?updatedAt=1759573901739",
      icon: Award
    },
    {
      name: "Mrs. Poonam Sharad Karangutkar",
      role: "Peon",
      qualification: "S.S.C",
      image: "https://ik.imagekit.io/zvounggl3c/POONAM%20KARANGUTKAR.jpg?updatedAt=1759573902243",
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
    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-accent/20 group-hover:border-accent/40 transition-colors">
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