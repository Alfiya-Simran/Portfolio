import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useTheme } from "../context/ThemeContext"; // assuming you're using a ThemeContext

export default function Contact() {
  const form = useRef();
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
      color: darkMode ? 0x93c5fd : 0x7c3aed, // light blue in dark mode, indigo in light
      backgroundColor: darkMode ? 0x111827 : 0xffffff, // dark gray or white
    });

    setVantaEffect(effect);

    return () => {
      if (effect) effect.destroy();
    };
  }, [darkMode]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dh0qz6e",
        "template_ms5e9a8",
        form.current,
        "8d9K8hd_7q_gVsaQe"
      )
      .then(() => {
        toast.success("Message sent successfully!");
        form.current.reset();
      })
      .catch((err) => {
        console.error(err.text);
        toast.error("Oops! Something went wrong.");
      });
  };

  return (
    <section
      id="contact"
      ref={vantaRef}
      className="relative min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-16 flex items-center justify-center overflow-hidden text-gray-900 dark:text-white"
    >
      <div className="relative z-10 w-full max-w-xl">
        <h2 className="text-4xl font-semibold text-purple-600 mb-3 text-center">Contact Me</h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white/30 dark:bg-black/30 backdrop-blur-md border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-lg flex flex-col gap-4"
        > 
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-3 rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input type="hidden" name="time" value={new Date().toLocaleString()} />

          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
