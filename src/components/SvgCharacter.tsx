import React from 'react';
import { CharacterProps } from '../types';

const SvgCharacter: React.FC<CharacterProps> = ({ customImage }) => {
  if (customImage) {
    return (
       <div className="relative w-full h-full flex justify-center items-end overflow-hidden">
          <img 
            src={customImage} 
            alt="Generated Character" 
            className="w-[80%] md:w-[60%] object-contain transform translate-y-4"
          />
       </div>
    );
  }

  return (
    <div className="relative w-full h-full flex justify-center items-end" aria-label="Minimal wizard boy">
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity duration-500"
      >
        <defs>
           <filter id="softBlur" x="-20%" y="-20%" width="140%" height="140%">
             <feGaussianBlur stdDeviation="1.5" result="blur" />
             <feComposite in="SourceGraphic" in2="blur" operator="over" />
           </filter>
        </defs>
        
        {/* --- Minimal Magical Aura --- */}
        <circle cx="100" cy="130" r="50" fill="#D5B893" fillOpacity="0.1" filter="url(#softBlur)" />

        {/* --- Body / Robe (Simple shapes) --- */}
        <path 
           d="M60 180 C60 150 80 145 100 145 C120 145 140 150 140 180 V200 H60 V180 Z" 
           fill="#25344F" 
        />
        {/* Collar Detail */}
        <path d="M85 145 L100 165 L115 145" fill="#EAEAEA" opacity="0.1" />

        {/* --- Head --- */}
        {/* Face Shape */}
        <rect x="75" y="85" width="50" height="65" rx="20" fill="#F0E0D0" />
        
        {/* Neck Shadow */}
        <path d="M90 148 Q100 152 110 148" stroke="#Dbb095" strokeWidth="2" strokeLinecap="round" opacity="0.4" />

        {/* --- Face Features (Minimal) --- */}
        {/* Blush */}
        <circle cx="85" cy="125" r="3" fill="#EFA8A8" opacity="0.5" />
        <circle cx="115" cy="125" r="3" fill="#EFA8A8" opacity="0.5" />

        {/* Mouth (Tiny smile) */}
        <path d="M96 135 Q100 137 104 135" stroke="#A68C7C" strokeWidth="1.5" strokeLinecap="round" />

        {/* Eyes (Simple Dots) */}
        <circle cx="88" cy="115" r="2.5" fill="#2A2A2A" />
        <circle cx="112" cy="115" r="2.5" fill="#2A2A2A" />

        {/* Glasses (Round, iconic) */}
        <g stroke="#D5B893" strokeWidth="1.5" fill="none">
            <circle cx="88" cy="115" r="9" />
            <circle cx="112" cy="115" r="9" />
            <path d="M97 115 H103" /> {/* Bridge */}
        </g>

        {/* --- Hair (Clean, modern) --- */}
        <path 
           d="M72 100 C72 75 128 75 128 100 
              C128 100 125 90 120 95
              C110 100 110 85 95 90
              C80 95 85 105 72 100 Z" 
           fill="#2A2A2A" 
        />
        {/* Hair Detail */}
        <path d="M72 100 V115 Q72 125 78 120" stroke="#2A2A2A" strokeWidth="4" strokeLinecap="round" />
        <path d="M128 100 V115 Q128 125 122 120" stroke="#2A2A2A" strokeWidth="4" strokeLinecap="round" />

        {/* --- Minimal Floating Particles --- */}
        <g fill="#FFF" opacity="0.6">
           <circle cx="60" cy="100" r="1.5">
              <animate attributeName="opacity" values="0.2;1;0.2" dur="3s" repeatCount="indefinite" />
              <animate attributeName="cy" values="100;95;100" dur="4s" repeatCount="indefinite" />
           </circle>
           <circle cx="140" cy="90" r="1">
              <animate attributeName="opacity" values="0.2;1;0.2" dur="2.5s" repeatCount="indefinite" delay="1s" />
              <animate attributeName="cy" values="90;85;90" dur="5s" repeatCount="indefinite" />
           </circle>
           <path d="M130 60 L132 65 L130 70 L128 65 Z" fill="#D5B893" opacity="0.5">
               <animate attributeName="transform" type="rotate" values="0 130 65; 360 130 65" dur="12s" repeatCount="indefinite" />
           </path>
        </g>

      </svg>
    </div>
  );
};

export default SvgCharacter;