import React from "react";
import { useNavigate } from "react-router-dom";
import { useMovieData } from "../context";

export default function Card({ movie: { id, title, imageURL, summary } }) {
  const navigate = useNavigate();
  const {
    movieState: { staredList, watchList },
    movieDispatch,
  } = useMovieData();
  const isStarred = staredList.includes(id);
  const isInWatchList = watchList.includes(id);
  const handleStarUnstar = (e) => {
    e.stopPropagation();
    if (isStarred) {
      movieDispatch({ type: "UNSTAR", payload: id });
    } else {
      movieDispatch({ type: "STAR", payload: id });
    }
  };

  const handleWatchListAction = (e) => {
    e.stopPropagation();
    if (isInWatchList) {
      movieDispatch({ type: "REMOVE_FROM_WATCHLIST", payload: id });
    } else {
      movieDispatch({ type: "ADD_TO_WATCHLIST", payload: id });
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-between w-[300px] mx-auto rounded-md border border-solid border-black-2 align-middle cursor-pointer hover:shadow-lg transition duration-300"
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
          onClick={(e) => handleStarUnstar(e)}
        >
          {isStarred ? "Starred" : "Star"}
        </button>
        <button
          className="bg-[#333233] hover:bg-gray-700 text-white px-4 py-2 rounded-md"
          onClick={(e) => handleWatchListAction(e)}
        >
          {isInWatchList ? "Remove from WatchList" : "Add to WatchList"}
        </button>
      </div>
    </div>
  );
}
