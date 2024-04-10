import React, { useEffect, useState } from 'react'
import Button from '../../components/Button'
import {NavFooter} from '../../components/Navigation'
import { useParams } from 'react-router-dom'
import { API, graphqlOperation} from 'aws-amplify'
import {getChallengeActivity} from '../../graphql/queries'
import {updateChallengeActivity} from '../../graphql/mutations'
import { useNavigate } from 'react-router-dom'


const Publish = () => {
    const {paramChallengeId} = useParams()
    const [formData, setFormData] = useState()
    const [notes, setNotes] = useState()
    const [showNotes, setShowNotes] = useState(false)
    const [showFarm, setShowFarm] = useState(false)
    const [farmData, setFarmhData] = useState()
    const navigate = useNavigate()


    useEffect(() => {
        if(paramChallengeId){
            fetchData()
        }
    },[paramChallengeId])

    const fetchData = async () =>{
        const id = paramChallengeId
        // const id = 'bca22358-365d-41c5-afdb-6f8fe758a041';
        try {
            const postData = await API.graphql(graphqlOperation(getChallengeActivity, { id }));
            const postObject = postData.data.getChallengeActivity;
            if(postObject.research){
                const rData =  JSON.parse(postObject.research)
                setNotes(rData)
            }
            if(postObject.build){
                const fetchedData = JSON.parse(postObject.build)
                const JoinArr = fetchedData.vegetables.concat(fetchedData.fruits)
                const temp = [];
                JoinArr.map((item) => {
                    if(item.data){
                        item.data.map((i) => {
                            i.id = item.id
                            i.name = item.name
                            temp.push(i)
                        })
                    }
                })
                setFormData(temp)
            }
          } catch (err) {
            console.log('Error fetching post: ', err);
        }
    } 

    const handlClick = (item) => {
        setShowFarm(true)
        setFarmhData(item)
    }

    const handlShowNotes = () => {
        setShowNotes(!showNotes)
    }

    const goBack = () => {
        navigate(`/build/${paramChallengeId}`)
    }

    const onHandleSubmit = async () => {
        const payload = {
            id: paramChallengeId}
            try{
                await API.graphql(graphqlOperation(updateChallengeActivity, { input: payload }));
                navigate(`/game/${paramChallengeId}`)
            } catch (err) {
                console.log('Error creating post: ', err);
            }
        }
  return (
    <>
        <div className='verticalFarmCover'>
            <div className="flowers">
                <div className='MyContainer' style={{height: `${showNotes || showFarm ? '100vh' : '92vh'}`}}>
                    {(!showNotes && !showFarm) && <div>
                    <div className="verticalLabel">
                        <img src="https://scrappy-afe2cd64144028-staging.s3.ap-south-1.amazonaws.com/public/public/verticalLabel.png" alt="" />
                        <h1 className='verticalTitle' style={{width: '208px', top: '32px', right: '21%'}}>When we’ll have our first sky farm crop</h1>
                    </div>
                    {formData && formData.map((item, index) => (
                        <>
                        <div className='imagePreview mt-3' onClick={() => handlClick(item)}>
                            <img src="https://scrappy-afe2cd64144028-staging.s3.ap-south-1.amazonaws.com/public/public/upload.png"  alt=""></img>
                            <img src={item.image} alt="" className='preview' />
                        </div>
                        <h3 className='text-black cropTitle'>{item.name} - {item.month}</h3>
                        </>
                    ))}
                    <div className='uploadImage mt-4'>
                        <div className='d-flex justify-content-center'>
                            <div className='upload-dashed' onClick={handlShowNotes}>
                                <img src={'https://scrappy-afe2cd64144028-staging.s3.ap-south-1.amazonaws.com/public/public/book.webp'} alt="" className='farmImageUpload2' />
                            </div>
                        </div>
                    </div>
                    <Button type="button" title="Publish" btnName={'pinkBtn'} onClick={onHandleSubmit} ></Button>
                    </div>}
                   {showNotes && <Notes data={notes} setShowNotes={setShowNotes} showNotes={showNotes} />}
                   {showFarm && <FarmCrop data={farmData} setShowFarm={setShowFarm} />}
                </div>
            </div>
        </div>
        {(!showNotes && !showFarm)  && <NavFooter  nextClick={onHandleSubmit} prevClick={goBack} /> }
    

    </>
  )
}


