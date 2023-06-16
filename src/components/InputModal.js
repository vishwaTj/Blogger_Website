import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const InputModal = () => {
  let [file,setFile] = useState();
  let user=localStorage.getItem("userName");
  let userID = localStorage.getItem("userID");
  let navigate = useNavigate();
  
  let [Blog,setBlog]  =useState({
    userID,
    user,
    Title:"",
    Content:"",
    image:null
  });

  const onChange = (e)=>{
      setBlog({...Blog,
               [e.target.name]:e.target.value})
  }

  const fileChange=(e)=>{
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
    setBlog({...Blog, image:file})
  }

  const handleSubmit= async (e)=>{
       e.preventDefault();
       console.log("Yorba");

       const formData = new FormData();
       formData.append("name", user);
       formData.append("userID", userID);
       formData.append("Title", Blog.Title);
       formData.append("Content", Blog.Content);
       formData.append('image', file);
       
       const response = await fetch("http://localhost:5000/api/createblog",{
        method:"POST",
        body: formData
       })
 
       const json =await response.json();
       console.log(json);

       if(!json.success){
        alert("Enter valid credentials");
       }
       if(json.success){
         setBlog({
          Title:"",
          Conent:""
         })
       }
      window.location.reload(true);
      navigate('/');

      // const response = await fetch("http://localhost:5000/api/createblog",{
      //   method:'POST',
      //   headers:{
      //     'Content-Type':'application/json'
      //   },
      //   body: JSON.stringify({
      //       name:user,
      //       userID,
      //       Title:Blog.Title,
      //       Content:Blog.Content
      //   })
      // })
      // const json = await response.json();
      // console.log(json);

      // if(!json.success){
      //    alert("Enter valid credentials");
      // }if(json.success){
      //   setBlog({
      //     Title:"",
      //     Content:""
      //   })
      //   window.location.reload(true);
      //   navigate('/');
      // }
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
            value={!user ? "":user}
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
         
        <div className="fileInput">
          <label htmlFor="image"><span className="input-group-text">Upload Image</span></label>
          <input type="file" id="image" onChange={fileChange} value=""/>
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
