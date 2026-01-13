import Slider from "react-slick";

import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/js.png";
import reactLogo from "../assets/react.png";
import tailwindLogo from "../assets/tailwindcss.png";
import gitLogo from "../assets/git.png";
import githubLogo from "../assets/github.png";
import pythonLogo from "../assets/python.png";
import vscodeLogo from "../assets/vscode.jpg";

function Skills() {
  const languages = [
    {
      name: "HTML",
      level: 90,
      logo: htmlLogo,
      desc: "Semantic, accessible markup",
      exp: "3+ Year",
    },
    {
      name: "CSS",
      level: 85,
      logo: cssLogo,
      desc: "Responsive & modern layouts",
      exp: "2.5+ Year",
    },
    {
      name: "JavaScript",
      level: 80,
      logo: jsLogo,
      desc: "ES6+, DOM, async programming",
      exp: "1.5+ Year",
    },
    {
      name: "Python",
      level: 60,
      logo: pythonLogo,
      desc: "Basic, OOPs, DSA",
      exp: "1+ Year",
    },
  ];

  const tools = [
    {
      name: "Git",
      level: 70,
      logo: gitLogo,
      desc: "Pull, Push",
      exp: "1+ Year",
    },
    {
      name: "GitHub",
      level: 75,
      logo: githubLogo,
      desc: "Push, Add, Commit, path change",
      exp: "1+ Year",
    },
  ];

  const frontendSkills = [
    {
      name: "React",
      level: 75,
      logo: reactLogo,
      desc: "SPA, hooks, components",
      exp: "1+ Year",
    },
    {
      name: "Tailwind CSS",
      level: 70,
      logo: tailwindLogo,
      desc: "Utility-first UI styling",
      exp: "6+ Month",
    },
    {
      name: "VSCode",
      level: 80,
      logo: vscodeLogo,
      desc: "ES6+, DOM, async programming",
      exp: "1.5+ Years",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const SkillCard = ({ skill }) => (
    <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-xl rounded-2xl p-10 shadow-lg">
      <img src={skill.logo} alt={skill.name} className="w-24 h-24 mb-4" />
      <h3 className="text-xl font-semibold">{skill.name}</h3>
      <p className="text-slate-300 text-sm mb-3">{skill.desc}</p>

      {/* Experience Badge */}
      <span className="px-4 py-1 text-sm rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400">
        {skill.exp}
      </span>
    </div>
  );

  return (
    <section className="min-h-screen bg-slate-900 px-6 py-24 text-white relative">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-purple-900/20 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto space-y-20 relative z-10">
        {/* Page Title */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white relative inline-block">
            My Skills
            <span className="block w-16 h-1 bg-indigo-500 mt-3 rounded mx-auto"></span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-32">
          {/* Frontend Slider */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Frameworks
            </h2>
            <Slider {...sliderSettings}>
              {frontendSkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </Slider>
          </div>

          {/* Tools Slider */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-center">Tools</h2>
            <Slider {...sliderSettings}>
              {tools.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </Slider>
          </div>

          {/* Languages Slider */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Languages
            </h2>
            <Slider {...sliderSettings}>
              {languages.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
