import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/global/Navbar";

const Challenges = () => {
  const navigate = useNavigate()
  navigator.mediaDevices
    .getUserMedia({ audio: true, video: false })
    .then(function (stream) {
      playSound(
        "https://scrappy-afe2cd64181944-prod.s3.ap-south-1.amazonaws.com/public/scrappy-news/wind.wav"
      );
      playSound(
        "https://scrappy-afe2cd64181944-prod.s3.ap-south-1.amazonaws.com/public/Scooter_Horn_03_ST.wav"
      );
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
      <div className="bg-sky-leaderboard-challenges">
        <Navbar />

        <div className="globe-tree-box">
          <img
            src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/palm-tree.gif"
            alt=""
            class="img-fluid globe-img"
          />
        </div>

        <div className="position-absolute challenges-flag">
          <img
            src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/challenges-play-city-flag-new.gif"
            alt=""
            class="img-fluid"
          />
        </div>

        <div
          className="position-absolute challenge-one"
          draggable
          onDrag={(event) => {
            event.preventDefault();
          }}
        >
          <img
            src="/img/challenges/farm-challenge.png"
            alt=""
            class="img-fluid"
          />
        </div>

        <div className="position-absolute challenge-two" draggable>
          <img
            src="/img/challenges/sunny-solar-challenge.png"
            alt=""
            class="img-fluid"
          />
        </div>

        <div class="img-scooter">
          <div class="img-scooter-box">
            <img
              src="/img/challenges/challenge-bike.png"
              alt=""
              class="img-fluid"
            />
          </div>
        </div>

        <div
          className="challenges-box"
          onDrop={(event) => {
            navigate('/home')
          }}
          onDragOver={(event) =>{
            event.preventDefault();
          }}
        >
          <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/mobile.png" alt="" className="img-fluid" />
          <div className="position-absolute play-challenges-box">
            <p>Play Challenges</p>
          </div>
          <div className="challenges-box-play position-absolute">
            <div className="cursor-pointer">
              <Link to="/signin">
                <img
                  src="/img/challenges/play-btn.png"
                  alt=""
                  className="img-fluid"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="challenges-flowers">
          <img
            src="/img/challenges/challenges-flower.png"
            alt=""
            className="img-fluid"
          />
        </div>

        {/* <div className="position-absolute challenge-roads">
      <img src="/img/challenges/challenge-road.png" alt="" className="img-fluid w-100" />
      </div> */}
      </div>
    </>
  );
};

export default Challenges;
