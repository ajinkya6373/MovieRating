import { useNavigate } from "react-router-dom";

export default function Navbar({setSearchTerm}) {
  const navigate = useNavigate()
  const handleChange=(e)=>{
    if (setSearchTerm) {
      setSearchTerm(e.target.value)
    }else{
      navigate("/")
    }
  }
  return (
    <nav className="bg-[#333232] p-4 flex items-center justify-between">
      <div className="flex items-center">
        <span className="text-white text-lg font-bold cursor-pointer"
        onClick={()=>navigate("/")}
        >IMDB</span>
      </div>

      <div className="flex items-center w-[350px]">
        <input
          type="text"
          placeholder="Search movies by tite cast and director..."
          className="px-2 py-1 border border-gray-300 rounded-md w-[100%]"
          onChange={(e)=>handleChange(e)}
        />
      </div>

      <div className="flex items-center">
        <span className="text-white mr-4 hover:underline cursor-pointer" 
        onClick={()=>navigate("/")}
        >Movies</span>
        <span className="text-white mr-4 hover:underline cursor-pointer"
        onClick={()=>navigate("/watchlist")}
        >Watch List</span>
        <span className="text-white hover:underline cursor-pointer"
        onClick={()=>navigate("/starredlist")}
        >Starred Movies</span>
      </div>
    </nav>
  );
}
