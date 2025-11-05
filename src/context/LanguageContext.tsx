import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string, params?: Record<string, string>) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations
const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.language': 'العربية',
    'hero.title': 'Haram aldekka',
    'hero.subtitle': 'Your Trusted Partner in Mobile Phones & Electronics Import',
    'welcome': 'Welcome to Haram aldekka, a leading importer of high-quality mobile phones and electronic devices. With years of experience in the industry, we specialize in bringing the latest technology to our customers at competitive prices.',
    'mission': 'Our Mission',
    'mission.text': 'To provide top-quality electronic devices that enhance our customers\' lives through innovative technology, exceptional service, and reliable support.',
    'why.choose.us': 'Why Choose Us?',
    'quality': 'Premium quality mobile phones and electronic devices',
    'prices': 'Competitive wholesale and retail prices',
    'variety': 'Wide range of the latest models and brands',
    'support': 'Reliable after-sales support and service',
    'contact': 'Get In Touch',
    'call.us': 'Call Us',
    'email.us': 'Email Us',
    'footer.about': 'About Us',
    'footer.location': '📍 Location: Azzawiah, Libya',
    'footer.phone': '📞 Phone: 0021892807050',
    'footer.email': '✉️ Email: info@haramaldekka.com',
    'footer.rights': '© 2025 Haram aldekka. All rights reserved.'
  },
  ar: {
    'nav.home': '   الرئيسية',
    'nav.about': ' من نحن ',
    'nav.language': 'English',
    'hero.title': 'هرم الدقـه',
    'hero.subtitle': 'شريكك الموثوق في استيراد الهواتف المحمولة والإلكترونيات',
    'welcome': 'مرحباً بكم في حرم الدكة، الرائدة في استيراد الهواتف المحمولة والأجهزة الإلكترونية عالية الجودة. مع سنوات من الخبرة في المجال، نختص في تقديم أحدث التقنيات لعملائنا بأسعار تنافسية.',
    'mission': 'مهمتنا',
    'mission.text': 'توفير أجهزة إلكترونية عالية الجودة تعزز حياة عملائنا من خلال تقنيات مبتكرة وخدمة استثنائية ودعم موثوق.',
    'why.choose.us': 'لماذا تختارنا؟',
    'quality': 'هواتف محمولة وأجهزة إلكترونية عالية الجودة',
    'prices': 'أسعار تنافسية بالجملة والتجزئة',
    'variety': 'تشكيلة واسعة من أحدث الموديلات والعلامات التجارية',
    'support': 'خدمة ودعم ما بعد البيع الموثوق به',
    'contact': 'اتصل بنا',
    'call.us': 'اتصل بنا',
    'email.us': 'راسلنا',
    'footer.about': ' من نحن ',
    'footer.location': '📍 العنوان: الزاوية، ليبيا',
    'footer.phone': '📞 الهاتف: 00218919827050',
    'footer.email': '✉️ البريد الإلكتروني: info@haramaldekka.com',
    'footer.rights': '© 2025 هرم الدقـه. جميع الحقوق محفوظة.'
  }
};

type Translations = typeof translations.en;

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'en' ? 'ar' : 'en');
    document.documentElement.dir = language === 'en' ? 'rtl' : 'ltr';
    document.documentElement.lang = language === 'en' ? 'ar' : 'en';
  };

  const t = (key: string, params?: Record<string, string>): string => {
    let text = translations[language][key as keyof Translations] || key;
    
    if (params) {
      Object.entries(params).forEach(([param, value]) => {
        text = text.replace(`{{${param}}}`, value);
      });
    }
    
    return text;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
