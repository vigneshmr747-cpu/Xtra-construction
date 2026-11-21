import {SERVICES_LIST, ServiceItem} from '../data/constructionData';
import {SafeImage} from './SafeImage';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export function ServicesSection({onSelectService}: ServicesSectionProps) {
  return (
    <section id="services" className="bg-white pt-14 lg:pt-20">
      {/* Header Area */}
      <div className="max-w-[1140px] mx-auto px-6 text-center pb-44 sm:pb-48">
        <p className="font-display text-sm sm:text-base font-medium tracking-[0.16em] text-[#d19d1b] mb-3">
          WHAT WE CAN DO FOR YOU
        </p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-[50px] font-bold text-[#243344] leading-tight text-balance">
          Our construction services
        </h2>
      </div>

      {/* #F1F1F1 Light Gray Band with Overlapping Elevated Service Cards */}
      <div className="bg-[#f1f1f1] pb-24 lg:pb-28">
        <div className="max-w-[1140px] mx-auto px-6 -mt-36 sm:-mt-40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {SERVICES_LIST.map((service) => (
              <article
                key={service.id}
                className="group relative bg-white hover:bg-[#f4c03b] text-[#243344] px-9 pt-12 pb-16 shadow-[0_10px_50px_rgba(36,51,68,0.16)] transition-colors duration-250 flex flex-col justify-between mb-6 md:mb-0"
              >
                <div>
                  <div className="mb-10 h-16 flex items-center">
                    <SafeImage
                      src={service.iconImage}
                      alt={service.iconAlt}
                      className="h-16 w-auto object-contain transition-all duration-200 group-hover:scale-105 group-hover:brightness-0 group-hover:opacity-85"
                    />
                  </div>

                  <h3 className="font-display text-2xl font-bold text-[#243344] pb-4 mb-7 border-b-4 border-[#f4c03b] group-hover:border-[#243344] inline-block transition-colors duration-250">
                    {service.title}
                  </h3>

                  <p className="text-base text-slate-500 group-hover:text-[#243344] leading-relaxed transition-colors duration-250">
                    {service.summary}
                  </p>
                </div>

                {/* Protruding Read More Button */}
                <div className="mt-10 -mb-22">
                  <button
                    type="button"
                    onClick={() => onSelectService(service)}
                    className="inline-flex items-center justify-center bg-[#243344] group-hover:bg-white text-white group-hover:text-[#243344] hover:opacity-95 font-display font-semibold text-sm px-8 py-4 shadow-[0_10px_30px_rgba(36,51,68,0.2)] transition-colors duration-200 cursor-pointer whitespace-nowrap"
                  >
                    Read More
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
