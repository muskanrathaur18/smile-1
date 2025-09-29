import React, { useState } from "react";
import { Search } from "lucide-react";

const Blog = () => {
  const blogs = Array(30).fill({
    date: "October 09, 2025",
    title: "Lorem Ipsum Is Simply Dummy Text A: Of The Printing And Typeset",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
  });

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;

  // Calculate current blogs
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Total pages
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  return (
    <div className="max-w-full mx-auto font-[Neue_Haas_Grotesk_Display_Pro]">
      <div className="bg-[#8a8a8a] h-[250px]  flex flex-col justify-center items-center text-center">
        <h3 className="text-white text-3xl font-bold">Text</h3>
      </div>
      <div className="flex justify-center items-center gap-3 mb-10 mt-8">
        <select className="border border-gray-300 rounded-md px-4 py-2 text-gray-600">
          <option>Lorem Is</option>
          <option>Ipsum</option>
        </select>
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Ipsum"
            className="border border-gray-300 rounded-md px-4 py-2 w-full pr-10"
          />
          <Search
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
            size={18}
          />
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-8  px-8">
        {currentBlogs.map((blog, i) => (
          <div key={i} className="flex flex-col">
            <div className="bg-gray-300 w-full h-40"></div>
            <div className="mt-3">
              <p className="text-sm text-gray-500">{blog.date}</p>
              <h2 className="text-[#231f20] font-semibold text-lg hover:text-[#5a2c91] cursor-pointer">
                {blog.title}
              </h2>
              <p className="text-sm text-gray-600 mt-2">{blog.description}</p>
              <a
                href="#"
                className="mt-2 inline-block text-sm text-[#5a2c91] font-medium hover:underline"
              >
                Your More →
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-2 mt-10 mb-6">
        <button
          className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          &lt;
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 border border-gray-300 rounded ${
              currentPage === i + 1
                ? "bg-[#5a2c91] text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Blog;
