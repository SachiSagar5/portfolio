import { ChevronUp, ChevronDown } from 'lucide-react';

interface SlideNavProps {
  slides: { id: string; label: string; icon: string }[];
  activeIndex: number;
  goTo: (i: number) => void;
  goNext: () => void;
  goPrev: () => void;
}

export default function SlideNav({ slides, activeIndex, goTo, goNext, goPrev }: SlideNavProps) {
  const progress = ((activeIndex + 1) / slides.length) * 100;

  return (
    <>
      {/* Right side dot navigation */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-1">
        {/* Up arrow */}
        <button
          onClick={goPrev}
          disabled={activeIndex === 0}
          className="mb-3 w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-500 hover:text-white hover:border-purple-500 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
        >
          <ChevronUp size={16} />
        </button>

        {slides.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => goTo(i)}
            className="group relative flex items-center py-2"
            title={slide.label}
          >
            {/* Tooltip */}
            <span className="absolute right-10 whitespace-nowrap bg-gray-900/90 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-lg border border-gray-700 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
              {slide.icon} {slide.label}
            </span>

            {/* Dot */}
            <div className="relative">
              {i === activeIndex && (
                <div className="absolute -inset-1.5 rounded-full bg-purple-500/20 animate-pulse" />
              )}
              <div
                className={`relative w-3 h-3 rounded-full transition-all duration-500 ${
                  i === activeIndex
                    ? 'bg-gradient-to-r from-purple-400 to-cyan-400 scale-125 shadow-lg shadow-purple-500/30'
                    : i < activeIndex
                    ? 'bg-purple-500/50 scale-100'
                    : 'bg-gray-700 scale-75 group-hover:bg-gray-500 group-hover:scale-100'
                }`}
              />
            </div>
          </button>
        ))}

        {/* Down arrow */}
        <button
          onClick={goNext}
          disabled={activeIndex === slides.length - 1}
          className="mt-3 w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-500 hover:text-white hover:border-purple-500 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
        >
          <ChevronDown size={16} />
        </button>
      </div>

      {/* Bottom progress bar */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gray-900 z-50">
        <div
          className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Bottom slide counter */}
      <div className="fixed bottom-4 left-6 z-50 flex items-center gap-3">
        <span className="text-2xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          {String(activeIndex + 1).padStart(2, '0')}
        </span>
        <div className="w-8 h-px bg-gray-700" />
        <span className="text-gray-600 text-sm font-medium">
          {String(slides.length).padStart(2, '0')}
        </span>
      </div>

      {/* Mobile swipe hint */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-gray-900/80 backdrop-blur border border-gray-800">
          <span className="text-gray-500 text-xs">Swipe ↕</span>
        </div>
      </div>
    </>
  );
}
