import React from 'react'
import { Link } from "react-router-dom";
import Navbar from '../../components/global/Navbar';

const AuthHome = () => {

  navigator.mediaDevices
  .getUserMedia({ audio: true, video: false })
  .then(function (stream) {
    playSound('https://scrappy-afe2cd64181944-prod.s3.ap-south-1.amazonaws.com/public/scrappy-news/garbage-metalcreeks.wav')
    playSound('https://scrappy-afe2cd64181944-prod.s3.ap-south-1.amazonaws.com/public/WAVES+SFX+.wav')
    playSound('https://scrappy-afe2cd64181944-prod.s3.ap-south-1.amazonaws.com/public/scrappy-news/wind.wav')
    playSound('https://scrappy-afe2cd64181944-prod.s3.ap-south-1.amazonaws.com/public/COCONUT+FALL+SFX+.wav')


  })
  .catch(function (err) {
    console.log("No mic for you!");
  });
  
  function playSound(url) {
    const audio = new Audio(url);
    audio.play();
  }

  return (
   <>
    <div className="signup-bg">
        <Navbar />

      <div className="d-flex justify-content-center mt-5 position-relative">
     <div className="play-city-globe-img-box">
      <div className="position-relative">

     
      <div className="leader-board-box">

      <div className="position-absolute play-globe-arrow-box">
      <img src="/img/page-2/arrow-crop.gif" alt="" className="img-fluid" />
      </div>

        <div className="position-relative">
      <Link to="/leaderboard">
        <img src="https://scrappy-afe2cd64181944-prod.s3.ap-south-1.amazonaws.com/public/scrappy-news/GlobeAnimation.gif" alt="" className="img-fluid play-city-globe-img" />  
      </Link>
      <div className="globe-signup-box-new">
       <div className="desktop-signup">
      <Link to="#" onClick={()=> alert("Play Universe")}> 
       <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/sign-up-crop.gif" alt=""  useMap="#workmap" className="img-fluid" />
       </Link>
        <map name="workmap" className=''>
        <area shape="rect" coords="34,44,190,190" alt="signup" href="/signup" />
        <area shape="rect" coords="34,44,270,250" alt="signin" href="/signin" />
        </map>
       </div>
      
      </div>
        </div>
      </div>
     
    
      </div>

      </div>
      
      </div>

      <div className="coconut-fall-home">
          <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/Coconut.gif" alt="" className="img-fluid" />
        </div>
      <div className="globe-junk-box">
      <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/garbage.gif" alt="" className="img-fluid globe-img w-100" />
      </div>

      <div className="globe-tree-box">
      <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/coco-tree-crop.gif" alt="" className="img-fluid globe-img" />
      </div>

      
    </div>
   </>
  )
}

export default AuthHome