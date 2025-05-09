import React from "react";

export default function Dashboard() {
    return (
        <div className="min-h-screen h-[200vh] bg-slate-900 ">

            <div className="w-full bg-slate-900 h-150 flex justify-center items-center">

                <div className="flex  justify-center gap-4 items-center">
                    {/* div left*/}
                    <div className="">
                        <div className="flex flex-col items-center justify-center mb-4 bg-slate-800 p-10 rounded-lg animate__animated animate__fadeInTopLeft ">
                            <h1 className="text-2xl font-bold text-white">Kirim Dana</h1>
                            <h1 className="text-1xl text-white">lakukan Transfer dana secara</h1>
                        </div>

                        <div className="flex flex-col items-center justify-center mb-4 bg-slate-800 p-10 rounded-lg animate__animated animate__fadeInBottomLeft">
                        <h1 className="text-2xl font-bold text-white">Laporan keuangan</h1>
                        <h1 className="text-1xl text-white">lakukan Transfer dana secara</h1>
                        </div>
                    </div>

                    {/* div Right*/}
                    <div className="">
                        <div className="flex flex-col items-center justify-center mb-4 bg-slate-800 p-10 rounded-lg animate__animated animate__fadeInTopRight ">
                        <h1 className="text-2xl font-bold text-white">Riwayat transaksi</h1>
                        <h1 className="text-1xl text-white">lakukan Transfer dana secara</h1>
                        </div>

                        <div className="flex flex-col items-center justify-center mb-4 bg-slate-800 p-10 rounded-lg animate__animated animate__fadeInBottomRight ">
                        <h1 className="text-2xl font-bold text-white">Pemantauan Aktivitas</h1>
                        <h1 className="text-1xl text-white">lakukan Transfer dana secara</h1>
                        </div>

                    </div>

                </div>

            </div>






        </div>
    )
}