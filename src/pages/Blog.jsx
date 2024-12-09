import React from "react";
import { Helmet } from "react-helmet-async";
import BlogCardList from "../components/BlogCardList";

export default function Blog() {
  return (
    <section aria-labelledby="blog-page-title" className="w-full max-w-4xl mx-auto">
      <Helmet>
        <title>Blog | Tanner Eschmann</title>
        <meta
          name="description"
          content="Read blog posts by Tanner Eschmann on web development, engineering, and more."
        />
      </Helmet>
      <h1 id="blog-page-title" className="text-3xl font-bold text-center mb-8">Blog</h1>
      <BlogCardList />
    </section>
  );
}
