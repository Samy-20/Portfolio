import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Portfolio() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        titleRef.current,
        {
          y: -50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      );
    },
    { scope: sectionRef }
  );

  const projects = [
    {
      title: "Project One",
      description: "A full-stack web application built with React and Node.js",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      title: "Project Two",
      description: "E-commerce platform with payment integration",
      tech: ["React", "Stripe", "Express"],
      link: "#",
    },
    {
      title: "Project Three",
      description: "Real-time chat application with WebSocket",
      tech: ["React", "Socket.io", "Firebase"],
      link: "#",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-slate-900 px-6 py-24 text-white relative"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-purple-900/20 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold text-white relative inline-block"
          >
            Portfolio
            <span className="block w-16 h-1 bg-indigo-500 mt-3 rounded mx-auto"></span>
          </h1>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-slate-300 mb-6">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* View Project Link */}
              <a
                href={project.link}
                className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
              >
                View Project
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

