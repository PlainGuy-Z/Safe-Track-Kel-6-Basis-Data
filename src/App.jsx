import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen h-[200vh] bg-gray-950 ">

      <div className="w-full h-170 bg-[url('/newww.png')] bg-[position:center_150vh]">
        {/* right content */}
        <div className="w-full md:w-2/5 text-white px-5 md:pl-[60px] pt-10 animate__animated animate__backInLeft animate__delay-1s">
          <h1 className="text-4xl font-[Open_Sans] text-emerald-100 font-bold mb-5 hover:text-gray-500 transition-all duration-500 ease-in-out delay-300">
            Aplikasi Transaksi Keuangan Aman dan Transparan
          </h1>
          <h1 className="text-1xl font-[Open_Sans] text-emerald-100 font-medium mb-5 hover:text-slate-400 transition-all duration-500 ease-in-out delay-300">
            Kelola transaksi Keuangan anda dengan aman dan transparan menggunakan solusi kami
          </h1>
          <Link to="/Start" href="#"> <button className="bg-gray-800 hover:bg-indigo-950 hover:text-yellow-400 text-yellow-700 font-bold py-2 px-4 rounded-3xl transition-all duration-700">
            Mulai Sekarang
          </button></Link>
        </div>

        {/* left content */}
        <div className="grid h-56 grid-cols-3  place-items-end gap-4">
          {/* <h1 className="text-4xl text-white">INI ADALAH RIGHt KONTEN</h1> */}

        </div>
      </div>

      <div className="flex flex-col items-center justify-center mb-30 bg-gray-950 p-10 rounded-lg shadow-lg animate__animated animate__fadeInLeft animate__delay-1s">
        <h1 className="text-4xl font-bold mb-5 bg-gradient-to-r from-red-600 to-indigo-800 bg-clip-text hover:text-rose-900 transition-all duration-500 ease-in-out delay-200 text-transparent ml-2">SafeTrack</h1>
      </div>

    </div>
  )
}