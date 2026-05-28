import { useEffect, useState } from 'react';
import { MapPin, Briefcase, Code, Palette } from 'lucide-react';
import { imagePath } from '../utils/imagePath';

const highlights = [
  { icon: Code, label: 'UI Development', desc: '8+ Years Experience' },
  { icon: Palette, label: 'UI Design', desc: 'Creative Solutions' },
  { icon: Briefcase, label: 'Current Role', desc: 'Mphasis' },
  { icon: MapPin, label: 'Location', desc: 'Bangalore, India' },
];

export default function About({ isActive }: { isActive: boolean }) {
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
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-0 w-full">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <p className="text-purple-400 font-medium tracking-widest uppercase text-sm mb-3">Get to know me</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className={`transition-all duration-1000 delay-200 ${show ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="relative group max-w-md mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative overflow-hidden rounded-2xl">
                <img src={imagePath('/images/profile.jpg')} alt="Sachin Sagar" className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-xl shadow-xl">
                <p className="text-2xl font-black">8+</p>
                <p className="text-xs font-medium opacity-90">Years Exp.</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className={`transition-all duration-1000 delay-400 ${show ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              UI Developer & Designer based in <span className="text-purple-400">Bangalore, India</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
             Hi! I'm Sachin, a passionate ReactJS Developer and Front-End Engineer with over 8 years of experience in building scalable, high-performance web applications and seamless API-driven solutions. I specialize in ReactJS, JavaScript, microfrontend architecture, and end-to-end application development, with a strong focus on responsive UI implementation, API integration, performance optimization, and modern user experiences. Currently working at Mphasis.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <div
                  key={item.label}
                  className={`group p-4 md:p-5 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-purple-500/50 transition-all duration-500 hover:bg-gray-900 hover:shadow-lg hover:shadow-purple-500/5 cursor-default ${
                    show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${600 + idx * 150}ms` }}
                >
                  <item.icon className="w-7 h-7 text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-white font-semibold text-sm">{item.label}</p>
                  <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
