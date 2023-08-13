import { Routes, Route } from "react-router-dom"
import { HomePage, MovieDetailsPage } from "./pages";

function App() {
  return (
    <div >
      <Routes >
        <Route path="/" element ={<HomePage/>}/>
        <Route path="/movieDetail/:movieId" element ={<MovieDetailsPage/>}/>
      </Routes>

    </div>
  );
}

export default App;
