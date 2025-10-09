import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'mr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Hero Section
    'hero.subtitle': 'Excellence in Education Since 2004',
    'hero.title': 'Nurturing Young Minds for a Brighter Tomorrow',
    'hero.description': 'At Jay Ganesh School, we believe every child is unique and deserves the best foundation for their future. Our comprehensive educational approach combines academic excellence with character development.',
    'hero.cta.primary': 'Explore Programs',
    'hero.cta.secondary': 'Virtual Tour',
    'hero.stats.students': 'Students',
    'hero.stats.teachers': 'Expert Teachers',
    'hero.stats.experience': 'Years of Excellence',
    'hero.stats.achievements': 'Awards & Recognition',

    // Navigation
    'nav.about': 'About',
    'nav.programs': 'Programs', 
    'nav.gallery': 'Gallery',
    'nav.testimonials': 'Staff',
    'nav.admissions': 'Admissions',
    'nav.contact': 'Contact',

    // About Section
    'about.title': 'About Our School',
    'about.description': 'Jay Ganesh School has been a cornerstone of quality education since 2004. Founded with the vision of creating holistic learning environments, we continue to evolve while maintaining our core values of excellence, integrity, and innovation.',
    'about.feature1.title': 'Academic Excellence',
    'about.feature1.desc': 'Comprehensive curriculum designed to challenge and inspire students at every level',
    'about.feature2.title': 'Character Development',
    'about.feature2.desc': 'Building strong moral foundations and leadership qualities in every student',
    'about.feature3.title': 'Modern Facilities',
    'about.feature3.desc': 'State-of-the-art infrastructure supporting 21st-century learning methodologies',
    'about.cta': 'Learn More About Us',

    // Programs Section
    'programs.title': 'Our Academic Programs',
    'programs.description': 'Comprehensive educational pathways designed to nurture every aspect of student development',
    'programs.primary.title': 'Primary Education',
    'programs.primary.desc': 'Foundation years focusing on basic literacy, numeracy, and social skills development through play-based learning.',
    'programs.primary.grades': 'Grades 1-5',
    'programs.primary.features': 'Play-based Learning, Individual Attention, Creative Arts, Basic Computer Skills',
    'programs.secondary.title': 'Secondary Education', 
    'programs.secondary.desc': 'Comprehensive middle school program preparing students for higher secondary education with emphasis on critical thinking.',
    'programs.secondary.grades': 'Grades 6-10',
    'programs.secondary.features': 'SSC Curriculum, Laboratory Work, Sports Programs, Career Guidance',
    'programs.higher.title': 'Higher Secondary',
    'programs.higher.desc': 'Specialized streams in Science, Commerce, and Arts preparing students for competitive exams and university education.',
    'programs.higher.grades': 'Grades 11-12',
    'programs.higher.features': 'Stream Selection, Competitive Exam Prep, College Counseling, Research Projects',

    // Why Choose Us
    'whychoose.title': 'Why Choose Jay Ganesh School?',
    'whychoose.description': 'Discover what makes us the preferred choice for quality education in the region',
    'whychoose.feature1.title': 'Experienced Faculty',
    'whychoose.feature1.desc': 'Highly qualified teachers with decades of combined experience',
    'whychoose.feature2.title': 'Holistic Development',
    'whychoose.feature2.desc': 'Focus on academic, physical, and emotional growth',
    'whychoose.feature3.title': 'Individual Attention',
    'whychoose.feature3.desc': 'Small class sizes ensuring personalized learning',
    'whychoose.feature4.title': 'Modern Infrastructure',
    'whychoose.feature4.desc': 'Well-equipped labs, libraries, and sports facilities',
    'whychoose.feature5.title': 'Value-Based Education',
    'whychoose.feature5.desc': 'Strong emphasis on moral and ethical development',
    'whychoose.feature6.title': 'Community Engagement',
    'whychoose.feature6.desc': 'Active parent-teacher collaboration and community service',

    // Gallery
    'gallery.title': 'School Gallery',
    'gallery.description': 'Glimpses of life at Jay Ganesh School - where learning comes alive',
    'gallery.viewAll': 'View All Photos',

    // Staff/Testimonials
    'staff.title': 'Our Staff',
    'staff.description': 'Meet our dedicated team of experienced educators committed to nurturing excellence in every student',

    // Admissions
    'admissions.title': 'Apply for Admissions',
    'admissions.description': 'Join our community of learners and embark on a journey of academic excellence, character building, and lifelong success.',
    'admissions.feature1.title': 'Early Bird Advantage',
    'admissions.feature1.desc': 'Apply early and secure your child\'s future with special benefits',
    'admissions.feature2.title': 'Limited Seats',
    'admissions.feature2.desc': 'Quality education with optimal student-teacher ratio',
    'admissions.feature3.title': 'Comprehensive Program',
    'admissions.feature3.desc': 'Academic excellence with extracurricular development',
    'admissions.cta': 'Call Now',
    'admissions.contact.title': 'For admissions inquiries:',
    'admissions.contact.phone': '📞 02365 251211',
    'admissions.contact.email': '✉️ admissions@jaiganeshshool.edu',

    // Contact
    'contact.title': 'Get in Touch',
    'contact.description': 'We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.info.title': 'Contact Information',
    'contact.info.address': 'Dhuriwada Malvan, Maharashtra 416606',
    'contact.info.phone': '02365 251211+',
    'contact.info.email': 'info@jaiganeshshool.edu',
    'contact.info.hours': 'Mon - Fri: 8:00 AM - 4:00 PM',

    // Footer
    'footer.about.title': 'Jay Ganesh School',
    'footer.about.desc': 'Committed to providing quality education and nurturing young minds since 2004.',
    'footer.quick.title': 'Quick Links',
    'footer.quick.about': 'About Us',
    'footer.quick.programs': 'Programs',
    'footer.quick.admissions': 'Admissions',
    'footer.quick.contact': 'Contact',
    'footer.contact.title': 'Contact Info',
    'footer.contact.address': 'Dhuriwada Malvan, Maharashtra 416606',
    'footer.contact.phone': '02365 251211+',
    'footer.contact.email': 'info@jaiganeshshool.edu',
    'footer.programs.title': 'Programs',
    'footer.programs.primary': 'Primary Education',
    'footer.programs.secondary': 'Secondary Education',
    'footer.programs.higher': 'Higher Secondary',
    'footer.programs.activities': 'Co-curricular Activities',
    'footer.copyright': '© 2024 Jay Ganesh School. All rights reserved.',

    // Staff Members
    'staff.principal': 'Principal',
    'staff.mathHead': 'Mathematics Department Head',
    'staff.englishTeacher': 'English Literature Teacher',
    'staff.scienceHead': 'Science Department Head',
    'staff.computerTeacher': 'Computer Science Teacher',
    'staff.peInstructor': 'Physical Education Instructor',
    'staff.psychologist': 'Psychology Counselor',
    'staff.socialTeacher': 'Social Studies Teacher',
    'staff.artTeacher': 'Art & Craft Teacher',
    'staff.musicTeacher': 'Music Teacher',
    
    // Additional Hero
    'hero.search.placeholder': "Ask me anything (e.g., 'tell me about programs')",
    'hero.school.name': 'Jay Ganesh English Medium School',
    
    // About additional
    'about.alumni': 'Alumni Success Stories',
    
    // Programs additional
    'programs.sports.title': 'Sports & Athletics',
    'programs.sports.desc': 'Physical fitness and team sports programs including cricket, football, athletics, and indoor games for overall development.',
    'programs.sports.features': 'Professional Coaching, State Competitions, Health & Fitness',
    'programs.arts.title': 'Arts & Culture',
    'programs.arts.desc': 'Creative expression through music, dance, drama, art, and cultural activities to nurture artistic talents and cultural awareness.',
    'programs.arts.features': 'Music & Dance, Visual Arts, Cultural Events',
    
    // Gallery images
    'gallery.img.campus': 'School Campus',
    'gallery.img.building': 'School Building',
    'gallery.img.classroom': 'Classroom Learning',
    'gallery.img.assembly': 'Assembly Hall',
    'gallery.img.learning': 'Students Learning',
    'gallery.img.corridor': 'School Corridor',
    'gallery.img.academic': 'Academic Activities',
    'gallery.img.student_life': 'Student Life',
    'gallery.img.environment': 'School Environment',
    'gallery.img.activities': 'Educational Activities',
    'gallery.img.facilities': 'School Facilities',
    'gallery.img.campus_life': 'Campus Life',
    
    // Staff details
    'staff.experience': 'Experience',
    
    // Contact form and info
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.office.hours': 'Office Hours',
    'contact.form.title': 'Send us a Message',
    'contact.form.name.label': 'Full Name',
    'contact.form.name.placeholder': 'Enter your full name',
    'contact.form.email.label': 'Email Address',
    'contact.form.email.placeholder': 'Enter your email',
    'contact.form.phone.label': 'Phone Number',
    'contact.form.phone.placeholder': 'Enter your phone number',
    'contact.form.subject.label': 'Subject',
    'contact.form.subject.placeholder': 'Enter subject',
    'contact.form.message.label': 'Message',
    'contact.form.message.placeholder': 'Write your message here...',
    'contact.form.required': '*',
    'contact.address.full': ' Dhuriwada Malvan, Maharashtra 416606',
    'contact.phone.main': 'Main: 02365 251211',
    'contact.phone.admissions': 'Admissions: 02365 251211',
    'contact.email.info': 'jayganesh684@gmail.com',
    'contact.hours.weekdays': 'Mon - Fri: 8:00 AM - 4:00 PM',
    'contact.hours.saturday': 'Saturday: 9:00 AM - 1:00 PM',
    'contact.hours.sunday': 'Sunday: Closed',
    'contact.map.title': 'Interactive Map',
    'contact.map.location': 'Dhuriwada Malvan, Maharashtra 416606',
    
    // Footer additional
    'footer.school.name': 'Jay Ganesh English Medium School',
    'footer.school.tagline': 'Nurturing Knowledge, Values, and Growth',
    'footer.school.description': 'For over three decades, we have been committed to providing quality education that shapes character, builds knowledge, and prepares students for a successful future.',
    'footer.academic.title': 'Academic Programs',
    'footer.quick.aboutUs': 'About Us',
    'footer.quick.academicPrograms': 'Academic Programs',
    'footer.academic.primary': 'Primary Education',
    'footer.academic.secondary': 'Secondary Education', 
    'footer.academic.sports': 'Sports & Athletics',
    'footer.academic.arts': 'Arts & Culture',
    'footer.bottom.address': 'Address',
    'footer.bottom.contact': 'Contact',
    'footer.bottom.hours': 'Office Hours',
    'footer.bottom.address.full': 'Dhuriwada Malvan, Maharashtra 416606',
    'footer.bottom.phone': 'Phone: 02365 251211',
    'footer.bottom.email': 'Email: jayganesh684@gmail.com',
    'footer.bottom.hours.weekdays': 'Mon - Fri: 8:00 AM - 4:00 PM',
    'footer.bottom.hours.saturday': 'Saturday: 9:00 AM - 1:00 PM',
    'footer.links.privacy': 'Privacy Policy',
    'footer.links.terms': 'Terms of Service',
    'footer.links.accessibility': 'Accessibility',
    
    // WhyChooseUs
    'whychoose.cta.title': 'Ready to Join Our Excellence?',
    'whychoose.cta.description': 'Experience the difference that quality education and strong values can make in your child\'s future.',
    'whychoose.cta.visit': 'Schedule a Visit',
    'whychoose.cta.brochure': 'Download Brochure',
    'whychoose.experienced.title': 'Experienced Teachers',
    'whychoose.experienced.description': 'Our dedicated faculty brings years of expertise and passion for education to inspire and guide every student towards excellence.',
    'whychoose.experienced.stats': '100% Qualified Faculty',
    'whychoose.holistic.title': 'Holistic Education',
    'whychoose.holistic.description': 'We focus on the complete development of students - academic, emotional, physical, and social - preparing them for life\'s challenges.',
    'whychoose.holistic.stats': '360° Development',
    'whychoose.modern.title': 'Modern Facilities',
    'whychoose.modern.description': 'State-of-the-art classrooms, well-equipped laboratories, library, sports facilities, and technology integration for optimal learning.',
    'whychoose.modern.stats': '20+ Modern Labs',
    'whychoose.values.title': 'Strong Values',
    'whychoose.values.description': 'Character building through moral education, ethics, and values that help students become responsible and compassionate citizens.',
    'whychoose.values.stats': '21 Years Legacy',
  },
  mr: {
    // Hero Section
    'hero.subtitle': '१९८५ पासून शिक्षणातील उत्कृष्टता',
    'hero.title': 'उज्ज्वल भविष्यासाठी तरुण मनांचे संगोपन',
    'hero.description': 'जय गणेश शाळेत, आम्ही मानतो की प्रत्येक मूल अनन्य आहे आणि त्यांच्या भविष्यासाठी सर्वोत्तम पाया मिळण्यास पात्र आहे. आमचा सर्वसमावेशक शैक्षणिक दृष्टिकोन शैक्षणिक उत्कृष्टता आणि चारित्र्य विकास एकत्र करतो.',
    'hero.cta.primary': 'कार्यक्रम पहा',
    'hero.cta.secondary': 'आभासी दौरा',
    'hero.stats.students': 'विद्यार्थी',
    'hero.stats.teachers': 'तज्ञ शिक्षक',
    'hero.stats.experience': 'वर्षांची उत्कृष्टता',
    'hero.stats.achievements': 'पुरस्कार आणि मान्यता',

    // Navigation
    'nav.about': 'आमच्याविषयी',
    'nav.programs': 'कार्यक्रम',
    'nav.gallery': 'गॅलरी',
    'nav.testimonials': 'कर्मचारी',
    'nav.admissions': 'प्रवेश',
    'nav.contact': 'संपर्क',

    // About Section
    'about.title': 'आमच्या शाळेविषयी',
    'about.description': 'जय गणेश शाळा जवळजवळ चार दशकांपासून दर्जेदार शिक्षणाचा आधारस्तंभ आहे. समग्र शिक्षण वातावरण निर्माण करण्याच्या दृष्टिकोनाने स्थापन झालेली, आम्ही उत्कृष्टता, सचोटी आणि नावीन्यतेची आमची मूलभूत मूल्ये कायम ठेवत विकसित होत राहतो.',
    'about.feature1.title': 'शैक्षणिक उत्कृष्टता',
    'about.feature1.desc': 'प्रत्येक स्तरावर विद्यार्थ्यांना आव्हान देण्यासाठी आणि प्रेरणा देण्यासाठी डिझाइन केलेला सर्वसमावेशक अभ्यासक्रम',
    'about.feature2.title': 'चारित्र्य विकास',
    'about.feature2.desc': 'प्रत्येक विद्यार्थ्यामध्ये मजबूत नैतिक पाया आणि नेतृत्व गुण निर्माण करणे',
    'about.feature3.title': 'आधुनिक सुविधा',
    'about.feature3.desc': '२१व्या शतकातील शिक्षण पद्धतींना समर्थन देणारी अत्याधुनिक पायाभूत सुविधा',
    'about.cta': 'आमच्याबद्दल अधिक जाणून घ्या',

    // Programs Section
    'programs.title': 'आमचे शैक्षणिक कार्यक्रम',
    'programs.description': 'विद्यार्थी विकासाच्या प्रत्येक पैलूचे संगोपन करण्यासाठी डिझाइन केलेले सर्वसमावेशक शैक्षणिक मार्ग',
    'programs.primary.title': 'प्राथमिक शिक्षण',
    'programs.primary.desc': 'खेळावर आधारित शिक्षणाद्वारे मूलभूत साक्षरता, संख्या आणि सामाजिक कौशल्य विकासावर लक्ष केंद्रित करणारी पाया वर्षे.',
    'programs.primary.grades': 'इयत्ता १-५',
    'programs.primary.features': 'खेळावर आधारित शिक्षण, वैयक्तिक लक्ष, सर्जनशील कला, मूलभूत संगणक कौशल्ये',
    'programs.secondary.title': 'माध्यमिक शिक्षण',
    'programs.secondary.desc': 'गंभीर विचारावर भर देऊन उच्च माध्यमिक शिक्षणासाठी विद्यार्थ्यांना तयार करणारा सर्वसमावेशक मध्यम शाळेचा कार्यक्रम.',
    'programs.secondary.grades': 'इयत्ता ६-१०',
    'programs.secondary.features': 'सीबीएसई अभ्यासक्रम, प्रयोगशाळा कार्य, क्रीडा कार्यक्रम, करिअर मार्गदर्शन',
    'programs.higher.title': 'उच्च माध्यमिक',
    'programs.higher.desc': 'स्पर्धा परीक्षा आणि विद्यापीठ शिक्षणासाठी विद्यार्थ्यांना तयार करणारे विज्ञान, वाणिज्य आणि कलामधील विशेष प्रवाह.',
    'programs.higher.grades': 'इयत्ता ११-१२',
    'programs.higher.features': 'प्रवाह निवड, स्पर्धा परीक्षा तयारी, महाविद्यालय समुपदेशन, संशोधन प्रकल्प',

    // Why Choose Us
    'whychoose.title': 'जय गणेश शाळा का निवडावी?',
    'whychoose.description': 'या प्रदेशात दर्जेदार शिक्षणासाठी आम्हाला पसंतीची निवड बनवणारे काय आहे ते शोधा',
    'whychoose.feature1.title': 'अनुभवी शिक्षकगण',
    'whychoose.feature1.desc': 'दशकांच्या एकत्रित अनुभवासह उच्च पात्र शिक्षक',
    'whychoose.feature2.title': 'समग्र विकास',
    'whychoose.feature2.desc': 'शैक्षणिक, शारीरिक आणि भावनिक वाढीवर लक्ष',
    'whychoose.feature3.title': 'वैयक्तिक लक्ष',
    'whychoose.feature3.desc': 'व्यक्तिगत शिक्षण सुनिश्चित करणारे लहान वर्ग आकार',
    'whychoose.feature4.title': 'आधुनिक पायाभूत सुविधा',
    'whychoose.feature4.desc': 'सुसज्ज प्रयोगशाळा, ग्रंथालये आणि क्रीडा सुविधा',
    'whychoose.feature5.title': 'मूल्य-आधारित शिक्षण',
    'whychoose.feature5.desc': 'नैतिक आणि नैतिक विकासावर मजबूत भर',
    'whychoose.feature6.title': 'समुदाय सहभाग',
    'whychoose.feature6.desc': 'सक्रिय पालक-शिक्षक सहयोग आणि सामुदायिक सेवा',

    // Gallery
    'gallery.title': 'शाळा गॅलरी',
    'gallery.description': 'जय गणेश शाळेतील जीवनाची झलक - जिथे शिक्षण जिवंत होते',
    'gallery.viewAll': 'सर्व फोटो पहा',

    // Staff/Testimonials
    'staff.title': 'आमचे कर्मचारी',
    'staff.description': 'प्रत्येक विद्यार्थ्यामध्ये उत्कृष्टता वाढवण्यासाठी वचनबद्ध अनुभवी शिक्षकांच्या आमच्या समर्पित टीमला भेटा',

    // Admissions
    'admissions.title': 'प्रवेशासाठी अर्ज करा',
    'admissions.description': 'आमच्या शिकणाऱ्यांच्या समुदायात सामील व्हा आणि शैक्षणिक उत्कृष्टता, चारित्र्य निर्माण आणि आजीवन यशाच्या प्रवासाला सुरुवात करा.',
    'admissions.feature1.title': 'अर्ली बर्ड फायदा',
    'admissions.feature1.desc': 'लवकर अर्ज करा आणि विशेष फायद्यांसह आपल्या मुलाचे भविष्य सुरक्षित करा',
    'admissions.feature2.title': 'मर्यादित जागा',
    'admissions.feature2.desc': 'इष्टतम विद्यार्थी-शिक्षक गुणोत्तरासह दर्जेदार शिक्षण',
    'admissions.feature3.title': 'सर्वसमावेशक कार्यक्रम',
    'admissions.feature3.desc': 'अभ्यासेतर विकासासह शैक्षणिक उत्कृष्टता',
    'admissions.cta': 'आता कॉल करा',
    'admissions.contact.title': 'प्रवेश चौकशीसाठी:',
    'admissions.contact.phone': '📞 ०२३६५ २५१२११',
    'admissions.contact.email': '✉️ admissions@jaiganeshshool.edu',

    // Contact
    'contact.title': 'संपर्कात रहा',
    'contact.description': 'आम्हाला तुमच्याकडून ऐकायला आवडेल. आम्हाला संदेश पाठवा आणि आम्ही शक्य तितक्या लवकर प्रतिसाद देऊ.',
    'contact.form.name': 'पूर्ण नाव',
    'contact.form.email': 'ईमेल पत्ता',
    'contact.form.phone': 'फोन नंबर',
    'contact.form.subject': 'विषय',
    'contact.form.message': 'संदेश',
    'contact.form.submit': 'संदेश पाठवा',
    'contact.info.title': 'संपर्क माहिती',
    'contact.info.address': '१२३ शिक्षण रस्ता, नॉलेज सिटी, महाराष्ट्र ४००००१',
    'contact.info.phone': '०२३६५ २५१२११',
    'contact.info.email': 'info@jaiganeshshool.edu',
    'contact.info.hours': 'सोम - शुक्र: सकाळी ८:०० - दुपारी ४:००',

    // Footer
    'footer.about.title': 'जय गणेश शाळा',
    'footer.about.desc': 'तीन दशकांहून अधिक काळ दर्जेदार शिक्षण प्रदान करण्यासाठी आणि तरुण मनांचे संगोपन करण्यासाठी वचनबद्ध.',
    'footer.quick.title': 'द्रुत दुवे',
    'footer.quick.about': 'आमच्याविषयी',
    'footer.quick.programs': 'कार्यक्रम',
    'footer.quick.admissions': 'प्रवेश',
    'footer.quick.contact': 'संपर्क',
    'footer.contact.title': 'संपर्क माहिती',
    'footer.contact.address': '१२३ शिक्षण रस्ता, नॉलेज सिटी',
    'footer.contact.phone': '०२३६५ २५१२११',
    'footer.contact.email': 'info@jaiganeshshool.edu',
    'footer.programs.title': 'कार्यक्रम',
    'footer.programs.primary': 'प्राथमिक शिक्षण',
    'footer.programs.secondary': 'माध्यमिक शिक्षण',
    'footer.programs.higher': 'उच्च माध्यमिक',
    'footer.programs.activities': 'सह-अभ्यासक्रम क्रियाकलाप',
    'footer.copyright': '© २०२४ जय गणेश शाळा. सर्व हक्क राखीव.',

    // Staff Members
    'staff.principal': 'मुख्याध्यापक',
    'staff.mathHead': 'गणित विभाग प्रमुख',
    'staff.englishTeacher': 'इंग्रजी साहित्य शिक्षक',
    'staff.scienceHead': 'विज्ञान विभाग प्रमुख',
    'staff.computerTeacher': 'संगणक विज्ञान शिक्षक',
    'staff.peInstructor': 'शारीरिक शिक्षण शिक्षक',
    'staff.psychologist': 'मानसशास्त्र सल्लागार',
    'staff.socialTeacher': 'सामाजिक अभ्यास शिक्षक',
    'staff.artTeacher': 'कला आणि हस्तकला शिक्षक',
    'staff.musicTeacher': 'संगीत शिक्षक',
    
    // Additional Hero
    'hero.search.placeholder': "मला काहीही विचारा (उदा., 'कार्यक्रमांबद्दल सांगा')",
    'hero.school.name': 'जय गणेश इंग्लिश मीडियम स्कूल',
    
    // About additional
    'about.alumni': 'माजी विद्यार्थी यश कथा',
    
    // Programs additional
    'programs.sports.title': 'क्रीडा आणि अॅथलेटिक्स',
    'programs.sports.desc': 'शारीरिक तंदुरुस्ती आणि संघ खेळ कार्यक्रम ज्यामध्ये क्रिकेट, फुटबॉल, अॅथलेटिक्स आणि इनडोअर गेम्स समग्र विकासासाठी समाविष्ट आहेत.',
    'programs.sports.features': 'व्यावसायिक प्रशिक्षण, राज्य स्पर्धा, आरोग्य आणि तंदुरुस्ती',
    'programs.arts.title': 'कला आणि संस्कृती',
    'programs.arts.desc': 'संगीत, नृत्य, नाटक, कला आणि सांस्कृतिक क्रियाकलापांद्वारे कलात्मक प्रतिभा आणि सांस्कृतिक जागरूकता वाढवण्यासाठी सर्जनशील अभिव्यक्ती.',
    'programs.arts.features': 'संगीत आणि नृत्य, दृश्य कला, सांस्कृतिक कार्यक्रम',
    
    // Gallery images
    'gallery.img.campus': 'शाळा परिसर',
    'gallery.img.building': 'शाळेची इमारत',
    'gallery.img.classroom': 'वर्गात शिकवणी',
    'gallery.img.assembly': 'सभागृह',
    'gallery.img.learning': 'विद्यार्थी शिकत आहेत',
    'gallery.img.corridor': 'शाळेचा कॉरिडॉर',
    'gallery.img.academic': 'शैक्षणिक क्रियाकलाप',
    'gallery.img.student_life': 'विद्यार्थी जीवन',
    'gallery.img.environment': 'शाळेचे वातावरण',
    'gallery.img.activities': 'शैक्षणिक गतिविधी',
    'gallery.img.facilities': 'शाळेच्या सुविधा',
    'gallery.img.campus_life': 'परिसरातील जीवन',
    
    // Staff details
    'staff.experience': 'अनुभव',
    
    // Contact form and info
    'contact.address': 'पत्ता',
    'contact.phone': 'फोन',
    'contact.email': 'ईमेल',
    'contact.office.hours': 'कार्यालयाचा वेळ',
    'contact.form.title': 'आम्हाला संदेश पाठवा',
    'contact.form.name.label': 'पूर्ण नाव',
    'contact.form.name.placeholder': 'तुमचे पूर्ण नाव प्रविष्ट करा',
    'contact.form.email.label': 'ईमेल पत्ता',
    'contact.form.email.placeholder': 'तुमचा ईमेल प्रविष्ट करा',
    'contact.form.phone.label': 'फोन नंबर',
    'contact.form.phone.placeholder': 'तुमचा फोन नंबर प्रविष्ट करा',
    'contact.form.subject.label': 'विषय',
    'contact.form.subject.placeholder': 'विषय प्रविष्ट करा',
    'contact.form.message.label': 'संदेश',
    'contact.form.message.placeholder': 'तुमचा संदेश येथे लिहा...',
    'contact.form.required': '*',
    'contact.address.full': '१२३ शिक्षण रस्ता, नॉलेज पार्क, शहर - ४००००१, महाराष्ट्र, भारत',
    'contact.phone.main': 'मुख्य: ०२३६५ २५१२११',
    'contact.phone.admissions': 'प्रवेश: ०२३६५ २५१२११',
    'contact.email.info': 'jayganesh684@gmail.com',
    
    'contact.hours.weekdays': 'सोम - शुक्र: सकाळी ८:०० - दुपारी ४:००',
    'contact.hours.saturday': 'शनिवार: सकाळी ९:०० - दुपारी १:००',
    'contact.hours.sunday': 'रविवार: बंद',
    'contact.map.title': 'परस्पर नकाशा',
    'contact.map.location': 'स्थान: शिक्षण रस्ता, नॉलेज पार्क',
    
    // Footer additional
    'footer.school.name': 'जय गणेश इंग्लिश मीडियम स्कूल',
    'footer.school.tagline': 'ज्ञान, मूल्ये आणि वाढीचे संगोपन',
    'footer.school.description': 'तीन दशकांहून अधिक काळ आम्ही दर्जेदार शिक्षण प्रदान करण्यासाठी वचनबद्ध आहोत जे चारित्र्य घडवते, ज्ञान निर्माण करते आणि विद्यार्थ्यांना यशस्वी भविष्यासाठी तयार करते.',
    'footer.academic.title': 'शैक्षणिक कार्यक्रम',
    'footer.quick.aboutUs': 'आमच्याविषयी',
    'footer.quick.academicPrograms': 'शैक्षणिक कार्यक्रम',
    'footer.academic.primary': 'प्राथमिक शिक्षण',
    'footer.academic.secondary': 'माध्यमिक शिक्षण',
    'footer.academic.sports': 'क्रीडा आणि अॅथलेटिक्स',
    'footer.academic.arts': 'कला आणि संस्कृती',
    'footer.bottom.address': 'पत्ता',
    'footer.bottom.contact': 'संपर्क',
    'footer.bottom.hours': 'कार्यालयाचा वेळ',
    'footer.bottom.address.full': '१२३ शिक्षण रस्ता, नॉलेज पार्क, शहर - ४००००१, महाराष्ट्र, भारत',
    'footer.bottom.phone': 'फोन: ०२३६५ २५१२११',
    'footer.bottom.email': 'ईमेल: jayganesh684@gmail.com',
    'footer.bottom.hours.weekdays': 'सोम - शुक्र: सकाळी ८:०० - दुपारी ४:००',
    'footer.bottom.hours.saturday': 'शनिवार: सकाळी ९:०० - दुपारी १:००',
    'footer.links.privacy': 'गोपनीयता धोरण',
    'footer.links.terms': 'सेवा अटी',
    'footer.links.accessibility': 'पहोचण्यायोग्यता',
    
    // WhyChooseUs
    'whychoose.cta.title': 'आमच्या उत्कृष्टतेत सामील होण्यासाठी तयार आहात?',
    'whychoose.cta.description': 'दर्जेदार शिक्षण आणि मजबूत मूल्ये तुमच्या मुलाच्या भविष्यात कसा फरक करू शकतात याचा अनुभव घ्या.',
    'whychoose.cta.visit': 'भेट नियोजित करा',
    'whychoose.cta.brochure': 'माहितीपत्रक डाउनलोड करा',
    'whychoose.experienced.title': 'अनुभवी शिक्षक',
    'whychoose.experienced.description': 'आमचे समर्पित शिक्षकगण अनेक वर्षांचा तज्ञता आणि शिक्षणाची आवड घेऊन प्रत्येक विद्यार्थ्याला उत्कृष्टतेकडे प्रेरणा देतात आणि मार्गदर्शन करतात.',
    'whychoose.experienced.stats': '९५% पात्र शिक्षकगण',
    'whychoose.holistic.title': 'समग्र शिक्षण',
    'whychoose.holistic.description': 'आम्ही विद्यार्थ्यांच्या संपूर्ण विकासावर लक्ष केंद्रित करतो - शैक्षणिक, भावनिक, शारीरिक आणि सामाजिक - त्यांना जीवनातील आव्हानांसाठी तयार करतो.',
    'whychoose.holistic.stats': '३६०° विकास',
    'whychoose.modern.title': 'आधुनिक सुविधा',
    'whychoose.modern.description': 'अत्याधुनिक वर्गकक्ष, सुसज्ज प्रयोगशाळा, ग्रंथालय, क्रीडा सुविधा आणि इष्टतम शिक्षणासाठी तंत्रज्ञान एकीकरण.',
    'whychoose.modern.stats': '२०+ आधुनिक प्रयोगशाळा',
    'whychoose.values.title': 'मजबूत मूल्ये',
    'whychoose.values.description': 'नैतिक शिक्षण, नैतिकता आणि मूल्यांद्वारे चारित्र्य निर्माण जे विद्यार्थ्यांना जबाबदार आणि दयाळू नागरिक बनवण्यास मदत करते.',
    'whychoose.values.stats': '३०+ वर्षांचा वारसा',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};