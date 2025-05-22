import frameworkDataLatihan from "./products.json";
import React, { useState } from "react";

export default function Latihan_FrameworkListSearchFilter() {
  /*Inisialisasi DataForm*/
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
    /*Tambah state lain beserta default value*/
  });
  /*Inisialisasi Handle perubahan nilai input form*/
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const filteredFrameworks = frameworkDataLatihan.filter((framework) => {
    const matchesSearch =
      framework.title.toLowerCase().includes(dataForm.searchTerm) ||
      framework.description.toLowerCase().includes(dataForm.searchTerm);
    const matchesTag = dataForm.selectedTag
      ? framework.tags
          .map((tag) => tag.toLowerCase())
          .includes(dataForm.selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });
  const allTags = [
    ...new Set(frameworkDataLatihan.flatMap((framework) => framework.tags)),
  ];
  return (
    <div className="p-8">
      <input
        type="text"
        name="searchTerm"
        placeholder="Search framework..."
        className="w-full p-2 border border-gray-300 rounded mb-4"
        onChange={handleChange}
      />
      <select
        name="selectedTag"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        onChange={handleChange}
      >
        <option value="">All Tags</option>
        {allTags.map((tag, index) => (
          <option key={index} value={tag}>
            {tag}
          </option>
        ))}
      </select>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-4">
        {filteredFrameworks.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded-lg shadow-md bg-white md:flex-row mb-6 "
          >
            <h1 className="text-lg font-bold text-gray-800">{item.title}</h1>
            <p className="text-gray-600">{item.description}</p>
            <br />
            <hr />
            <h1 className="text-gray-600"> Category : {item.category}</h1>
            <div className="text-gray-600">Harga : {item.price}</div>
            <div className="text-red-600"><u>Discount : {item.discountPercentage}</u></div>
            <div className="text-gray-600">Rating : {item.rating}</div>
            <div className="text-gray-600">Stock : {item.stock}</div>
            <hr />
            <br />
            {item.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-500 text-white px-2 py-1 text-xs rounded-full mr-2"
              >
                {tag}
              </span>
            ))}
            <div className="text-gray-600">{item.brand}</div>
            <div className="text-green-600">Widht : {item.dimensions.width}</div>
            <div className="text-green-600">Height : {item.dimensions.height}</div>
            <div className="text-green-600">Depth : {item.dimensions.depth}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
