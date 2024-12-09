import { blogData } from "../data";
import Card from "./Card";

export default function BlogCardList() {
  return (
    <div className="w-full flex flex-col items-center space-y-6" role="list">
      {Object.entries(blogData).map(([urlTitle, item]) => (
        <article key={urlTitle} role="listitem">
          <Card
            image={item.image}
            imgAlt={item.imgAlt}
            title={item.title}
            urlTitle={urlTitle}
            text={item.text}
            date={item.date}
          />
        </article>
      ))}
    </div>
  );
}
