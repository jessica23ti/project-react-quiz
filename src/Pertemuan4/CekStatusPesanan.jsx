// import React, { useState } from "react";
// import data from "../Pertemuan5/Orders-1.json";

// export default function CekStatusPesanan() {
//   const [email, setEmail] = useState("");
//   const [orderId, setOrderId] = useState("");
//   const [hasil, setHasil] = useState(null);
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError("");
//     setHasil(null);
//     const trimmedEmail = email.trim();
//     const trimmedOrderId = orderId.trim();

//     if (!trimmedEmail || !trimmedOrderId) {
//       setError("Semua field harus diisi.");
//       return;
//     }

//     if (!trimmedEmail.includes("@") || !trimmedEmail.includes(".")) {
//       setError("Email tidak valid.");
//       return;
//     }

//     if (isNaN(trimmedOrderId)) {
//       setError("Order ID harus berupa angka.");
//       return;
//     }

//     const pesanan = data.find(
//       (p) => p.email === trimmedEmail && p.order_id === trimmedOrderId
//     );
//     setHasil(pesanan || false);
//   };

//   const statusStyle = (status) => {
//     if (status === "Diproses") return "bg-yellow-100 text-yellow-800";
//     if (status === "Dikirim") return "bg-blue-100 text-blue-800";
//     if (status === "Selesai") return "bg-green-100 text-green-800";
//     if (status === "Dibatalkan") return "bg-red-100 text-red-800";
//     return "bg-gray-100 text-gray-800";
//   };

//   return (
//     <div className="bg-white shadow mx-auto mt-10 p-6 rounded max-w-md">
//       <h2 className="mb-4 font-bold text-xl text-center">Cek Status Pesanan</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="email"
//           placeholder="Masukkan email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="p-2 border rounded w-full"
//         />
//         <input
//           type="text"
//           placeholder="Masukkan Order ID"
//           value={orderId}
//           onChange={(e) => setOrderId(e.target.value)}
//           className="p-2 border rounded w-full"
//         />
//         <button
//           type="submit"
//           className="bg-blue-600 hover:bg-blue-700 py-2 rounded w-full text-white"
//         >
//           Cek
//         </button>
//       </form>

//       {error && <p className="mt-3 text-red-600 text-sm">{error}</p>}

//       {hasil && (
//         <div className={`mt-5 p-4 rounded ${statusStyle(hasil.status)}`}>
//           <p>
//             ✅ Pesanan atas nama <strong>{hasil.nama_pemesan}</strong> dengan ID{" "}
//             <strong>{hasil.order_id}</strong> sedang dalam status{" "}
//             <strong>{hasil.status}</strong>.
//           </p>
//         </div>
//       )}

//       {hasil === false && (
//         <p className="mt-5 text-red-600">
//           ❌ Data pesanan tidak ditemukan. Periksa kembali email dan nomor
//           pesanan Anda.
//         </p>
//       )}
//     </div>
//   );
// }
