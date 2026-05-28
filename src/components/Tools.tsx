import { useEffect, useState } from 'react';
import { Paintbrush, PenTool, Layers, Music, Gamepad2, Film } from 'lucide-react';

const tools = [
  { icon: Paintbrush, name: 'Adobe Photoshop', desc: 'Photo editing & UI design', gradient: 'from-blue-600 to-cyan-500' },
  { icon: PenTool, name: 'Adobe Illustrator', desc: 'Vector graphics & icons', gradient: 'from-amber-500 to-orange-600' },
  { icon: Layers, name: 'Inkscape', desc: 'Open-source vector editor', gradient: 'from-green-500 to-emerald-600' },
];

const hobbies = [
  { icon: Music, name: 'Listening Music', desc: 'Beats fuel creativity', gradient: 'from-pink-500 to-rose-600' },
  { icon: Gamepad2, name: 'Playing PC Games', desc: 'Strategy & adventure', gradient: 'from-purple-500 to-violet-600' },
  { icon: Film, name: 'Watching Movies', desc: 'Cinema enthusiast', gradient: 'from-red-500 to-rose-600' },
];

export default function Tools({ isActive }: { isActive: boolean }) {
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
    <div className="relative w-full h-full flex items-center overflow-y-auto overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-0 w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Tools */}
          <div>
            <div className={`mb-8 transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
              <p className="text-cyan-400 font-medium tracking-widest uppercase text-sm mb-3">My toolkit</p>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                Tools I <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Use</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" />
            </div>

            <div className="space-y-4">
              {tools.map((item, idx) => (
                <div
                  key={item.name}
                  className={`group flex items-center gap-5 p-5 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-cyan-500/30 transition-all duration-500 hover:bg-gray-900 hover:shadow-lg hover:shadow-cyan-500/5 cursor-default ${
                    show ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
                  }`}
                  style={{ transitionDelay: `${300 + idx * 150}ms` }}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg flex-shrink-0`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base">{item.name}</h3>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hobbies */}
          <div>
            <div className={`mb-8 transition-all duration-700 delay-200 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
              <p className="text-pink-400 font-medium tracking-widest uppercase text-sm mb-3">Beyond work</p>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                My <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Hobbies</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
            </div>

            <div className="space-y-4">
              {hobbies.map((item, idx) => (
                <div
                  key={item.name}
                  className={`group flex items-center gap-5 p-5 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-pink-500/30 transition-all duration-500 hover:bg-gray-900 hover:shadow-lg hover:shadow-pink-500/5 cursor-default ${
                    show ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
                  }`}
                  style={{ transitionDelay: `${500 + idx * 150}ms` }}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-lg flex-shrink-0`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base">{item.name}</h3>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
