import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";
import { useTheme } from "../context/ThemeContext";

export default function Internships() {
  const internshipsRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const { darkMode } = useTheme();

  useEffect(() => {
    if (vantaEffect) vantaEffect.destroy();

    const effect = NET({
      el: internshipsRef.current,
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
      id="internships"
      ref={internshipsRef}
      className="relative min-h-screen flex items-center justify-center px-6 text-gray-900 dark:text-white overflow-hidden"
    >
      <div className="mx-auto max-w-3xl bg-white/30 dark:bg-black/30 backdrop-blur-md p-6 rounded-xl shadow-lg text-gray-800 dark:text-gray-100 space-y-4">

        <h2 className="text-4xl font-bold mb-4">Internships</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400">Machine Learning Intern – InternPe</h3>
            <p className="text-base leading-relaxed">
              Duration: Jan 2025 – Feb 2025
            </p>
            <ul className="list-disc list-inside text-base ml-2 mt-2 space-y-1">
              <li>Built ML models for diabetes, breast cancer, and IPL match outcome prediction.</li>
              <li>Developed a web interface to interact with models using Streamlit and Flask.</li>
              <li>Created LinkedIn content to showcase project demos and insights.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400">Data Science Intern – Tripple One Solutions</h3>
            <p className="text-base leading-relaxed">
              Duration: Jun 2025 – Aug 2025
            </p>
            <ul className="list-disc list-inside text-base ml-2 mt-2 space-y-1">
              <li>Assisting in building machine learning models to analyze business data</li>
              <li>Performing data cleaning, exploratory data analysis, and feature engineering</li>
              <li>Using tools like Python, Pandas, Scikit-learn, and Matplotlib for model development</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
