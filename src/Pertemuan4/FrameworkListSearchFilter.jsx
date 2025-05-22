import frameworkData from "./framework.json";
import React, { useState } from "react";

export default function FrameworkListSearchFilter() {
  /*Inisialisasi DataForm*/
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
    /*Tambah state lain beserta default value*/
    });
  /*Inisialisasi Handle perubahan nilai input form*/
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({...dataForm,[name]: value,});
  };

  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(dataForm.searchTerm) ||
      framework.description.toLowerCase().includes(dataForm.searchTerm);
      const matchesTag =  dataForm.selectedTag
      ? framework.tags.map(tag => tag.toLowerCase()).includes(dataForm.selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });
  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
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
      {filteredFrameworks.map((item) => (
        <div
          key={item.id}
          className="border p-4 mb-4 rounded-lg shadow-md bg-white"
        >
          <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
          <div className="text-gray-600">{item.description}</div>
          <div className="text-gray-600">{item.details.developer}</div>
          <div className="text-gray-600">{item.details.releaseYear}</div>
          <a className="text-blue-600" href={item.details.officialWebsite}>
            <u>{item.details.officialWebsite}</u>
          </a>
          <br />
          {item.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2"
            >
              {tag}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
