import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Blog = () => {
    const location = useLocation();
    const propsData = location.state;
    console.log(propsData._id);

    const [data,setData] = useState();
    const [date,setDate] = useState();

    const fetchData = async()=>{
        const response = await fetch("http://localhost:5000/api/FetchOne",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({id:propsData._id})
        })
        const json = await response.json();
        console.log(json.blogData);
        setData(json.blogData);
        setDate(json.blogData.Date.slice(0,10));
     }
   
     useEffect(()=>{
       fetchData();
     // eslint-disable-next-line react-hooks/exhaustive-deps
     },[])  
  return (
    <div className='container BlogPage'>
        <div className='blogDate'><p>{date}</p></div>
        <h1>{data?.Title}</h1>
        <p>{data?.Content}</p>
    </div>
  )
}

export default Blog;