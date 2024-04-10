import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import FormControl from '../../components/FormControl'
import Button from '../../components/Button'
import Header from '../../layout/Header'
import { useParams } from 'react-router-dom'
import { Formik} from 'formik';
import * as Yup from 'yup';
import { API, graphqlOperation, Storage} from 'aws-amplify'
import {updateChallengeActivity} from '../../graphql/mutations'
import Spinner from '../../components/Spinner'
import Compressor from 'compressorjs';



const Betroot = ({formData, setFormData, onNext, onPrev, setIndex, index, challengeID}) => {
    const SignupSchema = Yup.object().shape({
        image: Yup.string().required('Required'),
        desc1: Yup.string().required('Required').matches(/^\s*\S[\s\S]*$/, '* This field cannot contain only blankspaces'),
        desc2: Yup.string().required('Required').matches(/^\s*\S[\s\S]*$/, '* This field cannot contain only blankspaces'),
        desc3: Yup.string().required('Required').matches(/^\s*\S[\s\S]*$/, '* This field cannot contain only blankspaces'),
        desc4: Yup.string().required('Required').matches(/^\s*\S[\s\S]*$/, '* This field cannot contain only blankspaces'),
        desc5: Yup.string().required('Required').matches(/^\s*\S[\s\S]*$/, '* This field cannot contain only blankspaces'),
      });

    const navigate = useNavigate()
    const [spinner, setSpinner] = useState(false)
    const {paramChallengeId} = useParams()
    const [mydata, setMyData] = useState();
    const [finalData, setFinalData] = useState()
    const  fileInputRef1 = useRef()  
    const submitRef = useRef()
    const formRef = useRef(null);

    const [data, setData] = useState({
        image: '',
        desc1: '',
        desc2: '',
        desc3: '',
        desc4: '',
        desc5: '',
    })

    const getMonth = (i) => {
        if(Number(i) === 1){
            return 'Jan'
        }else if(Number(i) === 2){
            return 'Feb'
        }else if(Number(i) === 3){
            return 'Mar'
        }else if(Number(i) === 4){
            return 'Apr'
        }else if(Number(i) === 5){
            return 'May'
        }else if(Number(i) === 6){
            return 'Jun'
        }else if(Number(i) === 7){
            return 'Jul'
        }else if(Number(i) === 8){
            return 'Aug'
        }else if(Number(i) === 9){
            return 'Sep'
        }else if(Number(i) === 10){
            return 'Oct'
        }else if(Number(i) === 11){
            return 'Nov'
        }else if(Number(i) === 12){
            return 'Dec'
        }
    }

    useEffect(() => {
        const arr = [];
        formData.vegetables.map((item) => {
            item.month.sort().map((i, index) => {
                arr.push({
                    id: item.id,
                    title: item.name,
                    month:getMonth(i),
                    type: 'vegetables'
                })
            })
        })


        formData.fruits.map((item) => {
            item.month.sort().map((i, index) => {
                arr.push({
                    id: item.id,
                    title: item.name,
                    month:getMonth(i),
                    type: 'fruits'
                })
            })
        })
  
        setFinalData(formData)
        setMyData(arr)
    }, [formData])

    useEffect(() => {
        if(mydata){
            const JoinArr = formData.vegetables.concat(formData.fruits)
    
            JoinArr.map((item) => {
                if(item?.id === mydata[index]?.id){
                    item?.data?.map((i) => {
                        if(i?.month === mydata[index]?.month){
                            setData(i)
                        }
                    })
                }
            })
        }
    },[mydata])

    useEffect(() => {
        if(data.image){
            if(index < mydata.length - 1){
                formRef.current.reset();
                setIndex(index + 1)
            }else{
                if(paramChallengeId){
                    postData(finalData)
                    // navigate(`/publish/${paramChallengeId}`)
                }
            }
        }
    },[data])

    const postData = async (data) => {
        setFormData(data)
        const payload = {
            id: paramChallengeId,
            build: JSON.stringify(finalData)}
            try{
                await API.graphql(graphqlOperation(updateChallengeActivity, { input: payload }));
                navigate(`/publish/${paramChallengeId}`)
            } catch (err) {
                console.log('Error creating post: ', err);
            }
    }


    const uploadImage = async (image, callback) => {
        const stored = await Storage.put(`scrappy-${Math.random().toString(36).substring(2, 15)}.${image.name.split('.')[1]}`, image, { contentType: image.type }); 
        const url = await Storage.get(stored.key, { level: 'public' }) 
        let ImageUrl=url.split('?')[0]
        if(ImageUrl) {
          const event  = { target: { name: 'image', value: ImageUrl } }
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

    // const handleUploadImage = async (e, callback) =>{ 
    //     setSpinner(true)
    //     const file = e.target.files[0] 
    //     if (!file.type.startsWith('image/')) {
    //         alert('Please select an image file');
    //       }else{
    //     const stored = await Storage.put(`scrappy-${Math.random().toString(36).substring(2, 15)}.${file.name.split('.')[1]}`, file, { contentType: file.type }); 
    //     const url = await Storage.get(stored.key, { level: 'public' }) 
    //     let ImageUrl=url.split('?')[0]
    //     if(ImageUrl) {
    //       const event  = { target: { name: 'image' || '', value: ImageUrl } }
    //       callback(event)
    //     }
    // }
    //     setSpinner(false)
    //   }

    const onSave = () => {
        submitRef.current.click()
 
    }

    const uploadFile = () => {
        fileInputRef1.current.click()
    }

    const setMyFormData = (sData) => {
            const id = mydata[index]?.id
            const type = mydata[index]?.type
            const month = mydata[index]?.month
            const temp = [];
                finalData[type].map((item) => {
                    if(item.id === id){
                        const prevData = item.data || []
                        sData.month = mydata[index]?.month
                        item.data = [...prevData, sData]
                        temp.push(item)
                    }else{
                        temp.push(item)
                    }
                })
        setFinalData((prev) => ({...prev, [type]: temp}))
    }
    useEffect(() => {
        if(finalData){
            updateData()
        }
    },[finalData])


    const updateData = async () => {
                const payload = {
            id: challengeID,
            build: JSON.stringify(finalData)}
            try{
                await API.graphql(graphqlOperation(updateChallengeActivity, { input: payload }));
            } catch (err) {
                console.log('Error creating post: ', err);
            }
    }

    const onSubmit = async (submitedData) => {
        setMyFormData(submitedData)
        setData(submitedData)
    } 


  return (
    <>
    {mydata && <>
        <Header title={`${mydata[index]?.title} - ${mydata[index]?.month}`} />
        <div className='skyFarmConstructionCover'>
        <Formik
              initialValues={data}
              validationSchema={SignupSchema}
              onSubmit={onSubmit}
            >
              {({handleChange, handleSubmit, errors, touched, values }) => (
              <form onSubmit={handleSubmit} ref={formRef}>
            <div className="card mt-5">
                <div className="card-body" style={{height: '82vh'}}>
                    <div className='uploadImage'>
                        <div className='imagePreview' >
                        <img src="https://scrappy-afe2cd64144028-staging.s3.ap-south-1.amazonaws.com/public/public/upload.png"  alt="" style={{width: '100%'}} ></img>
                        {errors.image && touched.image  ? (<div className='required text-center'>{errors.image}</div>) : null}
                                <div className={spinner && 'preview'}>
                                    <Spinner show={spinner}  >
                                        {values?.image && <img src={values?.image} alt="" className='preview' />}
                                    </Spinner>
                                </div>
                                <input type="file" style={{display: 'none'}}  accept="image/png, image/gif, image/jpeg" id={1}  onChange={(e) => {handleUploadImage(e, handleChange)}} name='image' ref={fileInputRef1} multiple />
                        <div>
                            <Button title={'Upload'} btnName={'purpleBtn'} onClick={() => uploadFile()} type="button"/>
                        </div>
                        </div>
                    </div>
                    <div>
                        <h6>How is it doing?</h6>
                        <FormControl type="textarea" placeholder={''} label="" name="desc1" onChange={handleChange} value={values.desc1} />
                        {errors.desc1 && touched.desc1  ? (<div className='required' style={{marginTop: '-18px'}}>{errors.desc1 }</div>) : null}

                    </div>
                    <div>
                        <h6>Does it need any more help?</h6>
                        <FormControl type="textarea" placeholder={''} label="" name="desc2" onChange={handleChange} value={values.desc2} />
                        {errors.desc2 && touched.desc2  ? (<div className='required' style={{marginTop: '-18px'}} >{errors.desc2 }</div>) : null}
                    </div>
                    <div>
                        <h6>What are you doing to help?</h6>
                        <FormControl type="textarea" placeholder={''} label="" name="desc3" onChange={handleChange} value={values.desc3} />
                        {errors.desc3 && touched.desc3  ? (<div className='required' style={{marginTop: '-18px'}}>{errors.desc3 }</div>) : null}
                    </div>
                    <div>
                        <h6>Have you learned anything yet from planting this vegetable, when you did?</h6>
                        <FormControl type="textarea" placeholder={''} label="" name="desc4" onChange={handleChange} value={values.desc4} />
                        {errors.desc4 && touched.desc4  ? (<div className='required' style={{marginTop: '-18px'}}>{errors.desc4 }</div>) : null}
                    </div>
                    <div>
                        <h6>Would you change anything about your plan now if you can? Yes? Cool. Make that change.</h6>
                        <FormControl type="textarea" placeholder={''} label="" name="desc5" onChange={handleChange} value={values.desc5} />
                        {errors.desc5 && touched.desc5  ? (<div className='required' style={{marginTop: '-18px'}}>{errors.desc5 }</div>) : null}
                    </div>
                </div>
            </div>
            <button  type='submit' ref={submitRef} style={{display: 'none'}}></button>
            <Button btnName={'pinkBtn'} title='Save details' type="button" onClick={() => onSave(mydata[index].id, mydata[index].type)} />
            </form>
              )}
            </Formik>
        </div>
    </> }
    </>
  )
}

export default Betroot
