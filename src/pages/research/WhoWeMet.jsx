import {React, useState, useRef} from 'react'
import Header from '../../layout/Header'
import {NavFooter} from '../../components/Navigation'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import FormControl from '../../components/FormControl'
import {Formik} from 'formik';
import * as Yup from 'yup';
import { API, graphqlOperation, Storage} from 'aws-amplify'
import {createChallengeActivity, updateChallengeActivity} from '../../graphql/mutations'
import { useParams } from 'react-router-dom'
import Spinner from '../../components/Spinner';
import Compressor from 'compressorjs';



const SignupSchema = Yup.object().shape({
    image1: Yup.string()
      .required('Please upload image'),
    image2: Yup.string()
      .required('Please upload image'),
    image3: Yup.string()
      .required('Please upload image'),
    image4: Yup.string()
      .required('Please upload image'),
    name: Yup.string()
      .required('Please enter name'),
    age: Yup.string()
    .required('Please enter your age'),
    whatTheyDo: Yup.string()
    .required('required'),
    skill: Yup.string()
    .required('required'),
    desc1: Yup.string()
    .required('required').matches(/^\s*\S[\s\S]*$/, '* This field cannot contain only blankspaces'),
    desc2: Yup.string()
    .required('required').matches(/^\s*\S[\s\S]*$/, '* This field cannot contain only blankspaces'),
  });


