import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

const Login = () => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email:"",
    password:"",})

    const Change=(e)=>{
      setCredentials({...credentials,[e.target.name]:e.target.value});
    }


    const handleSubmit= async (e)=>{
      e.preventDefault();

      const response = await fetch("http://localhost:5000/api/loginuser",{
        method:'POST',
        headers:{
         'Content-Type':'application/json'
        },
        body:JSON.stringify({email:credentials.email, password:credentials.password})
        });
      const json = await response.json();
      console.log(json.user);

      if(!json.success){
       alert("Enter valid credentials");
      }
      if(json.success){
        localStorage.setItem('email',credentials.email);
        localStorage.setItem('userName',json.user.name);
        localStorage.setItem('userID',json.user._id);
        localStorage.setItem('Bio',json.Bio);
        navigate('/');
      }
}
  
  
  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit}>
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
           <Link to="/createuser" className='m-3 btn btn-danger'>I'm a new user</Link>  
         </form>
      </div>

    </>
  )
}

export default Login;