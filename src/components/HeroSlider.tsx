import {useState, useEffect} from 'react';
import {Play, ChevronLeft, ChevronRight, ArrowRight} from 'lucide-react';
import {HERO_SLIDES} from '../data/constructionData';
import {SafeImage} from './SafeImage';

interface HeroSliderProps {
  onOpenVideo: () => void;
  onScrollToTarget: (target: string) => void;
}

export function HeroSlider({onOpenVideo, onScrollToTarget}: HeroSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8000);
    return () => window.clearInterval(timer);
  }, []);

  const currentSlide = HERO_SLIDES[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section
      id="top"
      aria-label="Featured Construction Highlights"
      className={`relative w-full min-h-[560px] sm:min-h-[640px] lg:min-h-[700px] overflow-hidden flex items-center transition-colors duration-500 ${
        currentSlide.variant === 'light-cutout' ? 'bg-white' : 'bg-[#243344]'
      }`}
    >
      {/* Slide 1: Exact Reference Light Architectural Cutout + Skewed Gold Stripes */}
      {currentSlide.variant === 'light-cutout' ? (
        <>
          {/* Three Diagonal Skewed Gold Layers on Right (matching Revolution Slider layers 23, 24, 25) */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute inset-y-0 right-[-24%] w-[62%] bg-[#f4c03b]/25 -skew-x-[33deg] origin-top pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="hidden md:block absolute inset-y-0 right-[-32%] w-[60%] bg-[#f4c03b]/25 -skew-x-[33deg] origin-top pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="hidden md:block absolute inset-y-0 right-[-42%] w-[58%] bg-[#f4c03b] -skew-x-[33deg] origin-top pointer-events-none"
          />

          <div className="relative z-10 max-w-[1140px] w-full mx-auto px-6 pt-14 lg:pt-16 pb-0 grid grid-cols-1 lg:grid-cols-12 items-end gap-6">
            {/* Left Copy Column */}
            <div className="lg:col-span-6 pb-16 lg:pb-24">
              <h1 className="font-display text-5xl sm:text-6xl lg:text-[78px] font-bold text-[#243344] leading-[0.95] tracking-tight mb-7">
                {currentSlide.headlineLines?.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
                {currentSlide.highlightedWord && (
                  <span className="block text-[#f4c03b]">{currentSlide.highlightedWord}</span>
                )}
              </h1>

              <p className="text-xl sm:text-2xl lg:text-[28px] text-[#243344] font-normal leading-snug max-w-lg mb-9">
                {currentSlide.subtext}
              </p>

              <div className="flex flex-wrap items-center gap-5">
                <button
                  type="button"
                  onClick={() => onScrollToTarget(currentSlide.primaryCtaTarget)}
                  className="inline-flex items-center gap-3 bg-[#f4c03b] hover:bg-[#243344] text-[#243344] hover:text-[#f4c03b] font-display font-bold text-sm sm:text-base px-8 py-4 transition-colors duration-200 shadow-[0_12px_30px_rgba(244,192,59,0.3)] cursor-pointer whitespace-nowrap"
                >
                  <span>{currentSlide.primaryCtaLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {currentSlide.showVideoTrigger && (
                  <button
                    type="button"
                    onClick={onOpenVideo}
                    className="inline-flex items-center gap-3 text-[#243344] hover:text-[#d19d1b] font-display font-semibold text-sm sm:text-base group cursor-pointer py-2 pr-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4c03b]"
                  >
                    <span className="w-12 h-12 rounded-full border-2 border-[#243344]/25 group-hover:border-[#f4c03b] group-hover:bg-[#f4c03b] group-hover:text-[#243344] flex items-center justify-center transition-all duration-200">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </span>
                    <span className="whitespace-nowrap">Watch video</span>
                  </button>
                )}
              </div>
            </div>

            {/* Right Cutout Engineer Model (man-model.png) */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end self-end">
              <SafeImage
                src={currentSlide.image}
                alt={currentSlide.imageAlt}
                fallbackTitle="XTRA Engineering"
                className="w-full max-w-[460px] lg:max-w-[560px] h-auto object-contain object-bottom drop-shadow-[0_15px_35px_rgba(36,51,68,0.18)]"
              />
            </div>
          </div>
        </>
      ) : (
        /* Slide 2: Full-bleed twilight construction photograph (slide-2.jpg) */
        <>
          <div className="absolute inset-0">
            <SafeImage
              src={currentSlide.image}
              alt={currentSlide.imageAlt}
              fallbackTitle="XTRA Construction"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a2533]/88 via-[#243344]/68 to-[#243344]/35" />
          </div>

          <div className="relative z-10 max-w-[1140px] w-full mx-auto px-6 py-20 lg:py-28">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 mb-5">
                <span className="w-8 h-[3px] bg-[#f4c03b]" aria-hidden="true" />
                <span className="font-display text-xs sm:text-sm font-bold tracking-[0.2em] text-[#f4c03b]">
                  XTRA CONSTRUCTION
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl lg:text-[54px] font-bold text-white leading-[1.15] tracking-tight text-balance mb-6">
                {currentSlide.headline}
              </h2>

              <p className="text-lg sm:text-2xl text-slate-200 leading-relaxed max-w-xl mb-10">
                {currentSlide.subtext}
              </p>

              <div className="flex flex-wrap items-center gap-5">
                <button
                  type="button"
                  onClick={() => onScrollToTarget(currentSlide.primaryCtaTarget)}
                  className="inline-flex items-center gap-3 bg-[#f4c03b] hover:bg-white text-[#243344] font-display font-bold text-sm sm:text-base px-8 py-4 transition-colors duration-200 shadow-[0_12px_35px_rgba(0,0,0,0.28)] cursor-pointer whitespace-nowrap"
                >
                  <span>{currentSlide.primaryCtaLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Carousel Prev/Next Controls */}
      <div className="absolute inset-y-0 left-3 sm:left-5 flex items-center z-20">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous slide"
          className="w-11 h-11 bg-[#243344]/80 hover:bg-[#f4c03b] text-white hover:text-[#243344] flex items-center justify-center transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-3 sm:right-5 flex items-center z-20">
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next slide"
          className="w-11 h-11 bg-[#243344]/80 hover:bg-[#f4c03b] text-white hover:text-[#243344] flex items-center justify-center transition-colors cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom Slide Bars */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {HERO_SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show slide ${index + 1}`}
            className={`h-1.5 transition-all duration-300 cursor-pointer ${
              index === activeIndex
                ? 'w-10 bg-[#f4c03b]'
                : currentSlide.variant === 'light-cutout'
                  ? 'w-5 bg-[#243344]/25 hover:bg-[#243344]/60'
                  : 'w-5 bg-white/40 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
