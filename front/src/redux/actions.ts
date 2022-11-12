import axios from "axios"
import swal from 'sweetalert';
export const GET_ALL_TYPES="GET_ALL_TYPES"
export const GET_ALL_GAMES="GET_ALL_GAMES"
export const SET_PAGE="SET_PAGE"
export const SORT="SORT"
export const FILTER="FILTER"
export const SEARCH="SEARCH"
export const GET_GAME="GET_GAME"
export const ELIMINATE="ELIMINATE"
export const CLEAN="CLEAN"


export const getAllTypes = (dispatch:any)  => {
    // Tu código acá
    axios.get(
      'http://localhost:10000/types'
      )
      .then(res=>res.data)
      .then(json => {
      dispatch({type: GET_ALL_TYPES, payload: json})
    }
  )
}

export const getAllGames=(dispatch:any)=>{
    axios.get(
        'http://localhost:10000/games'
        )
        .then(res=>res.data)
        .then(json => {
        dispatch({type: GET_ALL_GAMES, payload: json})
      }
    )
}

export const setPage= (page:number,dispatch:any)=>{
    dispatch({type: SET_PAGE, payload: page})
}

export const sortAlpha=(alpha:string)=>(dispatch:any)=>{
    return dispatch({type: SORT, payload: alpha})
}

export const filter=(type:string)=>(dispatch:any)=>{
    return dispatch({type: FILTER, payload: type})
}

export const search=(name:string)=>(dispatch:any)=>{
  return axios.get(
    `https://pokemasterapi.onrender.com/pokemons?name=${name}`
    )
    .then(res=>res.data)
    .then(json => {
    dispatch({type: SEARCH, payload: json})
  }
)
}

export const getPokemon=(id:number)=>(dispatch:any)=>{
  return axios.get(
    `https://pokemasterapi.onrender.com/pokemons/${id}`
    )
    .then(res=>res.data)
    .then(json => {
    dispatch({type: GET_GAME, payload: json})
  })
}

export const cleanPokemon=()=>(dispatch:any)=>{
  console.log("Limpia")
  return dispatch({type: CLEAN, payload: {}})
}

export const deletePokemon=(id:number)=>(dispatch:any)=>{
  return axios.delete(
    `https://pokemasterapi.onrender.com/pokemons/${id}`
    )
    .then(()=>{
      swal({
        title: "Deleted",
        text: "You clicked the button!",
        icon: "success",
      });
      window.location.reload();
    })
    .then(()=>{
      dispatch({type: ELIMINATE, payload: id})
    })
    .catch((error)=>{
      swal({
        title: "Deleted",
        text: "You clicked the button!",
        icon: "success",
      });
      window.location.reload();
    })

}

export const createPokemon=(data:Object)=>(dispatch:any)=>{
  console.log(data)
  axios.post(
    `https://pokemasterapi.onrender.com/pokemons`,data
    )
    .then(()=>{
      swal({
        title: "Created",
        text: "You clicked the button!",
        icon: "success",
      });
      window.location.reload();
    })
    .catch((error)=>{
      swal({
        title: error,
        text: "You clicked the button!",
        icon: "error",
      });
    })
}
      
    