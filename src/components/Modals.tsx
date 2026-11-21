import {useEffect, useState} from 'react';
import {
  X,
  Search,
  Check,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  Maximize2,
  Building2,
  ArrowRight,
} from 'lucide-react';
import {
  FeatureCardItem,
  PROJECTS_LIST,
  ProjectItem,
  SERVICES_LIST,
  ServiceItem,
} from '../data/constructionData';
import {SafeImage} from './SafeImage';

/* -------------------------------------------------------------------------- */
/* 1. Showreel Video Modal                                                    */
/* -------------------------------------------------------------------------- */

export function VideoModal({open, onClose}: {open: boolean; onClose: () => void}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Company Capabilities Showreel"
      className="fixed inset-0 z-50 bg-[#1a2533]/85 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#243344] text-white shadow-[0_25px_70px_rgba(0,0,0,0.45)] border-t-4 border-[#f4c03b]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <h3 className="font-display text-lg font-bold">XTRA Construction — Engineering Overview</h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close video modal"
            className="w-9 h-9 flex items-center justify-center text-slate-300 hover:text-[#f4c03b] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <div className="aspect-video bg-[#1a2533] border border-white/10 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 bg-[#f4c03b] text-[#243344] flex items-center justify-center mb-5">
              <Building2 className="w-8 h-8" />
            </div>
            <h4 className="font-display text-2xl font-bold mb-3">
              24 Years of Structural &amp; Civil Precision
            </h4>
            <p className="text-sm sm:text-base text-slate-300 max-w-lg mb-6 leading-relaxed">
              From steel high-rise frames and LEED Platinum commercial campuses to multi-lane civil
              roadways, our field crews maintain a 98% on-time handover record across 450+ projects.
            </p>
            <div className="grid grid-cols-3 gap-6 w-full max-w-md pt-5 border-t border-white/10">
              <div>
                <div className="font-display text-xl font-bold text-[#f4c03b] tabular-nums">450+</div>
                <div className="text-xs text-slate-400">Projects Built</div>
              </div>
              <div>
                <div className="font-display text-xl font-bold text-[#f4c03b] tabular-nums">120</div>
                <div className="text-xs text-slate-400">Licensed Engineers</div>
              </div>
              <div>
                <div className="font-display text-xl font-bold text-[#f4c03b] tabular-nums">0</div>
                <div className="text-xs text-slate-400">Lost-Time Incidents</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 2. Search Overlay Modal                                                    */
/* -------------------------------------------------------------------------- */

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
  onSelectProject: (project: ProjectItem) => void;
  onSelectService: (service: ServiceItem) => void;
}

const TRENDING_TERMS = ['Building', 'Road Construction', 'Renovation', 'Maintenance', 'Hotel'];

export function SearchModal({
  open,
  onClose,
  onSelectProject,
  onSelectService,
}: SearchModalProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const q = query.trim().toLowerCase();
  const matchedServices = SERVICES_LIST.filter(
    (s) => !q || s.title.toLowerCase().includes(q) || s.summary.toLowerCase().includes(q),
  );
  const matchedProjects = PROJECTS_LIST.filter(
    (p) =>
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.categoryLabel.toLowerCase().includes(q) ||
      p.location.toLowerCase().includes(q),
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search services and projects"
      className="fixed inset-0 z-50 bg-[#1a2533]/85 backdrop-blur-sm flex items-start justify-center p-4 pt-16 sm:pt-24 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white text-[#243344] shadow-[0_25px_70px_rgba(0,0,0,0.35)] border-t-4 border-[#f4c03b]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#d19d1b] shrink-0" />
          <input
            type="search"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, services, or locations..."
            className="w-full text-base text-[#243344] placeholder:text-slate-400 focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="w-9 h-9 flex items-center justify-center text-slate-400 hover:text-[#243344] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 sm:p-6 max-h-[65vh] overflow-y-auto space-y-6">
          {/* Quick Filter Suggestions */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-500 font-semibold mr-1">Popular:</span>
            {TRENDING_TERMS.map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => setQuery(term)}
                className="px-2.5 py-1 bg-slate-100 hover:bg-[#f4c03b] text-[#243344] font-semibold transition-colors cursor-pointer"
              >
                {term}
              </button>
            ))}
          </div>

          {matchedServices.length > 0 && (
            <div>
              <h4 className="font-display text-xs font-bold tracking-[0.14em] text-slate-400 uppercase mb-3">
                Services
              </h4>
              <div className="divide-y divide-slate-100">
                {matchedServices.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => {
                      onClose();
                      onSelectService(service);
                    }}
                    className="w-full py-3 flex items-center justify-between text-left hover:bg-slate-50 px-2 transition-colors cursor-pointer"
                  >
                    <div>
                      <div className="font-display font-bold text-sm text-[#243344]">
                        {service.title}
                      </div>
                      <div className="text-xs text-slate-500 line-clamp-1">{service.summary}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#d19d1b] shrink-0 ml-3" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {matchedProjects.length > 0 && (
            <div>
              <h4 className="font-display text-xs font-bold tracking-[0.14em] text-slate-400 uppercase mb-3">
                Projects ({matchedProjects.length})
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {matchedProjects.map((project) => (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => {
                      onClose();
                      onSelectProject(project);
                    }}
                    className="flex items-center gap-3 p-2 border border-slate-100 hover:border-[#f4c03b] text-left transition-colors cursor-pointer"
                  >
                    <SafeImage
                      src={project.image}
                      alt={project.imageAlt}
                      className="w-14 h-14 object-cover shrink-0"
                    />
                    <div className="min-w-0">
                      <div className="font-display text-sm font-bold text-[#243344] truncate">
                        {project.title}
                      </div>
                      <div className="text-xs text-slate-500 truncate">{project.categoryLabel}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {matchedServices.length === 0 && matchedProjects.length === 0 && (
            <p className="text-sm text-slate-500 py-6 text-center">
              No matching services or projects found for &ldquo;{query}&rdquo;.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 3. Service / Feature Detail Modal                                          */
/* -------------------------------------------------------------------------- */

interface DetailModalProps {
  service: ServiceItem | null;
  feature: FeatureCardItem | null;
  onClose: () => void;
  onRequestEstimate: (subject: string) => void;
}

export function DetailModal({service, feature, onClose, onRequestEstimate}: DetailModalProps) {
  const isOpen = Boolean(service || feature);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const title = service ? service.title : feature!.title;
  const description = service ? service.summary : feature!.description;
  const bullets = service ? service.scope : feature!.highlights;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} Specifications`}
      className="fixed inset-0 z-50 bg-[#1a2533]/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-white text-[#243344] shadow-[0_25px_70px_rgba(0,0,0,0.35)] border-t-4 border-[#f4c03b]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4 mb-5">
            <div>
              <span className="font-display text-xs font-bold tracking-[0.16em] text-[#d19d1b] uppercase">
                Technical Specification
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#243344] mt-1">
                {title}
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="w-9 h-9 bg-slate-100 hover:bg-[#243344] text-[#243344] hover:text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-base text-slate-600 leading-relaxed mb-6">{description}</p>

          <div className="bg-[#f8f9fa] p-5 mb-6 border border-slate-100">
            <h4 className="font-display text-sm font-bold text-[#243344] mb-3">
              Key Deliverables &amp; Standards
            </h4>
            <ul className="space-y-2.5">
              {bullets.map((line) => (
                <li key={line} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <Check className="w-4 h-4 text-[#d19d1b] shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          {service && (
            <div className="grid grid-cols-2 gap-4 text-xs mb-7">
              <div className="p-3 bg-slate-50 border border-slate-100">
                <div className="text-slate-500">Compliance</div>
                <div className="font-semibold text-[#243344] mt-0.5">{service.standards}</div>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-100">
                <div className="text-slate-500">Typical Timeline</div>
                <div className="font-semibold text-[#243344] mt-0.5 tabular-nums">
                  {service.turnaround}
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-wrap items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-3 text-sm font-semibold text-slate-600 hover:text-[#243344] cursor-pointer"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onRequestEstimate(`${title} Inquiry`);
              }}
              className="bg-[#f4c03b] hover:bg-[#243344] text-[#243344] hover:text-[#f4c03b] font-display font-bold text-sm px-6 py-3 transition-colors cursor-pointer"
            >
              Request Quote for {title}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 4. Project Case Study Lightbox Modal                                       */
/* -------------------------------------------------------------------------- */

interface ProjectLightboxProps {
  project: ProjectItem | null;
  onClose: () => void;
  onChangeProject: (project: ProjectItem) => void;
  onRequestSimilar: (subject: string) => void;
}

export function ProjectLightboxModal({
  project,
  onClose,
  onChangeProject,
  onRequestSimilar,
}: ProjectLightboxProps) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [project, onClose]);

  if (!project) return null;

  const currentIdx = PROJECTS_LIST.findIndex((p) => p.id === project.id);
  const prevProject =
    PROJECTS_LIST[(currentIdx - 1 + PROJECTS_LIST.length) % PROJECTS_LIST.length];
  const nextProject = PROJECTS_LIST[(currentIdx + 1) % PROJECTS_LIST.length];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} Case Study`}
      className="fixed inset-0 z-50 bg-[#1a2533]/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl bg-white text-[#243344] shadow-[0_25px_70px_rgba(0,0,0,0.4)] grid grid-cols-1 md:grid-cols-12 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="md:col-span-6 relative bg-[#243344] aspect-square md:aspect-auto">
          <SafeImage
            src={project.image}
            alt={project.imageAlt}
            fallbackTitle={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:col-span-6 p-7 sm:p-9 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <p className="text-xs font-bold tracking-[0.14em] text-[#d19d1b] uppercase">
                  {project.categoryLabel}
                </p>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#243344] mt-1">
                  {project.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close project lightbox"
                className="w-9 h-9 bg-slate-100 hover:bg-[#243344] text-[#243344] hover:text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              {project.summary}
            </p>

            <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-100 text-xs sm:text-sm mb-6">
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin className="w-4 h-4 text-[#d19d1b] shrink-0" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 tabular-nums">
                <Calendar className="w-4 h-4 text-[#d19d1b] shrink-0" />
                <span>Completed {project.year}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 tabular-nums">
                <Maximize2 className="w-4 h-4 text-[#d19d1b] shrink-0" />
                <span>{project.area}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Building2 className="w-4 h-4 text-[#d19d1b] shrink-0" />
                <span className="truncate">{project.client}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onChangeProject(prevProject)}
                aria-label="Previous project"
                className="w-10 h-10 border border-slate-200 hover:bg-[#243344] hover:text-[#f4c03b] flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => onChangeProject(nextProject)}
                aria-label="Next project"
                className="w-10 h-10 border border-slate-200 hover:bg-[#243344] hover:text-[#f4c03b] flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <button
              type="button"
              onClick={() => {
                onClose();
                onRequestSimilar(`Project Inquiry: ${project.title}`);
              }}
              className="bg-[#f4c03b] hover:bg-[#243344] text-[#243344] hover:text-[#f4c03b] font-display font-bold text-xs sm:text-sm px-5 py-3 transition-colors cursor-pointer"
            >
              Inquire Similar Build
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
