import { useEffect, useState } from "react";
import Card from "../../components/card";
import Navbar from "../../components/navbar";
import { useMovieData } from "../../context";

export default function WatchListPage() {
    const [displayMovies,setdisplayMovies] = useState([]);
    const {
        movieState: { allMovies, watchList },
      } = useMovieData();
      useEffect(()=>{
        setdisplayMovies(allMovies.filter(m=>watchList.includes(m.id)))
      },[watchList])
  return (
    <>
        <Navbar/>            
        <div className="flex gap-1 flex-wrap justify-center ">
        {displayMovies.length>0? displayMovies?.map((m) => (
          <Card movie={m} />
        ))
        : <h1>No movies found... </h1>
    }
      </div>
    </>
  )
}
