import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full flex justify-between items-center fixed px-6 py-4 bg-black/50 backdrop-blur-lg text-white z-50">

      <div className="text-[5vh]">
        <h1><span className="uppercase">Sahil</span>.dev</h1>
      </div>

      <div className="bg-none">
        <nav className=" w-full flex gap-8 text-white">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-indigo-400" : "text-slate-300"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-indigo-400" : "text-slate-300"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive ? "text-indigo-400" : "text-slate-300"
            }
          >
            Skills
          </NavLink>

          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive ? "text-indigo-400" : "text-slate-300"
            }
          >
            Portfolio
          </NavLink>

          <NavLink
            to="/contactme"
            className={({ isActive }) =>
              isActive ? "text-indigo-400" : "text-slate-300"
            }
          >
            Contact me
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
