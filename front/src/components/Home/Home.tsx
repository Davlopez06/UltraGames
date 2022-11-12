
import Filter from "../Filter/Filter";
import Navbar from "../Navbar/Navbar";
import "./Home.css"
import {useReducer} from "react"
import { initialState, rootReducer } from "../../redux/reducer";
import Games from "../Games/Games";

const Home = ()=>{
    const [state, dispatch]=useReducer(rootReducer,initialState)
    return (
        <div className="home">
            <Navbar/>
            <Filter dispatch={dispatch} state={state}/>
            <Games dispatch={dispatch} state={state}/>
        </div>
    )
}

export default Home;