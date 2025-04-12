const TestimonialNote = ({ message, name, title, image }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-6">
      <img
        src={image}
        alt={name}
        className="w-20 h-20 rounded-full object-cover shadow-md"
      />
      <p className="text-lg text-gray-800 dark:text-gray-200 font-normal leading-relaxed max-w-xl">
        “{message}”
      </p>
      <div className="space-y-1">
        <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100 tracking-tight">
          {name}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
      </div>
    </div>
  );
};

export default TestimonialNote;
