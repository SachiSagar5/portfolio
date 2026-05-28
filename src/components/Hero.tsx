import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { imagePath } from '../utils/imagePath';

const roles = ['UI Developer', 'Web Designer', 'Frontend Engineer', 'Creative Thinker'];

function useTypingEffect(words: string[], typingSpeed = 100, deletingSpeed = 60, pauseDuration = 2000) {
  const [display, setDisplay] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting) {
      if (display.length < currentWord.length) {
        timeout = setTimeout(() => setDisplay(currentWord.slice(0, display.length + 1)), typingSpeed);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
      }
    } else {
      if (display.length > 0) {
        timeout = setTimeout(() => setDisplay(currentWord.slice(0, display.length - 1)), deletingSpeed);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [display, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return display;
}

export default function Hero({ isActive }: { isActive: boolean }) {
  const [loaded, setLoaded] = useState(false);
  const typedText = useTypingEffect(roles);

  useEffect(() => {
    if (isActive) {
      const t = setTimeout(() => setLoaded(true), 300);
      return () => clearTimeout(t);
    } else {
      setLoaded(false);
    }
  }, [isActive]);

  const show = isActive && loaded;

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={imagePath('/images/hero-bg.jpg')} alt="" className="w-full h-full object-cover scale-110" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/60 to-gray-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-950/30 via-transparent to-cyan-950/30" />
      </div>

      {/* Morphing blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[15%] w-80 h-80 bg-purple-600/15 rounded-full blur-3xl animate-morph" />
        <div className="absolute top-[60%] right-[10%] w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-morph" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[30%] right-[25%] w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-morph" style={{ animationDelay: '4s' }} />
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        {['⚛️', '🎨', '💻', '✨', '🚀', '🎯'].map((icon, i) => (
          <div
            key={i}
            className="absolute text-4xl md:text-5xl animate-float-random opacity-15"
            style={{
              top: `${15 + i * 12}%`,
              left: i % 2 === 0 ? `${8 + i * 4}%` : 'auto',
              right: i % 2 !== 0 ? `${8 + i * 3}%` : 'auto',
              animationDelay: `${i * 800}ms`,
              animationDuration: `${7 + i}s`,
            }}
          >
            {icon}
          </div>
        ))}
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div className={`mb-8 transition-all duration-700 ${show ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-90'}`}>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-purple-500/30 bg-purple-500/5 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
            <span className="text-purple-300 text-sm font-medium tracking-wide">Available for freelance work</span>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          </div>
        </div>

        {/* Greeting */}
        <p className={`text-gray-400 text-lg md:text-xl font-light mb-3 tracking-wide transition-all duration-700 delay-150 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Hey there! 👋 I'm
        </p>

        {/* Name */}
        <h1 className={`text-6xl md:text-8xl lg:text-9xl font-black mb-5 leading-none tracking-tighter transition-all duration-1000 delay-300 ${show ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-14 scale-95'}`}>
          <span className="hero-name-gradient inline-block">Sachin</span>
          <br />
          <span className="hero-name-gradient-alt inline-block">Sagar</span>
        </h1>

        {/* Typing */}
        <div className={`flex items-center justify-center gap-3 mb-5 transition-all duration-700 delay-500 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-purple-500" />
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-200">
            <span className="font-semibold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              {typedText}
            </span>
            <span className="inline-block w-0.5 h-7 bg-purple-400 ml-1 animate-blink align-middle" />
          </p>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-cyan-500" />
        </div>

        {/* Quote */}
        <div className={`mb-10 transition-all duration-700 delay-700 ${show ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
          <div className="inline-block px-8 py-4 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/[0.06]">
            <p className="text-gray-300 text-base md:text-lg italic font-light">
              ✦ "If you can imagine it, I can create it." ✦
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className={`flex items-center justify-center gap-6 md:gap-10 transition-all duration-700 delay-900 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { n: '8+', l: 'Years Experience' },
            { n: '30+', l: 'Projects Built' },
            { n: '11+', l: 'Tech Skills' },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-6 md:gap-10">
              {i > 0 && <div className="w-px h-10 bg-gray-800" />}
              <div className="text-center px-2">
                <p className="text-2xl md:text-3xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">{s.n}</p>
                <p className="text-gray-500 text-xs md:text-sm mt-1 font-medium">{s.l}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-700 delay-1100 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        <div className="flex flex-col items-center gap-2">
          <span className="text-gray-600 text-xs uppercase tracking-widest">Scroll down</span>
          <div className="w-6 h-10 rounded-full border-2 border-gray-700 flex justify-center pt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-scroll-dot" />
          </div>
        </div>
      </div>
    </div>
  );
}
