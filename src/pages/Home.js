import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'



const Home = () => {

  navigator.mediaDevices
    .getUserMedia({ audio: true, video: false })
    .then(function (stream) {
      playSound('https://scrappy-afe2cd64181944-prod.s3.ap-south-1.amazonaws.com/public/scrappy-news/wind.wav')
      playSound('https://scrappy-afe2cd64181944-prod.s3.ap-south-1.amazonaws.com/public/BALL+BOUNCING+SFX+.wav')
      playSound('https://scrappy-afe2cd64181944-prod.s3.ap-south-1.amazonaws.com/public/latin+beats.mp3')

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
        <div className="coconut-tree">
        
        </div>

        {/* <div className="bg-green"></div> */}

       

        <div className="kat-green d-none d-lg-block">
          <img src="/img/page-1/green-kathale.png" alt="" className="img-fluid" />
        </div>

        <div className="door-flower d-none d-lg-block">
          <img src="/img/page-1/flower-door-new.png" alt="" className="img-fluid" />
        </div>

        <div className="img-flowers d-none d-lg-block">
          <img src="/img/page-1/flowers-bottom.png" alt="" className="img-fluid" />
        </div>

        <div className="news-home h-100">
         <div className="position-relative h-100">

         <div className="flag-image-desktop d-none d-lg-block">
            <a href="/about-us">
              <img src="https://scrappy-afe2cd64181944-prod.s3.ap-south-1.amazonaws.com/public/scrappy-news/flag-crop.gif" alt="" className="img-fluid" />
            </a>
            </div>


          <div className="ladder-img d-none d-lg-block">
         <div className="position-relative h-100">
         <div className="stream-tv-desktop position-absolute">
            <a href="/stream">
            <img src="/img/page-1/tv-stream.png" alt="" className="img-fluid" />
        </a>
          </div>

         

             <div className="img-challenge-desktop">
                  <a href="/challenges">
                    <img src="/img/page-1/challenge.png" alt="" className="img-fluid" />
                  </a>
                </div>

         </div>
          </div>

        {/* mob  */}
        <div className="newshome-box h-100 d-block d-lg-none">
            <div className="img-ladder">
              <div className="img-ladder-container">
              <div className="flag-image">
            <a href="/about-us">
              <img src="https://scrappy-afe2cd64181944-prod.s3.ap-south-1.amazonaws.com/public/scrappy-news/flag-crop.gif" alt="" className="img-fluid" />
            </a>
            </div>
          <div className="stream-tv">
            <a href="/stream">
            <img src="/img/page-1/tv-stream.png" alt="" className="img-fluid" />
        </a>
          </div>
                <img src="/img/page-1/ladder-img.png" alt="" className="img-fluid" />
                <div className="img-challenge">
                  <a href="/challenges">
                    <img src="/img/page-1/challenge.png" alt="" className="img-fluid" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        {/* mob  */}


         </div>
        </div>


        {/* <div className="right-flower">
      <img src="/img/page-1/flower-right.png" alt="" className="img-fluid" />
      </div> */}
        {/* <div className="left-flower">
      <img src="/img/page-1/flower-left.png" alt="" className="img-fluid" />
      </div> */}

        <div className="coconut-fall">
          <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/Coconut.gif" alt="" className="img-fluid" />
        </div>

        <div className="img-scooter-bike">
          <div className="img-scooter-box">
            <img src="/img/page-1/scooter.png" alt="" className="img-fluid" />
            <div className="img-playball">
              <a href="/home">
                <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/Pink-Ball.gif" alt="" className="img-fluid" />
              </a>
            </div>
          </div>
        </div>

        {/* <div className="img-playcity">
          <a href="/home">
            <img src="/img/page-1/play-city.png" alt="" className="img-fluid" />
          </a>
        </div> */}
       <div className="img-playcity">
       <img src="/img/page-1/play-city.png" alt=""  useMap="#workmap" className="img-fluid" />
        <map name="workmap" className=''>
        <area shape="rect" coords="10,60,260,230" alt="signup" href="/choice" />
        <area shape="rect" coords="10,70,260,310" alt="signin" href="/home" />
        </map>
       </div>
      

        <div className="store-scrappy">
          <a href="https://play.google.com/store/apps/details?id=com.goingtoschool.scrappy" className="w-100 d-block">
            <img src="/img/page-1/scrappy-store.png" alt="" className="img-fluid" />
          </a>
        </div>




      </div>
    </>
  )
}

export default Home