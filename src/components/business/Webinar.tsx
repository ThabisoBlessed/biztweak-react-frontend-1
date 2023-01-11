import React from "react";
import { useNavigate } from "react-router-dom";

export const Webinar = () => {
  const navigate = useNavigate();
  
  const getCourses = () => {
    navigate("/lms");
  }

  return (
    <div className="mt-4 col-12 text-center text-dark">
      <button
        className="btn btn-sm text-white bg-[#00c2cb] btn-info p-3"
        onClick={getCourses}
      >
        <h3>Get Courses</h3>
      </button>

      <div className="row justify-content-center mt-2 align-items-center bg-[#f1feff]">
        <div className="col-lg-5 col-md-6 text-center">
          <h1 className="my-3 h4 font-bold">Webinar Series</h1>
          <p className="lead">
            Please share your details if you want to be part of our Webinar
            series, where we help you build your business through active
            learning.
          </p>
        </div>
        <div className="col-md-4 d-none">
          <div className="card bg-transparent">
            <div className="card-body text-center">
              <div className="p-3">
                <img
                  src="https://biztweak.org.za/public/new/images/user-placeholder.png"
                  className="img-fluid rounded-circle my-4 h-[50px] w-[50px]"
                  alt=""
                />
                <h6 className="text-dark fw-bold">Choose Plan</h6>
                <p className="my-3 small">
                  Become a member today and save more than 75%.
                </p>
                <button className="btn btn-lg btn-info col-12">
                  Get Course
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="form-floating my-3">
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            placeholder="Name"
          />
          <label htmlFor="name" className="form-label">
            Name
          </label>
        </div>
        <div className="form-floating my-3">
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="Email"
          />
          <label htmlFor="email" className="form-label">
            Email
          </label>
        </div>
        <div className="form-floating my-3">
          <input
            type="tel"
            name="number"
            id="phone"
            className="form-control"
            placeholder="Email"
          />
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
        </div>
        <div className="alert d-flex align-items-center text-orange">
          <i className="fas fa-circle-exclamation fa-lg me-2"></i>
          Please note that all information will be kept with BizTweak and will
          not be shared with any third parties, as per the POPIA regulations.
        </div>
        <div className="col-12 text-end">
          <button
            className="btn bg-[#00c2cb] btn-info btn-lg mt-2 p-3 w-[100px] text-white"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
