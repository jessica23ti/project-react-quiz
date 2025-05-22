// import React, { useState } from "react";
// import produkData from "../Pertemuan5/produk-1.json";

// export default function CekKetersediaanProduk() {
//   const [kodeProduk, setKodeProduk] = useState("");
//   const [hasil, setHasil] = useState(null);
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError("");
//     setHasil(null);

//     if (!kodeProduk) return setError("Kode produk tidak boleh kosong.");
//     if (kodeProduk.length < 4)
//       return setError("Kode produk harus minimal 4 karakter.");

//     const produk = produkData.find((p) => p.kode_produk === kodeProduk);
//     setHasil(produk || false);
//   };

//   return (
//     <div className="bg-white shadow mx-auto mt-10 p-6 rounded max-w-full">
//       <h2 className="mb-4 font-poppins-extrabold text-xl text-center">
//         Cek Ketersediaan Produk
//       </h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           placeholder="Masukkan Kode Produk"
//           value={kodeProduk}
//           onChange={(e) => setKodeProduk(e.target.value)}
//           className="p-2 border rounded w-full"
//         />
//         <button
//           type="submit"
//           className="bg-blue-600 hover:bg-blue-700 py-2 rounded w-full font-poppins-extrabold text-white"
//         >
//           Cek
//         </button>
//       </form>

//       {error && <p className="mt-3 text-red-600 text-sm">{error}</p>}

//       {hasil && hasil.stok > 0 && (
//         <div className="bg-green-100 mt-5 p-4 rounded text-green-800">
//           <p>
//             ✅ Produk <strong>{hasil.nama_produk}</strong> tersedia dengan harga
//             Rp{hasil.harga.toLocaleString()}.
//           </p>
//           <p>Stok tersedia: {hasil.stok}</p>
//         </div>
//       )}

//       {hasil && hasil.stok === 0 && (
//         <div className="bg-yellow-100 mt-5 p-4 rounded text-yellow-800">
//           <p>
//             ⚠️ Produk <strong>{hasil.nama_produk}</strong> saat ini sedang
//             habis.
//           </p>
//         </div>
//       )}

//       {hasil === false && (
//         <p className="mt-5 text-red-600">❌ Kode produk tidak ditemukan.</p>
//       )}
//     </div>
//   );
// }
