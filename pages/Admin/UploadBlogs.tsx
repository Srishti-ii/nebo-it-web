import { useState } from "react";
import { Link } from "react-router-dom";
export default function UploadBlogs() {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleUpload = async () => {
  if (!file) {
    alert("Please select an image");
    return;
  }

  try {
    const formData = new FormData();

    formData.append("image", file);
    formData.append("title", title);
    formData.append("description", description);

    const response = await fetch(
      "https://simplefiles.onrender.com/api/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();

    console.log(data);
    alert("Upload successful");
  } catch (error) {
    console.error(error);
    alert("Upload failed");
  }
};
return (
  <div className="min-h-screen bg-gray-100 p-8">
    <div className="max-w-2xl mx-auto">

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

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Upload Blog
        </h1>

        <div className="space-y-5">
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Select Image
            </label>

            <input
              type="file"
              className="w-full border rounded-lg text-gray-500 p-3"
              onChange={(e) =>
                setFile(e.target.files?.[0] || null)
              }
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Title
            </label>

            <input
              type="text"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              className="w-full border rounded-lg text-gray-700 p-3"
              placeholder="Enter title"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Description
            </label>

            <textarea
              rows={5}
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
              className="w-full border rounded-lg p-3 text-gray-700"
              placeholder="Enter description"
            />
          </div>

          <button
            onClick={handleUpload}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Upload Blog
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}