import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
   let navigate=useNavigate();
   const [credentials, setCredentials]=useState({
             name:"",
             email:"",
             password:"",
             Bio:""

   })

   const Change=(e)=>{
      setCredentials({...credentials,[e.target.name]:e.target.value});
   }


  const handleSubmit= async (e)=>{
      e.preventDefault();
        
      const response = await fetch("http://localhost:5000/api/createuser",{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({name:credentials.name, email:credentials.email, password:credentials.password, Bio:credentials.Bio})
      });
      const json = await response.json();
      console.log(json);

      if(!json.success){
         alert("Enter valid credentials");
      }if(json.success){
        navigate('/');
      }
      
  }


  return (
    <>
    <div className='container'>
      <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" name="name" value={credentials.name} onChange={Change} placeholder="Enter name"/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={credentials.email} onChange={Change} placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={credentials.password} onChange={Change} placeholder="Password"/>
          </div>
          <div className="input-group mt-5 d-flex flex-column">
          {/* <div className="input-group-prepend">
            <span className="input-group-text">Tell us about yourself</span>
          </div> */}
          <label htmlFor="exampleInputPassword1">Tell us about yourself</label>
          <textarea
            className="form-control"
            aria-label="With textarea"
            style={{width:"100%"}}
            value={credentials.Bio}
            name="Bio"
            onChange={Change}
           ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>  
        </form>
      </div>
    </>
  )
}

export default Signup;