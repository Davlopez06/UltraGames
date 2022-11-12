import "./Filter.css"
import {useEffect} from "react"
import Form from 'react-bootstrap/Form';
import {useSelector,useDispatch} from "react-redux"
import { getAllTypes } from "../../redux/actions";

interface filter {
    state:any;
    dispatch:any
}


const Filter=({state,dispatch}:filter)=>{
    const types=state.types
    useEffect(()=>{
        getAllTypes(dispatch)
    },[])
    return(
        <div className="filter">
            <Form.Select aria-label="Default select example" className="select">
                <option>Video Juego</option>
                <option value="All">All</option>
                <option value="Existing">Existing</option>
                <option value="Created">Created</option>
            </Form.Select>
            <Form.Select aria-label="Default select example" className="select">
                <option>Generos</option>
                <option value="All">All</option>
                {types.length && types.map((type:any)=>{
                    return(
                        <option value={type.name}>{type.name}</option>
                    )
                })}
            </Form.Select>
            <Form.Select aria-label="Default select example" className="select">
                <option>Alphanumeric</option>
                <option value="All">All</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
            </Form.Select>
            <Form.Select aria-label="Default select example" className="select">
                <option>Rating</option>
                <option value="All">All</option>
                <option value="Existing">5-1</option>
                <option value="Created">1-5</option>
            </Form.Select>
        </div>
    )
}
export default Filter
