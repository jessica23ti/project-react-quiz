import { useState } from "react";
import PageHeader from "../components/PageHeader";
import "../assets/tailwind.css";
import { Link } from "react-router-dom";
export default function CustomersForm() {
  const [form, setForm] = useState({
    customer_id: "",
    customer_name: "",
    email: "",
    phone: "",
    loyalty: "",
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
      <PageHeader
        title="Add New Customer"
        breadcrumb={["Customer", "Add"]}
        children={
          <>
            <button
              id="add-button"
              className="bg-biru mr-2 px-4 py-2 rounded-lg text-white"
            >
              <Link to="/"> Kembali</Link>
            </button>
          </>
        }
      />

      <form
        onSubmit={handleSubmit}
        className="space-y-5 bg-white shadow-md p-6 rounded-lg"
      >
        <div>
          <label className="block font-medium text-gray-700 text-sm">
            Customer ID
          </label>
          <input
            type="text"
            name="customer_id"
            value={form.customer_id}
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
            Email
          </label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="block mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Jessica"
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700 text-sm">
            Nomor Handphone{" "}
          </label>
          <input
            type="number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="block mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="100000"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 text-sm">
            Loyalty{" "}
          </label>
          <input
            type="date"
            name="loyalty"
            value={form.loyalty}
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
