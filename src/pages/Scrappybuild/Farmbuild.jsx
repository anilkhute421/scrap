import {React, useState, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import { Formik} from 'formik';
import * as Yup from 'yup';
import Spinner from '../../components/Spinner';
import { API, graphqlOperation, Storage} from 'aws-amplify'
import {updateChallengeActivity} from '../../graphql/mutations'
import Compressor from 'compressorjs';




const SignupSchema = Yup.object().shape({
  images: Yup.string().required('Required'),
  video: Yup.string().required('Required'),
});

const Farmbuild = ({formData, setFormData, onNext, challengeID}) => {
    const navigate = useNavigate()
  const fileInputRef = useRef(null);
  const submitRef = useRef(null)
  const uploadVideoRef = useRef(null)
  const [spinner, setSpinner] = useState(false)
  const [spinner2, setSpinner2] = useState(false)
  const [progress, setProgress] = useState()

  const [selectedImages, setSelectedImages] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);


    const next = () => {
      onNext()
    }

    // const handleUploadImage = async (e, callback, name) =>{ 
      // if(name === 'images'){
      //   setSpinner(true)
      // }else{
      //   setSpinner2(true)
      // }
    //   const file = e.target.files[0] 
    //   if (!file.type.startsWith(`${name === 'images' ? 'image/' : 'video/'}`)) {
    //     if(name === 'images'){
    //       alert('Please select an image file');
    //     }else{
    //       alert('Please select an video file');
    //     }
    //   }else{
    //   const stored = await Storage.put(`scrappy-${Math.random().toString(36).substring(2, 15)}.${file.name.split('.')[1]}`, file, { contentType: file.type }); 
    //   const url = await Storage.get(stored.key, { level: 'public' }) 
    //   let ImageUrl=url.split('?')[0]
    //   if(ImageUrl) {
    //     const event  = { target: { name: name, value: ImageUrl } }
    //     callback(event)
    //   }
    // }
    // setSpinner(false)
    // setSpinner2(false)
    // }


    const uploadImage = async (image, callback, name) => {
      console.log("namename", name)

      const stored = await Storage.put(`scrappy-${Math.random().toString(36).substring(2, 15)}.${image.name.split('.')[1]}`, image,
      { 
        contentType: image.type,
        progressCallback: progressEvent => {
          const percentComplete = (progressEvent.loaded / progressEvent.total) * 100;
          setProgress(percentComplete);
        }
       }); 
      const url = await Storage.get(stored.key, { level: 'public' }) 
      let ImageUrl=url.split('?')[0]
      if(ImageUrl) {
        const event  = { target: { name: name, value: ImageUrl } }
        callback(event)  
        setSpinner(false)
        setSpinner2(false)
      }
    }
  
    const handleUploadImage = async (e, callback, name) =>{ 
      if(name === 'images'){
        setSpinner(true)
      }else{
        setSpinner2(true)
      }
      const file = e.target.files[0] 

      if (!file.type.startsWith(`${name === 'images' ? 'image/' : 'video/'}`)) {
        if(name === 'images'){
          alert('Please select an image file');
        }else{
          alert('Please select an video file');
        }
      }else{
        if(name === 'images'){
          new Compressor(file, {
            quality: 0.4,
            success(result) {
              uploadImage(result, callback, name)
            },
            error(err) {
              console.log(err.message);
              setSpinner(false)
              setSpinner2(false)
            },
          });
        }else{
          uploadImage(file, callback, name)
        }
    }
      
    }

    const handleVideoUpload = (event) => {
      const file = event.target.files[0];
      setSelectedVideo(file);
    }


    const onFilechange =(e, callback) => {
      const files = e.target.files;
      setSelectedImages(files);
      setPreviewImage(URL.createObjectURL(files[0]));
      callback(e)
    }

    const handleClick = () => {
      fileInputRef.current.click();
    };
    
    const uploadVideo = () => {
      uploadVideoRef.current.click();
    }

    const handleOnSubmit = () => {
      submitRef.current.click()

    }

    const onSubmit = async (data) => {
      const payload = {
        id: challengeID,
        build: JSON.stringify(data)}
        try{
            await API.graphql(graphqlOperation(updateChallengeActivity, { input: payload }));
            setFormData(data)
            onNext()
        } catch (err) {
            console.log('Error creating post: ', err);
        }
    }

  return (
    <div className='farmBuildCover'>
           <Formik
              initialValues={formData}
              validationSchema={SignupSchema}
              onSubmit={onSubmit}
            >
              {({handleChange, handleSubmit, errors, touched, values }) => (
              <form onSubmit={handleSubmit}>
                  <div className="uploadImage">
                  <div className={spinner && 'buildImages'}>
                    <Spinner show={spinner}  >
                    {values.images && <img src={values.images} alt="" className='buildImages' />}
                    </Spinner>
                    </div>
                    {errors.images && touched.images ? (<div className='required text-center position-relative' style={{top: '8px'}}>{errors.images}</div>) : null}

                    <Button btnName={'pinkBtn'} title={'Upload'} onClick={handleClick} type="button" />
                    <input type="file" style={{display: 'none'}}  name="images"  accept="image/png, image/gif, image/jpeg"  onChange={(e) => {handleUploadImage(e, handleChange, 'images')}} ref={fileInputRef} multiple />
                  </div>
                  <input type="file" accept="video/*" style={{display: 'none'}} name="video"  onChange={(e) => {handleUploadImage(e, handleChange, 'video')}} ref={uploadVideoRef} />
                    <div className={spinner2 && 'uploadVideo'}>
                    
                    {progress > 0 && (
                      <div>
                        <center>
                        <progress value={progress} max="100" style={{width: '90%'}} />
                          <span>{progress.toFixed(2)}%</span>
                        </center>
                        
                        {(values.video && progress === 100) && <video src={values.video} controls />}
                      </div>
                    )}
                    </div>
                  
                  <div className='uploadFieldNotes' onClick={uploadVideo}>
                  {errors.video && touched.video ? (<div className='req required text-center'>{errors.video}</div>) : null}
                  </div>
                  <button type="submit" style={{display: 'none'}} ref={submitRef}></button>
                  <div className="d-flex justify-content-center" onClick={handleOnSubmit}>
                        <div className='startUploadinButton'></div>
                  </div>
              </form>
              )}
              </Formik>
    </div>
  )
}

export default Farmbuild
