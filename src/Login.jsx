import React, { useState } from "react";

import { NavLink } from "react-router-dom";

const Common = (props) => {
    const [data, setData] = useState({
        username: "",
        password: "",
        pin: "",
      });
    
      const InputEvent = (event) => {
        const { name, value } = event.target;
    
        setData((preVal) => {
          return {
            ...preVal,
            [name]: value,
          };
        });
      };
    
      const formSubmit = (e) => {
        e.preventDefault();
        alert(
          `Your username is ${data.username} and security pin is ${data.pin}`
        );
      };
  return (
    <>
     <div className="my-3">
        <h1 className="text-center" > Login Here </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Username
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="username"
                  value={data.username}
                  onChange={InputEvent}
                  placeholder="Enter your username"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Password
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="password"
                  value={data.password}
                  onChange={InputEvent}
                  placeholder="password"
                  
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Security PIN
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="pin"
                  value={data.pin}
                  maxLength="4"
                  onChange={InputEvent}
                  placeholder="****"
                />
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">
                  LOGIN 
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Common;

