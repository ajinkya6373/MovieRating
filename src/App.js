import { Routes, Route } from "react-router-dom"
import { HomePage, MovieDetailsPage, StarListPage } from "./pages";
import WatchListPage from "./pages/watchlist";

function App() {
  return (
    <div >
      <Routes >
        <Route path="/" element ={<HomePage/>}/>
        <Route path="/watchlist" element ={<WatchListPage/>}/>
        <Route path="/starredlist" element ={<StarListPage/>}/>
        <Route path="/movieDetail/:movieId" element ={<MovieDetailsPage/>}/>
      </Routes>

    </div>
  );
}

export default App;
