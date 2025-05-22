import Headandfoot from "./Layout/headandfoot";

const Login = () => {
  return (
    <Headandfoot>
      <div className="container">
        <div className="main d-flex justify-content-center align-items-center min-vh-100">
          <form
            className="bg-light p-4 rounded shadow text-dark"
            style={{ width: "300px" }}
          >
            <h3 className="text-center text-dark mb-3">Login</h3>
            <div className="mb-3">
              Username:
              <input
                type="text"
                className="form-control"
                // placeholder="Username"
              />
            </div>
            <div className="mb-3">
              Password:
              <input
                type="password"
                className="form-control"
                // placeholder="Your Email"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 text-dark">
              Login
            </button>
          </form>
        </div>
      </div>
    </Headandfoot>
  );
};

export default Login;
