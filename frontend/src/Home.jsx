import React from 'react';
// import './styles/Home.css'
import Headandfoot from './Layout/headandfoot';
import FitnessPrograms from './Layout/FitnessProgram';

const Home = () => {
  return (
    <Headandfoot>
    <div className="container-fluid py-5 text-white">
      <div className="row align-items-center">
        {/* Left Text Section */}
        <div className="col-lg-6 mb-4">
          <h1 className="display-4 fw-bold">
            Transform <span className="text-info">Your Body</span><br />
            With Advanced<br />
            AI <span className="text-info">Technology</span>
          </h1>
          <p className="mt-4 mb-5 text-secondary">
            Talk to our AI assistant and get personalized diet plans and<br />
            workout routines designed just for you
          </p>

          <div className="d-flex mb-4">
            <div className="me-5">
              <h5 className="text-info">500+</h5>
              <small className="text-secondary">ACTIVE USERS</small>
            </div>
            <div className="me-5">
              <h5 className="text-info">3min</h5>
              <small className="text-secondary">GENERATION</small>
            </div>
            <div>
              <h5 className="text-info">100%</h5>
              <small className="text-secondary">PERSONALIZED</small>
            </div>
          </div>

          <button className="btn btn-info text-white fw-semibold px-4 py-2">
            Build Your Program →
          </button>
        </div>

        {/* Right Image Section */}
        <div className="col-lg-6 text-center">
          <img
            src="/images/home.PNG" // adjust this path to your project structure
            alt="AI Body"
            className="img-fluid"
            style={{ maxHeight: '500px', objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>

    <FitnessPrograms/>
    </Headandfoot>
  );
};

export default Home;
