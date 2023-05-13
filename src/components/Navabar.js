import React from 'react';
import {Link} from "react-router-dom";

const Navabar = () => {
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
                    <li className="nav-item">
                    <Link className="nav-link" to='/'>Link</Link>
                    </li>
                    <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to='/' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </Link>
                    
                    </li>
                </ul>
                <button type="button" className="btn  mx-2 btn-light">Login</button>
                <button type="button" className="btn  btn-light">Sign Up</button>
                </div>
            </div>
            </nav>
    </div>
  )
}

export default Navabar;