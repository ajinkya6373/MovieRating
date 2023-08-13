import React, { useState } from "react";
import { useMovieData } from "../context";

export default function AddMovieModal({ isOpen, onClose, onAddMovie }) {
    const {
        movieState: { allMovies },
      } = useMovieData();
  const [movieDetails, setMovieDetails] = useState({
    id: allMovies.length+1,
    title: "",
    year: "",
    genre: [],
    rating: "",
    director: "",
    writer: "",
    cast: [],
    summary: "",
    imageURL: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "genre" || name === "cast") {
      const arrayValue = value.split(",").map((item) => item.trim());
      setMovieDetails((prevDetails) => ({
        ...prevDetails,
        [name]: arrayValue,
      }));
    } else {
      setMovieDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
    }
  };
  

  const handleSubmit = () => {
    onAddMovie(movieDetails);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div className="bg-white pt-4 pb-2 pl-8 pr-8 prounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-2">Add New Movie</h2>

        <label className="block mb-1">
          Title:
          <input
            type="text"
            name="title"
            value={movieDetails.title}
            onChange={handleInputChange}
            className="border rounded-md p-1 w-full"
          />
        </label>

        <label className="block mb-1">
          Year:
          <input
            type="number"
            name="year"
            value={movieDetails.year}
            onChange={handleInputChange}
            className="border rounded-md p-1 w-full"
          />
        </label>

        <label className="block mb-1">
          Genre (Comma-separated):
          <input
            type="text"
            name="genre"
            value={movieDetails?.genre?.join(", ")}
            onChange={handleInputChange}
            className="border rounded-md p-1 w-full"
          />
        </label>

        <label className="block mb-2">
          Rating:
          <input
            type="number"
            name="rating"
            value={movieDetails.rating}
            onChange={handleInputChange}
            className="border rounded-md p-1 w-full"
          />
        </label>

        <label className="block mb-1">
          Director:
          <input
            type="text"
            name="director"
            value={movieDetails.director}
            onChange={handleInputChange}
            className="border rounded-md p-1 w-full"
          />
        </label>

        <label className="block mb-1">
          Writer:
          <input
            type="text"
            name="writer"
            value={movieDetails.writer}
            onChange={handleInputChange}
            className="border rounded-md p-1 w-full"
          />
        </label>

        <label className="block mb-1">
          Cast (Comma-separated):
          <input
            type="text"
            name="cast"
            value={movieDetails.cast.join(", ")}
            onChange={handleInputChange}
            className="border rounded-md p-1 w-full"
          />
        </label>

        <label className="block mb-1">
          Summary:
          <textarea
            name="summary"
            value={movieDetails.summary}
            onChange={handleInputChange}
            className="border rounded-md p-1 w-full"
          />
        </label>

        <label className="block mb-1">
          Image URL:
          <input
            type="text"
            name="imageURL"
            value={movieDetails.imageURL}
            onChange={handleInputChange}
            className="border rounded-md p-1 w-full"
          />
        </label>

        <div className="mt-2">
          <button
            className="bg-[#333233] hover:bg-gray-700 text-white px-4 py-2 rounded-md mr-2"
            onClick={handleSubmit}
          >
            Add Movie
          </button>
          <button className="text-gray-600 cursor-pointer" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
