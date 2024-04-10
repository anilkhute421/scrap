

import { useParams } from 'react-router-dom';
import {React, useState, useRef} from 'react'
import { useNavigate } from 'react-router-dom'


import * as Yup from 'yup';
import { Storage } from 'aws-amplify'


import {updateChallengeActivity} from '../graphql/mutations'
import { API, graphqlOperation} from 'aws-amplify'
import Spinner from '../components/Spinner';
const SignupSchema = Yup.object().shape({

  video: Yup.string().required('Require'),
});
const Video = () => {	
  const [video,setvideo]=useState({});
  const [spinner, setSpinner] = useState(false)
  const navigate = useNavigate()
  const {paramChallengeId} = useParams()	 
const [progress, setProgress] = useState()


  const uploadVideoRef = useRef(null)
   const exitChallenge = () => {
   	    navigate(`/completed`);
  }	  
  const handleUploadImage = async (e,name ) =>{ 
    setSpinner(true)
    const file = e.target.files[0] 
    if (!file.type.startsWith('video/')) {
      alert('Please select an video file');
    }else{
    const stored = await Storage.put(`scrappy-${Math.random().toString(36).substring(2, 15)}.${file.name.split('.')[1]}`, file, 
    { 
      contentType: file.type,
      progressCallback: progressEvent => {
        const percentComplete = (progressEvent.loaded / progressEvent.total) * 100;
        setProgress(percentComplete);
      }
    }); 
    const url = await Storage.get(stored.key, { level: 'public' }) 
    let ImageUrl=url.split('?')[0]
    if(ImageUrl) {
      const event  ={ name: "gameVideo", value: ImageUrl };
      setvideo(event);
      setSpinner(false)
      submit(event);
    }
  }
  setSpinner(false)

  }
  const submit = async (data) => {
    const payload = {
        id: paramChallengeId,
        report:JSON.stringify(data),
        status: 'SUBMITTED'
      }
        try{
            await API.graphql(graphqlOperation(updateChallengeActivity, { input: payload }));
            exitChallenge();
        } catch (err) {
            console.log('Error creating post: ', err);
        }
    }
  const uploadVideo = () => {
    uploadVideoRef.current.click();
  }


   return (
    <>
    <div className='videoCover' onClick={(e)=>uploadVideo()}>
          <input type="file" accept="video/*" style={{display: 'none'}} name="video"  onChange={(e) => {handleUploadImage(e,'video')}} ref={uploadVideoRef} />
          <div className={spinner}>
            {progress > 0 && (
                      <div style={{ position: 'absolute', top: '5%', left:'28%'}}>
                        <progress value={progress} max="100"/>
                        <center>
                          <span style={{color: 'white'}}>{progress.toFixed(2)}%</span>
                        </center>
                        {(video.value && progress === 100) && <video src={video.value} controls style={{height:150, width:300}}  />}
                      </div>
                    )} 
              </div>
      <div className='homeIcon'><img src="https://scrappy-afe2cd64144028-staging.s3.ap-south-1.amazonaws.com/public/public/home.png" alt="" onClick={exitChallenge} /></div>	      <div className='homeIcon'><img src="https://scrappy-afe2cd64144028-staging.s3.ap-south-1.amazonaws.com/public/public/home.png" alt="" onClick={exitChallenge} /></div>
    </div>	 
                 
    </>
  );

}

export default Video
