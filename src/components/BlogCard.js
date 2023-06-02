import React from 'react'
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';

const BlogCard = ({value}) => {
    let user = localStorage.getItem('userName');
    const deleteItem=async ()=>{
        const response = await fetch("http://localhost:5000/api/deleteBlog",{
            method :'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({id:value._id})
        })
        const json = await response.json();
        if(!json.success){
            alert("invalid ID/request sent as POST");
        }
        if(json.success){
            window.location.reload(true);
        }
    };
    console.log(value);

    return (
      <Link className='BlogRoute' to='/Blog' state={value}> 
       <div className="card posts-card topic" style={{"width": "80%",marginTop:"10px",cursor:"pointer"}}>
              <div className="card-body blog-body">
                {(user === value.name) ? <Link to='/'><div onClick={deleteItem} style={{position:"absolute",top:"10%",left:"92%"}}> 
                  <DeleteIcon />
                </div></Link> : ""} 
              <h6 className="card-subtitle mb-2 text-muted">@{value?.name}</h6> 
              {/* <h6></h6> */}
                <h5 className="card-title">{value?.Title}</h5>
                <p className="card-text">{value?.Date.slice(0,10)}</p>
              </div>
     </div>
      </Link>
  )
}

export default BlogCard;