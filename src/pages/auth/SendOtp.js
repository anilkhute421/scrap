import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Formik } from 'formik';
import * as Yup from 'yup';
import "yup-phone";
import { toast } from 'react-toastify';
import { Auth } from 'aws-amplify';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { sendOtp } from '../../features/user/userSlice';
import { addUserToLocalStorage } from '../../utils/localStorage';


const SendOtp = (pass, setSlide) => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const { reguser } = useSelector((state) => state?.user)
  const initialData = { firstName:'' ,lastName:'' , phone: '', otp: '' };

  const setNewData = () => {
    initialData.phone = reguser?.phone
    initialData.firstName = reguser?.firstName
    initialData.lastName = reguser?.lastName
  }

  useEffect(() => {
    setNewData();
  }, [])

  const otpSchema = Yup.object().shape({
    phone: Yup.string().required('Phone is required.'),
    otp: Yup.string()
    .required('OTP is required.')
    .test('is-number', 'OTP must be a number', (value) => {
      // Check if the value is a valid number (you can customize this logic)
      return /^\d+$/.test(value);
    }),
  });

  const { loading,  error } = useSelector((state) => state.user);


  const handleSubmit = (values, { resetForm }) => {
    let {firstName,lastName, phone, otp } = values;
    const data = {
      first_name: firstName,
      last_name: lastName,
      phone: `+91${phone}`,
      password: pass.password,
      password_confirmation: pass.password,
      otp:otp,
    };

    dispatch(sendOtp(data))
    .then((apiResponse) => {
      // Access the API response here
      if (apiResponse?.payload?.data?.id) {
        addUserToLocalStorage(apiResponse?.payload);
        navigate("/signup-school");
        toast.success(apiResponse?.payload?.message);
        // setSlide(true);    // imp in testing time
         resetForm({ values: '' })
      } else if (apiResponse?.payload?.status === 400) {
        // If the first condition is false and this condition is true, execute this block
        const errorMessage = apiResponse?.payload?.source?.otp
        ? apiResponse?.payload?.source?.otp[0]
        : apiResponse?.payload?.source?.message;
        toast.error(errorMessage);
      }
    })
    .catch((error) => {
      toast.error(error?.message || "An error occurred while logging in.");
    });
  }


  // resend confirmation code 
  return (
    <>
      <div className="signup-bg">
        <div className="bg-ground">
          <div className="ground-box">
            <div className="signup-home-img">
              <div className="home-relative">
                <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/signup-home.png" alt="" className="img-fluid home-small" />
                <div className="thread-box-one">
                  <div className="position-relative">
                    <img src="/img/page-3/thread-1.png" alt="" className="img-fluid w-100" />
                    <div className="robo-moving">
                      <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/Robo.gif" alt="" className="img-fluid w-100" />
                    </div>

                    <div className="signup-dress-code position-absolute">
                    <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/dree-code.png" alt="" className="img-fluid w-100" />
                    </div>

                    <div className="leaf-green position-absolute">
                    <img src="/img/page-3/leaf-green.png" alt="" className="img-fluid w-100" />
                    </div>
                
                    <div className="signup-right-tree">
                      <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/Tree.gif" alt="" className="img-fluid w-100" />
                    </div>

                    <div className="shirt-anime-three">
                      <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/Blue-Towel.gif" alt="" className="img-fluid" />
                    </div>
                    <div className="shirt-anime-two">
                      <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/White-Towel.gif" alt="" className="img-fluid" />
                    </div>
                    <div className="shirt-anime">
                      <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/Pink-T-Shirt.gif" alt="" className="img-fluid" />
                    </div>
                    <div className="shirt-anime-one">
                      <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/White-T-Shirt.gif" alt="" className="img-fluid" />
                    </div>



                    <div className="form-area">
                      <div className="form-area-container">
                        <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/form-area.png" alt="" className="img-fluid" />


                        <Formik initialValues={initialData} validationSchema={otpSchema} onSubmit={handleSubmit}>
                          {({ values, errors, handleChange, handleSubmit }) => (
                            <form className='form-paper pt-3 w-75' onSubmit={handleSubmit}>
                              <p className='text-center mt-5'> Enter OTP sent to {reguser?.phone} </p>


                              <div className="d-flex justify-content-center mb-2">
                                <p className='me-4'>Didn't receive an OTP?</p>
                                <Link type='btn' to="/resend-otp">Resend Otp</Link>
                              </div>

                              <div className='name-field mt-3'>
                                <label htmlFor="phone" className="form-label mb-0">Mobile Phone Number</label>
                                <input
                                  type="tel"
                                  placeholder='Your Phone number'
                                  className="form-control w-100 custom-form shadow-none pb-0 pt-0"
                                  id="phone"
                                  name="phone"
                                  aria-describedby="phoneHelp"
                                  value={values.phone} onChange={handleChange}
                                />
                                {errors.phone && <small className='text-danger mt-2 ms-1 '>{errors.phone}</small>}
                              </div>

                              <div className="otp-box d-flex justify-content-between">
                                <div className="otp-input-fields w-100">
                                  <img src="/img/page-3/otp.png" alt="" className="img-fluid otp-img w-100" style={{ height: '58px' }} />
                                  <input
                                    type="text"
                                    className="otp__digit"
                                    id="otp"
                                    name="otp"
                                    value={values.otp} onChange={handleChange}
                                    required
                                  />
                                {errors.otp && <small className='text-danger mt-2 ms-1 '>{errors.otp}</small>}

                                </div>

                              </div>

                              <div className="submit-btn">
                                <button className="btn">
                                  <span className="submit-btn-text" type='submit'>
                                    <img src="/img/page-3/submit-form.png" alt="" className="img-fluid" />
                                    <p>submit</p>
                                  </span>
                                </button>
                              </div>
                            </form>
                          )}
                        </Formik>

                        <div className="welcome-scrappy">
                         <div className="position-relative">
                          <div className="notebook-clibs position-absolute">
                          <img src="/img/page-3/notebook-clibs.png" alt="" className="img-fluid" />
                          </div>
                         <img src="/img/page-3/welcome-scrappy.png" alt="" className="img-fluid" />
                         <div className="position-absolute form-coco-trees">
                         <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/coco-two-trees.png" alt="" className="img-fluid" />
                         </div>
                         </div>
                        </div>

                        <div className="field-notes">
                        <div className="position-relative">
                        <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/field-notes.png" alt="" className="img-fluid" />
                        <div className="position-absolute robo-2-img">
                          <div className="position-relative">
                        <img src="/img/page-3/robo-2.png" alt="" className="img-fluid" />
                        <div className="football-round">
                        <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/Football.gif" alt="" className="img-fluid" />
                      </div>
                          </div>
                        </div>
                        </div>
                        </div>

                        <div className="flower-left-signup-robo">
                        <img src="/img/signup-school/robo-4.png" alt="" className="img-fluid" />
                      </div>

                      <div className="flower-left-signup-baseball">
                        <img src="/img/signup-school/baseball.png" alt="" className="img-fluid" />
                      </div>

                      <div className="flower-left-signup-football">
                        <img src="/img/signup-school/football.png" alt="" className="img-fluid" />
                      </div>

                      <div className="flower-left-signup-tennisball">
                        <img src="/img/signup-school/tennis-ball.png" alt="" className="img-fluid" />
                      </div>



                      </div>

                    </div>
                  </div>
                </div>
                <div className="thread-box-two">
                  <img src="/img/page-3/thread-2.png" alt="" className="img-fluid w-100" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="waves-ocean">
          <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/Waves-ocean.gif" alt="" className="img-fluid" />
        </div>
       
       

        <div className="flower-left-signup-television">
          <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/signup-television.png" alt="" className="img-fluid" />
        </div>

        {/* <div className="flower-left-signup">
          <img src="/img/page-1/flower-left.png" alt="" className="img-fluid" />
        </div>

        <div className="flower-right-signup">
          <img src="/img/page-1/flower-right.png" alt="" className="img-fluid" />
        </div> */}

        <div className="football-round">
          <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/Football.gif" alt="" className="img-fluid" />
        </div>

        {/* <div className="signup-coco-tree">
          <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/coconut-trees.png" alt="" className="img-fluid" />
        </div> */}
      </div>

    </>
  )
}

export default SendOtp