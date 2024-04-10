import {React, useEffect, useRef, useState} from 'react'
import Header from '../../layout/Header'
import {NavFooter} from '../../components/Navigation'
import { Formik} from 'formik';
import Spinner from '../../components/Spinner';
import { API, graphqlOperation, Storage} from 'aws-amplify'
import {createChallengeActivity, updateChallengeActivity} from '../../graphql/mutations'
import { useNavigate, useParams } from 'react-router-dom';
import Compressor from 'compressorjs';


const Reseach = ({onNext, onPrev, formData, SignupSchema, setFormData, activityId, challenge_id, group_id, student_id, setActivityId}) => {
  const navigate = useNavigate()
  const [spinner, setSpinner] = useState(false)
  const [schoolList, setSchoolList] = useState()
  const uploadImageRef = useRef(null)

  const submitRef = useRef(null)
  const  uploadFile = () => {
    uploadImageRef.current.click()
  }

  const nextPage = () => {
    submitRef.current.click()
  }


  const onSubmit = async (data) => {
    const payload = {
      challengeId: challenge_id, 
      groupId: group_id, 
      research: JSON.stringify(data),
      studentId: student_id,
      status: 'IN_PROGRESS'
    }
    if(activityId){
      payload.id = activityId
      try {
        await API.graphql(graphqlOperation(updateChallengeActivity, {input: payload }));
        setFormData(data)
        onNext()
      } catch (error) {
        console.log('Error creating post: ', error);
      }
    }else{
        try{
            const res = await API.graphql(graphqlOperation(createChallengeActivity, { input: payload }));
            const challengeId = res.data.createChallengeActivity.id;
            setActivityId(challengeId)
            setFormData(data)
            onNext()
        } catch (err) {
            console.log('Error creating post: ', err);
        }
    }

  }

  const onselectionchange = (e, callback) => {
    if(e.target.value){
      fetchData(e.target.value)
      callback(e)
    }
  }


  const uploadImage = async (image, callback) => {
    const stored = await Storage.put(`scrappy-${Math.random().toString(36).substring(2, 15)}.${image.name.split('.')[1]}`, image, { contentType: image.type }); 
    const url = await Storage.get(stored.key, { level: 'public' }) 
    let ImageUrl=url.split('?')[0]
    if(ImageUrl) {
      const event  = { target: { name: 'researchImage', value: ImageUrl } }
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

  useEffect(() => {
    if(formData?.schoolType){
      fetchData(formData?.schoolType)
    }
  }, [formData])

  const fetchData = async (type)  => {
    const query = `query MyQuery {
      listSchools(filter: {type: {eq: ${type}}}) {
          nextToken
          items {
            type
            name
            id
          }
        }
      }`;
    const res = await API.graphql({query: query})
    if(res.data){
      setSchoolList(res.data.listSchools.items)
    }
}


  return (
    <>
    <div className='researchPage'>
      <Header title={'Urban Vertical Farm'} />
      <h1 className='heading'>Scrappy Research</h1>
      <Formik
       initialValues={formData}
       validationSchema={SignupSchema}
       onSubmit={onSubmit}
     >
      {({handleChange, handleSubmit, errors, touched, values }) => (
        <form onSubmit={handleSubmit}>
        <div className='researchPageCover'>
        <img src="https://scrappy-afe2cd64144028-staging.s3.ap-south-1.amazonaws.com/public/public/map.png" className='mapImage'  alt=""></img>
        <div className='setMargin'></div>
        <div className='researchContainer'>
          <div className='researchPageCard mb-3'>
              <h5>You have done your research, 
              you know where you want to 
              build your Vertical Farm </h5>
          </div>
          <div className='researchPageCard mb-3'>
          <h5>Upload a map pin of where you want to build your vertical farm</h5>
            <div className='uploadImage'>
              <img src="https://scrappy-afe2cd64144028-staging.s3.ap-south-1.amazonaws.com/public/public/upload.png"  alt=""></img>
              <div className={spinner && 'uploadedImage'}>
              <Spinner show={spinner}  >
                {values?.researchImage && <img src={values?.researchImage} alt="" className='uploadedImage' />}
              </Spinner>
              </div>
              {errors?.researchImage && touched?.researchImage ? (
             <div className='required'>{errors?.researchImage}</div>
           ) : null}
            </div>
            <div className='purpleBtn'>
              <img src="https://scrappy-afe2cd64144028-staging.s3.ap-south-1.amazonaws.com/public/public/pinkBtn.png"  alt=""></img>
            
              <div className='buttonText' onClick={uploadFile}>
                <h5 className='text-white'>Upload Image</h5>
                <input type="file" style={{display: 'none'}} accept="image/jpeg" name="researchImage"  onChange={(e) => {handleUploadImage(e, handleChange)}} ref={uploadImageRef} />
              </div>
            </div>
          </div>
          <div className='researchPageCard'>
            <h5>If it’s in your school or nearby, search for your school first</h5>
            <div className='selectTag'>
            <select name="schoolType" value={values?.schoolType}  onChange={(e) => {onselectionchange(e, handleChange)}}  >
                <option value="" selected disabled>Select School Type</option>
                <option  value="PRIVATE">PRIVATE</option>
                <option  value="PUBLIC">PUBLIC</option>
              </select>
              {errors?.schoolType && touched?.schoolType ? (
             <div className='required'>{errors?.schoolType}</div>
           ) : null}
              <select name="schoolId" value={values?.schoolId}  onChange={handleChange} className="mt-4" >
                <option value="" selected disabled>Enter School Name</option>
                {schoolList?.map((item, key) => (
                  <option  value={item?.id}>{item?.name}</option>
                ))}
              </select>
              {errors?.schoolId && touched?.schoolId ? (
             <div className='required'>{errors?.schoolId}</div>
           ) : null}
            </div>
            <div className='purpleBtn' style={{display: 'none'}}>
              <button type='submit' ref={submitRef} >
              <img src="https://scrappy-afe2cd64144028-staging.s3.ap-south-1.amazonaws.com/public/public/orangeBtn.png"  alt=""></img>
              <div className='buttonText'>
                <h5>Search School</h5>
              </div>
              </button>
            </div>
          </div>
        </div>
      </div>
        </form>
      )}
     </Formik>
     
      {/* <NavigationButton /> */}
      <NavFooter prevClick={onPrev} nextClick={nextPage} />
    </div>
    </>
  )
}

export default Reseach
