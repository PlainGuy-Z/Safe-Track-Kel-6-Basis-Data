import React from "react";
import { Link } from "react-router-dom";

export default function Start() {
        return (
                <div className="min-h-screen h-[200vh] bg-slate-900 flex justify-center items-center ">
                        <div className="flex flex-col items-center justify-center mb-30 bg-slate-800 p-10 rounded-lg shadow-lg animate__animated animate__fadeInLeft animate__delay-1s">
                                <h1 className="text-4xl font-bold mb-5 bg-gradient-to-r from-red-600 to-indigo-800 bg-clip-text hover:text-rose-900 trasition-all duration-500 easy-in-out delay-200 text-transparent ml-2">SafeTrack</h1>
                                <h1 className="text-4xl text-fuchsia-50 text-center">
                                        Aplikasi Transaksi <br />
                                        yang Aman <br />
                                        dan Transparan
                                </h1>
                                <h1 className="text-1xl text-slate-300 text-center mt-5">
                                        pantau setiap transaksi
                                        secara mudah melalui <br />
                                        platform kami yang terpercaya </h1>
                                <Link to="/Dashboard" href="#">
                                        <button className="bg-gray-800 hover:bg-indigo-950 hover:text-yellow-400 text-yellow-700 font-bold py-2 px-4 rounded-3xl transition-all duration-700">
                                                Mulai Sekarang
                                        </button>  </Link>
                        </div>


                </div>
        )
}