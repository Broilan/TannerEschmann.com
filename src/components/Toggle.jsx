export default function Toggle({ options, selected, onChange }) {
  return (
    <div className="flex justify-evenly p-1 bg-gray-800 mt-8 w-full rounded-lg">
        {options.map((option) => (
          <button
            key={option}
            className={`text-sm p-1 w-full font-medium rounded-lg transition-colors duration-300 ${
              selected === option
                ? "bg-gray-900 text-white"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
            }`}
            onClick={() => onChange(option)}
          >
            {option}
          </button>
        ))}
    </div>
  );
}
