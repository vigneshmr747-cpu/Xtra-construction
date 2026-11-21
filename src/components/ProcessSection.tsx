import {IMAGES, PROCESS_STEPS} from '../data/constructionData';
import {SafeImage} from './SafeImage';

export function ProcessSection() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Title + Yellow-Backed Process Photo */}
          <div className="lg:col-span-6">
            <p className="font-display text-sm sm:text-base font-medium tracking-[0.16em] text-[#d19d1b] mb-3">
              PROCESS OF CONSTRUCTION
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#243344] leading-[1.15] text-balance mb-5">
              How it works in construction?
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-10 max-w-lg">
              Every build follows a disciplined three-stage workflow designed to eliminate budget
              surprises, accelerate permitting, and hand over turnkey spaces on schedule.
            </p>

            {/* Offset Yellow Frame matching #cz_83527 */}
            <div className="relative pt-2 sm:pl-10 pb-10">
              <div
                aria-hidden="true"
                className="hidden sm:block absolute left-0 bottom-0 w-4/5 h-4/5 bg-[#f4c03b]"
              />
              <div className="relative z-10 aspect-[4/3] w-full overflow-hidden shadow-[0_15px_50px_rgba(36,51,68,0.2)] bg-[#243344]">
                <SafeImage
                  src={IMAGES.processTeam}
                  alt="Construction engineers reviewing site blueprints on deck"
                  fallbackTitle="Construction Workflow"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: #243344 Vertical Panel with 01 / 02 / 03 Protruding Yellow Steps */}
          <div className="lg:col-span-6 lg:pl-8">
            <div className="bg-[#243344] text-white px-7 py-12 sm:px-12 sm:py-16 lg:py-20 shadow-[0_20px_60px_rgba(36,51,68,0.2)]">
              <div className="flex flex-col gap-12">
                {PROCESS_STEPS.map((step) => (
                  <div
                    key={step.stepNumber}
                    className="group relative flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-7"
                  >
                    {/* Protruding Numeral Box */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 lg:-ml-20 bg-[#f4c03b] group-hover:bg-white text-[#243344] font-display text-3xl sm:text-4xl font-bold flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-colors duration-200 tabular-nums">
                      {step.stepNumber}
                    </div>

                    <div>
                      <h3 className="font-display text-2xl sm:text-[28px] font-bold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
