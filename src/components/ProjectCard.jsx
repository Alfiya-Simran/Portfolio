import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ title, desc, techList, repo, link, image, images, video }) {
  return (
    <div className="mx-auto max-w-3xl bg-white/30 dark:bg-black/30 backdrop-blur-md p-6 rounded-xl shadow-lg text-gray-800 dark:text-gray-100 space-y-6">
      
      {/* Single Image */}
      {image && !images && (
        <img
          src={image}
          alt={title}
          className="w-full h-55 object-cover rounded-lg"
        />
      )}

      {/* Image Grid (2x2) */}
      {images && (
        <div className="grid grid-cols-2 gap-2 w-full">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${title} - ${idx + 1}`}
              className="rounded-lg shadow-md object-cover transform hover:scale-105 transition duration-300"
            />
          ))}
        </div>
      )}

      {/* Video */}
      {video && (
        <video
          src={video}
          controls
          autoPlay
          muted
          loop
          className="w-full h-55 object-cover rounded-lg"
        />
      )}

      <div className="p-6">
        <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400">
          {title}
        </h3>

        <p className="mt-2 text-gray-700 dark:text-gray-300">
          {desc}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {techList.map((tech, index) => (
            <span
              key={index}
              className="bg-indigo-100 text-indigo-700 dark:bg-indigo-800 dark:text-white text-xs font-medium px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-4 flex gap-4">
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-black transition"
            >
              <span className="mr-1">View Repo</span>
              <FaGithub className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
