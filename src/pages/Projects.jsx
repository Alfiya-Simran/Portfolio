import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";
import { useTheme } from "../context/ThemeContext";

const projects = [
  {
    title: "Credit Card Fraud Detection",
    desc: "Streamlit-based ML app that detects fraudulent credit card transactions using Random Forest and Scikit-learn.",
    techList: ["Python", "Streamlit", "Scikit-learn", "Pandas"],
    repo: "https://github.com/Alfiya-Simran/Credit-card-fraud-detection-model",
    image: "/images/fraud.png"
  },
  {
    title: "InvestNest",
    desc: "Startup funding platform with investor/startup roles.",
    techList: ["React", "Firebase", "Tailwind CSS"],
    repo: "https://github.com/Alfiya-Simran/Mini-PC-voice-assistant",
    images: [
      "/images/Investnest/in1.png",
      "/images/Investnest/in2.png",
      "/images/Investnest/in3.png",
      "/images/Investnest/in4.png",
      "/images/Investnest/in5.png",
      "/images/Investnest/in6.png",
      "/images/Investnest/in7.png",
      "/images/Investnest/in8.png",
      ]
  },
  {
    title: "Mini voice assisstant for PC",
    desc: "A smart desktop voice assistant built using Python.",
    techList: ["Python", "PyAutoGUI", "SpeechRecognition","Tkinter"],
    repo: "https://github.com/Alfiya-Simran/InvestNest",
    image: "/images/ana.png"
  },
  {
    title: "Brain Tumor detection & classification model",
    desc: "A deep learning-based Brain Tumor Classification system with a Streamlit interface for real-time MRI image analysis",
    techList: ["Python", "TensorFlow/Keras", "OpenCV", "Streamlit", "NumPy", "Matplotlib"],
    repo: "https://github.com/Alfiya-Simran/Brain-Tumor",
    images: [
      "/images/bt1.png",
      "/images/bt2.png",
      "/images/bt3.png",
      "/images/bt4.png"
    ]
  },
];


export default function Projects() {
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
      THREE: THREE,
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
      id="projects"
      ref={vantaRef}
      className="relative min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-20 overflow-hidden text-gray-900 dark:text-white"
    >
      {/* Gradient blur blobs */}
      <div className="absolute w-64 h-64 bg-indigo-300 opacity-20 rounded-full filter blur-3xl top-10 left-10 -z-10" />
      <div className="absolute w-56 h-56 bg-purple-400 opacity-20 rounded-full filter blur-2xl bottom-20 right-10 -z-10" />

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ProjectCard {...proj} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
