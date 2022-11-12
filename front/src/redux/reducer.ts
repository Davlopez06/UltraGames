import {CLEAN, ELIMINATE, FILTER, GET_ALL_GAMES, GET_ALL_TYPES, SEARCH, SET_PAGE, SORT} from "./actions"

interface store{
    allGames: Array<any>;
    auxGames:Array<any>;
    games:Array<any>;
    types:Array<any>;
    game: Object;
    pages: number;
}

export const initialState:store = {
    allGames: [],
    auxGames:[],
    games:[],
    types:[],
    game:{},
    pages: 0
  };
  
 export const rootReducer = (state:any, action:any) => {
    switch (action.type) {
      // Acá va tu código
        case GET_ALL_TYPES:
            console.log(action.payload)
            return{
                ...state,
                types: action.payload
            }
        case GET_ALL_GAMES:
            console.log(action.payload)
            let paginate=0;
            let gamesIni=[];
            if(action.payload.length % 9===0){
                paginate=action.payload.length/9
            }else{
                paginate=Math.floor(action.payload.length/9)+1
            }
            for (let i = 0; i < 9; i++) {
                if(action.payload[i]){
                    gamesIni.push(action.payload[i])
                }
            }
            return{
                ...state,
                allGames: action.payload,
                auxGames: action.payload,
                games:gamesIni,
                pages: paginate
            }
        case SET_PAGE:
            console.log(action.payload)
            let inicio=0;
            let gamesInitial=[];
            for (let i = ((action.payload-1)*9); i < (action.payload*9); i++) {
                if(state.allGames[i]){
                    gamesInitial.push(state.allGames[i])
                }
            }
            return{
                ...state,
                games:gamesInitial
            }
        default: return state
    }
  };
  