import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({value}) => {
    console.log(value);
    return (
     <div className="card posts-card" style={{"width": "80%",marginTop:"10px"}}>
              <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">@{value.name}</h6> 
                <h5 className="card-title">{value.Title}</h5>
                <p className="card-text">{value.Content}</p>
                <Link to="/" className="card-link">Card link</Link>
                <Link to="/" className="card-link">Another link</Link>
              </div>
     </div>
  )
}

export default BlogCard