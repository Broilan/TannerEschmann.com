import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Navbar } from "./components";
import { Home, Blog, BlogPost } from "./pages";

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="w-screen h-screen bg-gray-100 dark:bg-gray-950 text-black dark:text-gray-200 overflow-y-auto hide-scrollbar">
          <Navbar />
          <main className="relative w-full flex flex-col items-center mt-12">
            <div className="w-full lg:w-1/3 mx-auto px-4 py-10 flex flex-col space-y-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:name" element={<BlogPost />} />
              </Routes>
            </div>
          </main>
        </div>
      </Router>
    </HelmetProvider>
  );
}
