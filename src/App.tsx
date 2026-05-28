import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Tools from './components/Tools';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';
import SlideNav from './components/SlideNav';
import SlideWrapper from './components/SlideWrapper';
import { useSlideshow, type Slide } from './hooks/useSlideshow';

const slides: Slide[] = [
  { id: 'home', label: 'Home', icon: '🏠' },
  { id: 'about', label: 'About', icon: '👤' },
  { id: 'projects', label: 'Projects', icon: '📂' },
  { id: 'skills', label: 'Skills', icon: '🎯' },
  { id: 'tools', label: 'Tools & Hobbies', icon: '🛠️' },
  { id: 'contact', label: 'Contact', icon: '✉️' },
];

type AnimationType = 'fade-up' | 'fade-down' | 'zoom-in' | 'slide-left' | 'slide-right' | 'flip' | 'rotate-in' | 'blur-in';

const slideAnimations: AnimationType[] = [
  'fade-up',
  'slide-right',
  'zoom-in',
  'slide-left',
  'rotate-in',
  'blur-in',
];

export default function App() {
  const { activeIndex, direction, goTo, goNext, goPrev, containerRef } = useSlideshow(slides);

  return (
    <div
      ref={containerRef}
      className="relative w-screen h-screen overflow-hidden bg-gray-950"
    >
      <ParticleBackground />

      {/* Slide container */}
      <div className="relative w-full h-full z-10">
        <SlideWrapper isActive={activeIndex === 0} direction={direction} animation={slideAnimations[0]}>
          <Hero isActive={activeIndex === 0} />
        </SlideWrapper>

        <SlideWrapper isActive={activeIndex === 1} direction={direction} animation={slideAnimations[1]}>
          <About isActive={activeIndex === 1} />
        </SlideWrapper>

        <SlideWrapper isActive={activeIndex === 2} direction={direction} animation={slideAnimations[2]}>
          <Projects isActive={activeIndex === 2} />
        </SlideWrapper>

        <SlideWrapper isActive={activeIndex === 3} direction={direction} animation={slideAnimations[3]}>
          <Skills isActive={activeIndex === 3} />
        </SlideWrapper>

        <SlideWrapper isActive={activeIndex === 4} direction={direction} animation={slideAnimations[4]}>
          <Tools isActive={activeIndex === 4} />
        </SlideWrapper>

        <SlideWrapper isActive={activeIndex === 5} direction={direction} animation={slideAnimations[5]}>
          <Contact isActive={activeIndex === 5} />
        </SlideWrapper>
      </div>

      {/* Navigation */}
      <SlideNav
        slides={slides}
        activeIndex={activeIndex}
        goTo={goTo}
        goNext={goNext}
        goPrev={goPrev}
      />

      {/* Top navbar mini */}
      <div className="fixed top-0 left-0 w-full z-40 bg-gray-950/60 backdrop-blur-lg border-b border-gray-800/30">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <button onClick={() => goTo(0)} className="text-xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Sachin
            </span>
            <span className="text-white">.Sagar</span>
          </button>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-6">
            {slides.map((slide, i) => (
              <li key={slide.id}>
                <button
                  onClick={() => goTo(i)}
                  className={`text-sm font-medium transition-all duration-300 relative group ${
                    activeIndex === i ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  {slide.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-300 ${
                      activeIndex === i ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          {/* Current slide label */}
          <div className="md:hidden text-gray-500 text-xs font-medium uppercase tracking-widest">
            {slides[activeIndex].icon} {slides[activeIndex].label}
          </div>
        </div>
      </div>
    </div>
  );
}
