import React, { useEffect, useState } from 'react';
import InputModal from '../components/InputModal';
import BlogCard from '../components/BlogCard';
import Avatarblock from '../components/Avatarblock';
import Avatar2 from '../components/Avatar2';

const Home = () => {
  const [BlogData, SetBlogData]= useState([]);

  const userName = localStorage.getItem('userName');
  const Bio =  localStorage.getItem('Bio');

  const fetchData = async()=>{
     const response = await fetch("http://localhost:5000/api/fetchBlog",{
      method:"GET"
     })
     const json = await response.json();
     SetBlogData(json.data);
  }
  console.log(BlogData[0]?.img);

  // const 
  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className='container Home-contianer'>
      {/* ************ Bio block on the left ************* */}
      <div className='row'>
        {!userName ? (<div className='col'></div>): (<div className='profile col'>
              <div className="card profile-card" style={{"width": "16rem", borderRadius:"20px"}}>
                <div style={{margin:"auto",marginTop:"10px"}}> 
                  <Avatarblock name={userName} />
                </div>
                <div className="card-body">
                  <h5 className="card-title" style={{textAlign:"center"}}>{userName}</h5>
                  <p className="card-text" >{Bio}</p>
                </div>
              </div>
          </div>)}


       {/* ************** Middle section input and blog cards **************** */}
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
            {BlogData?.map((value, index)=>{
             return (
                <div key={index}>
                   <BlogCard value={value} />
                </div>)
           })}
            
        </div>

        <div className='col'>
          <div className='usersHeader'>
            <h2>Users</h2>
          </div>  
           {BlogData?.map((data)=>{
               return (
                 <div className='usersAvatar' key={data?._id}>
                      <Avatar2 stl={true} name={data?.name} />
                      <p>{data?.name}</p>
                </div>)
           })}
        </div>
      </div>  
    </div>
  )
}

export default Home;