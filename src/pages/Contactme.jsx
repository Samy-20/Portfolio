function Contactme() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-900 px-6 md:px-16 relative">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-purple-900/20 pointer-events-none"></div>
      
      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-xl rounded-2xl p-10 shadow-2xl text-white relative z-10">
        
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-white relative mb-6 inline-block">
          Contact Me
          <span className="block w-16 h-1 bg-indigo-500 mt-3 rounded"></span>
        </h1>
        
        <p className="text-slate-300 mb-8 mt-4">
          Feel free to reach out to me via the form below or connect on my socials.
        </p>

        <form className="flex flex-col gap-6">
          <input type="text" placeholder="Your Name" className="p-4 rounded-lg bg-white/20 text-white placeholder-slate-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
          <input type="email" placeholder="Your Email" className="p-4 rounded-lg bg-white/20 text-white placeholder-slate-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
          <textarea rows={5} placeholder="Your Message" className="p-4 rounded-lg bg-white/20 text-white placeholder-slate-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
          <button type="submit" className="bg-indigo-500 text-white font-semibold py-3 rounded-lg hover:bg-indigo-600 transition-colors duration-300">Send Message</button>
        </form>

        <div className="mt-10 flex gap-6 justify-center">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-400 transition-colors duration-300">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-400 transition-colors duration-300">LinkedIn</a>
          <a href="mailto:youremail@example.com" className="text-white hover:text-indigo-400 transition-colors duration-300">Email</a>
        </div>
      </div>
    </section>
  );
}
export default Contactme;
