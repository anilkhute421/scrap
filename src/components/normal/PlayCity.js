import React, { useRef, useState } from 'react'
import { Link } from "react-router-dom";
import Navbar from '../global/Navbar';

const streamVideos = [
  {
    id: 1,
    videoUrl:"https://scrappy-afe2cd64181944-prod.s3.ap-south-1.amazonaws.com/public/scrappy-news/video-one.mp4",
    imgUrl: "https://scrappy-afe2cd64181944-prod.s3.ap-south-1.amazonaws.com/public/scrappy-news/vid-one.jpg",
    title: "The Children's Scrappy News Service | Mexico",
    desc: "The Children's Scrappy News Mexico congratulates Scrappy News India for launching The Children's Scrappy News Service."
  },
  {
    id: 2,
    videoUrl:"https://scrappy-afe2cd64181944-prod.s3.ap-south-1.amazonaws.com/public/scrappy-news/video-2.mp4",
    imgUrl: 'https://scrappy-afe2cd64181944-prod.s3.ap-south-1.amazonaws.com/public/scrappy-news/vid-two.jpg',
    title: "Good Food | Scrappy News | Mexico",
    desc: "You are what you eat. Do you know what is Organic food? Find out what our Scrappy Reporters in Mexico are eating."
  },
  {
    id: 3,
    videoUrl:"https://scrappy-afe2cd64181944-prod.s3.ap-south-1.amazonaws.com/public/scrappy-news/video-three.mp4",
    imgUrl: 'https://scrappy-afe2cd64181944-prod.s3.ap-south-1.amazonaws.com/public/scrappy-news/vid-three.jpg',
    title: "Cycling Cities | Scrappy News | Mexico",
    desc: "Hola! Riding a bicycle is very good. It's not just fun, it's also good for your health and cheaper than having a car. Above all it doesn't pollute."
  }
]

const PlayCity = () => {

  // navigator.mediaDevices
  // .getUserMedia({ audio: true, video: false })
  // .then(function (stream) {
  //   playSound('https://scrappy-afe2cd64181944-prod.s3.ap-south-1.amazonaws.com/public/scrappy-news/wind.wav')

  // })
  // .catch(function (err) {
  //   console.log("No mic for you!");
  // });
  
  // function playSound(url) {
  //   const audio = new Audio(url);
  //   audio.play();
  // }


  // const [playVideos, setPlayVideos] = useState(streamVideos)
  const [activeVideoId, setActiveVideoId] = useState(streamVideos[0].id);

  const videoRef = useRef(null); 
  
  const playVideo = (videoUrl, videoId) => { 
    videoRef.current.src = videoUrl;
    videoRef.current.play();
    setActiveVideoId(videoId)
  };

  return (
   <>
    <div className="signup-bg">
      <div className="position-relative">
        <Navbar />
        <div className="globe-playtv-box w-100">
            <Link to="#" onClick={() => videoRef.current.play()}> 
            <img src="/img/page-2/play-tv-mobile.png" alt="" className="img-fluid globe-img " />
            </Link>
            </div>
            
         <div className="position-relative">
              <div className="video-bg-play-city">
          {/* video  */}
                <div className="position-relative h-90">
                <video ref={videoRef}  loop autoPlay  controls className='video-small'>
                <source src={streamVideos[0].videoUrl}  type="video/mp4" />
                  </video>
                </div>
          {/* video  */}
          
          <div className="img-box-play-tv">
            <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/scr-app-football.gif" alt="" className="img-fluid" />
          </div>

           
           <div className="play-tv-arrow-left">
           <img src="/img/page-2/arrow-left.png" alt="" className="img-fluid" />
           </div>

           <div className="play-tv-arrow-right">
           <img src="/img/page-2/arrow-right.png" alt="" className="img-fluid" />
           </div>




          {/* video map  */}
          <div className="position-absolute play-tv-box">
            <div className="d-flex ">
          {streamVideos?.map((streamVideo) => {
              return (
                  <div className={`play-tv-child me-2 ${activeVideoId === streamVideo.id ? "video-active" : ""}`} 
                  key={streamVideo.id}
                  onClick={() => {
                    playVideo(streamVideo.videoUrl, streamVideo.id)
                  }} >
                    <img src={streamVideo?.imgUrl} alt="" className="img-fluid playcity-box-img" />
                  </div>
              )
            })}
          </div>
          </div>
          {/* video map  */}
              </div>

           
            </div>
      </div>

   
      <div className="globe-junk-box">
        <div className="position-relative">

         
           <div className="position-absolute-junk">
           <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/junk-crop.gif" alt="" className="img-fluid w-100" />
           </div>

        </div>
      </div>
      <div className="globe-tree-box">
      <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/coco-tree-crop.gif" alt="" className="img-fluid globe-img" />
      </div>
     
    
     
    </div>
   </>
  )
}

export default PlayCity