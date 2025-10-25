import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const quickLinks = [
    { name: t('footer.quick.aboutUs'), href: "#about" },
    { name: t('footer.quick.academicPrograms'), href: "#programs" },
    { name: t('footer.quick.admissions'), href: "#admissions" },
    { name: t('footer.quick.contact'), href: "#contact" }
  ];

  const academicLinks = [
    { name: t('footer.academic.primary'), href: "#" },
    { name: t('footer.academic.secondary'), href: "#" },
    { name: t('footer.academic.sports'), href: "#" },
    { name: t('footer.academic.arts'), href: "#" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* School Info */}
          <div className="lg:col-span-2">
            <div className="mb-4 sm:mb-6">
              {/* Logo */}
              <div className="flex items-start sm:items-center space-x-3 mb-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-base sm:text-lg font-georgia font-bold text-accent">JGS</span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-georgia text-lg sm:text-xl lg:text-2xl font-medium tracking-wide leading-tight">{t('footer.school.name')}</h3>
                  <p className="text-sm sm:text-base text-primary-foreground/80">{t('footer.school.tagline')}</p>
                </div>
              </div>
            </div>
            
            <p className="font-georgia text-sm sm:text-base text-primary-foreground/90 leading-relaxed mb-4 sm:mb-6 max-w-md font-medium">
              {t('footer.school.description')}
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="w-8 sm:w-10 h-8 sm:h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
                <Facebook className="w-4 sm:w-5 h-4 sm:h-5" />
              </a>
              <a href="#" className="w-8 sm:w-10 h-8 sm:h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
                <Instagram className="w-4 sm:w-5 h-4 sm:h-5" />
              </a>
              <a href="#" className="w-8 sm:w-10 h-8 sm:h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
                <Twitter className="w-4 sm:w-5 h-4 sm:h-5" />
              </a>
              <a href="#" className="w-8 sm:w-10 h-8 sm:h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
                <Youtube className="w-4 sm:w-5 h-4 sm:h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-georgia text-base sm:text-lg font-semibold mb-4 sm:mb-6">{t('footer.quick.title')}</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm sm:text-base text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Academic Programs */}
          <div>
            <h4 className="font-georgia text-base sm:text-lg font-semibold mb-4 sm:mb-6">{t('footer.academic.title')}</h4>
            <ul className="space-y-2 sm:space-y-3">
              {academicLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm sm:text-base text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Contact Info Section */}
        <div className="border-t border-primary-foreground/20 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center sm:text-left">
            <div>
              <h5 className="font-semibold text-sm sm:text-base mb-2">{t('footer.bottom.address')}</h5>
              <p className="text-primary-foreground/80 text-xs sm:text-sm leading-relaxed">
                {t('footer.bottom.address.full')}
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-sm sm:text-base mb-2">{t('footer.bottom.contact')}</h5>
              <p className="text-primary-foreground/80 text-xs sm:text-sm leading-relaxed">
                {t('footer.bottom.phone')}<br />
                {t('footer.bottom.email')}
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-sm sm:text-base mb-2">{t('footer.bottom.hours')}</h5>
              <p className="text-primary-foreground/80 text-xs sm:text-sm leading-relaxed">
                {t('footer.bottom.hours.weekdays')}<br />
                {t('footer.bottom.hours.saturday')}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 gap-4">
            <p className="text-primary-foreground/80 text-xs sm:text-sm text-center sm:text-left">
              © 2025 Jai Ganesh English Medium School. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-xs sm:text-sm">
              <a 
                href="https://topiwala-mes.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-center"
              >
                Brought to you by Malvan Education Society Malvan
              </a>
              <span className="hidden sm:inline text-primary-foreground/40">•</span>
              <a 
                href="https://team-knowvation.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 font-medium"
              >
                Developed By Knowvation
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;