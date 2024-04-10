import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/global/Navbar'

// about 
const AboutUs = () => {

  navigator.mediaDevices
  .getUserMedia({ audio: true, video: false })
  .then(function (stream) {
    playSound('https://scrappy-afe2cd64181944-prod.s3.ap-south-1.amazonaws.com/public/scrappy-news/wind.wav')
    playSound('https://scrappy-afe2cd64181944-prod.s3.ap-south-1.amazonaws.com/public/WAVES+SFX+.wav')

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
      <div className="bg-sky">

        <Navbar />
       
        <div className="coconut-trees-about">
        <Link to="/home">
        <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/flags-new.gif" alt="" className="img-fluid flag-image-play-city"/>
        </Link>
        </div>

        {/* <div className="bg-green"></div> */}
        
        {/* <Link to="/home">
        <div className="stream-tv">
        <img src="/img/page-1/tv-stream.png" alt="" className="img-fluid" />
        </div>
        </Link> */}

        {/* <div className="kat-green d-none d-lg-block">
        <img src="/img/page-1/green-kathale.png" alt="" className="img-fluid" />
        </div> */}

        {/* <div className="door-flower d-none d-lg-block">
        <img src="/img/page-1/flower-door-new.png" alt="" className="img-fluid" />
        </div> */}

        {/* <div className="img-flowers d-none d-lg-block">
      <img src="/img/page-1/flowers-bottom.png" alt="" className="img-fluid" />
      </div> */}

       <div className="news-home-play-city">
        <div className="newshome-box">
        
        {/* <div className="img-ladder">
        <div className="img-ladder-container">
        <img src="/img/page-1/ladder-img.png" alt="" className="img-fluid" />
        <div className="img-challenge">
        <Link to="/home">
        <img src="/img/page-1/challenge.png" alt="" className="img-fluid" />
        </Link>
        </div>
        </div>
        </div> */}

        </div>
       </div>

           
       {/* <div className="right-flower">
      <img src="/img/page-1/flower-right.png" alt="" className="img-fluid" />
      </div>
      <div className="left-flower">
      <img src="/img/page-1/flower-left.png" alt="" className="img-fluid" />
      </div> */}

        {/* <div className="img-scooter">
        <div className="img-scooter-box">
        <img src="/img/page-1/scooter.png" alt="" className="img-fluid" />
        <div className="img-playball">
        <Link to="/home">
        <img src="/img/page-1/ball-play.png" alt="" className="img-fluid" />
        </Link>
        </div>
        </div>
        </div> */}

      {/* <div className="img-playcity">
      <Link to="/play-city">
      <img src="/img/page-1/play-city.png" alt="" className="img-fluid" />
      </Link>
      </div> */}

      {/* <div className="store-scrappy">
      <Link to="/home" className="w-100 d-block">
      <img src="/img/page-1/scrappy-store.png" alt="" className="img-fluid" />
      </Link>
      </div> */}

      </div>
    </>
  )
}

export default AboutUs