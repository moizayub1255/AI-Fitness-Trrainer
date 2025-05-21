import React from "react";
import { Link } from "react-router-dom";
// import './styles/Home.css'
import Headandfoot from "./Layout/headandfoot";
import FitnessPrograms from "./Layout/FitnessProgram";

const Home = () => {
  return (
    <Headandfoot>
      <div className="row ">
        <div className="left col-md-6 d-flex justify-content-center align-items-center">
          <div className="ps-4">
            <h2>Transform your body with Advanced AI Technology</h2>
            <hr />
            <p>
              Talk to our AI Assistant and get personalized plans and workout
              routines designed just for you
            </p>
            <div className=" d-flex justify-content-center align-items-center mt-4">
              <h3>500+ Active Users</h3>
              <h3>3 min Generation</h3>
              <h3>100% Personalized</h3>
            </div>

            <Link to="/generate-plan" className="btn text-dark mt-4">
              Build your program
            </Link>
          </div>
        </div>

        <div className="right col-md-6">
          <div className="d-flex justify-content-center align-items-center">
            <img
              className="h-50 w-50 rounded"
              src="/heropic.png"
              alt="Fit Mentor"
            />
          </div>
        </div>
      </div>
      <hr />
      <FitnessPrograms />
    </Headandfoot>
  );
};

export default Home;
