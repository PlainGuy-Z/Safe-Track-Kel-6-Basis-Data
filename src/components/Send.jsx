import React from "react";
import { Link } from "react-router-dom";


export default function kirimDana() {
    return (
        <div className="min-h-screen w-full mt-15 sm:w-auto relative sm:pr-1 flex items-start justify-center bg-slate-900 text-white">
            <div className="bg-gray-800 p-10 mt-1 rounded shadow-lg animate__animated animate__bounceIn animate__delay-2s ">
                <h2 className="text-3xl font-bold mb-6 text-center">Kirim Dana</h2>
                <form>
                    <div className="mb-4">
                        <input
                            type="text"
                            className="block w-full px-4 py-2 rounded bg-gray-700 text-white mt-1"
                            placeholder="Nomor rekening tujuan"
                        />
                    </div>

                    <div className="mb-6">
                        <input
                            type="number"
                            className="block w-full px-4 py-2 rounded bg-gray-700 text-white mt-1"
                            placeholder="Jumlah dana"
                        />
                    </div>

                    <div className="mb-6">
                        <input
                            type="text"
                            className="block w-full px-4 py-2 rounded bg-gray-700 text-white mt-1"
                            placeholder="Deskripsi"
                        />
                    </div>

                    <div className="mb-6">
                        <input
                            type="date"
                            className="block w-full px-4 py-2 rounded bg-gray-700 text-white mt-1"
                            placeholder="tanggal"
                        />
                    </div>

                    <Link to="/Dashboard">
                        <button className="w-full bg-blue-900 hover:bg-indigo-900 py-2 rounded text-white  font-bold">
                            Kirim
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
}