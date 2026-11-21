import {ArrowRight} from 'lucide-react';
import {IMAGES} from '../data/constructionData';
import {SafeImage} from './SafeImage';

interface DreamBannerProps {
  onScrollToQuote: () => void;
}

export function DreamBanner({onScrollToQuote}: DreamBannerProps) {
  return (
    <section className="relative bg-[#243344] py-20 lg:py-28 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0">
        <SafeImage
          src={IMAGES.featuresRowBg}
          alt=""
          className="w-full h-full object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-[#243344]/78" />
      </div>

      <div className="relative z-10 max-w-[1140px] mx-auto px-6 text-center">
        <div className="inline-flex items-center justify-center mb-6">
          <SafeImage
            src={IMAGES.safetyIcon}
            alt="Safety helmet icon"
            className="w-20 h-auto object-contain"
          />
        </div>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-[48px] font-bold text-white leading-tight text-balance max-w-3xl mx-auto mb-4">
          Building a dream <span className="text-[#f4c03b]">shouldn&apos;t be a nightmare!</span>
        </h2>

        <p className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto mb-10">
          We transform ideas and visions into winning projects.
        </p>

        <button
          type="button"
          onClick={onScrollToQuote}
          className="inline-flex items-center gap-3 bg-[#f4c03b] hover:bg-white text-[#243344] font-display font-bold text-sm sm:text-base px-9 py-4 transition-colors duration-200 shadow-[0_12px_35px_rgba(0,0,0,0.25)] cursor-pointer whitespace-nowrap"
        >
          <span>Free Consultation</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
