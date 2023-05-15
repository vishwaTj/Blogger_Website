import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Blogger.png';

const Signup = () => {
   let navigate=useNavigate();
   const [credentials, setCredentials]=useState({
             name:"",
             email:"",
             password:"",
             Bio:""

   })

   const handleChange=(e)=>{
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
         <div className='login'>
             <section style={{width:"50%"}}>
              <div className='loginsection leftSide'>
                <div style={{width:"100%",backgroundColor:"white",marginBottom:"10px"}}>
                     <Link to="/"> <img src={logo} alt="company logo" style={{width:"100%",objectFit:"contain", height:"130px"}}/></Link>
                     </div>
                     <form onSubmit={handleSubmit} className='submission'>
                             <div className="mb-3">
                                 <label htmlhtmlFor="name" className="form-label">Name</label>
                                 <input type="text" className="form-control" name='name' value={credentials.name} onChange={handleChange} />
                             </div>
                             <div className="mb-3">
                                 <label htmlhtmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                 <input type="email" className="form-control" name='email' value={credentials.email} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} />
                                 <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                             </div>
                             <div className="mb-3">
                                 <label htmlhtmlFor="exampleInputPassword1" className="form-label">Password</label>
                                 <input type="password" className="form-control" name='password' value={credentials.password} id="exampleInputPassword1" onChange={handleChange} />
                             </div>
                             <div className="input-group mt-5 d-flex flex-column">
                                <label htmlFor="exampleInputPassword1">Tell us about yourself</label>
                                <textarea
                                  className="form-control"
                                  aria-label="With textarea"
                                  style={{width:"100%"}}
                                  value={credentials.Bio}
                                  name="Bio"
                                  onChange={handleChange}
                                ></textarea>
                            </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <Link to="/login" className="m-3 btn btn-danger">Already a user</Link>
                    </form>
            </div>
             </section>
             <section style={{width:"50%"}}>
               <div className='loginsection rightSide signupPage'>
                 </div>
             </section>
          </div> 
        </div>
    </>
  )
}

export default Signup;