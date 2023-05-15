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
    return (
     <div className="card posts-card" style={{"width": "80%",marginTop:"10px",cursor:"pointer"}}>
              <div className="card-body">
                {(user === value.name) ? <div onClick={deleteItem} style={{position:"absolute",top:"10%",left:"92%"}}> 
                  <DeleteIcon />
                </div> : ""} 
              <h6 className="card-subtitle mb-2 text-muted">@{value?.name}</h6> 
                <h5 className="card-title">{value?.Title}</h5>
                <p className="card-text">{value?.Content}</p>
              </div>
     </div>
  )
}

export default BlogCard