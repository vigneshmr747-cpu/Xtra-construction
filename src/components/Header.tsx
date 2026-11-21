import {useState, useEffect} from 'react';
import {Phone, Search, Menu, X, ChevronDown, ArrowRight} from 'lucide-react';
import {IMAGES} from '../data/constructionData';
import {SafeImage} from './SafeImage';

interface HeaderProps {
  onOpenSearch: () => void;
  onRequestQuote: () => void;
}

const NAV_LINKS = [
  {label: 'Home', href: '#top'},
  {label: 'About', href: '#about'},
  {label: 'Services', href: '#services'},
  {label: 'Projects', href: '#projects'},
  {label: 'Contact', href: '#quote'},
];

const DROPDOWN_PAGES = [
  {label: 'Features at a Glance', href: '#features'},
  {label: 'Construction Process', href: '#process'},
  {label: 'Client Testimonials', href: '#testimonials'},
  {label: 'Trusted Partners', href: '#partners'},
];

export function Header({onOpenSearch, onRequestQuote}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setPagesOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <>
      {/* Desktop Top Utility Bar */}
      <div className="hidden lg:block bg-[#243344] text-white border-b border-white/10">
        <div className="max-w-[1140px] mx-auto px-6 h-11 flex items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <a
              href="tel:+18182345678"
              className="flex items-center gap-2 text-slate-300 hover:text-[#f4c03b] transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#f4c03b]" />
              <span>Have any questions? call us</span>
              <span className="font-semibold text-white tabular-nums">+1 (818) 23 45 678</span>
            </a>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-4 text-slate-300">
              {['Facebook', 'Twitter', 'Instagram', 'Linkedin'].map((network) => (
                <a
                  key={network}
                  href={`#${network.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#footer');
                  }}
                  className="hover:text-[#f4c03b] transition-colors whitespace-nowrap"
                >
                  {network}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-shadow duration-200 ${
          scrolled
            ? 'bg-white/98 backdrop-blur-sm shadow-[0_10px_30px_rgba(36,51,68,0.1)]'
            : 'bg-white border-b border-slate-100'
        }`}
      >
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 h-16 lg:h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Reference Brand Logo */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({top: 0, behavior: 'smooth'});
            }}
            className="flex items-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4c03b]"
          >
            <SafeImage
              src={IMAGES.logoHeader}
              alt="XTRA Construction"
              fallbackTitle="XTRA CONSTRUCTION"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </a>

          {/* Zone 2: Clean Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[#243344]"
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="relative py-2 hover:text-[#d19d1b] transition-colors whitespace-nowrap shrink-0 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-[#f4c03b] hover:after:w-full after:transition-all after:duration-200"
              >
                {item.label}
              </a>
            ))}

            {/* Sections Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setPagesOpen(true)}
              onMouseLeave={() => setPagesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setPagesOpen((prev) => !prev)}
                aria-expanded={pagesOpen}
                className="flex items-center gap-1 py-2 hover:text-[#d19d1b] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4c03b]"
              >
                <span>Pages</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {pagesOpen && (
                <div className="absolute left-0 top-full pt-2 w-52 z-50">
                  <div className="bg-[#243344] text-white shadow-[0_15px_40px_rgba(36,51,68,0.25)] py-2 border-t-[3px] border-[#f4c03b]">
                    {DROPDOWN_PAGES.map((sub) => (
                      <a
                        key={sub.href}
                        href={sub.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(sub.href);
                        }}
                        className="block px-4 py-2.5 text-xs font-medium text-slate-200 hover:bg-[#f4c03b] hover:text-[#243344] transition-colors whitespace-nowrap"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Zone 3: Search Trigger + Primary CTA / Mobile Menu */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenSearch}
              aria-label="Search site"
              className="w-10 h-10 flex items-center justify-center text-[#243344] hover:text-[#d19d1b] hover:bg-slate-100 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4c03b]"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onRequestQuote}
              className="hidden sm:inline-flex items-center gap-2 bg-[#f4c03b] hover:bg-[#243344] text-[#243344] hover:text-[#f4c03b] font-display font-bold text-xs px-5 py-3 transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer shadow-[0_8px_20px_rgba(244,192,59,0.28)]"
            >
              <span>Free Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              className="lg:hidden w-11 h-11 flex items-center justify-center bg-[#243344] text-white cursor-pointer"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#243344] text-white border-t border-white/10">
            <div className="px-6 py-5 flex flex-col gap-1">
              {[...NAV_LINKS, ...DROPDOWN_PAGES].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="py-3 text-sm font-semibold text-slate-100 hover:text-[#f4c03b] border-b border-white/10 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="tel:+18182345678"
                  className="flex items-center gap-2 text-xs text-slate-300"
                >
                  <Phone className="w-4 h-4 text-[#f4c03b]" />
                  <span>+1 (818) 23 45 678</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    onRequestQuote();
                  }}
                  className="w-full py-3 bg-[#f4c03b] text-[#243344] font-display font-bold text-sm text-center cursor-pointer"
                >
                  Free Consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
