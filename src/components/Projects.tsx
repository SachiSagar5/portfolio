import { useState, useEffect } from 'react';
import { ExternalLink, ArrowUpRight, Folder } from 'lucide-react';
import { imagePath } from '../utils/imagePath';

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

const projects = [
  {
    title: 'Tool kit login',
    description: 'A modern task management app built with TypeScript. Features task creation, completion tracking & filtering.',
    image: '/images/project-timesheet.jpg',
    tags: ['TypeScript', 'React', 'CSS3'],
    github: '',
    featured: true,
    year: '2023',
  },
  {
    title: 'Tool kit Dashboard',
    description: 'Goal-setting & progress tracking app. Define goals, milestones, and visualize progress with charts.',
    image: '/images/project-todolist.jpg ',
    tags: ['TypeScript', 'React', 'StackBlitz'],
    github: '',
    featured: true,
    year: '2023',
  },
  {
    title: 'Trust Rider Mobile App',
    description: 'Time-tracking tool for logging work hours, generating reports & managing employee schedules.',
    image: '/images/trustrider.jpg',
    tags: ['JavaScript', 'HTML5', 'CSS3'],
    github: '',
    featured: false,
    year: '2022',
  },
  {
    title: 'Book Cab view',
    description: 'Personal portfolio showcasing skills & projects with responsive design and smooth animations.',
    image: '/images/BookCab.jpg',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    github: '',
    live: '',
    featured: false,
    year: '2022',
  },
];

const filters = ['All', 'Featured', 'TypeScript', 'JavaScript'];

function ProjectCard({
  project,
  index,
  show,
}: {
  project: (typeof projects)[0];
  index: number;
  show: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
      style={{ transitionDelay: `${400 + index * 120}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute -inset-1 bg-gradient-to-r from-purple-600/50 via-pink-600/50 to-cyan-600/50 rounded-2xl blur-xl transition-opacity duration-500 ${isHovered ? 'opacity-40' : 'opacity-0'}`} />
      <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-all duration-500">
        <div className="relative h-40 overflow-hidden">
          <img
            src={imagePath(project.image)}
            alt={project.title}
            className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'scale-110 blur-[1px]' : 'scale-100'}`}
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-90' : 'opacity-60'}`} />
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 backdrop-blur-sm">{project.year}</span>
          </div>
          {project.featured && (
            <div className="absolute top-3 right-3">
              <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 backdrop-blur-sm">⭐ Featured</span>
            </div>
          )}
          <div className={`absolute inset-0 flex items-center justify-center gap-3 transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-purple-500/30 transition-all duration-300 hover:scale-110">
              <GithubIcon className="w-4 h-4" />
            </a>
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-cyan-500/30 transition-all duration-300 hover:scale-110">
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors duration-300">{project.title}</h3>
            <ArrowUpRight className={`w-4 h-4 text-gray-600 transition-all duration-300 flex-shrink-0 ${isHovered ? 'text-purple-400 translate-x-0.5 -translate-y-0.5' : ''}`} />
          </div>
          <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className="text-[10px] font-medium px-2 py-1 rounded-md bg-gray-800/80 text-gray-400 border border-gray-700/50">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects({ isActive }: { isActive: boolean }) {
  const [show, setShow] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    if (isActive) {
      const t = setTimeout(() => setShow(true), 200);
      return () => clearTimeout(t);
    } else {
      setShow(false);
    }
  }, [isActive]);

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Featured') return p.featured;
    return p.tags.includes(activeFilter);
  });

  return (
    <div className="relative w-full h-full flex items-center overflow-y-auto overflow-x-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/3 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-600/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-8 w-full relative z-10">
        {/* Header */}
        <div className={`text-center mb-10 transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 mb-4">
            <Folder className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">Portfolio Showcase</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-3">
            My <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        {/* Filters */}
        <div className={`flex flex-wrap items-center justify-center gap-2 mb-8 transition-all duration-700 delay-200 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/20'
                  : 'bg-gray-800/50 text-gray-400 border border-gray-700/50 hover:border-purple-500/30 hover:text-purple-300'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} show={show} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className={`mt-8 text-center transition-all duration-700 delay-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="https://github.com/SachiSagar5"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-gray-700 bg-gray-900/50 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-500"
          >
            <GithubIcon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
            <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">View all on GitHub</span>
            <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-purple-400 transition-all" />
          </a>
        </div>
      </div>
    </div>
  );
}
