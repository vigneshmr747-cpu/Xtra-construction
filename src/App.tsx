import {useState} from 'react';
import {Header} from './components/Header';
import {HeroSlider} from './components/HeroSlider';
import {FeaturesFlipCards} from './components/FeaturesFlipCards';
import {AboutSection} from './components/AboutSection';
import {ServicesSection} from './components/ServicesSection';
import {DreamBanner} from './components/DreamBanner';
import {ProcessSection} from './components/ProcessSection';
import {ProjectsSection} from './components/ProjectsSection';
import {QuoteSection} from './components/QuoteSection';
import {TestimonialsSection} from './components/TestimonialsSection';
import {PartnersAndFooter} from './components/PartnersAndFooter';
import {
  DetailModal,
  ProjectLightboxModal,
  SearchModal,
  VideoModal,
} from './components/Modals';
import {FeatureCardItem, ProjectItem, ServiceItem} from './data/constructionData';

export default function App() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedFeature, setSelectedFeature] = useState<FeatureCardItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [quoteSubject, setQuoteSubject] = useState('');

  const scrollToSection = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({behavior: 'smooth'});
    }
  };

  const handleRequestQuoteWithSubject = (subject = '') => {
    if (subject) {
      setQuoteSubject(subject);
    }
    scrollToSection('#quote');
  };

  return (
    <div className="min-h-screen bg-white text-[#243344] flex flex-col">
      <Header
        onOpenSearch={() => setSearchOpen(true)}
        onRequestQuote={() => handleRequestQuoteWithSubject()}
      />

      <main className="flex-1">
        <HeroSlider
          onOpenVideo={() => setVideoOpen(true)}
          onScrollToTarget={scrollToSection}
        />

        <FeaturesFlipCards
          onSelectFeature={(feature) => setSelectedFeature(feature)}
        />

        <AboutSection />

        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
        />

        <DreamBanner onScrollToQuote={() => handleRequestQuoteWithSubject()} />

        <ProcessSection />

        <ProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
        />

        <QuoteSection prefilledSubject={quoteSubject} />

        <TestimonialsSection />
      </main>

      <PartnersAndFooter onScrollToQuote={() => handleRequestQuoteWithSubject()} />

      {/* Interactive Modals */}
      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />

      <SearchModal
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectProject={(project) => setSelectedProject(project)}
        onSelectService={(service) => setSelectedService(service)}
      />

      <DetailModal
        service={selectedService}
        feature={selectedFeature}
        onClose={() => {
          setSelectedService(null);
          setSelectedFeature(null);
        }}
        onRequestEstimate={(subject) => handleRequestQuoteWithSubject(subject)}
      />

      <ProjectLightboxModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onChangeProject={(project) => setSelectedProject(project)}
        onRequestSimilar={(subject) => handleRequestQuoteWithSubject(subject)}
      />
    </div>
  );
}
