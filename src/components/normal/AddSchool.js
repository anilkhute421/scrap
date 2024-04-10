import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import AddYourSchoolSearch from './AddYourSchoolSearch';
import GoogleMapReact from 'google-map-react';
import { API } from "aws-amplify";
import * as mutations from '../../graphql/mutations';


const MapApiKey = "AIzaSyDduoHczBsWOnj7XoOXezqUaedJVlgO53Q"

const AddSchool = () => {

  const { user } = useSelector((state) => state?.user)

  const [addressResult, setAddressResult] = useState({latitude: '12.7138086', longtitude: '77.8687903'});



  // console.log(addressResult, "addressResult");

  const [addressData, setAddressData] = useState({
    name: '',
    city: '',
    state: '',
    grade: '',
    postal_code: '',
    schoolEmail: '',
    PrincipleName: '',
    TeacherPhone: '',
    keyPerson: ''
  });


  const navigate = useNavigate();

  const schema = Yup.object().shape({

  });

  const handleLocationChange = () => {
    setAddressData((prev) => ({
      ...prev,
      name: addressResult?.name,
      postal_code: addressResult?.postal_code,
      state: addressResult?.state,
      city: addressResult?.city,
    }))
  }

  useEffect(() => {
    handleLocationChange()
  }, [addressResult])

  const handleFormData = async (values, { resetForm }) => {
    const {city, state, postal_code, name} = values
    const inputData = {
      city, state, postal_code, name
    }
    try {
      const response = await API.graphql({ 
        query: mutations.createSchool, 
        variables: { input: inputData }
      });
      if(response?.data){
        navigate('/thank-you')
      }
      resetForm({ values: '' })
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }


  console.log(addressResult, "addressResult addressResult");

  return (
    <>
      <div className="school-signup-bg">
        <div className="container pt-5">

          <Formik enableReinitialize={true} initialValues={addressData} validationSchema={schema} onSubmit={handleFormData}>
            {({ values, errors, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
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
                    <button type='submit'> <img src="/img/signup-school/right-arrow.png" alt="" className="img-fluid" /> </button>
                  </div>
                </div>
                {/* top btns end */}

                <div className="d-flex justify-content-center">
                  <div className="position-relative">
                    <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/bg-paper.png" alt="" className="img-fluid bg-paper-top" />

                    <div className="position-absolute form-center-map">
                      <iframe width="600" height="150" frameborder="0"  className="w-100 rounded"
                       src={`https://www.google.com/maps/embed/v1/place?q=${addressResult.latitude},${addressResult.longtitude}&key=${MapApiKey}`}></iframe>
                    </div>

                    <div className="position-absolute form-center-box">
                      <div className="sform-one mb-5 mt-5">
                        <p className="mb-1">What is the full name of your school? <span className="text-danger">*</span></p>
                        <AddYourSchoolSearch setAddressResult={setAddressResult} />
                      </div>

                      <div className="sform-one mb-5 mt-4">
                        <p className="mb-1">In which area is your school?  <span className="text-danger">*</span></p>
                        <input type="name" className="form-control shadow-none form-bg-none" id="city" name="city" placeholder="Enter School Area"
                          value={values?.city} onChange={handleChange}
                        />
                      </div>

                      <div className="sform-one mb-5 mt-4">
                        <p className="mb-1"> which State? <span className="text-danger">*</span></p>
                        <input type="name" className="form-control shadow-none form-bg-none" id="state" name="state" placeholder="Enter state"
                          value={values?.state} onChange={handleChange}
                        />
                      </div>

                      <div className="sform-one mb-5">
                        <p className="mb-1"> What is the grade in your school  <span className="text-danger">*</span></p>
                        <Field as="select" className="form-select form-bg-none shadow-none" name="grade" aria-label="Default select example"
                            value={values?.grade} onChange={handleChange}
                        >
                            <option defaultValue>Open this select menu</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </Field >
                    </div>

                      <div className="sform-one mb-5 mt-4">
                        <p className="mb-1">Do you know the postal code by chance? <span className="text-danger">*</span></p>
                        <input type="number" className="form-control shadow-none form-bg-none" id="postal_code" name="postal_code" placeholder="postal code"
                          value={values?.postal_code} onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>


                <div className="d-flex justify-content-center">
                  <div className="position-relative">
                    <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/bg-paper.png" alt="" className="img-fluid bg-paper-bottom" />
                    <div className="position-absolute form-center">
                      <p><b>Please fill in the form regarding your school</b></p>
                    </div>
                    <div className="position-absolute form-center-box">

                      <div className="sform-one mb-5 mt-4">
                        <p className="mb-1">School Email <span className="text-danger">*</span></p>
                        <input type="email" className="form-control shadow-none form-bg-none" id="schoolEmail" name='schoolEmail' placeholder="Enter Email"
                          value={values?.schoolEmail} onChange={handleChange}
                        />
                      </div>

                      <div className="sform-one mb-5 mt-4">
                        <p className="mb-1">Name of Principle, Teacher at my school?  <span className="text-danger">*</span></p>
                        <input type="name" className="form-control shadow-none form-bg-none" id="PrincipleName" name="PrincipleName" placeholder="Enter name of the teacher"
                          value={values?.PrincipleName} onChange={handleChange}
                        />
                      </div>

                      <div className="sform-one mb-5 mt-4">
                        <p className="mb-1"> Principle or Teachers phone Number <span className="text-danger">*</span></p>
                        <input type="tel" className="form-control shadow-none form-bg-none" id="TeacherPhone" name="TeacherPhone" placeholder="Enter Teacher Phonenumber"
                          value={values?.TeacherPhone} onChange={handleChange}
                        />
                      </div>

                      <div className="sform-one mb-5 mt-4">
                        <p className="mb-1">Enter any other key person who could help<span className="text-danger">*</span></p>
                        <input type="name" className="form-control shadow-none form-bg-none" id="keyPerson" name="keyPerson" placeholder="Enter any other key person who could help you ok"
                          value={values?.keyPerson} onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </Formik>

        </div>
      </div>
    </>
  )
}


export default AddSchool