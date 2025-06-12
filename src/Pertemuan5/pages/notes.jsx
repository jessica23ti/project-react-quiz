import { AiFillEdit } from "react-icons/ai";
import PageHeader from "../components/PageHeader";
import "../assets/tailwind.css";
import { Link } from "react-router-dom";
import React from "react";
import { notesAPI } from "../../services/notesAPI";
import { useState } from "react";
import AlertBox from "../components/AlertBox";
import { useEffect } from "react";
import EmptyState from "../components/EmptyState";
import GenericTable from "../components/GenericTable";
import LoadingSpinner from "../components/LoadingSpinner";
import { AiFillDelete } from "react-icons/ai";
export default function Notes() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [dataForm, setDataForm] = useState({
    title: "",
    content: "",
    status: "",
  });

  // Handle perubahan nilai input form
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };
  // Handle form submission for creating notes
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);
    setError("");
    setSuccess("");

    if (isEditMode) {
      await notesAPI.UpdateNote(editId, dataForm);
      setSuccess("Catatan berhasil diperbarui!");
    } else {
      await notesAPI.createNote(dataForm);
      setSuccess("Catatan berhasil ditambahkan!");
    }

    // Reset form
    setDataForm({ title: "", content: "", status: "" });
    setIsEditMode(false);
    setEditId(null);

    setTimeout(() => setSuccess(""), 3000);
    loadNotes();
  } catch (err) {
    setError(`Terjadi kesalahan: ${err.message}`);
  } finally {
    setLoading(false);
  }
};

  const [notes, setNotes] = useState([]);

  // Load data saat pertama di-render
  useEffect(() => {
    loadNotes();
  }, []);

  // Memanggil fetchNotes beserta error/loading handling
  const loadNotes = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await notesAPI.fetchNotes();
      setNotes(data);
    } catch (err) {
      setError("Gagal memuat catatan");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  // Handle untuk aksi hapus data
  const handleDelete = async (id) => {
    const konfirmasi = confirm("Yakin ingin menghapus catatan ini?");
    if (!konfirmasi) return;

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      await notesAPI.deleteNote(id);

      // Refresh data
      loadNotes();
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const [isEditMode, setIsEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const handleUpdate = (note) => {
    setIsEditMode(true);
    setEditId(note.id);
    setDataForm({
      title: note.title,
      content: note.content,
      status: note.status || "",
    });
  };

  return (
    <div>
      <PageHeader
        title="Notes"
        breadcrumb={["Notes", "Home Notes"]}
        children={
          <>
            <button
              id="add-button"
              className="bg-biru mr-2 px-4 py-2 rounded-lg text-white"
            ></button>
          </>
        }
      />
      <div className="max-w-2xl mx-auto p-6">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {" "}
            📜Notes App
          </h2>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            📇 Tambah Catatan Baru
          </h3>
          {error && <AlertBox type="error">{error}</AlertBox>}
          {success && <AlertBox type="success">{success}</AlertBox>}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              value={dataForm.title}
              placeholder="Judul catatan"
              onChange={handleChange}
              required
              disabled={loading}
              className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none
                        focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all
                        duration-200"
            />

            <textarea
              name="content"
              value={dataForm.content}
              placeholder="Isi catatan"
              onChange={handleChange}
              required
              disabled={loading}
              rows="2"
              className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none
                        focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all
                        duration-200 resize-none"
            />

            <button
              type="submit"
              className="px-6 py-3 bg-indigo-500 hover:bg-indigo-700 text-white font-semibold
                        rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500
                        focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed
                        transition-all duration-200 shadow-lg"
            >
              {" "}
              {loading ? "Mohon Tunggu..." : "Tambah Data"}
              Tambah Catatan
            </button>
          </form>
        </div>
       

        {/* Notes Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-10">
          <div className="px-6 py-4 ">
            <h3 className="text-lg font-semibold">
              📃 Daftar Catatan ({notes.length})
            </h3>
          </div>
          {loading && <LoadingSpinner text="Memuat catatan..." />}

          {!loading && notes.length === 0 && !error && (
            <EmptyState text="Belum ada catatan. Tambah catatan pertama!" />
          )}

          {!loading && notes.length === 0 && error && (
            <EmptyState text="Terjadi Kesalahan. Coba lagi nanti." />
          )}
          {!loading && notes.length > 0 ? (
            <GenericTable
              columns={["#", " 🗞️ Judul", " 🖇️Isi Catatan", "🗑️Keterangan"]}
              data={notes}
              renderRow={(note, index) => (
                <>
                  <td className="px-6 py-4 font-medium text-gray-700">
                    {index + 1}.
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-indigo-500">
                      {note.title}
                    </div>
                  </td>
                  <td className="px-6 py-4 max-w-xs">
                    <div className="truncate text-gray-600">{note.content}</div>
                  </td>
                  <td className="px-6 py-4 max-w-xs">
                    <div className="truncate text-gray-600">
                      <button
                        onClick={() => handleDelete(note.id)}
                        disabled={loading}
                      >
                        <AiFillDelete className="text-red-400 text-2xl hover:text-red-600 transition-colors" />
                      </button>
                          
                      <button
                        onClick={() => handleUpdate(note)}
                        disabled={loading}
                      >
                        <AiFillEdit className="text-green-400 text-2xl hover:text-green-600 transition-colors" />
                      </button>
                    </div>
                
                  
                  </td>
                </>
              )}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
