import React from "react";

export default function App() {
  return (
    <div className="min-h-screen h-[100vh] bg-neutral-900 bg-[url('/newww.png')] bg-[position:center_150vh]">
      {/* right content */}
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

      {/* left content */}
      <div className="grid h-56 grid-cols-3  place-items-end gap-4">
        {/* <h1 className="text-4xl text-white">INI ADALAH RIGHt KONTEN</h1> */}

      </div>


    </div>
  )
}