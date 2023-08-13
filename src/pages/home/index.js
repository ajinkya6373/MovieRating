import { useState } from "react";
import { useMovieData } from "../../context";
import Card from "../../components/card";
import Navbar from "../../components/navbar";
import AddMovieModal from "../../components/modal";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const years = Array.from(
    { length: 2023 - 1990 + 1 },
    (_, index) => 1990 + index
  );
  const ratings = Array.from({ length: 10 }, (_, index) => index + 1);

  const {
    movieState: { allMovies },
    movieDispatch
  } = useMovieData();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddMovie = (newMovie) => {
    movieDispatch({type:"ADD_MOVIE", payload:newMovie})
  };

  const filteredMovies = allMovies.filter((movie) => {
    const searchMatch =
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movie.cast.some((castMember) =>
        castMember.toLowerCase().includes(searchTerm.toLowerCase())
      ) ||
      movie.director.toLowerCase().includes(searchTerm.toLowerCase());

    const genreMatch =
      selectedGenre === "" ||
      selectedGenre === "All" ||
      movie.genre.includes(selectedGenre);

    const yearMatch =
      selectedYear === "" || movie.year === parseInt(selectedYear);

    const ratingMatch =
      selectedRating === "" || movie.rating === parseFloat(selectedRating);

    return searchMatch && genreMatch && yearMatch && ratingMatch;
  });

  const allGenres = [...new Set(allMovies.flatMap((movie) => movie.genre))];

  return (
    <div>
      <Navbar setSearchTerm={setSearchTerm} />
      <div className="flex items-center justify-between space-x-4  ml-4 mr-4 mb-3 mt-3">
        <span className="text-lg font-bold">Movies</span>
        <select
          className="p-2 border border-gray-300 rounded-md"
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value={""}>All genre</option>
          {
            allGenres.map((g)=> <option value={g} key={g}>{g}</option>
            )
          }

        </select>
        <select
          className="p-2 border border-gray-300 rounded-md"
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="">Release Year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <select
          className="p-2 border border-gray-300 rounded-md"
          onChange={(e) => setSelectedRating(e.target.value)}
        >
          <option value="">Select a rating</option>
          {ratings.map((rating) => (
            <option key={rating} value={rating}>
              {rating}
            </option>
          ))}
        </select>
        <button
          className="bg-[#333233] hover:bg-gray-700 text-white px-4 py-2 rounded-md"
          onClick={openModal}
        >
          Add a movie
        </button>
      </div>

      <div className="flex gap-[5px] flex-wrap ">
        {filteredMovies.length>0?filteredMovies?.map((m) => (
          <Card movie={m} />
        ))
        : <h1 className="flex items-center text-center font-bold mt-8">No movies found...</h1>

    }
      </div>
      <AddMovieModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onAddMovie={handleAddMovie}
      />
    </div>
  );
}
