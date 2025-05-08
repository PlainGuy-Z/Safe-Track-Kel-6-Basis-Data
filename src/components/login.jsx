import React from "react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white animate__animated animate__bounceInUp">
      <div className="bg-gray-800 p-10 rounded shadow-lg animate__animated animate__bounceIn animate__delay-2s">
        <h2 className="text-3xl font-bold mb-6 flex justify-center">Login</h2>
        <form>
          <div className="mb-4">
            <label>Email</label>
            <input
              type="email"
              className="block w-full px-4 py-2 rounded bg-gray-700 text-white mt-1"
              placeholder="Masukkan email"
            />
          </div>
          <div className="mb-6">
            <label>Password</label>
            <input
              type="password"
              className="block w-full px-4 py-2 rounded bg-gray-700 text-white mt-1"
              placeholder="Masukkan password"
            />
          </div>
          <button className="w-full bg-indigo-700 hover:bg-indigo-900 py-2 rounded text-yellow-400 font-bold">
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
}
