import React, {useState} from "react";
import { Link, useNavigate } from 'react-router-dom'
import { Formik } from 'formik';
import * as Yup from 'yup';
import "yup-phone";
import { useSelector } from "react-redux";

const SignupPublicSchool = () => {

  const navigate = useNavigate();


  const {user} = useSelector((state) => state?.user)

  const userFullName = user?.firstName + " " + user?.lastName


    const [step, setStep] = useState(1);

    const [values, setValues] = useState({
        first_name: "",
        last_name: "",
        gender: "",
        email: "",
        phone_number: "",
        city: "",
        state: "",
      });


      const nextStep = () => {
        if (step < 4) {
          setStep(step + 1);
        } else if(step === 4) {
            console.log(values);
        }
      };

      const prevStep = () => {
        if (step > 1) {
          setStep(step - 1);
        }
      };


      const handleChange = (name) => (e) => {
        setValues({ ...values, [name]: e.target.value });
      };


      const handleSubmit = (value) =>{
        console.log(value, "value");
      }


      const initialData = { grade: ''};

  

  return (
    <>
    <div className="school-signup-bg">
        <div className="container pt-5">

        <Formik initialValues={initialData}  onSubmit={handleSubmit}>
            {({ values, errors, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
            {/* top btns start */}
            <div className="signup-school-top-box d-flex justify-content-between">


            <div className="signup-school-top-box-one">
             <button  onClick={() => navigate(-1)}>
             <img src="/img/signup-school/left-arrow.png" alt="" className="img-fluid" />
             </button>
           </div>
             

           <div className="signup-school-top-box-one">
            <div className="position-relative">
           <img src="/img/signup-school/bg-white.png" alt="" className="img-fluid" />
           <div className="position-absolute scrappy-profile">
            <h6>Hello {userFullName}</h6>
            <p>Building Your Scrappy Profile!</p>
           </div>
            </div>
           </div>

           <div className="signup-school-top-box-one">
           {step === 4 ? <button className="btn bg-warning text-white px-5-2" type="submit">Submit</button> : <button  onClick={nextStep} >
            <img src="/img/signup-school/right-arrow.png" alt="" className="img-fluid" />
            </button>}
           
           </div>
        </div>
        {/* top btns end */}

           
        {
            {
              1: <SchoolSecond value={values} onChange={handleChange} />,
              2: <SchoolThird />,
              3: <SchoolFourth />,
              4: <SchoolFive />,
            }[step]
          }

           </form>
             )}
             </Formik>

  
        </div>
    </div>
    </>
  )
}





const SchoolSecond = ({value, onChange}) =>{
  console.log(value, "value, onChange");
return (
    <>
   <div className="d-flex justify-content-center">
   <div className="position-relative">
   <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/bg-paper.png" alt="" className="img-fluid" />
   <div className="position-absolute form-center">
    <p><b>Please fill in the information regarding your school</b></p>
   </div>
   <div className="position-absolute form-center-box">
    <div className="sform-one mb-5">
        <p className="mb-1">In what area of Mumbai is your school? <span className="text-danger">*</span></p>
        <select className="form-select form-bg-none shadow-none" aria-label="Default select example" >
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        </select>
    </div>

    <div className="sform-one mb-5 mt-4">
          <div className="d-flex justify-content-between">
          <p className="mb-1">Find Your School <span className="text-danger">*</span></p>
          <button className="btn" onClick={()=> alert("Add Your School")}>+ Add Your School</button>
          </div>
        <input type="name" className="form-control shadow-none form-bg-none" id="findschool" placeholder="Your Your School" />
    </div> 

    <div className="sform-one mb-5 mt-4">
        <p className="mb-1">Grade <span className="text-danger">*</span></p>
        <input 
        type="name" 
        className="form-control shadow-none form-bg-none" 
        id="grade" 
        name="grade"
        placeholder="Your Grade"  
        value={value.grade}
        onChange={onChange}
        />
    </div> 
   
    <div className="sform-one mb-5 mt-4">
        <p className="mb-1">Do you know the pincode by chance? <span className="text-danger">*</span></p>
        <input type="number" className="form-control shadow-none form-bg-none" id="pincode" placeholder="pincode" />
    </div> 

    </div>
   </div>
   </div>
    </>
)    
}


const SchoolThird = () =>{
return (
   <>
    <div className="d-flex justify-content-center">
   <div className="position-relative">
   <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/bg-paper.png" alt="" className="img-fluid" />
   <div className="position-absolute form-center">
    <p><b>Please fill in the information regarding your school</b></p>
   </div>
   <div className="position-absolute form-center-box">

   <div className="sform-one mb-5 mt-4">
        <p className="mb-1">What is the full name of your school? <span className="text-danger">*</span></p>
        <input type="name" className="form-control shadow-none form-bg-none" id="fullname" placeholder="Your fullname" />
    </div>

    <div className="sform-one mb-5">
        <p className="mb-1">In which area is your school? <span className="text-danger">*</span></p>
        <select className="form-select form-bg-none shadow-none" aria-label="Default select example" >
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        </select>
    </div>
 
 
    <div className="sform-one mb-5">
        <p className="mb-1">In which ward? <span className="text-danger">*</span></p>
        <select className="form-select form-bg-none shadow-none" aria-label="Default select example" >
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        </select>
    </div>

    <div className="sform-one mb-5 mt-4">
        <p className="mb-1">Do you know the pincode by chance? <span className="text-danger">*</span></p>
        <input type="number" className="form-control shadow-none form-bg-none" id="pincode" placeholder="pincode" />
    </div> 

    </div>
   </div>
   </div>
   </>
)    
}




const SchoolFourth = () =>{
    return (
       <>
        <div className="d-flex justify-content-center">
       <div className="position-relative">
       <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/bg-paper.png" alt="" className="img-fluid" />
      
       <div className="position-absolute form-center-map">
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.1810203875725!2d-101.5354738166707!3d39.75030651748712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sqa!4v1680010055677!5m2!1sen!2sqa" className="w-100 rounded" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       </div>

       <div className="position-absolute form-center-box">

     
        <div className="sform-one mb-5 mt-5">
            <p className="mb-1">What is the full name of your school? <span className="text-danger">*</span></p>
            <select className="form-select form-bg-none shadow-none" aria-label="Default select example" >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </select>
        </div>
     
     
        <div className="sform-one mb-5">
            <p className="mb-1">In which area is your school? <span className="text-danger">*</span></p>
            <select className="form-select form-bg-none shadow-none" aria-label="Default select example" >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </select>
        </div>
        
        
        <div className="sform-one mb-5">
            <p className="mb-1">In which ward? <span className="text-danger">*</span></p>
            <select className="form-select form-bg-none shadow-none" aria-label="Default select example" >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </select>
        </div>
    
            <div className="sform-one mb-5 mt-4">
            <p className="mb-1">Do you know the pincode by chance? <span className="text-danger">*</span></p>
            <input type="number" className="form-control shadow-none form-bg-none" id="pincode" placeholder="pincode" />
        </div> 
    
        </div>
       </div>
       </div>
       </>
    )    
    }





    
const SchoolFive = () =>{
    return (
       <>
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
       </>
    )    
    }



export default SignupPublicSchool