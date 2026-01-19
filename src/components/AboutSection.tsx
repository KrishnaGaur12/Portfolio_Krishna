import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-full py-32 bg-[#f6f8fd] text-space-cadet relative overflow-hidden flex justify-center px-6 border-b border-black/20 transition-colors duration-500">
      {/* Background "ABOUT" Text - Parallax Float */}
      <div className="absolute top-10 right-0 select-none pointer-events-none opacity-[0.07] animate-float-slow">
         <span className="font-pixel text-[8rem] md:text-[12rem] lg:text-[15rem] leading-none text-space-cadet transition-colors duration-500">ABOUT</span>
      </div>

      <div className="max-w-6xl w-full relative z-10 pt-20">
        
        {/* Pixel Heading */}
        <div className="mb-12 animate-reveal" style={{ animationDelay: '0.2s' }}>
           <h2 className="font-pixel text-2xl md:text-4xl text-black tracking-tighter transition-colors duration-500">
             — About Me
           </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Content */}
            <div className="flex-1 space-y-8 font-jetbrains text-space-cadet/80 text-lg md:text-xl leading-relaxed transition-colors duration-500">
               <p className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                 I’m a <strong className="text-space-cadet">B.Tech Computer Science student</strong> at <strong className="text-space-cadet">ABES Engineering College</strong> (CGPA 7.7, graduating in 2027) who enjoys understanding how software systems work beyond just writing code.
               </p>
               
               <p className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                 I focus on <span className="bg-[#FFEBA4] px-1 text-space-cadet font-bold inline-block">Data Structures & Algorithms</span>, <span className="bg-[#A4D4FF] px-1 text-space-cadet font-bold inline-block">Operating Systems</span>, and <span className="bg-[#FFC4C4] px-1 text-space-cadet font-bold inline-block">System Design</span>, building full-stack and backend systems with an emphasis on performance and scalability, while also exploring <span className="bg-[#E2C6FF] px-1 text-space-cadet font-bold inline-block">AI/ML</span> through hands-on projects.
               </p>

               <p className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                 I enjoy learning new technologies and keeping up with evolving tech trends, and outside academics, I aspire to be a <strong className="text-space-cadet">tech YouTuber</strong> and like listening to Punjabi music to unwind.
               </p>
            </div>

            {/* Profile Image */}
            <div className="w-full md:w-[240px] lg:w-[280px] flex-shrink-0 opacity-0 animate-fade-in-up md:-mt-12" style={{ animationDelay: '0.6s' }}>
                <div className="relative group">
                    <div className="absolute top-4 left-4 w-full h-full border-2 border-space-cadet/20 rounded-[28px] -z-10 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />
                    <div className="relative rounded-[44px] overflow-hidden transition-all duration-500 shadow-2xl">
                        {/* Placeholder Image - User needs to add 'profile.jpg' to public folder */}
                        <img 
                            src="/profile.jpg" 
                            alt="Krishna Gaur"
                            className="w-full h-auto object-cover aspect-[3/4]" 
                        />
                        <div className="absolute inset-0 bg-space-cadet/0 mix-blend-overlay transition-opacity" />
                    </div>

                    {/* India Flag Badge */}
                    <div className="absolute -top-4 -left-4 z-20 w-16 h-auto shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
                        {/* User needs to add 'india-flag.png' to public folder */}
                        <img 
                            src="/india-flag.png" 
                            alt="India" 
                            className="w-full h-auto rounded border-2 border-white"
                        />
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
