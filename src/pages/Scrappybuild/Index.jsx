import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Build from './Build'
import Formbuild from './Farmbuild'
import VerticalFarms from './VerticalFarms'
import VegAndFruits from './VegAndFruits'
import Betroot from './Betroot'
import { API, graphqlOperation} from 'aws-amplify'
import {getChallengeActivity} from '../../graphql/queries'

const Index = () => {
const [pageCount, setPageCount] = useState(0)
const {paramChallengeId} = useParams()
const [challengeID, setChallengeID] = useState()
const [index, setIndex] = useState(0);
const [progressBar, setProgressBar] = useState(0)

const [formData, setFormData] = useState({
    images: '',
    video: '',
    farmFile1: '',
    farmFile2: '',
    stageFile1: '',
    stageFile2: '',
    materialFile1: '',
    materialFile2: '',
    sustainableFile1: '',
    sustainableFile2: '',
    cropFile1: '',
    cropFile2: '',
    vegetables: [],
    fruits: []
})



useEffect(() => {
    if(paramChallengeId){
        setChallengeID(paramChallengeId)
        fetchData()
    }
},[paramChallengeId])

const fetchData = async () =>{
    const id = paramChallengeId
    // const id = 'bca22358-365d-41c5-afdb-6f8fe758a041';
    try {
        const postData = await API.graphql(graphqlOperation(getChallengeActivity, { id }));
        const postObject = postData.data.getChallengeActivity;
        if(postObject.build){
            setFormData(JSON.parse(postObject.build))
        }else if(postObject.design){
            const data = JSON.parse(postObject.design)
            setFormData((prev) => ({...prev, fruits: data.fruits, vegetables: data.vegetables}))
        }
      } catch (err) {
        console.log('Error fetching post: ', err);
    }
} 

const onNext = () => {

    setPageCount(pageCount + 1)
}

const back = () => {
    setPageCount(pageCount - 1)
}

    const FetchComponent = () =>{
        switch(pageCount){
            case 1: 
                return <Formbuild formData={formData} setFormData={setFormData} onNext={onNext} onPrev={back} challengeID={challengeID} />
            case 2: 
                return <VerticalFarms formData={formData}  setFormData={setFormData} onNext={onNext} onPrev={back} title={'Our Vertical Farm'} fileName1={'farmFile1'} fileName2={'farmFile2'} challengeID={challengeID} />
            case 3: 
                return <VerticalFarms formData={formData} setFormData={setFormData} onNext={onNext} onPrev={back} title={'Each Level/Stages'} fileName1={'stageFile1'} fileName2={'stageFile2'} challengeID={challengeID} />
            case 4: 
                return <VerticalFarms formData={formData} setFormData={setFormData} onNext={onNext} onPrev={back} title={'Upcycled Materials'} fileName1={'materialFile1'} fileName2={'materialFile2'} challengeID={challengeID} />
            case 5: 
                return <VerticalFarms formData={formData} setFormData={setFormData} onNext={onNext} onPrev={back} title={'Other sustainable things we designed'} fileName1={'sustainableFile1'} fileName2={'sustainableFile2'} challengeID={challengeID} />
            case 6: 
                return <VerticalFarms formData={formData} setFormData={setFormData} onNext={onNext} onPrev={back} title={'When we’ll have our first sky farm crop '} fileName1={'cropFile1'} fileName2={'cropFile2'} challengeID={challengeID} />
            case 7: 
                return <VegAndFruits formData={formData} setFormData={setFormData} onNext={onNext} onPrev={back} challengeID={challengeID} />
            case 8: 
                return <Betroot formData={formData} setFormData={setFormData} onNext={onNext} onPrev={back} setIndex={setIndex} index={index} challengeID={challengeID} />
            case 9: 
                return <VerticalFarms formData={formData} setFormData={setFormData} onNext={onNext} onPrev={back} title={'When we’ll have our first sky farm crop'} fileName1={'cropFile1'} fileName2={'cropFile2'} challengeID={challengeID} />
            default: 
                return <Build  onNext={onNext}  />
        }
    }
  return (
    <>
        {<FetchComponent/>}
    </>
  )
}

export default Index
