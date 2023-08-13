import React from 'react';

export default function Navbar({setSearchTerm}) {
  return (
    <nav className="bg-[#333232] p-4 flex items-center justify-between">
      <div className="flex items-center">
        <span className="text-white text-lg font-bold">IMDB</span>
      </div>

      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search movies..."
          className="px-2 py-1 border border-gray-300 rounded-md"
          onChange={(e)=>setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex items-center">
        <a href="#" className="text-white mr-4 hover:underline">Movies</a>
        <a href="#" className="text-white mr-4 hover:underline">Watch List</a>
        <a href="#" className="text-white hover:underline">Starred Movies</a>
      </div>
    </nav>
  );
}
