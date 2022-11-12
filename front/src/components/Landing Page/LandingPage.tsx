import React, {useState} from "react";
import "./LandingPage.css"
import Loading from "../Loading/Loading";

export default function LandingPage(){
    const [redirect,setRedirect]=useState(false)

    const handleOnClick=()=>{
        setRedirect(true)
        console.log("Entra")
    }

    if(redirect){
        return <Loading/>
    }else{
        return(
            <div className="fondo" onClick={handleOnClick}>
                <h1 className="title">Ultra Games</h1>
                <button className="btn" onClick={handleOnClick}><h1 onClick={handleOnClick}>Go</h1></button>  
            </div>
        )
    }
}