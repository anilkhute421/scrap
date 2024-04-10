import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Formik } from 'formik';
import * as Yup from 'yup';
import "yup-phone";
import { toast } from 'react-toastify';
import { Auth } from 'aws-amplify';
import { useSelector } from 'react-redux';


const SendOtp = () => {

  const navigate = useNavigate()

//   const {reguser} = useSelector((state) => state?.user)

  const initialData = {phone: ''};

  const otpSchema = Yup.object().shape({
    phone: Yup.string().required('Phone is required.')
  });

  const confirmOtp = async (phone) =>{
    let data;
    try {
     data = await Auth.resendSignUp(`+91${phone}`);
     if (data) {
       navigate('/otp')
       toast.success("code send successfuly")
   }
    } catch (error) {
      console.log('form', data)
      console.log('error to send code', error);
      toast.error(error.message)
    }
  }


  const handleSubmit = (values, {resetForm}) =>{
    console.log(values, "values");
    let {phone} = values;
    confirmOtp(phone)
    resetForm({values: ''})
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
            <p className='text-center mt-5'> OTP  </p>
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

        <div className="signup-coco-tree">
          <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/coconut-trees.png" alt="" className="img-fluid" />
        </div>




    </div>
    
    </>
  )
}

export default SendOtp