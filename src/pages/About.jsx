import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function About() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const wordRef = useRef(null);

  const word = ["React", "JavaScript", "Frontend", "Python"];

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      {
        y: "-100%", // start from top (outside screen)
        opacity: 0,
      },
      {
        y: "0%",
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
      }
    );
    gsap.to(lineRef.current, {
      x: 170, // move right
      duration: 1.5,
      repeat: -1, // infinite
      ease: "power1.inOut",
      yoyo: true,
    });
  });

  useGSAP(() => {
    const el = wordRef.current;

    const wordHeight = 40; // h-10
    const gapHeight = 18; // h-4
    const step = wordHeight + gapHeight;

    const totalItems = word.length;

    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: "power1.inOut" },
    });

    for (let i = 0; i < totalItems; i++) {
      tl.to(el, {
        y: -(i + 1) * step,
        duration: 1.4, // smooth upward move
      }).to({}, { duration: 0.6 }); // pause
    }

    // 🔥 INSTANT RESET (NO REVERSE)
    tl.set(el, { y: 0 });
  });

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center bg-slate-900 px-6 md:px-16 relative"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-purple-900/20 pointer-events-none"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
        {/* LEFT CONTENT */}
        <div className="md:col-span-2 hero-layout">
          <h1 className="text-4xl md:text-5xl font-bold text-white relative mb-6">
            About Me
            <span
              ref={lineRef}
              className="block w-16 h-1 bg-indigo-500 mt-3 rounded"
            ></span>
          </h1>

          <p className="text-lg text-slate-300 mb-4">
            Hello I am <span className="text-amber-300">Sahil</span>
          </p>

          <div className="h-10 flex gap-3 text-white overflow-hidden text-xl">
            <span>I Specialized</span>
            <div ref={wordRef} className="h-6 flex flex-col text-amber-500">
              {[...word, ...word].map((word, i) => (
                <div>
                  <span key={i} className="h-10 flex items-center">
                    {word}
                  </span>
                  <span className="block h-4"></span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-slate-400 leading-relaxed">
            My long-term goal is to become a professional software developer and
            contribute to impactful products used by real people.
          </p>
        </div>

        {/* RIGHT CARD */}
        <div className="flex items-center">
          <div className="w-full rounded-2xl bg-white/10 backdrop-blur-xl p-8 shadow-2xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Details
            </h3>

            <ul className="space-y-3 text-slate-300 text-sm">
              <li>
                <span className="text-indigo-400 font-medium">Role:</span>{" "}
                Frontend Developer
              </li>
              <li>
                <span className="text-indigo-400 font-medium">Tech:</span>{" "}
                React, JavaScript
              </li>
              <li>
                <span className="text-indigo-400 font-medium">Focus:</span> UI /
                UX
              </li>
              <li>
                <span className="text-indigo-400 font-medium">Location:</span>{" "}
                India
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
