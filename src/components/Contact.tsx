import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-georgia text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-primary mb-3 sm:mb-4 leading-tight">
            {t('contact.title')}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            {t('contact.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-4 sm:space-y-6">
            <Card className="hover:shadow-card transition-shadow duration-300">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                  <h3 className="font-semibold text-sm sm:text-base text-primary mb-2">{t('contact.address')}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {t('contact.address.full')}
                  </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-card transition-shadow duration-300">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm sm:text-base text-primary mb-2">{t('contact.phone')}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {t('contact.phone.main')}<br />
                      {t('contact.phone.admissions')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-card transition-shadow duration-300">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm sm:text-base text-primary mb-2">{t('contact.email')}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {t('contact.email.info')}<br />
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-card transition-shadow duration-300">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm sm:text-base text-primary mb-2">{t('contact.office.hours')}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {t('contact.hours.weekdays')}<br />
                      {t('contact.hours.saturday')}<br />
                      {t('contact.hours.sunday')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form & Map */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Form */}
            <Card className="hover:shadow-elegant transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="font-georgia text-2xl text-primary">
                  {t('contact.form.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <form className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-primary mb-2">
                        {t('contact.form.name.label')} {t('contact.form.required')}
                      </label>
                      <Input 
                        placeholder={t('contact.form.name.placeholder')}
                        className="h-10 sm:h-12 text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-primary mb-2">
                        {t('contact.form.email.label')} {t('contact.form.required')}
                      </label>
                      <Input 
                        type="email"
                        placeholder={t('contact.form.email.placeholder')}
                        className="h-10 sm:h-12 text-sm sm:text-base"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-primary mb-2">
                        {t('contact.form.phone.label')}
                      </label>
                      <Input 
                        placeholder={t('contact.form.phone.placeholder')}
                        className="h-10 sm:h-12 text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-primary mb-2">
                        {t('contact.form.subject.label')}
                      </label>
                      <Input 
                        placeholder={t('contact.form.subject.placeholder')}
                        className="h-10 sm:h-12 text-sm sm:text-base"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-primary mb-2">
                      {t('contact.form.message.label')} {t('contact.form.required')}
                    </label>
                    <Textarea 
                      placeholder={t('contact.form.message.placeholder')}
                      className="min-h-[100px] sm:min-h-[120px] resize-none text-sm sm:text-base"
                    />
                  </div>
                  
                  <Button variant="hero" size="lg" className="w-full sm:w-auto text-sm sm:text-base h-10 sm:h-12">
                    {t('contact.form.submit')}
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {/* Map */}
            <Card className="hover:shadow-elegant transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="w-full h-48 sm:h-64 bg-muted rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2437.628891332394!2d73.46711919899079!3d16.065225642890752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc002abba6ac25d%3A0x4e411704c55f978d!2sJai%20Ganesh%20English%20Medium%20School!5e0!3m2!1sen!2sin!4v1759773026578!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "12rem" }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Jai Ganesh School Location"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;