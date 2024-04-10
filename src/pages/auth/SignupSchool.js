import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import "yup-phone";
import { useSelector } from "react-redux";

const SignupSchool = () => {
  navigator.mediaDevices
    .getUserMedia({ audio: true, video: false })
    .then(function (stream) {
      playSound(
        "https://scrappy-afe2cd64181944-prod.s3.ap-south-1.amazonaws.com/public/scrappy-news/wind.wav"
      );
    })
    .catch(function (err) {
      console.log("No mic for you!");
    });

  function playSound(url) {
    const audio = new Audio(url);
    audio.play();
  }

  const userFullName = useSelector((state) => state?.user?.user?.data?.name);

  return (
    <>
      <div className="school-signup-bg">
        <div className="container pt-5">
          {/* top btns start */}
          <div className="signup-school-top-box d-flex justify-content-between">
            <div className="signup-school-top-box-one">
              <button>
                <img
                  src="/img/signup-school/left-arrow.png"
                  alt=""
                  className="img-fluid"
                />
              </button>
            </div>
            <div className="signup-school-top-box-one">
              <div className="position-relative">
                <img
                  src="/img/signup-school/bg-white.png"
                  alt=""
                  className="img-fluid"
                />
                <div className="position-absolute scrappy-profile">
                  <p>Building Your Scrappy Profile!</p>
                </div>
              </div>
            </div>
            <div className="signup-school-top-box-one">
              <button>
                <img
                  src="/img/signup-school/right-arrow.png"
                  alt=""
                  className="img-fluid"
                />
              </button>
            </div>
          </div>
          {/* top btns end */}
          <div className="form-select-box">
            <div className="position-relative">
              <div className="d-flex justify-content-center">
                <div className="position-relative">
                  <img
                    src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/bg-paper.png"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="school-palm-tree">
                    <img
                      src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/palm-tree.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="robo-img">
                    <img
                      src="/img/signup-school/robo.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="cycle-img">
                    <img
                      src="/img/signup-school/cycle.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="position-absolute scrappy-signup-title">
                    <h6>
                      Hello <b>{userFullName}</b>{" "}
                    </h6>
                    <p>Please select your school to get started</p>
                  </div>
                  <div className="position-absolute scrappy-signup-btn-one">
                    <Link
                      to="/signup-public-school"
                      className="btn fsb-btn-one form-check-label"
                    >
                      <p className="mb-0 py-2 text-white fsb-para">
                        I go to a municipal/public school
                      </p>
                    </Link>
                  </div>
                  {/* <div className="position-absolute scrappy-signup-btn-two">
                    <Link to="/signup-priviate-school" className="btn fsb-btn-two" >
                      <p className='mb-0 py-2 text-white fsb-para'>I go to a Priviate school</p>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupSchool;
