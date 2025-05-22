// import React, { useState } from "react";
// import data from "../Pertemuan5/reward.json";

// export default function CekPoint() {
//   const [nomorHP, setNomorHP] = useState("");
//   const [hasil, setHasil] = useState(null);
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//   e.preventDefault();
//   setError("");
//   setHasil(null); // Reset hasil sebelumnya

//   if (!nomorHP) return setError("Nomor HP tidak boleh kosong");
//   if (nomorHP.length < 10) return setError("Nomor HP minimal 10 digit");
//   if (isNaN(nomorHP)) return setError("Nomor HP hanya boleh angka");

//   const pelanggan = data.find((p) => p.nomor_hp === nomorHP);
//   setHasil(pelanggan || false);
// };


//   return (
//     <div className="bg-white shadow mx-auto mt-10 p-6 rounded max-w-md">
//       <h2 className="mb-4 font-bold text-xl text-center">
//         Cek Poin Reward Sedap
//       </h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           placeholder="Masukkan nomor HP"
//           value={nomorHP}
//           onChange={(e) => setNomorHP(e.target.value)}
//           className="p-2 border rounded w-full"
//         />
//         <button
//           type="submit"
//           className="bg-green-600 hover:bg-green-700 py-2 rounded w-full text-white"
//         >
//           Cek
//         </button>
//       </form>

//       {error && <p className="mt-3 text-red-600 text-sm">{error}</p>}

//       {hasil && (
//         <div className="bg-green-100 mt-5 p-4 rounded text-green-800">
//           <p>
//             🎉 Selamat <strong>{hasil.nama}</strong>, Anda memiliki{" "}
//             <strong>{hasil.poin}</strong> poin
//           </p>
//           <p>
//             Status Member: <strong>{hasil.status_member}</strong>
//           </p>
//           <p className="mt-2">Tukarkan segera dengan hadiah menarik!</p>
//         </div>
//       )}

//       {hasil === false && (
//         <p className="mt-5 text-red-600">
//           ❌ Nomor HP tidak terdaftar di sistem reward Sedap.
//         </p>
//       )}
//     </div>
//   );
// }
