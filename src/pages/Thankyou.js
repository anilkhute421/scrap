import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

const ThankYou = () => {

  const initialData = { fullName: '', schoolArea: '', Ward: '', grade: '', pincode: '', schoolEmail: '', PrincipleName: '', TeacherPhone: '', keyPerson: '' };
  const navigate = useNavigate();
  const schema = Yup.object().shape({
  });

  return (
    <>
      <div className="school-signup-bg-new">
        <div className="container pt-5">

          {/* top btns start */}
          <div className="signup-school-top-box d-flex justify-content-between">

            <div className="signup-school-top-box-one">
              <button onClick={() => navigate(-1)}>
                <img src="/img/signup-school/left-arrow.png" alt="" className="img-fluid" />
              </button>
            </div>


            <div className="signup-school-top-box-one">
              <div className="position-relative">
                <img src="/img/signup-school/bg-white.png" alt="" className="img-fluid" />
                <div className="position-absolute scrappy-profile">
                  <p>Building Your Scrappy Profile!</p>
                </div>
              </div>
            </div>

            <div className="signup-school-top-box-one">
              <button type='submit'> <img src="/img/signup-school/right-arrow.png" alt="" className="img-fluid" onClick={() => navigate('/profile')} /> </button>
            </div>
          </div>
          {/* top btns end */}

          <div className="d-flex justify-content-center">
            <div className="position-relative">
              <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/bg-paper.png" alt="" className="img-fluid" />
              <div className="position-absolute form-center-box">
                <p><b>Thank you for signing up your school to be part of the Scrappy Universe!</b></p>
              </div>
              <div className="position-absolute form-center-box form-center-thankyou">

                <p>Scrappy is getting in touch with your school
                  now to see if they accept your scrappy challenge.
                  While we’re checking with them, you are good
                  to go ahead to the next step of completing
                  Scrappy challenges, pitching new challenges
                  and building a Scrappy team.</p>

                <div className="d-flex justify-content-center mt-5">
                  <img src="/img/signup-school/thank-you.png" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default ThankYou