import { useEffect, useState } from 'react';

const skills = [
  { name: 'HTML5', percent: 85, color: 'from-orange-500 to-red-500', icon: '🌐' },
  { name: 'CSS3', percent: 80, color: 'from-blue-500 to-cyan-500', icon: '🎨' },
  { name: 'SASS', percent: 70, color: 'from-pink-500 to-rose-500', icon: '💅' },
  { name: 'ReactJs', percent: 80, color: 'from-cyan-500 to-blue-500', icon: '⚛️' },
  { name: 'Redux', percent: 80, color: 'from-cyan-500 to-blue-500', icon: '⚛️' },
  { name: 'JavaScript', percent: 80, color: 'from-yellow-500 to-amber-500', icon: '⚡' },
  { name: 'jQuery', percent: 60, color: 'from-blue-600 to-indigo-500', icon: '📘' },
  { name: 'Photoshop', percent: 85, color: 'from-blue-500 to-purple-500', icon: '🖼️' },
  { name: 'Illustrator', percent: 75, color: 'from-amber-500 to-orange-600', icon: '✏️' },
  { name: 'Git', percent: 80, color: 'from-red-500 to-orange-500', icon: '🔀' },
  { name: 'AWS', percent: 50, color: 'from-blue-600 to-indigo-500', icon: '☁️' },
];

export default function Skills({ isActive }: { isActive: boolean }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isActive) {
      const t = setTimeout(() => setShow(true), 200);
      return () => clearTimeout(t);
    } else {
      setShow(false);
    }
  }, [isActive]);

  return (
    <div className="relative w-full h-full flex items-center overflow-y-auto overflow-x-hidden bg-gray-900/50">
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 py-16 md:py-0 w-full relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <p className="text-purple-400 font-medium tracking-widest uppercase text-sm mb-3">What I'm good at</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        {/* Skills grid - two columns */}
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-5">
          {skills.map((skill, idx) => (
            <div
              key={skill.name}
              className={`transition-all duration-700 ${show ? 'opacity-100 translate-x-0' : idx % 2 === 0 ? 'opacity-0 -translate-x-12' : 'opacity-0 translate-x-12'}`}
              style={{ transitionDelay: `${300 + idx * 80}ms` }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-semibold text-sm flex items-center gap-2">
                  <span className="text-base">{skill.icon}</span>
                  {skill.name}
                </span>
                <span className={`text-gray-400 text-sm font-mono transition-all duration-1000 ${show ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${600 + idx * 80}ms` }}>
                  {skill.percent}%
                </span>
              </div>
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden relative">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all ease-out relative`}
                  style={{
                    width: show ? `${skill.percent}%` : '0%',
                    transitionDuration: '1500ms',
                    transitionDelay: `${400 + idx * 80}ms`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 animate-shimmer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
