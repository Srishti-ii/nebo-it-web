import { Link } from "react-router-dom";

export default function Dashboard() {
  const logout = () => {
    localStorage.removeItem("admin");
    window.location.hash = "#/login";
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-blue-900 text-white px-8 py-5 shadow-lg flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          Nebo Admin Panel
        </h1>

        <button
          onClick={logout}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-medium transition"
        >
          Logout
        </button>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            to="/admin/upload"
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition border-l-4 border-blue-600"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Upload Blog
            </h2>

            <p className="text-gray-600">
              Upload new blogs and images to the website.
            </p>
          </Link>

          <Link
            to="/admin/images"
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition border-l-4 border-green-600"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Manage Blogs
            </h2>

            <p className="text-gray-600">
              View and delete uploaded blogs.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}