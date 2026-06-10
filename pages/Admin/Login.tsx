import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === "nebo123") {
      localStorage.setItem("admin", "authenticated");
      navigate("/admin");
    } else {
      alert("Wrong password");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8">
          
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-blue-600 flex items-center justify-center">
              <span className="text-3xl font-bold text-white">
                N
              </span>
            </div>

            <h1 className="text-3xl font-bold text-white">
              Admin Login
            </h1>

            <p className="text-gray-400 mt-2">
              Nebo IT Solutions Administration Panel
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-gray-300 mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" && handleLogin()
                }
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
              />
            </div>

            <button
              onClick={handleLogin}
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-300"
            >
              Sign In
            </button>
          </div>

          <div className="mt-6 text-center text-sm text-gray-500">
            Protected Administrative Area
          </div>
        </div>
      </div>
    </div>
  );
}