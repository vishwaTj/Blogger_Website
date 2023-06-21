import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Buffer } from 'buffer';

const Blog = () => {
    const location = useLocation();
    const propsData = location.state;
    console.log(propsData);

    const [image,setimg] = useState();

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
        console.log(json.blogData?.img);
        setimg(json.blogData.img);
        setData(json.blogData);
        setDate(json.blogData?.Date.slice(0,10));
     }
    //  const { img } = data;
    //  console.log(img);
     console.log(data);
     useEffect(()=>{
       fetchData();
     // eslint-disable-next-line react-hooks/exhaustive-deps
     },[])  
  return (
    <div className='container BlogPage'>
        <div className='blogDate'><p>{date}</p></div>
        <h1>{data?.Title}</h1>
        <img className='BlogImg' src={`data:${propsData.img?.contentType};base64,${Buffer.from(propsData.img?.data).toString('base64')}`} alt="Image"/>
        <p>{data?.Content}</p>
    </div>
  )
}

export default Blog;