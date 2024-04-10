import {useState, useRef} from 'react'
import FormControl from '../../components/FormControl'
import {NavFooter} from '../../components/Navigation'
import { useNavigate } from 'react-router-dom'
import { API, graphqlOperation} from 'aws-amplify'
import {updateChallengeActivity} from '../../graphql/mutations'

import {Formik} from 'formik';
import * as Yup from 'yup';


const SignupSchema = Yup.object().shape({
    length: Yup.string()
      .required('required'),
    width: Yup.string()
      .required('required'),
    height: Yup.string()
      .required('required'),
    shelves: Yup.string()
      .required('required'),
    pots: Yup.string()
      .required('required')
  });
  

const Skyfarm = ({formData,setFormData, onNext, onPrev, challengeID}) => {

    const submitRef = useRef(null)


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
    <div className='skyFarmCover'> 
        <img src="https://scrappy-afe2cd64144028-staging.s3.ap-south-1.amazonaws.com/public/public/skyfarm.webp" alt="" className='bannerImage'></img>
            <Formik
                initialValues={formData}
                validationSchema={SignupSchema}
                onSubmit={onSubmit}
                >
                {({handleChange, handleSubmit, errors, touched, values }) => (
                <form onSubmit={handleSubmit}>
                <div className='myContent'>
                    <h5>Our farm is this big</h5>
                    <FormControl type="number" placeholder={'Enter length'} label="Length" name="length" value={values.length} onChange={handleChange} />
                    {errors.length && touched.length ? (<div className='required'>{errors.length}</div>) : null}
                    <FormControl type="number" placeholder={'Enter width'} label="Width" name="width" value={values.width} onChange={handleChange} />
                    {errors.width && touched.width ? (<div className='required'>{errors.width}</div>) : null}
                    <FormControl type="number" placeholder={'Enter height'} label="Height" name="height" value={values.height} onChange={handleChange} />
                    {errors.height && touched.height ? (<div className='required'>{errors.height}</div>) : null}
                    <div className='mb-3 mt-2'>
                        <h6>Our farm has this many levels, shelves</h6>
                        <div className='d-flex'>
                            <div className='me-5'>
                                <input  type="radio" name="shelves" id="1" className='me-2' value={1} onChange={handleChange} checked={Number(values.shelves) === 1} />
                                <label for="1">1</label>
                            </div>
                            <div className='me-5'>
                                <input  type="radio" name="shelves" id="2" className='me-2' value={2} onChange={handleChange}  checked={Number(values.shelves) === 2} />
                                <label  for="2">2</label>
                            </div>
                            <div className='me-5'>
                                <input  type="radio" name="shelves" id="3" className='me-2' value={3} onChange={handleChange}  checked={Number(values.shelves) === 3} />
                                <label  for="3">3</label>
                            </div>
                            <div className='me-5'>
                                <input  type="radio" name="shelves" id="more" className='me-2' value={4} onChange={handleChange}  checked={Number(values.shelves) === 4} />
                                <label  for="more">more</label>
                            </div>
                        </div>
                        {errors.shelves && touched.shelves ? (<div className='required'>{errors.shelves}</div>) : null}
                    </div>
                    <div>
                        <h6>Our farm has this many planters, pots</h6>
                        <div className='d-flex'>
                            <div className='me-5'>
                                <input  type="radio" name="pots" id="1" className='me-2' value={1} onChange={handleChange}  checked={Number(values.pots) === 1} />
                                <label for="1">1</label>
                            </div>
                            <div className='me-5'>
                                <input  type="radio" name="pots" id="2" className='me-2' value={2} onChange={handleChange}  checked={Number(values.pots) === 2} />
                                <label  for="2">2</label>
                            </div>
                            <div className='me-5'>
                                <input  type="radio" name="pots" id="3" className='me-2' value={3} onChange={handleChange}  checked={Number(values.pots) === 3} />
                                <label  for="3">3</label>
                            </div>
                            <div className='me-5'>
                                <input  type="radio" name="pots" id="more" className='me-2' value={4} onChange={handleChange}  checked={Number(values.pots) === 4} />
                                <label  for="more">more</label>
                            </div>
                        </div>
                        {errors.pots && touched.pots ? (<div className='required'>{errors.pots}</div>) : null}
                    </div>
                </div>
                <button ref={submitRef} type={'submit'} style={{display: 'none'}}></button>
                </form>
                )}
            </Formik>
        <NavFooter prevClick={onPrev} nextClick={nextPage} />
    </div>
  )
}

export default Skyfarm
