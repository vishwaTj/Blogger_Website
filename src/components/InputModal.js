import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const InputModal = () => {
  let user=localStorage.getItem("userName");
  let userID = localStorage.getItem("userID");
  let navigate = useNavigate();
  
  let [Blog,setBlog]  =useState({
    userID,
    user,
    Title:"",
    Content:"",
  });

  const onChange = (e)=>{
      setBlog({...Blog,[e.target.name]:e.target.value})
  }

  const handleSubmit= async(e)=>{
       e.preventDefault()

      const response = await fetch("http://localhost:5000/api/createblog",{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
            name:user,
            userID,
            Title:Blog.Title,
            Content:Blog.Content
        })
      })
      const json = await response.json();
      console.log(json);

      if(!json.success){
         alert("Enter valid credentials");
      }if(json.success){
        setBlog({
          Title:"",
          Content:""
        })
        navigate('/');
      }
  }

  return (
    <div>
     <form onSubmit={handleSubmit}> 
        <div className="input-group mb-3 ">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              @
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Username"
            value={user}
            aria-describedby="basic-addon1"
            name={user}
            disabled
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Title</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="Title"
            value={Blog.Title}
            onChange={onChange}
            aria-label="Amount (to the nearest dollar)"
          />
          <div className="input-group-append">
          </div>
        </div>

        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Blog content</span>
          </div>
          <textarea
            className="form-control"
            aria-label="With textarea"
            value={Blog.Content}
            name="Content"
            onChange={onChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary" data-toggle="collapse"
                 href="#collapseExample"
                 aria-expanded="false"
                 aria-controls="collapseExample">
                Submit
        </button>
      </form>
    </div>
  );
};

export default InputModal;
