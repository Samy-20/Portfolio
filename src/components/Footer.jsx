function Footer() {
  return (
    <footer className= "bg-black/50 border-t border-white/10 text-slate-300">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Sahil.dev
          </h2>
          <p className="text-sm leading-relaxed">
            Passionate Frontend Developer building modern and responsive web
            applications using React & Tailwind CSS.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-indigo-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-indigo-400 transition">About</a></li>
            <li><a href="/skills" className="hover:text-indigo-400 transition">Skills</a></li>
            <li><a href="/projects" className="hover:text-indigo-400 transition">Projects</a></li>
            <li><a href="/contact" className="hover:text-indigo-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Connect
          </h3>
          <div className="flex gap-4">
            <a href="https://github.com/yourusername" target="_blank" className="hover:text-indigo-400 transition">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-indigo-400 transition">
              LinkedIn
            </a>
            <a href="mailto:youremail@gmail.com" className="hover:text-indigo-400 transition">
              Email
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4 text-center text-sm">
        © {new Date().getFullYear()} Sahil. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
