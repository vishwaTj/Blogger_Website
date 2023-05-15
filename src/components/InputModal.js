import React, { useState } from "react";

const InputModal = () => {
  let user=localStorage.getItem("userName");
  let userID = localStorage.getItem("userID");
  
  
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
      e.preventDefault();

      // const response = await fetch("")
  }

  // console.log(user+" "+userID);
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
      </form>
    </div>
  );
};

export default InputModal;
