import { blogCardData } from "../data";
import Card from "./Card";

export default function BlogCardList() {
  return (
    <div className="w-full flex flex-col items-center space-y-6">
      {blogCardData.map((item, index) => (
        <Card
          key={index}
          image={item.image}
          imgAlt={item.imgAlt}
          title={item.title}
          text={item.text}
          date={item.date}
        />
      ))}
    </div>
  );
}
