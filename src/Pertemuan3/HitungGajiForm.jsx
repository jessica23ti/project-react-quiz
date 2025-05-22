import { useState } from "react";
import InputGaji from "./components/inputGaji";
import DivContoh from "./components/DivContoh";

export default function HitungGajiForm() {
  const [gaji, setGaji] = useState("");
  const pajak = 0.11;
  const totalGaji = gaji - gaji * pajak;
  return (
    <>
      <div className="flex flex-col items-center justify-center m-5 p-5 bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Hitung Gaji Bersih
          </h2>

          <InputGaji
            label="Gaji"
            type="number"
            placeholder="Silahkan masukkan  gaji anda..."
            onChange={(e) => setGaji(e.target.value)}
          />

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Pajak: <b class="text-red-500">11%</b>
            </label>
          </div>
          {!gaji ? (
            
            <DivContoh
            className1="mt-4 p-3 bg-red-100 border-1-4 border-red-500 text-red-700"
            className2="font-semibold"
            text="ISI DULU"
            />
          ) : (
            <DivContoh
            className1="mt-4 p-3 bg-blue-100 border-1-4 border-blue-500 text-blue-700"
            className2="font-semibold"
            text= {`Total Take Home Pay (THP) : Rp. ${totalGaji.toLocaleString()}`}
            />
          )}
        </div>
      </div>
    </>
  );
}
