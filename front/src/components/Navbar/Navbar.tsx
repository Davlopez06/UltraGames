import "./Navbar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Link} from "react-router-dom"
import ico from "../../img/control.png"

const Navbar=()=>{
    return (
        <>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/" className="navbar-brand logo ico"><img className="img" src={ico} alt="Icon" /></Link>
            <Link to="/" className="navbar-brand logo">Ultra Games</Link>
            <Link to="/create" className="navbar-toggler cre" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                Create
            </Link>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto lista">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/create">Create<span className="sr-only"></span></Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0 frm">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                </form>
            </div>
        </nav>
      </>
    )
}

export default Navbar;