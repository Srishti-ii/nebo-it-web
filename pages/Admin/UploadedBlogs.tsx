import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function UploadedBlogs() {
  const [images, setImages] = useState<any[]>([]);

  useEffect(() => {
    fetch(
      "https://simplefiles.onrender.com/api/images"
    )
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch(console.error);
  }, []);

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (!confirmed) return;

    try {
      const response = await fetch(
        `https://simplefiles.onrender.com/api/images/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      setImages((prev) =>
        prev.filter((blog) => blog.id !== id)
      );

      alert("Blog deleted successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to delete blog");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">

        <div className="mb-6 flex gap-4">
          <Link
            to="/admin"
            className="bg-gray-800 text-white px-4 py-2 rounded"
          >
            Dashboard
          </Link>

          <Link
            to="/admin/images"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Blogs
          </Link>

          <Link
            to="/admin/upload"
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Upload
          </Link>
        </div>

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-blue-900">
            Uploaded Blogs
          </h1>

          <div className="bg-white px-4 py-2 text-gray-700 rounded-lg shadow">
            Total Blogs: {images.length}
          </div>
        </div>

        {images.length === 0 ? (
          <div className="bg-white p-8 rounded-xl shadow text-center text-gray-500">
            No blogs found
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img) => (
              <div
                key={img.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">
                    Preview Unavailable
                  </span>
                </div>

                <div className="p-5">
                  <h2 className="font-bold text-gray-700 text-lg mb-2">
                    {img.title}
                  </h2>

                  <p className="text-gray-600 mb-3">
                    {img.description}
                  </p>

                  <div className="text-sm text-gray-500 break-all">
                    {img.imageName}
                  </div>

                  <button
                    onClick={() => handleDelete(img.id)}
                    className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition"
                  >
                    Delete Blog
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}