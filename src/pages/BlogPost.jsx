import { useParams } from "react-router-dom";
import { blogData } from "../data";
import ReactMarkdown from 'react-markdown';

export default function BlogPost() {
  const { name } = useParams();

  // Access the article directly from the object
  const article = blogData[name];

  // Handle case where no article is found
  if (!article) {
    return <div className="text-center text-red-500">Article not found.</div>;
  }

  return (
    <div className="p-6 w-full md:border-x-[1px] border-gray-300 dark:border-gray-900">
      <h1 className="text-4xl font-bold mb-2 dark:text-gray-300 border-b-[1px] border-gray-300 dark:border-gray-600">{article.title}</h1>
      <span className="text-sm text-black dark:text-gray-500">{article.date}</span>
      <img
        src={article.image}
        alt={article.imgAlt}
        className="w-full h-80 mb-4"
      />
      <p className="dark:text-white mb-4 font-extrabold text-4xl text-center">. . .</p>
      <ReactMarkdown className="prose dark:text-gray-300">{article.content}</ReactMarkdown>
      </div>
  );
}
