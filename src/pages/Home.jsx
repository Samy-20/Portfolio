import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MachineGear from "../components/machineGear";

function Home() {
  const panelRef = useRef(null);
  const gearRef = useRef(null);
  const lineRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      panelRef.current,
      { y: "100%" },
      {
        y: "10%",
        duration: 1.5,
        ease: "power3.inOut",
      }
    );

    gsap.to(gearRef.current, {
      rotate: 360,
      duration: 30,
      repeat: -1,
      ease: "linear",
      transformOrigin: "50% 50%",
    });

    gsap.to(lineRef.current, {
      x: 170, // move right
      duration: 1.5,
      repeat: -1, // infinite
      ease: "power1.inOut",
      yoyo: true,
    });

  });

  return (
    <section className="min-h-screen relative flex items-center justify-center bg-slate-900 overflow-hidden text-white">
      {/* Page Title */}
      <div className="absolute top-24 left-6 md:left-16 z-30">
        <h1 className="text-4xl md:text-5xl font-bold text-white relative mb-6 w-5">
          Home
          <span
              ref={lineRef}
              className="block w-16 h-1 bg-indigo-500 mt-3 rounded"
            ></span>
        </h1>
      </div>

      {/* Text */}
      <div className="relative z-30 mt-20">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Welcome to My Portfolio
        </h1>
      </div>

      {/* MACHINE GEAR */}
      <div ref={gearRef} className="absolute z-20 pointer-events-none blur-sm">
        <MachineGear size={600} color="#6366f1" />
      </div>

      {/* Bottom Panel */}
      <div
        ref={panelRef}
        className="absolute bottom-0 left-0 w-full h-full z-10 bg-gradient-to-t from-slate-900 via-violet-900 to-purple-800"
      >
        <div className="h-full flex items-center justify-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Hey, it's Sahil
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Home;
