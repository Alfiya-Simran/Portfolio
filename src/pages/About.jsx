import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";
import { useTheme } from "../context/ThemeContext";

export default function About() {
  const aboutRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const { darkMode } = useTheme();

  useEffect(() => {
    if (vantaEffect) vantaEffect.destroy();

    const effect = NET({
      el: aboutRef.current,
      THREE,
      color: darkMode ? 0x93c5fd : 0x7c3aed,
      backgroundColor: darkMode ? 0x111827 : 0xffffff,
      points: 10,
      maxDistance: 20,
      spacing: 15,
      showDots: true,
      mouseControls: true,
      touchControls: true,
    });

    setVantaEffect(effect);

    return () => effect && effect.destroy();
  }, [darkMode]);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="relative min-h-screen flex items-center justify-center px-6 text-gray-900 dark:text-white overflow-hidden"
    >
      <div className="mx-auto max-w-3xl bg-white/30 dark:bg-black/30 backdrop-blur-md p-6 rounded-xl shadow-lg text-gray-800 dark:text-gray-100 space-y-6">
        <h2 className="text-4xl font-semibold text-purple-600 mb-3 text-center">
          About Me
        </h2>

        <p className="text-base md:text-lg leading-relaxed tracking-wide">
          I'm a final-year B.Tech student passionate about building tech that
          solves real-world problems. I specialize in full-stack development
          and machine learning, and I love turning ideas into impactful digital
          products.
        </p>

        <p className="text-base md:text-lg leading-relaxed tracking-wide">
          Whether it's a smart voice assistant, a fraud detection model, or a
          funding platform for startups, I enjoy working on projects that blend
          creativity with purpose. I'm always exploring new tools and
          technologies — from React and Firebase to Python, Streamlit, and
          beyond.
        </p>

        <p className="text-base md:text-lg leading-relaxed tracking-wide">
          Currently open to internships and collaboration opportunities. Let’s
          build something meaningful!
        </p>

        {/* Skills Section */}
        <div className="pt-8">
          <h3 className="text-2xl font-semibold text-purple-600 mb-6 text-center">
            Skills
          </h3>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Technical Skills */}
            <div className="flex-1">
              <h4 className="font-semibold text-purple-500 mb-4 text-center md:text-left">
                Technical Skills
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Languages", content: "Python, JavaScript, SQL" },
                  { title: "Frameworks", content: "React, Flask, Streamlit" },
                  {
                    title: "Libraries",
                    content: "Pandas, NumPy, Scikit-learn, Matplotlib",
                  },
                  { title: "Styling", content: "Tailwind CSS, Bootstrap" },
                  { title: "Tools", content: "Git, GitHub, Firebase, VS Code" },
                  {
                    title: "Concepts",
                    content: "Machine Learning, REST APIs, Deployment",
                  },
                ].map((skill) => (
                  <div
                    key={skill.title}
                    className="bg-white/20 dark:bg-black/20 p-4 rounded-lg shadow-sm hover:scale-[1.02] transition flex flex-col justify-center"
                  >
                    <h5 className="font-semibold mb-1">{skill.title}</h5>
                    <p>{skill.content}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="flex-1">
              <h4 className="font-semibold text-purple-500 mb-4 text-center md:text-left">
                Soft Skills
              </h4>
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Teamwork & Collaboration",
                  "Problem Solving",
                  "Communication",
                  "Adaptability & Learning",
                  "Time Management",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="bg-white/20 dark:bg-black/20 p-4 rounded-lg shadow-sm hover:scale-[1.02] transition flex items-center justify-center"
                  >
                    <p>{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
