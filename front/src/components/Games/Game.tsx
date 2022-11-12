import "./Game.css"
import {Link} from "react-router-dom"

interface game{
    _id:string;
    name:string;
    img:string;
    generos:string[]
}

const Game=({_id,name,img,generos}:game)=>{

    return (
        <div className="container">
        <Link className="link" to={`/datail/${_id}`}>
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <img className="image" src={img } alt="Img"/>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <h2>{name}</h2>
                    <br />
                    <div className="generos">
                        {generos.length && generos.map((genero)=>{
                            return(
                                <p className="genero">{genero}</p>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        </Link>
        </div>
    )
}
export default Game;