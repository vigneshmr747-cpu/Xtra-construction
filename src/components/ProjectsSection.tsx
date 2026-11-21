import {useState} from 'react';
import {Plus} from 'lucide-react';
import {
  PROJECTS_LIST,
  PROJECT_FILTERS,
  ProjectFilterCategory,
  ProjectItem,
} from '../data/constructionData';
import {SafeImage} from './SafeImage';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export function ProjectsSection({onSelectProject}: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilterCategory>('All');

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS_LIST
      : PROJECTS_LIST.filter((project) => project.categories.includes(activeFilter));

  return (
    <section id="projects" className="py-20 lg:py-24 bg-[#f8f9fa]">
      <div className="max-w-[1140px] mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="font-display text-sm sm:text-base font-medium tracking-[0.16em] text-[#d19d1b] mb-3">
            WE ARE PROFESSIONAL
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[50px] font-bold text-[#243344] leading-tight text-balance">
            Our latest projects
          </h2>
        </div>

        {/* Interactive Filter Tabs */}
        <div
          role="tablist"
          aria-label="Filter projects by category"
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {PROJECT_FILTERS.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2.5 font-display text-sm font-semibold transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#f4c03b] text-[#243344] shadow-[0_10px_30px_rgba(244,192,59,0.3)]'
                    : 'bg-white text-[#243344] hover:bg-[#243344] hover:text-white border border-slate-200'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4-Column Portfolio Grid (1140px+ full presence) */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredProjects.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => onSelectProject(project)}
              className="group relative aspect-square overflow-hidden bg-[#243344] text-left cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-[#f4c03b]"
            >
              <SafeImage
                src={project.image}
                alt={project.imageAlt}
                fallbackTitle={project.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* Subtle resting bottom gradient for mobile/readability */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#1a2533]/85 to-transparent lg:opacity-0 group-hover:opacity-0 transition-opacity" />
              <div className="absolute inset-x-0 bottom-0 p-5 lg:hidden">
                <h3 className="font-display text-lg font-bold text-white">{project.title}</h3>
                <p className="text-xs text-[#f4c03b]">{project.categoryLabel}</p>
              </div>

              {/* Signature #f4c03b Hover Overlay (matches .cz_grid_link:before) */}
              <div className="absolute inset-0 bg-[#f4c03b]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-250 flex flex-col items-center justify-center p-6 text-center">
                <span className="w-12 h-12 bg-[#243344] text-[#f4c03b] flex items-center justify-center mb-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-250">
                  <Plus className="w-6 h-6" strokeWidth={2.5} />
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#243344] mb-1.5">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#243344]/80">
                  {project.categoryLabel}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
