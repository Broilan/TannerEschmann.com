import BlogCardList from "../components/BlogCardList";

export default function Blog() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Blog</h1>
      <BlogCardList />
    </div>
  );
}
