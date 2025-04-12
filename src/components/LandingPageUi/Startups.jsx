import StartupCard from "../../utils/StartUpCard.jsx";

const startups = [
  {
    thumbnail: "/realtour.png",
    title: "VisionQuest",
    description: "Helping students explore real-world careers through immersive offline tours and expert mentorship.",
    status: "launched",
  },
  {
    thumbnail: "/memory.png",
    title: "MindForge",
    description: "A memory-enhancement platform rooted in Eastern psychology and modern neuroscience.",
    status: "pipeline",
  },
  {
    thumbnail: "/liva.png",
    title: "Liva",
    description: "Gift your employees a lifestyle upgrade — fresh air, mindful mornings, and a reason to wake up inspired.",
    status: "pipeline",
  },
];

const Startups = () => {
  return (
    <section
      id="startups"
      className="px-5 sm:px-6 md:px-10 lg:px-20 pt-10 pb-20 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 dark:text-white mb-2">
          Startups I’m Building
        </h2>
        <p className="text-center font-medium text-gray-600 dark:text-gray-300 mb-10 text-sm md:text-base">
          I believe in building what the world needs. Here's what I’m working on.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {startups.map((startup, index) => (
            <StartupCard key={index} {...startup} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Startups;
