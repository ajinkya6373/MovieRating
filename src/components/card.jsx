import React from "react";
import { useNavigate } from "react-router-dom";
import { useMovieData } from "../context";

export default function Card({ movie: { id, title, imageURL, summary } }) {
  const navigate = useNavigate();
  const {
    movieState: {staredList, watchList },
    movieDispatch,
  } = useMovieData();
  const handleStarUnstar = () => {
    if (staredList.includes(id)) {
      movieDispatch({ type: "UNSTAR", payload: id });
    } else {
      movieDispatch({ type: "STAR", payload: id });
    }
  };



  return (
    <div
      className="flex flex-col items-center 
      justify-between w-[300px] mx-auto rounded-md border border-solid border-black-2 align-middle
      cursor-pointer
      "
      onClick={() => navigate(`/movieDetail/${id}`)}
    >
      <img
        src={imageURL}
        alt="thumbnail"
        className="w-[300px] h-[350px] rounded-t-md"
      />
      <h1 className="text-center mt-2">{title}</h1>
      <p className="p-2">{summary}</p>
      <div className="flex space-x-4 p-4">
        <button
          className="bg-[#333233] hover:bg-gray-700 text-white px-4 py-2 rounded-md"
          onClick={handleStarUnstar}
        >
          Star
        </button>
        <button className="bg-[#333233] hover:bg-gray-700 text-white px-4 py-2 rounded-md">
          Add to WatchList
        </button>
      </div>
    </div>
  );
}
