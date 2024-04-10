import {React, useState, useEffect} from 'react'
import Research from './Research'
import { useNavigate } from 'react-router-dom'
import Upload from './Upload'
import Notes from './Notes'
import WhoWeMet from './WhoWeMet'
import * as Yup from 'yup';
import {getChallengeActivity, listChallengeActivities} from '../../graphql/queries'
import { API, graphqlOperation} from 'aws-amplify'
import { useParams } from 'react-router-dom'



const SignupSchema = Yup.object().shape({
    schoolId: Yup.string()
      .required('Required'),
    schoolType: Yup.string()
      .required('Required'),
    researchImage: Yup.string()
        .required('Required'),
  });

const Index = () => {
const navigate = useNavigate()
const [pageCount, setPageCount] = useState(0)
const [imagePreview, setImagePreview] = useState()
const [schoolList, setSchoolList] = useState()
const [activityId, setActivityId] = useState()
const {paramChallengeId, challenge_id, group_id, student_id} = useParams()
const [formData, setFormData] = useState({
    schoolId: '',
    schoolType: '',
    researchImage: '',
    mapImage: '',
    directions: '',
    image1: '',
    image2: '',
    image3: '',
    image4: '',
    name: '',
    age: '',
    whatTheyDo: '',
    skill: '',
    desc1: '',
    desc2: ''
  })


  useEffect(() => {
    if(paramChallengeId){
        fetchChallengeActivity()
        setActivityId(paramChallengeId)
    }
  }, [paramChallengeId])

  useEffect(() => {
    if(group_id){
        challengeByGroupId()
    }
  },[group_id])

  const challengeByGroupId = async () => {

    try {
        const postData = await API.graphql(graphqlOperation(listChallengeActivities,
            { 
                filter: {groupId: {eq: group_id}, status: {ne: 'INVITED'}, challengeId: {eq: challenge_id}},
                fields: ['id', 'research']
            },
            ));

      const postObject =JSON.parse(postData.data.listChallengeActivities.items[0].research)
      if(postObject !== null){
        setFormData(postObject)
      }
      setActivityId(postData.data.listChallengeActivities.items[0].id)
    } catch (err) {
      console.log('Error fetching post: ', err);
    }
  }

  const fetchChallengeActivity = async ()  => {
      try {
          const postData = await API.graphql(graphqlOperation(getChallengeActivity, { id: paramChallengeId }));
        const postObject = postData.data.getChallengeActivity;
        setFormData(JSON.parse(postObject.research))
      } catch (err) {
        console.log('Error fetching post: ', err);
      }
}


const onNext = () => {
    setPageCount(pageCount + 1)
}

const onPrev = () => {
    if(challenge_id){
        navigate(`/menu/${challenge_id}/${group_id}/${student_id}`)
    }
}

const back = () => {
    setPageCount(pageCount - 1)
}

    const FetchComponent = () =>{
        switch(pageCount){
            case 1: 
                return <Upload onNext={onNext} onPrev={back} formData={formData} setFormData={setFormData} SignupSchema={SignupSchema} activityId={activityId} />
            case 2: 
                return <Notes onNext={onNext} onPrev={back} formData={formData} SignupSchema={SignupSchema}  />
            case 3: 
                return <WhoWeMet challenge_id={challenge_id} activityId={activityId} group_id={group_id} student_id={student_id} onNext={onNext} onPrev={back} formData={formData} setFormData={setFormData} SignupSchema={SignupSchema} />
            default: 
                return <Research onNext={onNext} onPrev={onPrev} challenge_id={challenge_id} activityId={activityId} setActivityId={setActivityId} group_id={group_id} student_id={student_id} formData={formData} SignupSchema={SignupSchema} schoolList={schoolList} setFormData={setFormData} setSchoolList={setSchoolList} imagePreview={imagePreview} setImagePreview={setImagePreview} />
        }
    }
    return (
        <>
        {<FetchComponent/>}
        </>
    )
}

export default Index
