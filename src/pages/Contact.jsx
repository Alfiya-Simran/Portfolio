import { useEffect, useState, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";
import { useTheme } from "../context/ThemeContext";
import { FaEnvelope, FaPhone, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

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
      <div className="bg-white/20 dark:bg-black/30 backdrop-blur-lg border border-gray-300/20 dark:border-gray-700/50 
        p-6 rounded-2xl shadow-xl flex flex-col items-center gap-6 max-w-lg mx-auto">
        <h2 className="text-3xl font-bold text-purple-600">Contact Me</h2>
        <p className="text-center text-gray-700 dark:text-gray-300">
          Feel free to reach out via any of the platforms below.
        </p>
        <div className="flex justify-center gap-6 text-3xl">
          {/* LinkedIn */}
          <a href="https://linkedin.com/in/alfiyasimran" target="_blank" rel="noopener noreferrer" 
            className="hover:text-blue-600 transition transform hover:scale-125">
            <FaLinkedin />
          </a>
          {/* GitHub */}
          <a href="https://github.com/Alfiya-Simran" target="_blank" rel="noopener noreferrer" 
            className="hover:text-gray-900 dark:hover:text-white transition transform hover:scale-125">
            <FaGithub />
          </a>
          {/* Email */}
          <button
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=alfiyasimran05@gmail.com",
                "_blank"
              )
            }
            className="hover:text-red-500 transition text-3xl"
            >
            <FaEnvelope />
          </button>

          {/* Phone */}
          <button onClick={() => window.open("tel:+917204340316")} 
            className="hover:text-green-500 transition transform hover:scale-125">
            <FaPhone />
          </button>
          {/* WhatsApp */}
          <button onClick={() => window.open("https://wa.me/917204340316", "_blank")} 
            className="hover:text-green-600 transition transform hover:scale-125">
            <FaWhatsapp />
          </button>
        </div>
      </div>
    </section>
  );
}
