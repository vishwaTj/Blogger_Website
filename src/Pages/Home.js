import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import InputModal from '../components/InputModal';
import BlogCard from '../components/BlogCard';

const Home = () => {
  const [BlogData, SetBlogData]= useState([]);
  const fetchData = async()=>{
     const response = await fetch("http://localhost:5000/api/fetchBlog",{
      method:"GET"
     })
     const json = await response.json();
     SetBlogData(json.data);
  }
  
  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className='container Home-contianer'>
      <div className='row'>
        <div className='profile col'>
          <div className="container card profile-card" style={{"width": "18rem"}}>
            <img className="card-img-top" src="" alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="/" className="btn btn-primary">Go somewhere</Link>
            </div>
          </div>
        </div>
        <div className='posts col-8'>
            {(!localStorage.getItem('email')) ? "":(<p>
                  <a className="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Write a blog
                  </a>
              </p>)}
            <div className="collapse" id="collapseExample">
              <div className="card card-body" style={{"width":"80%","marginBottom":"10px"}}>
                  <InputModal />
                </div>
            </div>
            {BlogData.map((value, index)=>{
             return (
                <div key={index}>
                   <BlogCard value={value} />
                </div>)
           })}
            
        </div>
        <div className='col'>

        </div>
      </div>  
    </div>
  )
}

export default Home;