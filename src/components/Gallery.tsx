import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery12 from "@/assets/gallery-12.jpg";

const Gallery = () => {
  const { t } = useLanguage();
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { containerRef: galleryRef, visibleItems } = useStaggeredAnimation(12, 100);

  const galleryImages = [
    {
      src: gallery1,
      alt: "Jay Ganesh School Campus",
      title: t('gallery.img.campus')
    },
    {
      src: gallery2,
      alt: "School Building Architecture",
      title: t('gallery.img.building')
    },
    {
      src: gallery3,
      alt: "Students in Classroom",
      title: t('gallery.img.classroom')
    },
    {
      src: gallery4,
      alt: "School Assembly Hall",
      title: t('gallery.img.assembly')
    },
    {
      src: gallery5,
      alt: "Students Learning",
      title: t('gallery.img.learning')
    },
    {
      src: gallery6,
      alt: "School Corridor",
      title: t('gallery.img.corridor')
    },
    {
      src: gallery7,
      alt: "Academic Activities",
      title: t('gallery.img.academic')
    },
    {
      src: gallery8,
      alt: "Student Life",
      title: t('gallery.img.student_life')
    },
    {
      src: gallery9,
      alt: "School Environment",
      title: t('gallery.img.environment')
    },
    {
      src: gallery10,
      alt: "Educational Activities",
      title: t('gallery.img.activities')
    },
    {
      src: gallery11,
      alt: "School Facilities",
      title: t('gallery.img.facilities')
    },
    {
      src: gallery12,
      alt: "Campus Life",
      title: t('gallery.img.campus_life')
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div ref={headerRef} className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${headerVisible ? 'animate-fade-in-down' : 'opacity-0 translate-y-[-40px]'}`}>
          <h2 className="font-georgia text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-primary mb-3 sm:mb-4 leading-tight">
            {t('gallery.title')}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            {t('gallery.description')}
          </p>
        </div>
        
        {/* Gallery Grid */}
        <div ref={galleryRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-lg sm:rounded-xl shadow-card hover:shadow-elegant transition-all duration-500 aspect-square ${visibleItems[index] ? 'animate-scale-in' : 'opacity-0 scale-80'}`}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Title */}
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 text-white transform translate-y-2 sm:translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-semibold text-sm sm:text-base lg:text-lg leading-tight">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;