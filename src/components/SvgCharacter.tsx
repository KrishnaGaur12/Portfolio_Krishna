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
    <div className="relative w-full h-full flex justify-center items-end" aria-label="Cute character illustration">
      <svg
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[120%] h-auto transform translate-y-[10%]"
      >
        {/* Back Hair (Shorter for Boy) */}
        <path
          d="M130 160 C120 160 110 180 110 220 L290 220 C290 180 280 160 270 160 C250 130 150 130 130 160"
          fill="#6F4D38"
        />

        {/* Face Shape */}
        <path
          d="M110 180 C110 180 110 280 200 280 C290 280 290 180 290 180 C290 130 110 130 110 180"
          fill="#E8D5C4"
        />
        
        {/* Freckles instead of blush */}
        <circle cx="130" cy="220" r="2" fill="#632024" opacity="0.3" />
        <circle cx="140" cy="215" r="2" fill="#632024" opacity="0.3" />
        <circle cx="270" cy="220" r="2" fill="#632024" opacity="0.3" />
        <circle cx="260" cy="215" r="2" fill="#632024" opacity="0.3" />


        {/* Front Hair (Messy/Short Bangs) */}
        <path
          d="M110 170 C125 150 145 180 160 165 C180 185 220 185 240 165 C255 180 275 150 290 170 L290 180 C270 160 250 170 200 160 C150 170 130 160 110 180 Z"
          fill="#6F4D38"
        />

        {/* Glasses Frame */}
        <g stroke="#6F4D38" strokeWidth="8" fill="none">
           {/* Left Lens */}
           <circle cx="155" cy="210" r="35" fill="rgba(255,255,255,0.1)" />
           {/* Right Lens */}
           <circle cx="245" cy="210" r="35" fill="rgba(255,255,255,0.1)" />
           {/* Bridge */}
           <path d="M190 210 Q200 200 210 210" strokeWidth="6" strokeLinecap="round" />
        </g>
        
        {/* Eyes */}
        <g fill="#6F4D38">
           <circle cx="155" cy="210" r="18" />
           <circle cx="245" cy="210" r="18" />
        </g>

        {/* Star Highlights in Eyes */}
        <g fill="#D5B893">
            {/* Left Eye Star */}
            <path d="M155 200 L158 207 L165 210 L158 213 L155 220 L152 213 L145 210 L152 207 Z" transform="scale(0.8) translate(30 40)" />
             {/* Right Eye Star */}
            <path d="M245 200 L248 207 L255 210 L248 213 L245 220 L242 213 L235 210 L242 207 Z" transform="scale(0.8) translate(50 40)" />
        </g>
        
        {/* Mouth */}
        <path d="M195 245 Q200 250 205 245" stroke="#6F4D38" strokeWidth="3" strokeLinecap="round" />

        {/* Hands Gripping Edge */}
        <g fill="#6F4D38">
           {/* Left Hand Fingers */}
           <rect x="80" y="270" width="16" height="30" rx="8" transform="rotate(10 80 270)" />
           <rect x="98" y="265" width="16" height="30" rx="8" transform="rotate(5 98 265)" />
           <rect x="116" y="265" width="16" height="30" rx="8" />
           
           {/* Right Hand Fingers */}
           <rect x="268" y="265" width="16" height="30" rx="8" />
           <rect x="286" y="265" width="16" height="30" rx="8" transform="rotate(-5 286 265)" />
           <rect x="304" y="270" width="16" height="30" rx="8" transform="rotate(-10 304 270)" />
        </g>
      </svg>
    </div>
  );
};

export default SvgCharacter;