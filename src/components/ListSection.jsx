export default function ListSection({ data }) {
    return (
      <div className="bg-gray-950 rounded-lg p-6 mt-4 border-[1px] border-gray-800 relative max-h-[30rem] overflow-y-auto hide-scrollbar">
        {/* Vertical Line */}
        <div className="absolute top-0 left-[46px] h-full w-[0.5px] bg-gray-400"></div>
        <ul className="space-y-6">
          {data.map((item, index) => (
            <li key={index} className="flex items-start space-x-4 relative">
              <img
                src={item.image}
                alt={item.alt}
                className="w-12 h-12 rounded-full border-2 border-gray-500 relative z-10"
              />
              <div>
                <strong className="text-lg">{item.title}</strong> - {item.subtitle}
                <p className="text-gray-400 text-sm">{item.date}</p>
                <ul className="text-gray-300 text-sm list-disc ml-6 mt-1">
                  {item.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  