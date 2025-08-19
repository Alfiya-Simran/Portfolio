import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import profilePic from "../assets/alfiya.jpg";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";
import { useTheme } from "../context/ThemeContext";
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const { darkMode } = useTheme(); // 👈 access dark mode state

  useEffect(() => {
    if (vantaEffect) {
      vantaEffect.destroy();
      setVantaEffect(null);
    }

    const effect = NET({
      el: vantaRef.current,
      THREE: THREE,
      color: darkMode ? 0x8b5cf6 : 0x6366f1,           // About page colors: purple blues
      backgroundColor: darkMode ? 0x1f2937 : 0xf3f4f6, // About page BG colors (dark gray / light gray)
      points: 10,
      maxDistance: 18,
      spacing: 20,
      showDots: false,
      mouseControls: true,
      touchControls: true,
    });

    setVantaEffect(effect);

    return () => {
      if (effect) effect.destroy();
    };
  }, [darkMode]);

  return (
    <section
      id="home"
      ref={vantaRef}
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 text-gray-900 dark:text-white overflow-hidden"
    >
      <div className="absolute w-72 h-72 bg-indigo-300 opacity-30 rounded-full filter blur-3xl top-10 left-10 animate-pulse -z-10" />
      <div className="absolute w-64 h-64 bg-purple-400 opacity-20 rounded-full filter blur-2xl bottom-20 right-10 animate-spin-slow -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col items-center"
      >
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
          <img
            src={profilePic}
            alt="Alfiya Simran"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg mb-6 border-4 border-indigo-500 object-cover"
          />
        </Tilt>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          Hi, I'm{" "}
          <motion.span
            initial={{ backgroundSize: "0% 100%" }}
            animate={{ backgroundSize: "100% 100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent"
          >
            Alfiya Simran
          </motion.span>
        </motion.h1>

        <p className="mt-4 text-lg text-indigo-600 dark:text-indigo-400 font-medium">
          <Typewriter
            words={['AI/ML Enthusiast', 'Full Stack Developer', 'Data Analyst']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>

        <div className="block md:hidden mt-6">
          <a
            href="/Alfiya Simran.pdf"
            download
            className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
