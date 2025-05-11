import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div className="min-h-screen h-[200vh] w-full sm:w-auto relative sm:pr-1 bg-slate-900 ">

            <div className="w-full bg-slate-900 h-150 flex justify-center items-center">
                <div className="">
                    <h1 className="text-white text-4xl mb-7 font-bold text-center transform hover:scale-105 transition-transform duration-300 animate__animated animate__backInDown">Dashboard</h1>

                    <div className="flex justify-center gap-4 items-center">
                        {/* div left*/}
                        <div className="space-y-4">
                            <Link to="/Send" href="#"><div className="flex flex-col items-center justify-center mb-4 transform hover:-translate-y-2 hover:scale-103 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 bg-slate-800 p-10 rounded-lg animate__animated animate__fadeInTopLeft ">
                                <h1 className="text-2xl font-bold text-white">Kirim Dana</h1>
                                <h1 className="text-1xl text-white">lakukan Transfer dana secara aman</h1>
                            </div> </Link>

                            <div className="flex flex-col items-center justify-center mb-4 transform hover:rotate-1 hover:scale-102 transition-all duration-300 
                                hover:shadow-lg hover:shadow-purple-500/50 bg-slate-800 p-10 rounded-lg animate__animated animate__fadeInBottomLeft">
                                <h1 className="text-2xl font-bold text-white">Laporan keuangan</h1>
                                <h1 className="text-1xl text-white">lihat dan unduh laporan keuangan</h1>
                            </div>
                        </div>

                        {/* div Right*/}
                        <div className="space-y-4">
                            <div className="flex flex-col items-center justify-center mb-4 
                                transform hover:skew-x-3 hover:scale-103 transition-all duration-300 
                                hover:shadow-lg hover:shadow-green-500/50 bg-slate-800 p-10 rounded-lg animate__animated animate__fadeInTopRight ">
                                <h1 className="text-2xl font-bold text-white">Riwayat transaksi</h1>
                                <h1 className="text-1xl text-white">Tinjau trannsaksi akun anda</h1>
                            </div>

                            <div className="flex flex-col items-center justify-center mb-4  transform hover:translate-y-2 hover:scale-103 transition-all duration-300 
                                hover:shadow-lg hover:shadow-red-500/50 bg-slate-800 p-10 rounded-lg animate__animated animate__fadeInBottomRight ">
                                <h1 className="text-2xl font-bold text-white">Pemantauan Aktivitas</h1>
                                <h1 className="text-1xl text-white">panatu aktivitas mencurigakan</h1>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}