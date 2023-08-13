import { createContext, useContext, useEffect, useReducer } from "react";
import movieReducer from "../reducer/movieReducer"
import { movies } from "../util";

const MovieContext = createContext();
const storedState = localStorage.getItem('movieState');
const INITIAL_STATE = storedState ? JSON.parse(storedState) : {
    allMovies :movies,
    watchList: [],
    staredList: [],
};

export const MovieProvider = ({ children }) => {
    const [movieState, movieDispatch] = useReducer(movieReducer, INITIAL_STATE)
    useEffect(() => {
        const storedState = localStorage.getItem('movieState');
        if (storedState) {
            movieDispatch({ type: 'HYDRATE_STATE', payload: JSON.parse(storedState) });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('movieState', JSON.stringify(movieState));
    }, [movieState]);
    return (
        <MovieContext.Provider value={{ movieState, movieDispatch }}>
            {children}
        </MovieContext.Provider>
    )
}
export const useMovieData = () => useContext(MovieContext)
