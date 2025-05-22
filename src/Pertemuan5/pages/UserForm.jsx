import { useState } from "react";
import PageHeader from "../components/PageHeader";
import "../assets/tailwind.css";
import { Link } from "react-router-dom";
export default function UserForm() {
  const [form, setForm] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    gender: "",
    image: "",
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
        title="Add New User"
        breadcrumb={["User", "Add"]}
        children={
          <>
            <button
              id="add-button"
              className="bg-biru mr-2 px-4 py-2 rounded-lg text-white"
            >
              <Link to="/User"> Kembali</Link>
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
            User ID
          </label>
          <input
            type="text"
            name="id"
            value={form.id}
            onChange={handleChange}
            className="block mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="ORD001"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 text-sm">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
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
            placeholder="Jessica@gmail.com"
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
            placeholder="0875165615"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 text-sm">
            Gender{" "}
          </label>
          <input
            type="number"
            name="gender"
            value={form.gender}
            onChange={handleChange}
            className="block mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Female/Male"
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700 text-sm">
            Image{" "}
          </label>
          <input
            type="file"
            name="image"
            value={form.image}
            onChange={handleChange}
            className="block mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="upload here"
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
