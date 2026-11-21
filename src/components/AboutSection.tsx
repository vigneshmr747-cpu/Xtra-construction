import {Check} from 'lucide-react';
import {ABOUT_CHECKLIST, IMAGES} from '../data/constructionData';
import {SafeImage} from './SafeImage';

export function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Yellow Asymmetric Frame + Overlapping Site Photograph */}
          <div className="lg:col-span-6 relative py-6 lg:py-10">
            {/* Solid #f4c03b offset block behind image */}
            <div
              aria-hidden="true"
              className="hidden sm:block absolute top-0 bottom-0 left-0 right-16 bg-[#f4c03b]"
            />
            <div className="relative z-10 sm:pl-10 sm:pr-0">
              <div className="aspect-[4/3] w-full overflow-hidden shadow-[0_15px_50px_rgba(36,51,68,0.2)] bg-[#243344]">
                <SafeImage
                  src={IMAGES.aboutSite}
                  alt="Modern commercial building facade under structural construction"
                  fallbackTitle="XTRA Engineering"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Company Narrative & 2x2 Capability Grid */}
          <div className="lg:col-span-6">
            <p className="font-display text-sm sm:text-base font-medium tracking-[0.16em] text-[#d19d1b] mb-3">
              ABOUT OUR COMPANY
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#243344] leading-[1.15] text-balance mb-6">
              Always dedicated and devoted
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-10">
              For over two decades, our licensed structural engineers, project managers, and master
              trade crews have delivered commercial towers, civic infrastructure, and architectural
              renovations with unwavering safety compliance, transparent cost control, and precision
              craftsmanship.
            </p>

            {/* 2x2 Checklist matching XTRA Construction #47689 */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-6">
              {ABOUT_CHECKLIST.map((item) => (
                <li key={item} className="group flex items-center gap-4">
                  <span className="w-11 h-11 shrink-0 bg-[#f4c03b]/15 group-hover:bg-[#f4c03b] text-[#d19d1b] group-hover:text-[#243344] flex items-center justify-center transition-colors duration-200">
                    <Check className="w-5 h-5" strokeWidth={2.5} />
                  </span>
                  <span className="font-display text-base sm:text-lg font-semibold text-[#243344]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
