import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import InternshipCard from "../components/InternshipCard";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";
import { useTheme } from "../context/ThemeContext";

const internships = [
  {
    title: "Salesforce Intern",
    org: "TCS Last Mile & SmartBridge",
    duration: "June 2025 - Present",
    points: [
      "Contributed to enterprise-level application development projects.",
      "Gained hands-on experience in SDLC, coding standards, and documentation.",
      "Worked with Java, SQL, and cloud-based tools in real-world scenarios."
    ],
  },
  {
    title: "Data Science with AI Intern",
    org: "Labmentix",
    duration: "June 2025 - Present",
    points: [
      "Assisting in developing AI/ML-driven healthcare solutions.",
      "Implementing data preprocessing, model training, and evaluation.",
      "Working with Python, Scikit-learn, TensorFlow, and data visualization tools."
    ],
  },
  {
    title: "Data Science Intern",
    org: "Tripple One Solutions",
    duration: "June 2025 – July 2025",
    points: [
      "Worked on ML models for analyzing business performance data.",
      "Performed data cleaning, EDA, and feature engineering.",
      "Used Python, Pandas, Scikit-learn, Matplotlib for implementation.",
    ],
  },
  {
    title: "Machine Learning Intern",
    org: "InternPe",
    duration: "Nov 2024 – Dec 2024",
    points: [
      "Built ML models for diabetes, breast cancer, and IPL match prediction.",
      "Developed a web UI using Streamlit and Flask for model interaction.",
      "Published LinkedIn content to present results and demos.",
    ],
  },
];

const projects = [
  {
    title: "Brain Tumor detection & classification model",
    desc: "A deep learning-based Brain Tumor Classification system with a Streamlit interface for real-time MRI image analysis",
    techList: ["Python", "TensorFlow/Keras", "OpenCV", "Streamlit", "NumPy", "Matplotlib"],
    repo: "https://github.com/Alfiya-Simran/Brain-Tumor",
    image: "/images/Brain.png"
  },
{
    title: "InvestNest",
    desc: "Startup funding platform with investor/startup roles.",
    techList: ["React", "Firebase", "Tailwind CSS"],
    repo: "https://github.com/Alfiya-Simran/Mini-PC-voice-assistant",
    image: "/images/Invest.png",
  },
  {
    title: "Mini voice assisstant for PC",
    desc: "A smart desktop voice assistant built using Python.",
    techList: ["Python", "PyAutoGUI", "SpeechRecognition", "Tkinter"],
    repo: "https://github.com/Alfiya-Simran/InvestNest",
    image: "/images/ana.png",
  },
  {
    title: "Credit Card Fraud Detection",
    desc: "Streamlit-based ML app that detects fraudulent credit card transactions using Random Forest and Scikit-learn.",
    techList: ["Python", "Streamlit", "Scikit-learn", "Pandas"],
    repo: "https://github.com/Alfiya-Simran/Credit-card-fraud-detection-model",
    image: "/images/fraud.png",
  },
];

export default function Work() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const { darkMode } = useTheme();

  useEffect(() => {
    if (vantaEffect) vantaEffect.destroy();

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
    return () => effect && effect.destroy();
  }, [darkMode]);

  return (
    <section
      ref={vantaRef}
      className="relative min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-20 overflow-hidden text-gray-900 dark:text-white"
    >
      {/* Gradient blobs */}
      <div className="absolute w-64 h-64 bg-indigo-300 opacity-20 rounded-full filter blur-3xl top-10 left-10 -z-10" />
      <div className="absolute w-56 h-56 bg-purple-400 opacity-20 rounded-full filter blur-2xl bottom-20 right-10 -z-10" />

      {/* Internships Section */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-12 relative z-10 bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent"
      >
        Internships
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10 mb-20">
        {internships.map((intern, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <InternshipCard {...intern} />
          </motion.div>
        ))}
      </div>

      {/* Projects Section */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-12 relative z-10 bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent"
      >
        Projects
      </motion.h2>
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
       <p className="font-bold text-center mb-12 relative z-10 bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
    Explore the rest of my projects on{' '}
    <a 
      href="https://github.com/Alfiya-Simran" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-blue-500 hover:underline"
    >
      GitHub
    </a>
    .
  </p>
    </section>
  );
}






