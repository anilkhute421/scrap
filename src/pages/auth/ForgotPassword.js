import React, { useState } from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import "yup-phone";
import { API, Auth } from 'aws-amplify';
import { Link, useNavigate } from 'react-router-dom';
import { getUser } from '../../graphql/queries';
import { addUserToLocalStorage } from '../../utils/localStorage';
import { useDispatch } from 'react-redux';
import { storeUser } from '../../features/user/userSlice';
import Loading from '../../components/Loading';

const ForgotPassword = () => {


    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const initialData = { phone: ''};
  
    const schema = Yup.object().shape({
        phone: Yup.string().required('Phone is required.')
        .matches(phoneRegExp, 'Phone number is not valid')
        .min(6, "too short")
        .max(20, "too long"),
    });
  
  
    const handleSubmit = async (values, {resetForm}) =>{
        console.log(values, "values");
      try {
        setLoading(true)
        const { phone } = values;
        Auth.forgotPassword( `+91${phone}`).then((res) => {
          toast.success('Code sent to your mobile number');
          navigate('/reset-password')
        })
        setLoading(false)
       
      resetForm({values: ''})
      } catch (error) {
        setLoading(false)
        console.log(error);
        toast.error(error.message);
      }
  }

     
  if(loading){
    return <>
    <Loading />
    </>
  }

  return (
    <>
     <div className="signup-bg">
       <div className="bg-ground">
        <div className="ground-box">
        <div className="signup-home-img">
          <div className="home-relative">
        <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/signup-home.png" alt="Signup image" className="img-fluid home-small" />
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
       <div className="form-area form-area-login">
         <div className="form-area-container">
          <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/login-form-table.png" alt="" className="img-fluid" />
           
          <Formik initialValues={initialData} validationSchema={schema} onSubmit={handleSubmit}>
            {({ values, errors, handleChange, handleSubmit }) => (
          <form className='form-paper pt-3 w-75' onSubmit={handleSubmit}>
            <div className="text-center">
          <img src="/img/page-3/Log-in.png" alt="" className="img-fluid mt-5" />
            </div>
          <div className='name-field mt-3 w-75'>
          <label htmlFor="phone" className="form-label mb-0">Mobile Phone Number <span className="text-danger">*</span></label>
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

          <div className='name-field mt-3 w-75'>
        <span>Remember Your Password</span>  <Link to="/home" className='text-decoration-none text-dark mt-4 ms-3'> <b>Login</b> </Link>
           </div>
         
           <div className="submit-btn submit-btn-login">
            <button className="btn" type='submit'>
            <span className="submit-btn-text" >
            <img src="/img/page-3/submit-form.png" alt="" className="img-fluid" />
            <p>Continue</p>
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

export default ForgotPassword