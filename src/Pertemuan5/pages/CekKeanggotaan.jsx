import React, { useState } from "react";
import data from "../Anggota.json";
import PageHeader from "../components/PageHeader";

export default function CekKeanggotaan() {
  const [email, setEmail] = useState("");
  const [hasil, setHasil] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setHasil(null);

    const trimmedEmail = email.trim();

    if (!trimmedEmail) return setError("Email tidak boleh kosong.");
    if (!trimmedEmail.includes("@") || !trimmedEmail.includes(".")) {
      return setError("Email tidak valid.");
    }

    const member = data.find((m) => m.email === trimmedEmail);
    setHasil(member || false);
  };

  const memberStyle = (tipe) => {
    if (tipe === "silver") return "bg-gray-100 text-gray-800";
    if (tipe === "gold") return "bg-yellow-100 text-yellow-800";
    if (tipe === "platinum") return "bg-purple-100 text-purple-800";
    return "bg-gray-100 text-gray-800";
  };

  const memberIcon = (tipe) => {
    if (tipe === "silver") return "🥈";
    if (tipe === "gold") return "🥇";
    if (tipe === "platinum") return "💎";
    return "🧾";
  };

  return (
    <>
      <PageHeader
        title={"Cek Anggota "}
        children={""}
        breadcrumb={["Admin", "Cek Anggota "]}
      />

      <div className="bg-white shadow mx-auto mt-8 p-6 rounded max-w-full">
        <h2 className="font-bold text-center font-poppins-extrabold text-2xl underline mb-10 ">Cek Keanggotaan</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Masukkan email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 py-2 rounded w-full text-white font-poppins-extrabold "
          >
            Cek
          </button>
        </form>

        {error && <p className="mt-3 text-red-600 text-sm">{error}</p>}

        {hasil && (
          <div className={`mt-5 p-4 rounded ${memberStyle(hasil.tipe_member)}`}>
            <p>
              {memberIcon(hasil.tipe_member)} Selamat datang,{" "}
              <strong>{hasil.nama}</strong>! Anda adalah member{" "}
              <strong>{hasil.tipe_member}</strong>.
            </p>
          </div>
        )}

        {hasil === false && (
          <p className="mt-5 text-red-600">
            ❌ Email tidak terdaftar sebagai member.
          </p>
        )}
      </div>
    </>
  );
}
