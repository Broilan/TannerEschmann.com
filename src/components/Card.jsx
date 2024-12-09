import { Link } from "react-router-dom";

export default function Card({ image, imgAlt, title, urlTitle, text, date }) {
  return (
    <div className="flex border-b-[1px] border-gray-400 dark:border-gray-700 w-full p-4 text-left">
      {/* Lazy load image */}
      <img
        src={image}
        alt={imgAlt}
        loading="lazy"
        className="aspect-video object-fit w-1/3 rounded-lg border-[1px] border-gray-800"
      />
      <div className="flex flex-col justify-between ml-4 w-2/3">
        <h1 className="text-xl font-bold mb-2">{title}</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{text}</p>
        <div className="flex justify-between items-center text-sm">
          <Link to={`/blog/${urlTitle}`} className="text-blue-500 hover:underline">
            Read More
          </Link>
          <span className="text-gray-500">{date}</span>
        </div>
      </div>
    </div>
  );
}
