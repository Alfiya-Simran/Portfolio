import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";
import { useTheme } from "../context/ThemeContext";

// CertificateCard component similar to ProjectCard style
function CertificateCard({ title, issuer, date,certificateid, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition border dark:border-gray-700 p-6 overflow-hidden"
    >
      <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400 mb-2">
        {title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-1">{issuer}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400">{date}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400">{certificateid}</p>
    </a>
  );
}

// Sample certificates data - replace or extend as needed
const certificates = [
  {
    title: "The Data Science Bootcamp 2025",
    issuer: "Udemy",
    date: "April 2025",
    link: "https://ude.my/UC-12e4881e-e84f-4584-a9eb-a867ab31f5a3",
  },
  {
    title: "Full Stack Development ",
    issuer: "Udemy",
    date: "July 2024",
    link: "https://ude.my/UC-313b5cec-9d2b-44d0-9854-c8983fc06fa9",
  },
  {
    title: "Practical GitHub Project Management and collaboration ",
    issuer: "LinkedIn Learning",
    date: "July 2024",
    certificateid:"ID-14488cacd39ac5d82c8e83865b77ca869b06ccfe3beb0798a943516e22ba811a",
  },
  {
    title: "Beginner DSA in Java",
    issuer: "CodeChef",
    date: "September 2023",
    link: "https://www.codechef.com/certificates/verify",
  },
  {
    title: "Data Analyst Associate with Power BI",
    issuer: "Infosys Springboard",
    date: "May 2025",
  },
];

export default function Certificates() {
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

    return () => {
      if (effect) effect.destroy();
    };
  }, [darkMode]);

  return (
    <section
      id="certificates"
      ref={vantaRef}
      className="relative min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-20 overflow-hidden text-gray-900 dark:text-white"
    >
      {/* Gradient blur blobs */}
      <div className="absolute w-64 h-64 bg-indigo-300 opacity-20 rounded-full filter blur-3xl top-10 left-10 -z-10" />
      <div className="absolute w-56 h-56 bg-purple-400 opacity-20 rounded-full filter blur-2xl bottom-20 right-10 -z-10" />

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent mb-12"
      >
        My Certificates
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <CertificateCard {...cert} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
