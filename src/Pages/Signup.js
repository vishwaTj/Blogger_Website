import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
   let navigate=useNavigate();
   const [credentials, setCredentials]=useState({
             name:"",
             email:"",
             password:"",

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
        body:JSON.stringify({name:credentials.name, email:credentials.email, password:credentials.password})
      });
      const json = await response.json();
      console.log(json);

      if(!json.success){
         alert("Enter valid credentials");
      }if(json.succes){
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
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>  
        </form>
      </div>
    </>
  )
}

export default Signup;