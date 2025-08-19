export default function InternshipCard({ title, org, duration, points }) {
  return (
    <div className="mx-auto max-w-3xl bg-white/30 dark:bg-black/30 backdrop-blur-md p-6 rounded-xl shadow-lg text-gray-800 dark:text-gray-100 space-y-6">
      <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{org}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{duration}</p>
      <ul className="list-disc list-inside text-base space-y-1 mt-2 text-gray-800 dark:text-gray-100">
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
