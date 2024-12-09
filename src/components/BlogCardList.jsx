import { blogData } from "../data";
import Card from "./Card";

export default function BlogCardList() {
  return (
    <div className="w-full flex flex-col items-center space-y-6">
      {Object.entries(blogData).map(([urlTitle, item]) => (
        <Card
          key={urlTitle}
          image={item.image}
          imgAlt={item.imgAlt}
          title={item.title}
          urlTitle={urlTitle} // Pass the key directly
          text={item.text}
          date={item.date}
        />
      ))}
    </div>
  );
}
