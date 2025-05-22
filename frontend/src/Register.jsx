import React from "react";
import Headandfoot from "./Layout/headandfoot";

const Register = () => {
  return (
    <Headandfoot>
      <div className="container">
        <div className="register d-flex justify-content-center align-items-center min-vh-100">
          <form
            className=" bg-light rounded p-4 text-dark"
            style={{ width: "430px" }}
          >
            <div>
              <h2 className="text-dark text-center mb-3">Register</h2>
            </div>
            <div className="">
              First Name:
              <input
                className="mb-3 form-control"
                type="text"
                // placeholder="First Name"
              />
              Last Name:
              <input
                className="mb-3 form-control"
                type="text"
                // placeholder="Last Name"
              />
            </div>
            <div className="mb-3">
              Username:
              <input className="form-control" type="text" />
            </div>
            <div>
              Email:
              <input
                className="mb-3 form-control"
                type="email"
                // placeholder="Email"
              />
            </div>
            <div className="text-dark">
              Password:
              <input
                className="mb-3 form-control"
                type="password"
                // placeholder="Password"
              />
              Confirm Password:
              <input
                className="mb-3 form-control"
                type="password"
                // placeholder="Confirm Password"
              />
            </div>
            <div className="btn btn-primary text-dark w-100">Register</div>
          </form>
        </div>
      </div>
    </Headandfoot>
  );
};

export default Register;
