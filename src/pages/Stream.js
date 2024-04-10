import React, { useRef } from 'react'
import Navbar from '../components/global/Navbar'

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
  },
  {
    id: 4,
    videoUrl:"https://scrappy-afe2cd64181944-prod.s3.ap-south-1.amazonaws.com/public/scrappy-news/video-four.mp4",
    imgUrl: "https://scrappy-afe2cd64181944-prod.s3.ap-south-1.amazonaws.com/public/scrappy-news/vid-four.jpg",
    title: "Message in the Bottle | Scrappy News | Mexico",
    desc: "Hola! There is plastic in the ocean everywhere. Our scrappy reporters in Mexico are out to find a solution."
  },
  {
    id: 5,
    videoUrl:"https://scrappy-afe2cd64181944-prod.s3.ap-south-1.amazonaws.com/public/scrappy-news/video-five.mp4",
    imgUrl: 'https://scrappy-afe2cd64181944-prod.s3.ap-south-1.amazonaws.com/public/scrappy-news/vid-five.jpg',
    title: "Scrappy unplugged | Scrappy News",
    desc: "The Children's Scrappy News Service is a makeshift news service run by kids for kids. www.scrappynews.com"
  },
  {
    id: 6,
    videoUrl:"https://scrappy-afe2cd64181944-prod.s3.ap-south-1.amazonaws.com/public/scrappy-news/video-six.mp4",
    imgUrl: 'https://scrappy-afe2cd64181944-prod.s3.ap-south-1.amazonaws.com/public/scrappy-news/vid-six.jpg',
    title: "LIVESTREAM Scrappy Mexico",
    desc: "Hola! Scrappy Mexico. Above all it doesn't pollute."
  },
]

const Stream = () => {

  navigator.mediaDevices
  .getUserMedia({ audio: false, video: false })
  .then(function (stream) {
    playSound('https://scrappy-afe2cd64181944-prod.s3.ap-south-1.amazonaws.com/public/scrappy-news/wind.wav')

  })
  .catch(function (err) {
    console.log("No mic for you!");
  });
  
function playSound(url) {
  const audio = new Audio(url);
  audio.play();
}

  // video 

  const videoRef = useRef(null); // add a reference to the video element
  
  const playVideo = (videoUrl) => { // create a function to play the video
    videoRef.current.src = videoUrl;
    videoRef.current.play();
  };

  return (
    <section className='stream-bg'>
      <Navbar />

          <div className="position-absolute google-play-img">
            <a href="https://play.google.com/store/apps/details?id=com.goingtoschool.scrappy">
            <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/google-play.png" alt="" className="img-fluid" />
            </a>
           </div>

      <div className="stream-video container mt-5">
        <div className="position-relative stream-parent">

          <div className="position-absolute scrappy-video-box w-100">
            <div className="row mx-auto">
              <div className="col-8 col-lg-6 my-auto">
                <div className="stream-video-bg">
                  <video ref={videoRef} controls loop autoPlay muted className='w-100'>
                    <source src={streamVideos[0].videoUrl}  type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className="col-8 col-lg-4 my-auto">
                <div className="stream-list-view py-5 px-3">
                  {streamVideos?.map((streamVideo) => {
                    return (
                      <div className="row" onClick={() => playVideo(streamVideo.videoUrl)}>
                        <div className="col-4">
                        <div className="slv-box-left me-2">
                        <img src={streamVideo?.imgUrl} alt="" className="img-fluid slv-box-img" />
                         </div>
                        </div>
                        <div className="col-8">
                        <div className="slv-box-right">
                        <h6>{streamVideo.title}</h6>
                        <p>{streamVideo.desc}</p>
                      </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Stream