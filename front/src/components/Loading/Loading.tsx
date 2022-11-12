import { useEffect, useState } from "react";
import  "./Loading.css"
import img from "../../img/loading.gif"
import { useNavigate } from "react-router-dom";


const Loading=()=>{
    const [loadin,setLoading]=useState(false)
    let navegate=useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(true)
        },3000)
    })
    if(loadin){
        return (
            <>
            {navegate("/home")}
            </>)
    }else{
        return(
            <div className="cont">
                <div className="image">
                    <img className="ima" src={img} alt={img} />
                </div>
            </div> 
        )
    }
}

export default Loading;