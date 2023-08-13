
export default function movieReducer(state,action){
    switch (action.type) {
        case "HYDRATE_STATE":
            return { ...state, ...action.payload };
            case "ADD_MOVIE":{
                return{
                    ...state,
                    allMovies : [...state.allMovies,action.payload]
                }
            }
            case "ADD_TO_WATCHLIST":
                return {
                    ...state,
                    watchList : [...state.watchList,action.payload]
                }
                
            case "REMOVE_FROM_WATCHLIST":
                return {
                    ...state,
                    watchList: state.watchList.filter((p)=>p !== action.payload)
                }
            
            case "STAR":
                return {
                    ...state,
                    staredList : [...state.staredList,action.payload]
                }
                
            case "UNSTAR":
                return {
                    ...state,
                    staredList: state.staredList.filter((p)=>p !== action.payload)
                }
            
        default:
            return state;
    }
}