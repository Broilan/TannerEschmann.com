import { useParams } from "react-router-dom";
import { blogData } from "../data";
import ReactMarkdown from 'react-markdown';
import { Helmet } from "react-helmet-async";

export default function BlogPost() {
  const { name } = useParams();
  const article = blogData[name];

  if (!article) {
    return (
      <div className="text-center text-red-500">
        <Helmet>
          <title>Article Not Found | Tanner Eschmann</title>
        </Helmet>
        <p>Article not found.</p>
      </div>
    );
  }

  const description = article.summary || article.content.slice(0, 150) + "...";

  return (
    <article className="p-6 w-full md:border-x-[1px] border-gray-300 dark:border-gray-900" aria-labelledby="article-title">
      <Helmet>
        <title>{article.title} | Tanner Eschmann</title>
        <meta name="description" content={description} />
      </Helmet>
      <h1 id="article-title" className="text-4xl font-bold mb-2 dark:text-gray-300 border-b-[1px] border-gray-300 dark:border-gray-600">
        {article.title}
      </h1>
      <span className="text-sm text-black dark:text-gray-500">{article.date}</span>
      <img
        src={article.image}
        alt={article.imgAlt || article.title}
        className="w-full h-80 mb-4"
        loading="lazy"
      />
      <ReactMarkdown className="prose dark:text-gray-300">{article.content}</ReactMarkdown>
    </article>
  );
}
