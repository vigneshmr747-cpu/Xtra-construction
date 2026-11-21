import {ArrowUp, Phone, Mail, MapPin} from 'lucide-react';
import {IMAGES} from '../data/constructionData';
import {SafeImage} from './SafeImage';

interface PartnersAndFooterProps {
  onScrollToQuote: () => void;
}

export function PartnersAndFooter({onScrollToQuote}: PartnersAndFooterProps) {
  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <div id="partners" className="bg-[#243344] text-white">
      {/* Overlapping #f4c03b Yellow Callout Banner */}
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="-mt-16 sm:-mt-20 relative z-20 bg-[#f4c03b] p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.22)] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <p className="font-display text-xs font-bold tracking-[0.18em] text-[#243344]/75 mb-1">
              TRUSTED SUPPLY &amp; ENGINEERING PARTNERS
            </p>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#243344]">
              Ready to break ground on your next development?
            </h3>
          </div>
          <button
            type="button"
            onClick={onScrollToQuote}
            className="bg-[#243344] hover:bg-white text-white hover:text-[#243344] font-display font-bold text-sm px-8 py-4 transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer"
          >
            Schedule Site Walkthrough
          </button>
        </div>

        {/* Exact Reference Partner Logos Strip */}
        <div className="py-16 border-b border-white/10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {IMAGES.partnerLogos.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center justify-center py-3 px-4 opacity-85 hover:opacity-100 transition-opacity"
              >
                <SafeImage
                  src={partner.src}
                  alt={partner.name}
                  className="max-h-14 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <footer id="footer" className="pt-16 pb-10">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-12">
            {/* Exact Reference Centered Footer Logo */}
            <div className="inline-flex items-center justify-center mb-8">
              <SafeImage
                src={IMAGES.logoFooter}
                alt="XTRA Construction Footer Logo"
                fallbackTitle="XTRA CONSTRUCTION"
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              A company is any entity that engages in business. Companies can be structured in
              different ways. For example, your company can be a sole proprietorship, a partnership,
              or a corporation.
            </p>

            {/* Quick Contact Line */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-300 mb-8">
              <a
                href="tel:+18182345678"
                className="inline-flex items-center gap-2 hover:text-[#f4c03b] transition-colors tabular-nums"
              >
                <Phone className="w-4 h-4 text-[#f4c03b]" />
                <span>+1 (818) 23 45 678</span>
              </a>
              <a
                href="mailto:estimates@xtrabuild.com"
                className="inline-flex items-center gap-2 hover:text-[#f4c03b] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#f4c03b]" />
                <span>estimates@xtrabuild.com</span>
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#f4c03b]" />
                <span>Los Angeles, CA</span>
              </span>
            </div>
          </div>

          {/* Bottom Legal & Navigation Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400">
            <div>© 2026 XTRA Construction. All rights reserved.</div>

            <div className="flex items-center gap-6">
              <a href="#quote" className="hover:text-[#f4c03b] transition-colors">
                Contact Us
              </a>
              <a href="#about" className="hover:text-[#f4c03b] transition-colors">
                About
              </a>
              <a href="#services" className="hover:text-[#f4c03b] transition-colors">
                Services
              </a>
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Back to top"
                className="w-9 h-9 bg-[#f4c03b] hover:bg-white text-[#243344] flex items-center justify-center transition-colors cursor-pointer"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
