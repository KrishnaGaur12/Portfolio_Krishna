import React, { useRef, useState } from 'react';
import { Mail, MapPin, Clock, Github, Linkedin, Send, Twitter, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{message: string, type: 'success' | 'error' | null}>({ message: '', type: null });

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ message: '', type: null });

    // ⚠️ IMPORTANT: These keys are pulled from your .env file
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY || SERVICE_ID === 'your_service_id_here') {
      setStatus({ message: '⚠️ Configuration missing! Please set your EmailJS keys in the .env file.', type: 'error' });
      setIsSubmitting(false);
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current!, PUBLIC_KEY)
      .then((result) => {
          setStatus({ message: 'Message sent successfully! I will get back to you soon.', type: 'success' });
          form.current?.reset();
      }, (error) => {
          console.error(error.text);
          setStatus({ message: 'Failed to send message. Please try again later or email directly.', type: 'error' });
      })
      .finally(() => {
          setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="w-full py-16 md:py-28 bg-cream-50 dark:bg-[#111620] px-6 font-mono text-space-cadet dark:text-gray-300 transition-colors duration-500">
       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
         
         {/* Left Side Info */}
         <div className="space-y-12">
            <div>
               <h2 className="font-pixel text-4xl md:text-6xl mb-6 text-space-cadet dark:text-cream-50">Get In Touch</h2>
               <p className="text-space-cadet/70 dark:text-gray-400 text-lg max-w-md">
                 Feel Free to reach out if you want to collaborate, have a question, or just want to connect.
               </p>
            </div>

            <div className="space-y-8">
               <div className="flex items-start gap-4">
                  <Mail className="mt-1 text-space-cadet dark:text-tan" />
                  <div>
                    <h3 className="font-bold mb-1 text-space-cadet dark:text-cream-50">Email</h3>
                    <p className="text-space-cadet/70 dark:text-gray-400">krishnagaur0033@gmail.com</p>
                  </div>
               </div>

               <div className="flex items-start gap-4">
                  <MapPin className="mt-1 text-space-cadet dark:text-tan" />
                  <div>
                    <h3 className="font-bold mb-1 text-space-cadet dark:text-cream-50">Location</h3>
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
               <div className="flex gap-3 flex-wrap">
                  <a 
                    href="https://github.com/KrishnaGaur12" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-tan dark:hover:border-tan transition-all duration-300 group shadow-sm hover:shadow-md"
                  >
                     <div className="p-1.5 bg-gray-100 dark:bg-gray-700 rounded-md group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors">
                        <Github size={20} className="text-gray-900 dark:text-white" />
                     </div>
                     <span className="font-medium text-sm text-space-cadet dark:text-gray-200">GitHub</span>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/gaurkrishna/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-tan dark:hover:border-tan transition-all duration-300 group shadow-sm hover:shadow-md"
                  >
                     <div className="p-1.5 bg-blue-50 dark:bg-blue-900/30 rounded-md group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                        <Linkedin size={20} className="text-[#0077b5] dark:text-blue-400" />
                     </div>
                     <span className="font-medium text-sm text-space-cadet dark:text-gray-200">LinkedIn</span>
                  </a>

                  <a 
                    href="https://x.com/2m_next" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-tan dark:hover:border-tan transition-all duration-300 group shadow-sm hover:shadow-md"
                  >
                     <div className="p-1.5 bg-gray-50 dark:bg-gray-800 rounded-md group-hover:bg-gray-100 dark:group-hover:bg-gray-700 transition-colors">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-900 dark:text-gray-200 fill-current" aria-hidden="true">
                            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                        </svg>
                     </div>
                     <span className="font-medium text-sm text-space-cadet dark:text-gray-200">X(Twitter)</span>
                  </a>
               </div>
            </div>
         </div>

         {/* Right Side Form */}
         <div>
            <h3 className="font-pixel text-2xl mb-8 animate-reveal" style={{ animationDelay: '0.2s' }}>Send Me a Message</h3>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
               <div className="space-y-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                 <label className="text-sm font-bold">Your Name</label>
                 <input 
                   type="text" 
                   name="user_name"
                   required
                   placeholder="John Doe"
                   className="w-full p-4 bg-transparent border border-space-cadet/30 rounded-lg focus:outline-none focus:border-space-cadet focus:bg-white/50 focus:shadow-[0_0_15px_rgba(37,52,79,0.1)] transition-all duration-300 placeholder:text-space-cadet/30"
                 />
               </div>

               <div className="space-y-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                 <label className="text-sm font-bold">Your Email</label>
                 <input 
                   type="email" 
                   name="user_email"
                   required
                   placeholder="john@example.com"
                   className="w-full p-4 bg-transparent border border-space-cadet/30 rounded-lg focus:outline-none focus:border-space-cadet focus:bg-white/50 focus:shadow-[0_0_15px_rgba(37,52,79,0.1)] transition-all duration-300 placeholder:text-space-cadet/30"
                 />
               </div>

               <div className="space-y-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                 <label className="text-sm font-bold">Your Message</label>
                 <textarea 
                   name="message"
                   required
                   rows={5}
                   placeholder="Hi there, I'd like to talk about..."
                   className="w-full p-4 bg-transparent border border-space-cadet/30 rounded-lg focus:outline-none focus:border-space-cadet focus:bg-white/50 focus:shadow-[0_0_15px_rgba(37,52,79,0.1)] transition-all duration-300 placeholder:text-space-cadet/30 resize-none"
                 ></textarea>
               </div>

               <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                   <button 
                     type="submit" 
                     disabled={isSubmitting}
                     className="px-8 py-4 bg-space-cadet text-cream-50 rounded-lg font-bold hover:bg-space-cadet/90 transition-all flex items-center gap-2 group hover:shadow-xl hover:scale-105 active:scale-95 duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                   >
                     {isSubmitting ? 'Sending...' : 'Send Message'}
                     {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                   </button>
                   
                   {status.message && (
                       <p className={`mt-4 text-sm font-bold ${status.type === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                           {status.message}
                       </p>
                   )}
               </div>
            </form>
         </div>

       </div>
    </section>
  );
};

export default ContactSection;
