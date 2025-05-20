import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">
          {/* Logo + About */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold">Fit Mentor</h4>
            <p >Your AI-powered fitness trainer to help you stay motivated and fit.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className=" text-decoration-none">Home</a></li>
              <li><a href="#" className=" text-decoration-none">About</a></li>
              <li><a href="#" className=" text-decoration-none">Contact</a></li>
              <li><a href="#" className=" text-decoration-none">Register</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-4 mb-4">
            <h5 className="mb-3">Subscribe</h5>
            <p className="">Get updates and fitness tips in your inbox.</p>
            <form className="d-flex">
              <input
                type="email"
                placeholder="Enter email"
                className="form-control me-2 bg-dark text-white border border-white"
              />
              <button className="btn btn-outline-light">Subscribe</button>
            </form>
          </div>
        </div>

        <hr className="border-gray-600" />
        <p className="text-center text-white mb-0">
          &copy; {new Date().getFullYear()} Fit Mentor. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
