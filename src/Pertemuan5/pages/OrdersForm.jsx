import { useState } from "react";
import PageHeader from "../components/PageHeader";
import "../assets/tailwind.css";
import { Link } from "react-router-dom";
export default function OrdersForm() {
  const [form, setForm] = useState({
    order_id: "",
    customer_name: "",
    status: "",
    total_price: "",
    order_date: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
    // Kirim data ke backend / simpan / tampilkan
  };

  return (
    <div className="mx-auto p-6 max-w-xl">
      <PageHeader title="Add New Order" breadcrumb={["Orders", "Add"]}
      children={<><button id="add-button" className="bg-biru mr-2 px-4 py-2 rounded-lg text-white" ><Link to="/"> Kembali</Link></button></> }/>

      <form
        onSubmit={handleSubmit}
        className="space-y-5 bg-white shadow-md p-6 rounded-lg"
      >
        <div>
          <label className="block font-medium text-gray-700 text-sm">
            Order ID
          </label>
          <input
            type="text"
            name="order_id"
            value={form.order_id}
            onChange={handleChange}
            className="block mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="ORD001"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 text-sm">
            Customer Name
          </label>
          <input
            type="text"
            name="customer_name"
            value={form.customer_name}
            onChange={handleChange}
            className="block mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Jessica"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 text-sm">
            Status
          </label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="block mt-1 p-2 border border-gray-300 rounded-md w-full"
          >
            <option value="">-- Pilih Status --</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        <div>
          <label className="block font-medium text-gray-700 text-sm">
            Total Harga
          </label>
          <input
            type="number"
            name="total_price"
            value={form.total_price}
            onChange={handleChange}
            className="block mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="100000"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 text-sm">
            Order Date
          </label>
          <input
            type="date"
            name="order_date"
            value={form.order_date}
            onChange={handleChange}
            className="block mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-biru hover:bg-blue-700 px-4 py-2 rounded-md text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
