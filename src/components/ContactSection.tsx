import React from 'react';
import { Mail, MapPin, Clock, Github, Linkedin, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="w-full py-32 bg-cream-50 px-6 font-mono text-space-cadet">
       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
         
         {/* Left Side Info */}
         <div className="space-y-12">
            <div>
               <h2 className="font-pixel text-4xl md:text-6xl mb-6">Get In Touch</h2>
               <p className="text-space-cadet/70 text-lg max-w-md">
                 Feel Free to reach out if you want to collaborate, have a question, or just want to connect.
               </p>
            </div>

            <div className="space-y-8">
               <div className="flex items-start gap-4">
                  <Mail className="mt-1 text-space-cadet" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-space-cadet/70">krishnagaur0033@gmail.com</p>
                  </div>
               </div>

               <div className="flex items-start gap-4">
                  <MapPin className="mt-1 text-space-cadet" />
                  <div>
                    <h3 className="font-bold mb-1">Location</h3>
                    <p className="text-space-cadet/70">Ghaziabad, India</p>
                  </div>
               </div>

               <div className="flex items-start gap-4">
                  <Clock className="mt-1 text-space-cadet" />
                  <div>
                    <h3 className="font-bold mb-1">Working Hours</h3>
                    <p className="text-space-cadet/70">Mon-Fri: 9AM - 6PM</p>
                  </div>
               </div>
            </div>

            <div>
               <h3 className="font-bold mb-4">Connect With Me</h3>
               <div className="flex gap-4">
                  <a href="#" className="p-2 hover:text-tan transition-colors"><Github size={28} /></a>
                  <a href="#" className="p-2 hover:text-tan transition-colors"><Linkedin size={28} /></a>
               </div>
            </div>
         </div>

         {/* Right Side Form */}
         <div>
            <h3 className="font-pixel text-2xl mb-8 animate-reveal" style={{ animationDelay: '0.2s' }}>Send Me a Message</h3>
            
            <form className="space-y-6">
               <div className="space-y-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                 <label className="text-sm font-bold">Your Name</label>
                 <input 
                   type="text" 
                   placeholder="John Doe"
                   className="w-full p-4 bg-transparent border border-space-cadet/30 rounded-lg focus:outline-none focus:border-space-cadet focus:bg-white/50 focus:shadow-[0_0_15px_rgba(37,52,79,0.1)] transition-all duration-300 placeholder:text-space-cadet/30"
                 />
               </div>

               <div className="space-y-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                 <label className="text-sm font-bold">Your Email</label>
                 <input 
                   type="email" 
                   placeholder="john@example.com"
                   className="w-full p-4 bg-transparent border border-space-cadet/30 rounded-lg focus:outline-none focus:border-space-cadet focus:bg-white/50 focus:shadow-[0_0_15px_rgba(37,52,79,0.1)] transition-all duration-300 placeholder:text-space-cadet/30"
                 />
               </div>

               <div className="space-y-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                 <label className="text-sm font-bold">Your Message</label>
                 <textarea 
                   rows={5}
                   placeholder="Hi there, I'd like to talk about..."
                   className="w-full p-4 bg-transparent border border-space-cadet/30 rounded-lg focus:outline-none focus:border-space-cadet focus:bg-white/50 focus:shadow-[0_0_15px_rgba(37,52,79,0.1)] transition-all duration-300 placeholder:text-space-cadet/30 resize-none"
                 ></textarea>
               </div>

               <button className="px-8 py-4 bg-space-cadet text-cream-50 rounded-lg font-bold hover:bg-space-cadet/90 transition-all flex items-center gap-2 group hover:shadow-xl hover:scale-105 active:scale-95 duration-200 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                 Send Message
                 <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
               </button>
            </form>
         </div>

       </div>
    </section>
  );
};

export default ContactSection;
