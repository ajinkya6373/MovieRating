import { useParams } from "react-router-dom";
import { useMovieData } from "../../context";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  console.log(movieId);
  const {
    movieState: { allMovies, staredList, watchList },
    movieDispatch,
  } = useMovieData();
  const movie = allMovies.find((m) => m.id.toString() === movieId);
  return (
    <div className="flex p-8 shadow-lg">
      {/* Left side */}
      <div className="flex-none w-[300px] mr-8">
        <div className="bg-white p-4 rounded-lg ">
          <img
            src={movie.imageURL}
            alt={movie.title}
            className="w-full h-auto rounded-t-lg"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="flex-1">
        <div className="bg-white p-4 rounded-lg ">
          <h2 className="text-2xl font-bold mb-2">{movie?.title}</h2>
          <p className="text-gray-600 mb-4">{movie?.summary}</p>
          <div className="mb-2">
            <span className="font-semibold">Year:</span> {movie?.year}
          </div>
          <div className="mb-2">
            <span className="font-semibold">Genre:</span>{" "}
            {movie?.genre.join(", ")}
          </div>
          <div className="mb-2">
            <span className="font-semibold">Rating:</span> {movie.rating}
          </div>
          <div className="mb-2">
            <span className="font-semibold">Director:</span> {movie.director}
          </div>
          <div className="mb-4">
            <span className="font-semibold">Cast:</span>{" "}
            {movie?.cast.join(", ")}
          </div>
          <div className="p-4 ">
            <button className="bg-[#333233] hover:bg-gray-700 text-white px-4 py-2 rounded-md">
              Star
            </button>
            <button className="bg-[#333233] hover:bg-gray-700 text-white px-4 py-2 rounded-md">
              Add to WatchList
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
