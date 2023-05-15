import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import logo from '../Blogger.png';

const Login = () => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email:"",
    password:"",})

    const handleChange=(e)=>{
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
        localStorage.setItem('Bio',json.user.Bio);
        navigate('/');
      }
}
  
  
  return (
    <>
       <div className='login'>
        <section style={{width:"50%"}}>
         <div className='loginsection leftSide'>
            <div style={{width:"100%",backgroundColor:"white",marginBottom:"10px"}}>
            <Link to="/"> <img src={logo} alt="company logo" style={{width:"100%",objectFit:"contain", height:"130px"}}/></Link>
            </div>
            <form onSubmit={handleSubmit} className='submission'>
                    <div className="mb-3">
                        <label htmlhtmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" name='email' value={credentials.email} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlhtmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' value={credentials.password} id="exampleInputPassword1" onChange={handleChange} />
                    </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/createuser" className="m-3 btn btn-danger">I'm a new user</Link>
            </form>
         </div>
         </section>
         <section style={{width:"50%"}}>
         <div className='loginsection rightSide'>
                
             </div>
         </section>
     </div> 

    </>
  )
}

export default Login;