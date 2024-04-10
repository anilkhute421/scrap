import { useRef, useState } from 'react';
import {NavFooter} from '../../components/Navigation'
import Spinner from '../../components/Spinner';
import { Formik} from 'formik';
import * as Yup from 'yup';
import { API, graphqlOperation, Storage} from 'aws-amplify'
import {updateChallengeActivity} from '../../graphql/mutations'
import Compressor from 'compressorjs';



const SignupSchema = Yup.object().shape({
  mapImage: Yup.string()
    .required('Please upload image.'),
  directions: Yup.string()
    .required('Required').matches(/^\s*\S[\s\S]*$/, '* This field cannot contain only blankspaces'),
});


const Upload = ({onNext, onPrev, formData, setFormData, activityId}) => {
  const [spinner, setSpinner] = useState(false)
  const fileInputRef = useRef(null);
  const submitRef = useRef()

    const onSubmit = async (data) => {
      const payload = {
        id: activityId,
        research: JSON.stringify(data),
      }
      if(activityId){
        try {  
          await API.graphql(graphqlOperation(updateChallengeActivity, {input: payload }));
          setFormData(data)
          onNext()
        } catch (error) {
          console.log('Error creating post: ', error);
        }
      }
    }


    const handleOnSubmit = () => {
      submitRef.current.click()
    }
   

    const handleClick = () => {
      fileInputRef.current.click();
    };


    const uploadImage = async (image, callback) => {
      const stored = await Storage.put(`scrappy-${Math.random().toString(36).substring(2, 15)}.${image.name.split('.')[1]}`, image, { contentType: image.type }); 
      const url = await Storage.get(stored.key, { level: 'public' }) 
      let ImageUrl=url.split('?')[0]
      if(ImageUrl) {
        const event  = { target: { name: 'mapImage', value: ImageUrl } }
        callback(event)  
        setSpinner(false)
      }
    }
  
    const handleUploadImage = async (e, callback) =>{ 
      setSpinner(true)
      const file = e.target.files[0] 
      new Compressor(file, {
        quality: 0.4,
        success(result) {
          uploadImage(result, callback)
        },
        error(err) {
          console.log(err.message);
          setSpinner(false)
        },
      });
    }

  return (
    <div className='uploadMapCoverPage'>
        <div className="container">
            <div className='researchPageCard' style={{background: '#A6D9FF'}}>
                <h5>If you can and if you can’t find where you want to build your vertical farm on the map, draw it for us just so we can make sure we can find it and give us good directions to be able to find where you want to build.</h5>
            </div>
            <Formik
              initialValues={formData}
              validationSchema={SignupSchema}
              onSubmit={onSubmit}
            >
              {({handleChange, handleSubmit, errors, touched, values }) => (
              <form onSubmit={handleSubmit}>
                  <div className='postBox position-relative'>
                    <img src="https://scrappy-afe2cd64144028-staging.s3.ap-south-1.amazonaws.com/public/public/postbox.webp"  alt=""></img>
                    <div className='uploadYourMapBtn' onClick={handleClick}></div>
                    <div>
                      <Spinner show={spinner}  >
                    {values?.mapImage && <div>Uploaded</div>}
                      </Spinner>
                    </div>
                    {errors.mapImage && touched.mapImage ? (<div className='required text-center text-white' style={{marginTop: "-17px;"}}>{errors.mapImage}</div>) : null}

                    <input type="file" style={{display: 'none'}} accept="image/png, image/gif, image/jpeg"  capture='camera' name="mapImage"  onChange={(e) => {handleUploadImage(e, handleChange)}} ref={fileInputRef} />
                  </div>
                  <div className='researchPageCard' style={{background: '#D9EFFF'}}>
                      <h5>Give us good directions</h5>
                      <textarea id="" className='mytextArea' value={values?.directions} name="directions"  onChange={handleChange} rows={4} ></textarea>
                  </div>
                      {errors.directions && touched.directions ? (<div classdirections='required'>{errors.directions}</div>) : null}
                <div className='d-flex justify-content-around'>
                <button ref={submitRef} type={'submit'} style={{display: 'none'}}></button>

            </div>
            </form>
                )}
            </Formik>
        </div>
      <NavFooter prevClick={onPrev} nextClick={handleOnSubmit} />
    </div>
  )
}

export default Upload
