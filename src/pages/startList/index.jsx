import { useEffect, useState } from "react";
import Card from "../../components/card";
import Navbar from "../../components/navbar";
import { useMovieData } from "../../context";

export default function StarListPage() {
  const [displayMovies, setdisplayMovies] = useState([]);
  const {
    movieState: { allMovies, staredList },
  } = useMovieData();
  useEffect(() => {
    setdisplayMovies(allMovies.filter((m) => staredList.includes(m.id)));
  }, [staredList]);
  return (
    <>
      <Navbar />
      <div className="flex gap-1 flex-wrap justify-center ">
        {displayMovies.length > 0 ? (
          displayMovies?.map((m) => <Card movie={m} />)
        ) : (
          <h1>No movies found... </h1>
        )}
      </div>
    </>
  );
}
