import { useEffect, useState, useRef } from "react";
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
        <h2 className="text-4xl font-semibold text-purple-600 mb-8">Contact Me</h2>

        <div className="flex justify-center gap-8 text-3xl">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/alfiyasimran"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Alfiya-Simran"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 dark:hover:text-gray-200 transition"
          >
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
          <button
            onClick={() => window.open("tel:+919876543210")}
            className="hover:text-green-500 transition text-3xl"
            >
            <FaPhone />
          </button>
          <button
            onClick={() => window.open("https://wa.me/919876543210", "_blank")}
            className="hover:text-green-600 transition text-3xl"
            >
            <FaWhatsapp />
          </button>
        </div>
      </div>
    </section>
  );
}
