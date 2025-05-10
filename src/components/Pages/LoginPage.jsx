import React from "react";
import loginIllustration from "../../assets/laptopbag.png";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1A1B2F] px-4">
      <div className="flex flex-col md:flex-row w-full max-w-4xl g bg-[#131429] rounded-3xl overflow-hidden shadow-2xl bg-linear-to-tr from-red-500 to-zinc-400 ">
        
        {/* Left: Form */}
        <div className="w-full md:w-1/2 p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">BidFlare</h1>
          <h2 className="text-2xl text-white font-semibold mt-8">Welcome Back</h2>
          <p className="text-gray-400 mt-1 mb-6">Access your account</p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm text-white mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-md bg-[#2A2D45] text-white border border-[#3A3E5A] focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block text-sm text-white mb-1">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded-md bg-[#2A2D45] text-white border border-[#3A3E5A] focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div className="text-right">
              <button type="button" className="text-yellow-400 text-sm hover:underline">
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-400 transition"
            >
              Sign In
            </button>
          </form>

          <p className="text-gray-400 text-sm mt-6 text-center">
            Don't have an account? <button className="text-white underline">Register</button>
          </p>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 bg-[#1D1F37] flex items-center justify-center p-6">
          <img
            src={loginIllustration}
            alt="Login Illustration"
            className="w-full max-w-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
