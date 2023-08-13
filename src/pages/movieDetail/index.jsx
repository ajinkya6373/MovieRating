import { useParams } from "react-router-dom";
import { useMovieData } from "../../context";

export default function MovieDetailsPage() {
  let { movieId } = useParams();
   movieId = Number(movieId);
  const {
    movieState: { allMovies, staredList, watchList },
    movieDispatch,
  } = useMovieData();
  const movie = allMovies.find((m) => m.id === movieId);
  const isStarred = staredList.includes(movieId);
  const isInWatchList = watchList.includes(movieId);
  const handleStarUnstar = (e) => {
    e.stopPropagation();
    if (isStarred) {
      movieDispatch({ type: "UNSTAR", payload: movieId });
    } else {
      movieDispatch({ type: "STAR", payload: movieId });
    }
  };

  const handleWatchListAction = (e) => {
    e.stopPropagation();
    if (isInWatchList) {
      movieDispatch({ type: "REMOVE_FROM_WATCHLIST", payload: movieId });
    } else {
      movieDispatch({ type: "ADD_TO_WATCHLIST", payload: movieId });
    }
  };
  return (
    <div className="flex items-center justify-center h-[100vh] bg-[#efefef]">
      <div className="flex p-8 shadow-lg bg-white max-w-[80%]">
        <div className="flex-none w-[300px] mr-8">
          <div className="bg-white p-4 rounded-lg ">
            <img
              src={movie.imageURL}
              alt={movie.title}
              className="w-full h-auto rounded-t-lg"
            />
          </div>
        </div>

        <div className="flex-1 items-center ">
          <div className="bg-white p-4 rounded-lg ">
            <h2 className="text-2xl font-bold mb-2">{movie?.title}</h2>
            <p className="text-gray-600 mb-4">{movie?.summary}</p>
            <div className="mb-4">
              <span className="font-semibold">Year:</span> {movie?.year}
            </div>
            <div className="mb-4">
              <span className="font-semibold">Genre:</span>{" "}
              {movie?.genre.join(", ")}
            </div>
            <div className="mb-4">
              <span className="font-semibold">Rating:</span> {movie.rating}
            </div>
            <div className="mb-4">
              <span className="font-semibold">Director:</span> {movie.director}
            </div>
            <div className="mb-4">
              <span className="font-semibold">Cast:</span>{" "}
              {movie?.cast.join(", ")}
            </div>
            <div className="flex justify-between mt-[2rem]">
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
        </div>
      </div>
    </div>
  );
}
