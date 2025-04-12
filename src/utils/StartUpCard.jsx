import { Rocket, Hourglass } from "lucide-react";

const statusStyles = {
  launched: {
    color: "text-green-600",
    bg: "bg-green-100",
    icon: <Rocket className="w-4 h-4 mr-1" />,
    label: "Launched",
  },
  pipeline: {
    color: "text-yellow-600",
    bg: "bg-yellow-100",
    icon: <Hourglass className="w-4 h-4 mr-1" />,
    label: "In Pipeline",
  },
};

const StartupCard = ({ thumbnail, title, description, status }) => {
  const styles = statusStyles[status];

  return (
    <div className="rounded-2xl shadow-md overflow-hidden bg-white dark:bg-slate-800 transition-colors duration-300">
      <img src={thumbnail} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{description}</p>
        <div
          className={`inline-flex items-center text-xs mt-3 px-3 py-1 rounded-full ${styles.bg} ${styles.color} font-medium`}
        >
          {styles.icon}
          {styles.label}
        </div>
      </div>
    </div>
  );
};

export default StartupCard;
