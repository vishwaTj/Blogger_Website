import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div className='container Home-contianer'>
      <section className='profile'>
      <div className="card profile-card" style={{"width": "18rem"}}>
        <img className="card-img-top" src="" alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="/" className="btn btn-primary">Go somewhere</Link>
        </div>
      </div>
      </section>
      <section className='posts'>
          <div className="card posts-card" style={{"width": "80%"}}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="/" className="card-link">Card link</Link>
              <Link to="/" className="card-link">Another link</Link>
            </div>
          </div>
      </section>
    </div>
  )
}

export default Home;