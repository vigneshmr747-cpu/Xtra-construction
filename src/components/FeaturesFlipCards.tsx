import {useState} from 'react';
import {FEATURE_FLIP_CARDS, FeatureCardItem, IMAGES} from '../data/constructionData';
import {SafeImage} from './SafeImage';

interface FeaturesFlipCardsProps {
  onSelectFeature: (feature: FeatureCardItem) => void;
}

export function FeaturesFlipCards({onSelectFeature}: FeaturesFlipCardsProps) {
  const [flippedId, setFlippedId] = useState<string | null>(null);

  return (
    <section id="features" className="relative bg-white pb-24 lg:pb-32">
      {/* Dark Slate Navy Header Band with row-bg.jpg */}
      <div className="relative bg-[#243344] pt-20 sm:pt-24 pb-44 sm:pb-48 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0">
          <SafeImage
            src={IMAGES.featuresRowBg}
            alt=""
            className="w-full h-full object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-[#243344]/75" />
        </div>

        <div className="relative z-10 max-w-[1140px] mx-auto px-6 text-center">
          {/* Exact Reference Safety Icon */}
          <div className="inline-flex items-center justify-center mb-6">
            <SafeImage
              src={IMAGES.safetyIcon}
              alt="Safety helmet icon"
              className="w-20 h-auto object-contain"
            />
          </div>

          <p className="font-display text-sm sm:text-base font-normal tracking-[0.18em] text-[#f4c03b] mb-3">
            FEATURES AT A GLANCE
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[50px] font-bold text-white leading-tight text-balance">
            We know what your needs are
          </h2>
        </div>
      </div>

      {/* 3 Overlapping Interactive Flip Cards */}
      <div className="relative z-20 max-w-[1140px] mx-auto px-6 -mt-32 sm:-mt-36">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {FEATURE_FLIP_CARDS.map((card) => {
            const isFlipped = flippedId === card.id;
            return (
              <div
                key={card.id}
                className={`flip-card-perspective h-[420px] sm:h-[440px] ${isFlipped ? 'is-flipped' : ''}`}
                onClick={() => setFlippedId((prev) => (prev === card.id ? null : card.id))}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setFlippedId((prev) => (prev === card.id ? null : card.id));
                  }
                }}
                tabIndex={0}
                role="button"
                aria-pressed={isFlipped}
                aria-label={`${card.title} feature card. Press Enter or tap to flip details.`}
              >
                <div className="flip-card-inner shadow-[0_15px_50px_rgba(36,51,68,0.2)]">
                  {/* Card Front Face */}
                  <div className="flip-card-face flip-card-front overflow-hidden bg-[#243344]">
                    <SafeImage
                      src={card.image}
                      alt={card.imageAlt}
                      fallbackTitle={card.title}
                      className={`w-full h-full object-cover ${card.imagePosition ?? 'object-center'}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a2533]/85 via-[#243344]/35 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-8 flex items-end justify-between gap-4">
                      <div>
                        <span className="block w-10 h-1 bg-[#f4c03b] mb-3" aria-hidden="true" />
                        <h3 className="font-display text-2xl font-bold text-white">{card.title}</h3>
                      </div>
                      <span className="text-xs font-semibold text-[#f4c03b] md:hidden">Tap</span>
                    </div>
                  </div>

                  {/* Card Back Face */}
                  <div className="flip-card-face flip-card-back bg-[#f4c03b] p-8 sm:p-9 flex flex-col items-center justify-center text-center">
                    <h3 className="font-display text-2xl font-bold text-[#243344] mb-6">
                      {card.title}
                    </h3>
                    <p className="text-base text-[#243344] leading-relaxed mb-8">
                      {card.description}
                    </p>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectFeature(card);
                      }}
                      className="bg-white hover:bg-[#243344] text-[#243344] hover:text-[#f4c03b] font-display font-semibold text-sm px-8 py-4 shadow-[0_10px_40px_rgba(36,51,68,0.16)] transition-colors duration-200 cursor-pointer whitespace-nowrap"
                    >
                      Learn More ...
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
