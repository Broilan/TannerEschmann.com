export default function Toggle({ options, selected, onChange }) {
  return (
    <div className="flex justify-evenly p-1 bg-gray-200 dark:bg-gray-700 mt-8 w-full rounded-lg">
      {options.map((option) => (
        <button
          key={option}
          className={`text-sm p-1 w-full font-medium rounded-lg transition-colors duration-300 ${
            selected === option
              ? "bg-gray-300 dark:bg-gray-950 text-black dark:text-gray-400"
              : "bg-gray-200 dark:bg-gray-700 text-black hover:text-gray-100 dark:text-gray-400 hover:bg-gray-400 dark:hover:bg-gray-600"
          }`}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
