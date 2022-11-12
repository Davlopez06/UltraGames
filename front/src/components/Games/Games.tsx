import "./Games.css"
import {useEffect,useState} from "react"
import { getAllGames, setPage } from "../../redux/actions";
import Game from "./Game";
import Pagination from 'react-bootstrap/Pagination';

interface filter {
    state:any;
    dispatch:any
}

const Games =({state,dispatch}:filter)=>{
    const games = state.games
    const paginates= state.pages
    const [items,setItems]=useState<Array<number>>([]);
    useEffect(()=>{
        getAllGames(dispatch)
        setPage(1,dispatch)
    },[])
    useEffect(()=>{
        console.log(paginates)
        let num:Array<number>=[]
        for (let number = 1; number <= paginates; number++) {
            num.push(number)
        }
        setItems(num)
        console.log(items)
    },[paginates])
    return(
        <div className="Games">
            <div className="row">
                {games.length && games.map((game:any)=>{
                    return(
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                            <Game _id={game._id} name={game.name} img={game.img} generos={game.generos}/>
                        </div>
                    )
                })}
            </div>
            <div className="row ro">
            {paginates ===1? null : games.length!==0 ?
            <ul className="pagination pagination-lg pagi">
                {items.length && items.map((item)=>{
                    console.log("Entra 1")
                    return (
                        <li className="page-item pa"><button onClick={()=>setPage(item,dispatch)} className="page-link" >{item}</button></li>
                    )
                })}
            </ul>:null}
            </div>
        </div>
    )
}
export default Games;