import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";
import { useTheme } from "../context/ThemeContext";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const { darkMode } = useTheme();

  useEffect(() => {
    if (vantaEffect) {
      vantaEffect.destroy();
      setVantaEffect(null);
    }

    const effect = NET({
      el: vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      points: 12,
      maxDistance: 20,
      spacing: 18,
      showDots: true,
      color: darkMode ? 0x93c5fd : 0x7c3aed,
      backgroundColor: darkMode ? 0x111827 : 0xffffff,
    });

    setVantaEffect(effect);

    return () => {
      if (effect) effect.destroy();
    };
  }, [darkMode]);

  return (
    <section
      id="contact"
      ref={vantaRef}
      className="relative min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-16 flex items-center justify-center overflow-hidden text-gray-900 dark:text-white"
    >
      <div className="relative z-10 w-full max-w-xl text-center">
        <h2 className="text-4xl font-semibold text-purple-600 mb-6">
          Contact Me
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-lg">
          <a
            href="http://www.linkedin.com/in/alfiyasimran"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/30 dark:bg-black/30 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition"
          >
            <FaLinkedin className="text-blue-600 text-2xl" /> LinkedIn
          </a>

          <a
            href="https://github.com/Alfiya-Simran"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/30 dark:bg-black/30 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition"
          >
            <FaGithub className="text-gray-800 dark:text-white text-2xl" /> GitHub
          </a>

          <a
            href="mailto:alfiyasimran05@gmail.com"
            className="flex items-center gap-2 bg-white/30 dark:bg-black/30 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition"
          >
            <FaEnvelope className="text-red-500 text-2xl" /> Email
          </a>

          <a
            href="tel:+917204340316"
            className="flex items-center gap-2 bg-white/30 dark:bg-black/30 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition"
          >
            <FaPhone className="text-green-500 text-2xl" /> Phone
          </a>
        </div>
      </div>
    </section>
  );
}
