import {useState, useRef, useEffect} from 'react'
import {NavFooter} from '../../components/Navigation'
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { Formik} from 'formik';
import * as Yup from 'yup';
import { Storage} from 'aws-amplify'
import Spinner from '../../components/Spinner';
import { API, graphqlOperation} from 'aws-amplify'
import {updateChallengeActivity} from '../../graphql/mutations'
import Compressor from 'compressorjs';



const VerticalFarms = ({formData, setFormData,  onNext, onPrev, title, fileName1, fileName2, challengeID}) => {
  const SignupSchema = Yup.object().shape({
    [fileName1]: Yup.string().required('Required'),
    [fileName2]: Yup.string().required('Required'),
  });
    const [style, setStyle] = useState({});
    const [progressBar, setProgressBar] = useState(0)
    const [spinner, setSpinner] = useState(false)
    const [spinner2, setSpinner2] = useState(false)
    

  const fileInputRef1 = useRef(null);
  const fileInputRef2 = useRef(null);
  const submitRef = useRef(null)


  useEffect(() => {

  let count = 0;
   
   

    if(formData.farmFile1){
      count = count + 10
      // setProgressBar(progressBar + 10)
    }

    if(formData.farmFile2){
      count = count + 10

    }

    if(formData.stageFile1){
      count = count + 10

    }

    if(formData.stageFile2){
      count = count + 10
    }

    if(formData.materialFile1){
      count = count + 10
    }

    if(formData.materialFile2){
      count = count + 10
    }

    if(formData.sustainableFile1){
      count = count + 10
    }

    if(formData.sustainableFile2){
      count = count + 10
    }

    if(formData.cropFile1){
      count = count + 10
    }

    if(formData.cropFile2){
      count = count + 10
    }

    const newStyle = {
			opacity: 1,
			width: `${count}%`
		}
    setStyle(newStyle);


  },[formData])
	
    const  uploadFile = (index) => {
        if(index === 1){
            fileInputRef1.current.click()
        }else{
            fileInputRef2.current.click()
        }
      }
    
    const onSubmit = async (data) => {
      if(challengeID){
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
    }

    // const handleUploadImage = async (e, callback, name) =>{ 
    //   if(name === fileInputRef1.current.name){
    //     setSpinner(true)
    //   }else if(fileInputRef2.current.name){
    //     setSpinner2(true)
    //   }
    //   const file = e.target.files[0] 
    //   if (!file.type.startsWith('image/')) {
    //     alert('Please select an image file');
    //   }else{
    //   const stored = await Storage.put(`scrappy-${Math.random().toString(36).substring(2, 15)}.${file.name.split('.')[1]}`, file, { contentType: file.type }); 
    //   const url = await Storage.get(stored.key, { level: 'public' }) 
    //   let ImageUrl=url.split('?')[0]
    //   if(ImageUrl) {
    //     const event  = { target: { name: name || '', value: ImageUrl } }
    //     callback(event)
    //   }
    // }
    // setSpinner(false)
    // setSpinner2(false)
    // }

    const uploadImage = async (image, callback, name) => {
      const stored = await Storage.put(`scrappy-${Math.random().toString(36).substring(2, 15)}.${image.name.split('.')[1]}`, image, { contentType: image.type }); 
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
      if(name === fileInputRef1.current.name){
        setSpinner(true)
      }else if(fileInputRef2.current.name){
        setSpinner2(true)
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
        },
      });
    }

    const onHandleSubmit = () => {
      submitRef.current.click()
    }

	
  return (
    <>
    <div className='verticalFarmCover'>
        <div className="flowers">
        <Formik
              initialValues={formData}
              validationSchema={SignupSchema}
              onSubmit={onSubmit}
            >
              {({handleChange, handleSubmit, errors, touched, values }) => (
              <form onSubmit={handleSubmit}>
                <div className='MyContainer' style={{height: '92vh'}}>
                    <div className='paperLable'>
                        <img src="https://scrappy-afe2cd64144028-staging.s3.ap-south-1.amazonaws.com/public/public/label.png" alt="" />
                        <p className='uploadText'>Upload photo and field notes</p>
                        <div className="progressBar">
                            <div className="progress-done" style={style}>
                            </div>
                        </div>
                    </div>
                    <div className="verticalLabel">
                        <img src="https://scrappy-afe2cd64144028-staging.s3.ap-south-1.amazonaws.com/public/public/verticalLabel.png" alt="" />
                        {(title === 'Other sustainable things we designed' || fileName1 === 'cropFile1') ?  <h1 className='verticalTitle' style={{width: '208px', top: '32px', right: '21%'}}>{title}</h1> : <h3 className='verticalTitle'>{title}</h3>}
                    </div>
                          <div className='imagePreview' >
                                    <img src="https://scrappy-afe2cd64144028-staging.s3.ap-south-1.amazonaws.com/public/public/upload.png"  alt=""></img>
                                    {errors[fileName1] && touched[fileName1]  ? (<div className='required text-center'>{errors[fileName1] }</div>) : null}
                                    <div className={spinner && 'preview'}>
                                      <Spinner show={spinner}  >
                                      {values?.[fileName1] && <img src={values?.[fileName1]} alt="" className='preview' />}
                                      </Spinner>
                                    </div>
                                <input type="file" style={{display: 'none'}} id={1}   accept="image/png, image/gif, image/jpeg" onChange={(e) => {handleUploadImage(e, handleChange, fileName1)}}  name={fileName1} ref={fileInputRef1} multiple />
                                <div>
                                <Button title={'Upload'} btnName={'purpleBtn'} onClick={() => uploadFile(1)} type="button" />
                                </div>
                            </div>
                    <div className='uploadImage'>
                        <div className='d-flex justify-content-center'>
                        <div className='upload-dashed '>
                        <div className={spinner2 && 'farmImageUpload2'}>
                          <Spinner show={spinner2}  >
                            {values?.[fileName2] && <img src={values?.[fileName2]} alt="" className='farmImageUpload2' />}
                          </Spinner>
                        </div>
                        </div>
                        <input type="file" style={{display: 'none'}}  accept="image/png, image/gif, image/jpeg"  name={fileName2} onChange={(e) => {handleUploadImage(e, handleChange, fileName2)}} ref={fileInputRef2} multiple />

                        </div>
                        {errors[fileName2] && touched[fileName2]  ? (<div className='required text-center'>{errors[fileName2] }</div>) : null}
                        <div>
                        <Button title={'Upload'} btnName={'purpleBtn'} onClick={() => uploadFile(2)} type="button" />
                        </div>
                    </div>
                </div>
                <button  type='submit' ref={submitRef} style={{display: 'none'}}></button>
              </form>
              )}
        </Formik>
        </div>
    </div>
    <NavFooter prevClick={onPrev} nextClick={onHandleSubmit} />

    </>
  )
}

export default VerticalFarms
