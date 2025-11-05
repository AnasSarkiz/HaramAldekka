import { useState } from 'react';
import { useLanguage, LanguageProvider } from './context/LanguageContext';

const App = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;

function AppContent() {
  const { t, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-slate-600 text-white py-4 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold">HARAM ALDEKKA</h1>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-gray-300 focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#home" className="hover:underline">
                {t('nav.home')}
              </a>
              <a href="#about" className="hover:underline">
                {t('nav.about')}
              </a>
              <button 
                onClick={toggleLanguage} 
                className="px-3 py-1 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors"
              >
                {t('nav.language')}
              </button>
            </nav>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4 pb-4`}>
            <div className="flex flex-col space-y-3">
              <a 
                href="#home" 
                className="block px-3 py-2 hover:bg-slate-500 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.home')}
              </a>
              <a 
                href="#about" 
                className="block px-3 py-2 hover:bg-slate-500 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.about')}
              </a>
              <button 
                onClick={() => {
                  toggleLanguage();
                  setIsMenuOpen(false);
                }} 
                className="w-full text-left px-3 py-2 hover:bg-slate-500 rounded text-left"
              >
                {t('nav.language')}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - Overview */}
      <main className="flex-grow flex items-center">
        <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-2xl text-gray-500 font-medium mb-8">
              {t('hero.subtitle')}
            </p>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
              <div className="aspect-video bg-gray-100 rounded-lg mb-8 flex items-center justify-center">
                <img src="https://media.istockphoto.com/id/1037473802/photo/3d-rendering-circuit-board-and-gold-glow-chip.jpg?s=2048x2048&w=is&k=20&c=u-oHdIgbWa9lfAaKd8NUr_s0vbDdL5v3CULy4DEwU9g=" alt="Company Overview" className="w-full h-full object-cover" />
              </div>
              
              <div className="prose prose-lg text-gray-600 text-left max-w-3xl mx-auto">
                <p className="mb-6">
                  {t('welcome')}
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">{t('mission')}</h3>
                <p className="mb-6">
                  {t('mission.text')}
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">{t('why.choose.us')}</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{t('quality')}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{t('prices')}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{t('variety')}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{t('support')}</span>
                  </li>
                </ul>
                
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">{t('contact')}</h3>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="tel:+21892807050" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-800">
                      <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {t('call.us')}
                    </a>
                    <a href="mailto:info@haramaldekka.com" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                      <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {t('email.us')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="about" className="bg-gray-800 text-gray-300 py-6">
        <div className="container mx-auto px-4 text-center space-y-2">
          <h3 className="text-lg font-semibold text-white">{t('footer.about')}</h3>
          <p>{t('footer.location')}</p>
          <p>{t('footer.phone')}</p>
          <p>{t('footer.email')}</p>
          <p className="text-gray-500 text-sm mt-4">
            {t('footer.rights')}
          </p>
        </div>
      </footer>
    </div>
  );
}
