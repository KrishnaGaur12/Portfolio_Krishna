import React from 'react';
import { CubeProps } from '../types';

const FloatingCube: React.FC<CubeProps> = ({ label, size = 60, className = '', animationDelay = '0s' }) => {
  const halfSize = size / 2;
  
  // A simple CSS-only isometric-ish cube representation using transforms
  return (
    <div 
      className={`absolute ${className}`} 
      style={{ 
        width: size, 
        height: size,
        animationDelay: animationDelay,
      }}
    >
      <div className="relative w-full h-full transform-gpu hover:scale-110 transition-transform duration-300">
        {/* Front Face */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-sm rounded-lg border border-white/40 flex items-center justify-center z-10 shadow-lg"
          style={{ transform: 'rotateX(0deg) rotateY(0deg)' }}
        >
          <span className="font-serif font-bold text-coffee text-xl drop-shadow-sm">{label}</span>
        </div>
        
        {/* Top/Side pseudo-3D effect elements (simplified for flat vector style) */}
        <div 
          className="absolute -top-2 -right-2 w-full h-full bg-tan/30 rounded-lg -z-10"
        />
         <div 
          className="absolute -top-4 -right-4 w-full h-full bg-slate-gray/20 rounded-lg -z-20"
        />
      </div>
    </div>
  );
};

export default FloatingCube;