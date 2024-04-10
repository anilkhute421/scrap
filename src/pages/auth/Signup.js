import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import "yup-phone";
import { toast } from "react-toastify";
import { Auth, API } from "aws-amplify";
import { createUser } from "../../graphql/mutations";
import { regUser, userRegister } from "../../features/user/userSlice";
import { useDispatch } from "react-redux";
import Navbar from "../../components/global/Navbar";
import SendOtp from "./SendOtp";

const Signup = () => {
  const [slide, setSlide] = useState(true);
  const [password, setPassowrd] = useState("");

  navigator.mediaDevices
    .getUserMedia({ audio: true, video: false })
    .then(function (stream) {
      playSound(
        "https://scrappy-afe2cd64181944-prod.s3.ap-south-1.amazonaws.com/public/scrappy-news/waves-vfx.wav"
      );
    })
    .catch(function (err) {
      console.log("No mic for you!");
    });

  function playSound(url) {
    const audio = new Audio(url);
    audio.play();
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const initialData = { firstName: "", lastName: "", phone: "", password: "" };

  const schema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required."),
    lastName: Yup.string().required("Last Name is required."),
    phone: Yup.string()
      .required("Phone is required.")
      .matches(phoneRegExp, "Phone number is not valid")
      .min(6, "too short")
      .max(20, "too long"),
    password: Yup.string().required("Password is required."),
  });

  // handleCreateUser
  const handleCreateUser = async (firstName, lastName, phone) => {
    try {
      await Auth.signUp({
        username: `+91${phone}`,
        password: "Password@1",
        attributes: {
          family_name: firstName,
          given_name: lastName,
        },
      }).then((res) => {
        API.graphql({
          query: createUser,
          variables: {
            input: {
              deleted: false,
              id: res.userSub,
              firstName: firstName,
              lastName: lastName,
            },
          },
        });
      });
      navigate("/otp");
    } catch (error) {
      console.log("error signing in", error);
      toast.error(error.message);
    }
  };

  // handleSubmit
  const handleSubmit = (values, { resetForm }) => {
    dispatch(regUser(""));
    const { firstName, lastName, phone, password } = values;
    setPassowrd(password);
    const data = {
      first_name: firstName,
      last_name: lastName,
      phone: `+91${phone}`,
      password: password,
      password_confirmation: password,
    };
    dispatch(userRegister(data))
    .then((apiResponse) => {
      // Access the API response here
      if (apiResponse?.payload?.data) {
        dispatch(regUser({ firstName, lastName, phone }));
        setSlide(false);
        toast.success(apiResponse?.payload?.message);
        resetForm({ values: '' });
      } else if (apiResponse?.payload?.status === 400) {
        // If the first condition is false and this condition is true, execute this block
        const errorMessage = apiResponse?.payload?.source?.phone
        ? apiResponse?.payload?.source?.phone[0]
        : apiResponse?.payload?.source?.password[0];
        toast.error(errorMessage);
      }
    })
    .catch((error) => {
      toast.error(error?.message || "An error occurred while logging in.");
    });
  };


  return (
    <>
      {slide ? (
        <div className="signup-bg">
          <Navbar />
          <div className="bg-ground">
            <div className="ground-box">
              <div className="signup-home-img">
                <div className="home-relative">
                  <img
                    src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/signup-home.png"
                    alt=""
                    className="img-fluid home-small"
                  />
                  <div className="thread-box-one">
                    <div className="position-relative">
                      <img
                        src="/img/page-3/thread-1.png"
                        alt=""
                        className="img-fluid w-100"
                      />
                      <div className="robo-moving">
                        <div className="position-relative">
                          <img
                            src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/Robo.gif"
                            alt=""
                            className="img-fluid w-100"
                          />
                          <div className="signup-pink-football">
                            <img
                              src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/Pink-Football.gif"
                              alt=""
                              className="img-fluid w-100"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="signup-dress-code position-absolute">
                        <img
                          src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/dree-code.png"
                          alt=""
                          className="img-fluid w-100"
                        />
                      </div>

                      <div className="leaf-green position-absolute">
                        <img
                          src="/img/page-3/leaf-green.png"
                          alt=""
                          className="img-fluid w-100"
                        />
                      </div>

                      <div className="signup-right-tree">
                        <img
                          src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/Tree.gif"
                          alt=""
                          className="img-fluid w-100"
                        />
                      </div>

                      <div className="shirt-anime-three">
                        <img
                          src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/Blue-Towel.gif"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="shirt-anime-two">
                        <img
                          src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/White-Towel.gif"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="shirt-anime">
                        <img
                          src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/Pink-T-Shirt.gif"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="shirt-anime-one">
                        <img
                          src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/White-T-Shirt.gif"
                          alt=""
                          className="img-fluid"
                        />
                      </div>

                      <div className="form-area">
                        <div className="form-area-container">
                          <img
                            src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/form-area.png"
                            alt=""
                            className="img-fluid"
                          />

                          <Formik
                            initialValues={initialData}
                            validationSchema={schema}
                            onSubmit={handleSubmit}
                          >
                            {({
                              values,
                              errors,
                              handleChange,
                              handleSubmit,
                            }) => (
                              <form
                                className="form-paper pt-3 w-75"
                                onSubmit={handleSubmit}
                              >
                                <p>
                                  {" "}
                                  <b>
                                    Play Scrappy now. Create your account.
                                  </b>{" "}
                                </p>
                                <div className="name-field">
                                  <label
                                    htmlFor="firstName"
                                    className="form-label mb-0"
                                  >
                                    First Name
                                  </label>
                                  <input
                                    type="name"
                                    placeholder="Your First Name"
                                    className="form-control w-100 custom-form shadow-none pb-0 pt-0"
                                    id="firstName"
                                    name="firstName"
                                    aria-describedby="firstNameHelp"
                                    value={values?.firstName}
                                    onChange={handleChange}
                                  />
                                  {errors.firstName && (
                                    <small className="text-danger mt-2 ms-1 ">
                                      {errors.firstName}
                                    </small>
                                  )}
                                </div>
                                <div className="name-field mt-3">
                                  <label
                                    htmlFor="lastName"
                                    className="form-label mb-0"
                                  >
                                    Last Name
                                  </label>
                                  <input
                                    type="name"
                                    placeholder="Your Last Name"
                                    className="form-control w-100 custom-form shadow-none pb-0 pt-0"
                                    id="lastName"
                                    name="lastName"
                                    aria-describedby="lastNameHelp"
                                    value={values?.lastName}
                                    onChange={handleChange}
                                  />
                                  {errors.lastName && (
                                    <small className="text-danger mt-2 ms-1 ">
                                      {errors.lastName}
                                    </small>
                                  )}
                                </div>
                                <div className="name-field mt-3">
                                  <label
                                    htmlFor="phone"
                                    className="form-label mb-0"
                                  >
                                    Mobile Phone Number
                                  </label>
                                  <input
                                    type="tel"
                                    placeholder="Your Phone number"
                                    className="form-control w-100 custom-form shadow-none pb-0 pt-0"
                                    id="phone"
                                    name="phone"
                                    aria-describedby="phoneHelp"
                                    value={values?.phone}
                                    onChange={handleChange}
                                  />
                                  {errors.phone && (
                                    <small className="text-danger mt-2 ms-1 ">
                                      {errors.phone}
                                    </small>
                                  )}
                                </div>
                                <div className="name-field mt-3">
                                  <label
                                    htmlFor="password"
                                    className="form-label mb-0"
                                  >
                                    Password
                                  </label>
                                  <input
                                    type="password"
                                    placeholder="Your Password"
                                    className="form-control w-100 custom-form shadow-none pb-0 pt-0"
                                    id="password"
                                    name="password"
                                    aria-describedby="lastNameHelp"
                                    value={values?.password}
                                    onChange={handleChange}
                                  />
                                  {errors.password && (
                                    <small className="text-danger mt-2 ms-1 ">
                                      {errors.password}
                                    </small>
                                  )}
                                </div>
                                <div className="d-flex">
                                  <p className="mr-2">
                                    Do you already have an account?
                                  </p>
                                  <Link to="/signin">Let's get going</Link>
                                </div>
                                <div className="submit-btn">
                                  <button className="btn">
                                    <span
                                      className="submit-btn-text"
                                      type="submit"
                                    >
                                      <img
                                        src="/img/page-3/submit-form.png"
                                        alt=""
                                        className="img-fluid"
                                      />
                                      <p className="ps-2">Go</p>
                                    </span>
                                  </button>
                                </div>
                              </form>
                            )}
                          </Formik>

                          <div className="welcome-scrappy">
                            <div className="position-relative">
                              <div className="notebook-clibs position-absolute">
                                <img
                                  src="/img/page-3/notebook-clibs.png"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <img
                                src="/img/page-3/welcome-scrappy.png"
                                alt=""
                                className="img-fluid"
                              />
                              <div className="position-absolute form-coco-trees">
                                <img
                                  src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/coco-two-trees.png"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="field-notes">
                            <div className="position-relative">
                              {/* <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/field-notes.png" alt="" className="img-fluid" /> */}
                              <div className="position-absolute robo-2-img">
                                <div className="position-relative">
                                  <img
                                    src="/img/page-3/robo-2.png"
                                    alt=""
                                    className="img-fluid"
                                  />
                                  <div className="football-round">
                                    <img
                                      src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/Football.gif"
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flower-left-signup-robo">
                            <img
                              src="/img/signup-school/robo-4.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>

                          <div className="flower-left-signup-baseball">
                            <img
                              src="/img/signup-school/baseball.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>

                          <div className="flower-left-signup-football">
                            <img
                              src="/img/signup-school/football.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>

                          <div className="flower-left-signup-tennisball">
                            <img
                              src="/img/signup-school/tennis-ball.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="thread-box-two">
                    <img
                      src="/img/page-3/thread-2.png"
                      alt=""
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="waves-ocean">
            <img
              src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/Waves-ocean.gif"
              alt=""
              className="img-fluid"
            />
          </div>

          <div className="flower-left-signup-television">
            <img
              src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/signup-television.png"
              alt=""
              className="img-fluid"
            />
          </div>

          {/* <div className="flower-left-signup">
          <img src="/img/page-1/flower-left.png" alt="" className="img-fluid" />
        </div> */}

          {/* <div className="flower-right-signup">
          <img src="/img/page-1/flower-right.png" alt="" className="img-fluid" />
        </div> */}

          {/* <div className="signup-coco-tree">
          <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/coconut-trees.png" alt="" className="img-fluid" />
        </div> */}
        </div>
      ) : (
        <SendOtp password={password} setSlide={setSlide} />
      )}
    </>
  );
};

export default Signup;