const WhoWeMet = ({onPrev, formData, setFormData,  challenge_id, group_id, student_id, activityId}) => {
    const navigate = useNavigate()
    const image1Ref = useRef(null)
    const image2Ref = useRef(null)
    const image3Ref = useRef(null)
    const image4Ref = useRef(null)
    const submitRef = useRef(null)
    const {paramChallengeId} = useParams()
    const [spinner, setSpinner] = useState(false)
    const [spinner2, setSpinner2] = useState(false)
    const [spinner3, setSpinner3] = useState(false)
    const [spinner4, setSpinner4] = useState(false)



    const nextClick = () => {
      submitRef.current.click()
    }

    const onSubmit = async (data) => {
      setFormData(data)
      const id = activityId || paramChallengeId
        const payload = {
          id: id,
          research: JSON.stringify(data)
        }
        if(id){
          try {
            await API.graphql(graphqlOperation(updateChallengeActivity, {input: payload }));
            navigate(`/design/${id}`)
          } catch (error) {
            console.log('Error creating post: ', error);
          }
        }
    }


    const uploadImage = async (image, callback, name) => {
      const stored = await Storage.put(`scrappy-${Math.random().toString(36).substring(2, 15)}.${image.name.split('.')[1]}`, image, { contentType: image.type }); 
      const url = await Storage.get(stored.key, { level: 'public' }) 
      let ImageUrl=url.split('?')[0]
      if(ImageUrl) {
        const event  = { target: { name: name, value: ImageUrl } }
        callback(event)  
        setSpinner(false)
        setSpinner2(false)
        setSpinner3(false)
        setSpinner4(false)
      }
    }
  
    const handleUploadImage = async (e, callback, name) =>{ 
      if(name === 'image1'){
        setSpinner(true)
      }else if(name === 'image2'){
        setSpinner2(true)
      }else if(name === 'image3'){
        setSpinner3(true)
      }else if(name === 'image4'){
        setSpinner4(true)
      }
      const file = e.target.files[0] 
      new Compressor(file, {
        quality: 0.4,
        success(result) {
          uploadImage(result, callback, name)
        },
        error(err) {
          console.log(err.message);
          setSpinner(false)
          setSpinner2(false)
          setSpinner3(false)
          setSpinner4(false)
        },
      });
    }

    // const handleUploadImage = async (e, callback, name) =>{ 
      // if(name === 'image1'){
      //   setSpinner(true)
      // }else if(name === 'image2'){
      //   setSpinner2(true)
      // }else if(name === 'image3'){
      //   setSpinner3(true)
      // }else if(name === 'image4'){
      //   setSpinner4(true)
      // }
    //     const file = e.target.files[0] 
    //     if (!file.type.startsWith('image/')) {
    //       alert('Please select an image file');
    //     }else{
    //     const stored = await Storage.put(`scrappy-${Math.random().toString(36).substring(2, 15)}.${file.name.split('.')[1]}`, file, { contentType: file.type }); 
    //     const url = await Storage.get(stored.key, { level: 'public' }) 
    //     let ImageUrl=url.split('?')[0]
    //     if(ImageUrl) {
    //       const event  = { target: { name: name || '', value: ImageUrl } }
    //       callback(event)
    //     }
    //   }
      // setSpinner(false)
      // setSpinner2(false)
      // setSpinner3(false)
      // setSpinner4(false)
    //   }

    const handleClick = (index) => {
        if(index === 1){
            image1Ref.current.click();
        }else if(index === 2){
            image2Ref.current.click();
        }else if(index === 3){
            image3Ref.current.click();
        }else if(index === 4){
            image4Ref.current.click();
        }
      };

  return (
    <>
        <Header title={'Who we met'}/>
        <Formik
              initialValues={formData}
              validationSchema={SignupSchema}
              onSubmit={onSubmit}
            >
              {({handleChange, handleSubmit, errors, touched, values }) => (
              <form onSubmit={handleSubmit}>
                    <div className='whoWeMetCover'>
                        <div className="flowers">
                            <div className='MyContainer'>
                                        <div className='imagePreview' >
                                        <img src="https://scrappy-afe2cd64144028-staging.s3.ap-south-1.amazonaws.com/public/public/upload.png"  alt=""></img>
                                        {errors.image1 && touched.image1 ? (<div className='required text-center'>{errors.image1}</div>) : null}
                                        <div className={spinner && 'preview'}>
                                          <Spinner show={spinner}  >
                                            {values?.image1 && <img src={values?.image1} alt="" className='preview' />}
                                          </Spinner>
                                        </div>
                                    <input type="file" style={{display: 'none'}} id={1}  accept="image/png, image/gif, image/jpeg" onChange={(e) => {handleUploadImage(e, handleChange, 'image1')}}  name='image1' ref={image1Ref} />
                                    <div>
                                    <Button title={'Upload'} btnName={'purpleBtn'} onClick={(e) => handleClick(1)} type="button" />
                                    </div>
                                </div>
                                <div className='form'>
                                    <img src="https://scrappy-afe2cd64144028-staging.s3.ap-south-1.amazonaws.com/public/public/book.webp"  alt="Book" className='bookImage'></img>
                                    <div className='myform'>
                                        <FormControl type={"text"} placeholder="Enter Name" name="name" value={values.name} onChange={handleChange} label={'Name'}></FormControl>
                                        {errors.name && touched.name ? (<div className='required'>{errors.name}</div>) : null}
                                        <FormControl type={"number"} placeholder="Enter Age" name="age" value={values.age} onChange={handleChange} label={'Age'}></FormControl>
                                        {errors.age && touched.age ? (<div className='required'>{errors.age}</div>) : null}
                                        <FormControl type={"text"} placeholder="Type here" name="whatTheyDo" value={values.whatTheyDo} onChange={handleChange} label={'What they do?'}></FormControl>
                                        {errors.whatTheyDo && touched.whatTheyDo ? (<div className='required'>{errors.whatTheyDo}</div>) : null}
                                        <FormControl type={"text"} placeholder="Type here" name="skill" value={values.skill} onChange={handleChange} label={'Scrappy Skill'}></FormControl>
                                        {errors.skill && touched.skill ? (<div className='required'>{errors.skill}</div>) : null}
                                        <FormControl type={"textarea"} placeholder="" name="desc1" value={values.desc1} onChange={handleChange} label={'Why they’d like to have an urban vertical urban farm here to play the game'}></FormControl>
                                        {errors.desc1 && touched.desc1 ? (<div className='required'>{errors.desc1}</div>) : null}
                                        <div className='vegetables d-flex justify-content-around'>
                                            <img src="https://scrappy-afe2cd64144028-staging.s3.ap-south-1.amazonaws.com/public/public/carrot.png"  alt="carrot"></img>
                                            <img src="https://scrappy-afe2cd64144028-staging.s3.ap-south-1.amazonaws.com/public/public/tomato.png"  alt="tomato"></img>
                                            <img src="https://scrappy-afe2cd64144028-staging.s3.ap-south-1.amazonaws.com/public/public/Spinach.png"  alt="spinach"></img>
                                        </div>
                                        <FormControl type={"textarea"} placeholder="" name="desc2" value={values.desc2} onChange={handleChange} label={'Three leafy greens, vegetables, fruit they’d like us to grow & why'}></FormControl>
                                        {errors.desc2 && touched.desc2 ? (<div className='required'>{errors.desc2}</div>) : null}
                                    </div>
                                    <div className='myform2'>
                                        <h6 className='sub-heading'>Upload the drawings of three things they’d like to eat, that you’ll grow</h6>
                                        <div className='uploadFiles mt-4'>
                                            <h6 className='text-center text-black'>1</h6>
                                            <div className='uploadViewDesign'>
                                                <img src="https://scrappy-afe2cd64144028-staging.s3.ap-south-1.amazonaws.com/public/public/paperFlip.png"  alt="Paper"></img>
                                                {errors.image2 && touched.image2 ? (<div className='required text-center'>{errors.image2}</div>) : null}
                                                <div className={spinner2 && 'preview'}>
                                                  <Spinner show={spinner2}  >
                                                  {values.image2 && <img src={values.image2} alt="" className='preview' />}
                                                  </Spinner>
                                                </div>
                                                <input type="file" style={{display: 'none'}} id={2}  accept="image/png, image/gif, image/jpeg" onChange={(e) => {handleUploadImage(e, handleChange, 'image2')}} name="image2" ref={image2Ref} />
                                                <div className='formBtn'>
                                                 <Button btnName={'purpleBtn'} title={'Upload'} onClick={(e) => handleClick(2)} type="button" />
                                                </div>
                                            </div>
                                            <h6 className='text-center text-black'>2</h6>
                                            <div className='uploadViewDesign'>
                                                <img src="https://scrappy-afe2cd64144028-staging.s3.ap-south-1.amazonaws.com/public/public/paperFlip.png"  alt="Paper"></img>
                                                {errors.image3 && touched.image3 ? (<div className='required text-center'>{errors.image3}</div>) : null}
                                                <div className={spinner3 && 'preview'}>
                                                  <Spinner show={spinner3}  >
                                                    {values.image3 && <img src={values.image3} alt="" className='preview' />}
                                                  </Spinner>
                                                </div>
                                                <input type="file" style={{display: 'none'}} id={3}  accept="image/png, image/gif, image/jpeg" onChange={(e) => {handleUploadImage(e, handleChange, 'image3')}}  name="image3" ref={image3Ref} />
                                                <div className='formBtn'>
                                                <Button btnName={'purpleBtn'} title={'Upload'} onClick={(e) => handleClick(3)} type="button" />
                                                </div>
                                            </div>
                                            <h6 className='text-center text-black'>3</h6>
                                            <div className='uploadViewDesign'>
                                                <img src="https://scrappy-afe2cd64144028-staging.s3.ap-south-1.amazonaws.com/public/public/paperFlip.png"  alt="Paper"></img>
                                                {errors.image4 && touched.image4 ? (<div className='required text-center'>{errors.image4}</div>) : null}
                                                <div className={spinner4 && 'preview'}>
                                                  <Spinner show={spinner4}  >
                                                    {values.image4 && <img src={values.image4} alt="" className='preview' />}
                                                  </Spinner>
                                                </div>
                                                <input type="file" style={{display: 'none'}} id={4}   accept="image/png, image/gif, image/jpeg" onChange={(e) => {handleUploadImage(e, handleChange, 'image4')}}   name="image4" ref={image4Ref} />
                                                <div className='formBtn'>
                                                <Button btnName={'purpleBtn'} title={'Upload'} onClick={(e) => handleClick(4)} type="button" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button ref={submitRef} type={'submit'} style={{display: 'none'}}></button>
                                    <Button btnName={'purpleBtn'} title='Save Details' type="button" onClick={nextClick} />
                                    {/* <Button btnName={'pinkBtn'} title='Add More Pages' type='button' /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            )}
        </Formik>
        <NavFooter prevClick={onPrev} nextClick={nextClick} />
    </>
  )
}

export default WhoWeMet
