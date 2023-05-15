import React from "react";

const InputModal = () => {
  let user=localStorage.getItem("userName");
  let userID = localStorage.getItem("userID");
  console.log(user+" "+userID);
  return (
    <div>
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
          value={localStorage.getItem("user")}
          aria-describedby="basic-addon1"
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
        ></textarea>
      </div>
    </div>
  );
};

export default InputModal;
