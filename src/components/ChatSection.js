import React, { useState } from "react";
import className from "classnames";
import { Block } from "@mui/icons-material";

const ChatSection = () => {

  const [open, setopen] = useState(true);
  
  const Toggleform=()=>{
    console.log("Mai aaya hun");
      setopen(!open);
  }
 
  return (
    <div>
        <button className="open-button" onClick={Toggleform}>Chat</button>

        <div className="chat-popup" style={open ? {"display":"Block"} : {"display":"none"}} id="myForm">
          <form action="/action_page.php" class="form-container">
            <h1>Chat</h1>
        
            <label for="msg"><b>Message</b></label>
            <textarea placeholder="Type message..." name="msg" required></textarea>
        
            <button type="submit" className="btn">Send</button>
            <button type="button" className="btn cancel" onClick={Toggleform}>Close</button>
          </form>
        </div>
     </div>   
  );
};

export default ChatSection;
