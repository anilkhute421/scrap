import {React, useRef} from 'react'
import {NavFooter} from '../../components/Navigation'
import FormControl from '../../components/FormControl'
import * as Yup from 'yup';
import {Formik} from 'formik';
import { API, graphqlOperation} from 'aws-amplify'
import {updateChallengeActivity} from '../../graphql/mutations'



const SignupSchema = Yup.object().shape({
    desc1: Yup.string()
      .required('required').matches(/^\s*\S[\s\S]*$/, '* This field cannot contain only blankspaces'),
    desc2: Yup.string()
        .required('required').matches(/^\s*\S[\s\S]*$/, '* This field cannot contain only blankspaces'),
    desc3: Yup.string()
        .required('required').matches(/^\s*\S[\s\S]*$/, '* This field cannot contain only blankspaces'),
    desc4: Yup.string()
    .required('required').matches(/^\s*\S[\s\S]*$/, '* This field cannot contain only blankspaces')
  });

    const Construction = ({formData, onNext, onPrev , setFormData, challengeID}) => {
        const submitRef = useRef()

    const onSubmit = async (data) => {
        if(challengeID){
            const payload = {
                id: challengeID,
                design: JSON.stringify(data)
            }
                try{
                    await API.graphql(graphqlOperation(updateChallengeActivity, { input: payload }));
                    setFormData(data)
                    onNext()
                } catch (err) {
                    console.log('Error creating post: ', err);
                }
        }
    }

    const nextPage = () => {
        submitRef.current.click()
      }

  return (
    <>
    <div className='skyFarmConstructionCover'>
        <div className="card">
            <div className="card-body">
            <Formik
                initialValues={formData}
                validationSchema={SignupSchema}
                onSubmit={onSubmit}
                >
                {({handleChange, handleSubmit, errors, touched, values }) => (
                <form onSubmit={handleSubmit}>
                <h6>The structure of our farm is made of these sustainable materials</h6>
                <br></br>
                <h6>Sky Farm Construction</h6>
                <div>
                    <FormControl type="textarea" placeholder={''} label="Sustainable Material" name={'desc1'} value={values.desc1} onChange={handleChange} />
                    {errors.desc1 && touched.desc1 ? (<div className='required'>{errors.desc1}</div>) : null}
                    <div className='d-flex justify-content-end' >
                    </div>
                </div>
                <div>
                    <h6>Pot, planter, hanging basket</h6>
                    <FormControl type="textarea" placeholder={''} label="Sustainable Material"  name={'desc2'} value={values.desc2} onChange={handleChange} />
                    {errors.desc2 && touched.desc2 ? (<div className='required'>{errors.desc2}</div>) : null}
                    <div className='d-flex justify-content-end'>
                    </div>
                </div>
                <div>
                    <h6>The structure of our farm is made of these not sustainable but upcycled materials</h6>
                    <FormControl type="textarea" placeholder={''} label="Sky Farm Construction Upcycled Material AND what was it before you upcycled it (bottle, pipe, bicycle) + how many have you made/used/how much"  name={'desc3'} value={values.desc3} onChange={handleChange} />
                    {errors.desc3 && touched.desc3 ? (<div className='required'>{errors.desc3}</div>) : null}
                    <div className='d-flex justify-content-end'>
                    </div>
                </div>
                <div>
                    <h6>Pot, Planter, hanging basket</h6>
                    <FormControl type="textarea" placeholder={''} label="+ Upcycled Material AND what was it before you upcycled it how many have you made/used/how much"  name={'desc4'} value={values.desc4} onChange={handleChange} />
                    {errors.desc4 && touched.desc4 ? (<div className='required'>{errors.desc4}</div>) : null}
                    <div className='d-flex justify-content-end'>
                    </div>
                </div>
                <button ref={submitRef} type={'submit'} style={{display: 'none'}}></button>
                </form>
                )}
                </Formik>
            </div>
        </div>
    </div>
    <NavFooter prevClick={onPrev} nextClick={nextPage} />
    </>
  )
}

export default Construction
