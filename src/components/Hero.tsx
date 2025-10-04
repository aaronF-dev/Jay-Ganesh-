import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
const heroImage = "/lovable-uploads/2d1dcd84-e57a-4a2c-8ab6-e36e77933c23.png";
import schoolLogoImg from "@/assets/logo-jai.png";
const schoolLogo = schoolLogoImg;

const Hero = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([]);

  const sections = [
    { id: "about", label: t('nav.about') },
    { id: "programs", label: t('nav.programs') },
    { id: "gallery", label: t('nav.gallery') },
    { id: "testimonials", label: t('nav.testimonials') },
    { id: "admissions", label: t('nav.admissions') },
    { id: "contact", label: t('nav.contact') }
  ];

  // NLP-enhanced keyword mapping for intelligent search
  const nlpKeywords = {
    about: [
      'about', 'school', 'history', 'mission', 'vision', 'values', 'philosophy', 'establishment',
      'founded', 'background', 'story', 'who are you', 'tell me about', 'information',
      'details', 'overview', 'introduction', 'learn about'
    ],
    programs: [
      'programs', 'courses', 'curriculum', 'subjects', 'academics', 'education', 'learning',
      'classes', 'studies', 'syllabus', 'what do you teach', 'what subjects', 'academic programs',
      'educational offerings', 'study programs', 'course offerings'
    ],
    gallery: [
      'gallery', 'photos', 'pictures', 'images', 'campus', 'facilities', 'infrastructure',
      'building', 'classrooms', 'show me', 'visual', 'tour', 'see school', 'look at',
      'view campus', 'school photos', 'campus images'
    ],
    testimonials: [
      'testimonials', 'reviews', 'feedback', 'parents', 'students', 'experience', 'opinions',
      'what parents say', 'student reviews', 'parent feedback', 'success stories',
      'student experience', 'parent testimonials', 'recommendations'
    ],
    admissions: [
      'admissions', 'admission', 'enrollment', 'apply', 'join', 'register', 'how to apply',
      'application', 'fees', 'requirements', 'eligibility', 'process', 'enroll',
      'get admission', 'admission process', 'how to join', 'registration'
    ],
    contact: [
      'contact', 'phone', 'email', 'address', 'location', 'reach', 'get in touch',
      'call', 'write', 'visit', 'where are you', 'how to reach', 'contact details',
      'phone number', 'email address', 'office address', 'directions'
    ]
  };

  // Advanced NLP search function
  const performNLPSearch = (query: string): string | null => {
    const normalizedQuery = query.toLowerCase().trim();
    
    // Direct section name matching
    for (const section of sections) {
      if (normalizedQuery.includes(section.id.toLowerCase()) || 
          normalizedQuery.includes(section.label.toLowerCase())) {
        return section.id;
      }
    }

    // Advanced keyword matching with scoring
    let bestMatch = { section: '', score: 0 };
    
    Object.entries(nlpKeywords).forEach(([sectionId, keywords]) => {
      let score = 0;
      
      keywords.forEach(keyword => {
        if (normalizedQuery.includes(keyword)) {
          // Exact phrase match gets higher score
          if (normalizedQuery === keyword) {
            score += 10;
          } else if (normalizedQuery.startsWith(keyword) || normalizedQuery.endsWith(keyword)) {
            score += 5;
          } else {
            score += 3;
          }
        }
        
        // Fuzzy matching for typos and partial words
        if (keyword.length > 3 && normalizedQuery.includes(keyword.substring(0, 3))) {
          score += 1;
        }
      });
      
      if (score > bestMatch.score) {
        bestMatch = { section: sectionId, score };
      }
    });

    return bestMatch.score > 0 ? bestMatch.section : null;
  };

  // Generate search suggestions based on input
  const generateSuggestions = (input: string) => {
    if (input.length < 2) {
      setSearchSuggestions([]);
      return;
    }

    const suggestions: string[] = [];
    const normalizedInput = input.toLowerCase();

    // Collect matching keywords
    Object.entries(nlpKeywords).forEach(([sectionId, keywords]) => {
      const sectionLabel = sections.find(s => s.id === sectionId)?.label || sectionId;
      
      keywords.forEach(keyword => {
        if (keyword.includes(normalizedInput) && keyword.length > normalizedInput.length) {
          if (!suggestions.includes(keyword) && suggestions.length < 4) {
            suggestions.push(keyword);
          }
        }
      });
      
      // Add section names if they match
      if (sectionLabel.toLowerCase().includes(normalizedInput) && !suggestions.includes(sectionLabel)) {
        suggestions.unshift(sectionLabel);
      }
    });

    setSearchSuggestions(suggestions.slice(0, 4));
  };

  const handleSearch = (query?: string) => {
    const searchQuery = query || searchTerm;
    if (!searchQuery.trim()) return;

    const targetSection = performNLPSearch(searchQuery);
    
    if (targetSection) {
      const element = document.getElementById(targetSection);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setSearchTerm("");
        setSearchSuggestions([]);
      }
    } else {
      // If no match found, show a subtle indication
      console.log("No matching section found for:", searchQuery);
    }
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    generateSuggestions(value);
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Removed overlay gradient */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div> */}
      </div>
      
      {/* Top Navigation Bar */}
      <div className="relative z-10 p-3 sm:p-6">
        <div className="flex justify-start items-center">
          <div className="relative flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-2 sm:px-4">
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-white/70" />
            <input 
              type="text" 
              placeholder={t('hero.search.placeholder')}
              value={searchTerm}
              onChange={handleInputChange}
              onKeyDown={handleSearchKeyDown}
              className="bg-transparent text-white placeholder-white/70 outline-none text-xs sm:text-sm w-40 sm:w-72"
            />
            
            {/* Search Suggestions */}
            {searchSuggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-background/95 backdrop-blur-md rounded-lg shadow-elegant border border-white/20 overflow-hidden z-50">
                {searchSuggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSearch(suggestion)}
                    className="w-full px-4 py-2 text-left hover:bg-muted/50 transition-colors border-b border-border/20 last:border-b-0 text-foreground text-sm"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center text-center text-white px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 md:space-y-8 animate-hero-appear">
          {/* Subheading */}
          <p className="font-georgia text-sm sm:text-lg md:text-xl font-light tracking-wide text-white/90 animate-hero-subtitle">
            {t('hero.subtitle')}
          </p>
          
          {/* Main Heading */}
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            <h1 className="font-georgia text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-wide leading-tight animate-hero-title">
              {t('hero.school.name')}
            </h1>
          </div>
          
          {/* School Crest */}
          <div className="flex justify-center py-3 sm:py-4 md:py-6 animate-hero-logo">
            <div className="w-20 h-24 sm:w-28 sm:h-32 md:w-32 md:h-36 flex items-center justify-center">
              <img 
                src={schoolLogo} 
                alt="Jay Ganesh School Logo"
                className="w-full h-full object-contain opacity-90 animate-float"
                onError={(e) => {
                  // Fallback to a styled placeholder if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const placeholder = target.nextElementSibling as HTMLElement;
                  if (placeholder) placeholder.style.display = 'flex';
                }}
              />
              <div className="hidden w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/10 border border-white/30 rounded-full items-center justify-center backdrop-blur-sm">
                <span className="text-xs sm:text-sm md:text-base font-georgia font-bold text-white">JGS</span>
              </div>
            </div>
          </div>
          
          {/* Tagline */}
          <p className="font-sans text-sm sm:text-base md:text-lg font-medium tracking-wide text-white/80 animate-hero-subtitle">
            {t('hero.description')}
          </p>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="relative z-10 pb-12">
        <div className="flex justify-center">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center animate-bounce">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
      
      {/* Soft Wave Mask at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-12 md:h-16 fill-background"
        >
          <path d="M0,60 C240,100 480,40 720,60 C960,80 1200,20 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;