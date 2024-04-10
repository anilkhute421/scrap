import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Design from './Design' 
import Skyfarm from './Skyfarm'
import Construction from './Construction'
import Plan from './Plan'
import Vegetables from './Vegetables'
import Fruits from './Fruits'
import { API, graphqlOperation} from 'aws-amplify'
import {getChallengeActivity} from '../../graphql/queries'


const Index = () => {
const [pageCount, setPageCount] = useState(0)
const {paramChallengeId} = useParams()
const [challengeID, setChallengeID] = useState()
const [formData, setFormData] = useState({
    length: '',
    width: '',
    height: '',
    shelves: '',
    pots: '',
    desc1: '',
    desc2: '',
    desc3: '',
    desc4: '',
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
    try {
        const postData = await API.graphql(graphqlOperation(getChallengeActivity, { id }));
        const postObject = postData.data.getChallengeActivity;
        if(postObject.design){
            setFormData(JSON.parse(postObject.design))
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
                return <Skyfarm formData={formData} challengeID={challengeID} setFormData={setFormData} onNext={onNext} onPrev={back} />
            case 2: 
                return <Construction formData={formData} onNext={onNext} onPrev={back} setFormData={setFormData} challengeID={challengeID} />
            case 3: 
                return <Plan onNext={onNext} onPrev={back} setFormData={setFormData} />
            case 4: 
                return <Vegetables formData={formData.vegetables} allData={formData} setFormData={setFormData} onNext={onNext} onPrev={back} challengeID={challengeID} />
            case 5: 
                return <Fruits formData={formData.fruits} allData={formData} setFormData={setFormData} onNext={onNext} onPrev={back}  challengeID={challengeID} />
            default: 
                return <Design  onNext={onNext}  />
        }
    }



  return (
    <>
    {<FetchComponent/>}
    </>
  )
}

export default Index