export default Publish


const Notes = ({data, setShowNotes}) => {
    const handlClick = () => {
        setShowNotes(false)
    }
    return (
        data && (
            <div>
                <div className='imagePreview mt-3'>
                    <img src="https://scrappy-afe2cd64144028-staging.s3.ap-south-1.amazonaws.com/public/public/upload.png"  alt=""></img>
                    <img src={data.image1} alt="" className='preview' />
                </div>
                <div className='text-black px-5'>
                    <h6>Name</h6>
                    <label>{data.name}</label>
                </div>
                <div className='text-black px-5'>
                    <h6>Age</h6>
                    <label>{data.age}</label>
                </div>
                <div className='text-black px-5'>
                    <h6>What they do?</h6>
                    <label>{data.whatTheyDo}</label>
                </div>
                <div className='text-black px-5'>
                    <h6>Scrappy Skill</h6>
                    <label>{data.skill}</label>
                </div>
                <div className='text-black px-5'>
                    <h6>Why they’d like to have an urban vertical urban farm here to play the game</h6>
                    <label>{data.desc1}</label>
                </div>
                <div className='text-black px-5'>
                    <h6>Three leafy greens, vegetables, fruit they’d like us to grow & why</h6>
                    <label>{data.desc2}</label>
                </div>
                <div className='imagePreview mt-3'>
                    <img src="https://scrappy-afe2cd64144028-staging.s3.ap-south-1.amazonaws.com/public/public/upload.png"  alt=""></img>
                    <img src={data.image2} alt="" className='preview' />
                </div>
                <div className='imagePreview mt-3'>
                    <img src="https://scrappy-afe2cd64144028-staging.s3.ap-south-1.amazonaws.com/public/public/upload.png"  alt=""></img>
                    <img src={data.image3} alt="" className='preview' />
                </div>
                <div className='imagePreview mt-3'>
                    <img src="https://scrappy-afe2cd64144028-staging.s3.ap-south-1.amazonaws.com/public/public/upload.png"  alt=""></img>
                    <img src={data.image4} alt="" className='preview' />
                </div>
                <Button type="button" title="Back" btnName={'pinkBtn'} onClick={handlClick} ></Button>
            </div>
        )
    )
}

const FarmCrop = ({data, setShowFarm}) => {
    const handlClick = () => {
        setShowFarm(false)
    }
    return (
        <>
            <div className='imagePreview mt-3'>
                <img src="https://scrappy-afe2cd64144028-staging.s3.ap-south-1.amazonaws.com/public/public/upload.png"  alt=""></img>
                <img src={data.image} alt="" className='preview' />
            </div>
            <h1 className='cropTitle text-black mt-4'>{data.name} - {data.month}</h1>
            <div className='text-black px-5 text-start ms-3 '>
                    <h6>How is it doing?</h6>
                    <label>{data.desc1}</label>
            </div>
            <div className='text-black px-5 text-start ms-3'>
                    <h6>Does it need any more help?</h6>
                    <label>{data.desc2}</label>
            </div>
            <div className='text-black px-5 text-start ms-3'>
                    <h6>What are you doing to help?</h6>
                    <label>{data.desc3}</label>
            </div>
            <div className='text-black px-5 text-start ms-3'>
                    <h6>Have you learned anything yet from planting this vegetable, when you did?</h6>
                    <label>{data.desc4}</label>
            </div>
            <div className='text-black px-5 text-start ms-3'>
                    <h6>Would you change anything about your plan now if you can? Yes? Cool. Make that change.</h6>
                    <label>{data.desc5}</label>
            </div>
            <Button type="button" title="Back" btnName={'pinkBtn'} onClick={handlClick} ></Button>
        </>
    )
}
