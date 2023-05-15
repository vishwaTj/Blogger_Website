import React from 'react';
import {Link,useNavigate} from "react-router-dom";

const Navabar = () => {
  let navigate = useNavigate();
  const logout=()=>{
    localStorage.removeItem("email");
    localStorage.removeItem('userName');
    localStorage.removeItem('userID');
    window.location.reload(true);
  }
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>Blogger</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                    </li>
                </ul>
                {(!localStorage.getItem("email")) ? (<div> <Link className="btn  mx-2 btn-light" to='/login'>Login</Link>
                   <Link className="btn  btn-light" to='/signup'>Sign Up</Link> </div>) : (<div><form onSubmit={logout} ><button type="submit" className='btn btn-light'>Logout</button> </form></div>)}
                </div>
            </div>
            </nav>
    </div>
  )
}

export default Navabar;