import React from "react";


export default function App() {
  return (
    <div className="min-h-screen bg-neutral-900 bg-[url('/newww.png')] bg-[position:center_150vh]">
      {/* Navbar */}
      <div className="h-[10vh]  flex flex-col sm:flex-row ">
        {/* Left Nav  */}
        <div className="flex items-center bg-slate-900 h-full w-full sm:w-auto relative sm:pr-10 animate__animated animate__fadeInTopLeft animate__delay-1s" style={{ clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 100%, 0% 100%)' }}>
          <ul className="flex items-center p-0 m-0 list-none px-5 h-full">
            <li className="text-white flex items-center hover:text-yellow-600 transition-all duration-700 ease-in-out delay-200">
              <img src="s.png" className="h-[30px] w-[50px] block" alt="picture" />
            </li>
            <li className="flex items-center font-bold bg-gradient-to-r from-red-600 to-indigo-800 bg-clip-text  hover:text-rose-900 transition-all duration-500 easy-in-out delay-200 text-transparent ml-2">
              <h3 className="text-xl">SafeTrack</h3>
            </li>
          </ul>
        </div>

        {/* Right Nav */}
        <div className="flex-1 flex justify-end animate__animated animate__fadeInTopRight animate__delay-1s">
          <div className="flex items-center bg-slate-900 h-full w-full sm:w-auto relative sm:pl-10" style={{ clipPath: 'polygon(30px 0, 100% 0, 100% 100%, 0% 100%)' }}>
            <ul className="flex items-center justify-center sm:justify-end gap-2 p-0 m-0 list-none font-sans text-xs px-5 h-full w-full">
              <li className="text-white flex items-center gap-2">
                <a
                  href="login.jsx" 
                  className="bg-gradient-to-r from-red-600 to-indigo-800 bg-clip-text text-transparent text-2xl px-3 py-2 font-bold no-underline hover:text-red-900  transition-all duration-500 ease-in-out delay-200"
                >
                  Login
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-r from-red-600 to-indigo-800 bg-clip-text text-transparent text-2xl px-3 py-2 font-bold no-underline hover:text-yellow-600 transition-all duration-500 ease-in-out delay-200"
                >
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="w-full md:w-2/5 text-white px-5 md:pl-[60px] pt-10 animate__animated animate__backInLeft animate__delay-1s">
        <h1 className="text-4xl font-[Open_Sans] text-emerald-100 font-bold mb-5 hover:text-gray-500 transition-all duration-500 ease-in-out delay-300">
          Aplikasi Transaksi Keuangan Aman dan Transparan
        </h1>
        <h1 className="text-1xl font-[Open_Sans] text-emerald-100 font-medium mb-5 hover:text-slate-400 transition-all duration-500 ease-in-out delay-300">
          Kelola transaksi Keuangan anda dengan aman dan transparan menggunakan solusi kami
        </h1>
        <button className="bg-gray-800 hover:bg-indigo-950 hover:text-yellow-400 text-yellow-700 font-bold py-2 px-4 rounded-3xl transition-all duration-700">
          Mulai Sekarang
        </button>
      </div>
    </div>
  )
}