import Headandfoot from "./Layout/headandfoot";

const Contact = () => {
  return (
    <Headandfoot>
      <h1 className="d-flex justify-content-center align-items-center text-bold">
        Contat Us
      </h1>

    <div className="container">
      <div className="row">
        <div className="left col-md-6"> We are a team of professionals and our goal is to make people familiar with AI. Here through our website you can use AI to generate your own  personal Fitness Trainer.</div>
        <div className="right col-md-6"> <img src="/" alt="Contact" /></div>
      </div>

      <div className="row">
        <div className="left col-md-6"><img src="/" alt="Contact" /></div>
        <div className="right col-md-6">We are a team of professionals and our goal is to make people familiar with AI. Here through our website you can use AI to generate your own  personal Fitness Trainer.</div>
      </div>

      <div className="row">
        <div className="left col-md-6">We are a team of professionals and our goal is to make people familiar with AI. Here through our website you can use AI to generate your own  personal Fitness Trainer.</div>
        <div className="right col-md-6"><img src="/" alt="Contact" /></div>
      </div>

    </div>

    </Headandfoot>
  );
};

export default Contact;
