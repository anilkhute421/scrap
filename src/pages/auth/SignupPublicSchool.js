import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import PlacesAutocomplete, { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete';
import { API } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import Select from 'react-select'

const SignupPublicSchool = () => {

    const [schools, setSchools] = useState([]);
    // const [options, setOptions] = useState([]);
    const [addressData, setAddressData] = useState(
        {
            name: '',
            city: '',
            grade: '',
            state: '',
            postal_code: '',
            schoolEmail: '',
            PrincipleName: '',
            TeacherPhone: '',
            keyPerson: '',
            id: ''
        }
    );

    const [selectedOption, setSelectedOption] = useState(null);

    const navigate = useNavigate();
    const schema = Yup.object().shape({

    });


    useEffect(() => {
        findSchool()
    }, [])


    const findSchool = async () => {
        try {
            const response = await API.graphql({
                query: queries.listSchools,
                // variables: {  
                //     filter: {type: {eq: 'PRIVATE'}, name: {beginsWith: `HYDERABAD`}}
                //    }
            });
            setSchools(response.data.listSchools.items)
        } catch (error) {
            console.log(error);
        }
    }


    // react select location
    const options = []

    for (const element of schools) {
        const newValues = {
            value: element?.name,
            label: element?.name,
            city: element?.city,
            state: element?.state,
            postal_code: element?.postal_code,
            id: element?.id,
        }
        options.push(newValues)
    }

    const handleSubmit = async (values, { resetForm }) => {

        const {city, name, postal_code, id, state} = values
        const inputData = {
            city, name, postal_code, state, type: 'PUBLIC', id
        }

        console.log(values, "values");

        try {
            const response = await API.graphql({ 
                query: mutations.updateSchool, 
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



    // selectedOption 
    useEffect(() => {
        handleLocationChange()
      }, [selectedOption])
    

    const handleLocationChange = () => {
        setAddressData((prev) => ({
          ...prev,
          city: selectedOption?.city,
          state: selectedOption?.state,
          postal_code: selectedOption?.postal_code,
          name: selectedOption?.label,
          id: selectedOption?.id,
        }))
      }




      console.log(selectedOption, "selectedOption");

    return (
        <>
            <div className="school-signup-bg">
                <div className="container pt-5">
                    <Formik enableReinitialize={true} initialValues={addressData} validationSchema={schema} onSubmit={handleSubmit}>
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
                                        <div className="position-absolute form-center">
                                            <p><b>Please fill in the information regarding your school</b></p>
                                        </div>
                                        <div className="position-absolute form-center-box">

                                            <div className="sform-one mb-5 mt-4">
                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-1">Find Your School <span className="text-danger">*</span></p>
                                                    <Link className="btn" to="/add-school">+ Add Your School</Link>
                                                </div>
                                                <Select 
                                                options={options} 
                                                defaultValue={options[0]} 
                                                onChange={setSelectedOption} 
                                                required 
                                                />
                                                {/* <input type="name" className="form-control shadow-none form-bg-none" id="schoolName" name="schoolName" placeholder="Your Your School" value={values?.schoolName} onChange={handleChange}  /> */}
                                            </div>
                                            <div className="sform-one mb-5 mt-4">
                                                <p className="mb-1">In which area is your school?  <span className="text-danger">*</span></p>
                                                <input type="name" required className="form-control shadow-none form-bg-none" id="city" name="city" placeholder="Your city"
                                                    value={values?.city} onChange={handleChange}
                                                />
                                            </div>
                                            <div className="sform-one mb-5 mt-4">
                                                <p className="mb-1">State  <span className="text-danger">*</span></p>
                                                <input type="name" required className="form-control shadow-none form-bg-none" id="state" name="state" placeholder="Your State"
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
                                                <p className="mb-1">Do you know the pincode by chance? <span className="text-danger">*</span></p>
                                                <input type="number" className="form-control shadow-none form-bg-none" id="postal_code" name="postal_code" required placeholder="pincode"
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
                                                <input type="email" className="form-control shadow-none form-bg-none" id="schoolEmail" name='schoolEmail' placeholder="Your sechool Email"
                                                    value={values?.schoolEmail} onChange={handleChange}
                                                />
                                            </div>

                                            <div className="sform-one mb-5 mt-4">
                                                <p className="mb-1">Name of Principle, Teacher at my school?  <span className="text-danger">*</span></p>
                                                <input type="name" className="form-control shadow-none form-bg-none" id="PrincipleName" name="PrincipleName" placeholder="Enter name of your teacher"
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

export default SignupPublicSchool