import { type ReactNode } from 'react';

type AnimationType = 'fade-up' | 'fade-down' | 'zoom-in' | 'slide-left' | 'slide-right' | 'flip' | 'rotate-in' | 'blur-in';

interface SlideWrapperProps {
  children: ReactNode;
  isActive: boolean;
  direction: 'up' | 'down';
  animation?: AnimationType;
  className?: string;
  bg?: string;
}

function getAnimationClasses(animation: AnimationType, isActive: boolean, direction: 'up' | 'down') {
  const base = 'transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]';

  if (isActive) {
    return `${base} opacity-100 translate-x-0 translate-y-0 scale-100 rotate-0 blur-0`;
  }

  switch (animation) {
    case 'fade-up':
      return `${base} opacity-0 ${direction === 'down' ? 'translate-y-[80px]' : '-translate-y-[80px]'}`;
    case 'fade-down':
      return `${base} opacity-0 ${direction === 'down' ? '-translate-y-[80px]' : 'translate-y-[80px]'}`;
    case 'zoom-in':
      return `${base} opacity-0 scale-75`;
    case 'slide-left':
      return `${base} opacity-0 ${direction === 'down' ? 'translate-x-[100px]' : '-translate-x-[100px]'}`;
    case 'slide-right':
      return `${base} opacity-0 ${direction === 'down' ? '-translate-x-[100px]' : 'translate-x-[100px]'}`;
    case 'flip':
      return `${base} opacity-0 rotate-[8deg] scale-90`;
    case 'rotate-in':
      return `${base} opacity-0 rotate-[5deg] translate-y-[60px]`;
    case 'blur-in':
      return `${base} opacity-0 blur-[20px] scale-105`;
    default:
      return `${base} opacity-0 translate-y-[80px]`;
  }
}

export default function SlideWrapper({
  children,
  isActive,
  direction,
  animation = 'fade-up',
  className = '',
  bg = '',
}: SlideWrapperProps) {
  return (
    <div
      className={`absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden ${bg} ${
        isActive ? 'z-10 pointer-events-auto' : 'z-0 pointer-events-none'
      } ${className}`}
    >
      <div className={`w-full h-full ${getAnimationClasses(animation, isActive, direction)}`}>
        {children}
      </div>
    </div>
  );
}
