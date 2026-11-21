import {Quote} from 'lucide-react';
import {TESTIMONIALS_LIST} from '../data/constructionData';
import {SafeImage} from './SafeImage';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 pb-36 lg:pb-44 bg-white">
      <div className="max-w-[1140px] mx-auto px-6">
        {/* Centered Title */}
        <div className="text-center mb-20 lg:mb-24">
          <p className="font-display text-sm sm:text-base font-medium tracking-[0.16em] text-[#d19d1b] mb-3">
            SEE WHAT SAYS OUR HAPPY CLIENTS
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[50px] font-bold text-[#243344] leading-tight text-balance">
            Our happy customers
          </h2>
        </div>

        {/* Stacked Reference Testimonial Cards with Overlapping Square Portraits */}
        <div className="max-w-4xl mx-auto space-y-24 lg:space-y-20 lg:pl-16">
          {TESTIMONIALS_LIST.map((item) => (
            <article
              key={item.id}
              className="relative bg-white p-8 sm:p-12 lg:pl-36 lg:pr-14 lg:py-14 shadow-[0_10px_50px_rgba(36,51,68,0.15)] border border-slate-100"
            >
              {/* Overlapping Square Avatar (-15px 15px 0 0 #f4c03b) */}
              <div className="w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 mx-auto -mt-20 mb-8 lg:mt-0 lg:mb-0 lg:mx-0 lg:absolute lg:-top-8 lg:-left-24 bg-[#243344] shadow-[-15px_15px_0_0_#f4c03b] overflow-hidden shrink-0">
                <SafeImage
                  src={item.avatar}
                  alt={item.avatarAlt}
                  fallbackTitle={item.author}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <Quote className="w-9 h-9 text-[#f4c03b]/40 mb-4" aria-hidden="true" />

              <blockquote className="text-lg sm:text-xl lg:text-[22px] text-[#243344] leading-relaxed font-normal mb-6">
                {item.quote}
              </blockquote>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-display text-lg font-bold text-[#243344]">
                  - {item.author}
                </span>
                <span className="text-sm text-slate-500">{item.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
