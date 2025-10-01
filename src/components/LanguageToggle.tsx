import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Languages } from "lucide-react";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'mr' : 'en');
  };

  return (
    <Button
      onClick={toggleLanguage}
      variant="outline"
      size="sm"
      className="fixed top-4 right-4 z-50 bg-background/80 backdrop-blur-sm border-accent/20 hover:border-accent text-accent hover:text-accent-foreground hover:bg-accent flex items-center gap-2"
    >
      <Languages className="w-4 h-4" />
      <span className="font-medium">
        {language === 'en' ? 'मराठी' : 'English'}
      </span>
    </Button>
  );
};

export default LanguageToggle;