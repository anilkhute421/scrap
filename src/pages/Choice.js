import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Choice() {
  const navigate = useNavigate();
  navigator.mediaDevices
    .getUserMedia({ audio: true, video: false })
    .then(function (stream) {
      playSound(
        "https://scrappy-afe2cd64181944-prod.s3.ap-south-1.amazonaws.com/public/scrappy-news/wind.wav"
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
      <div className="signup-bg">
        <div
          style={{
            display: "flex",
            flex: 2,
          }}
        >
          <div
            style={{
              display: "flex",
              flex: 1,
            }}
            onClick={() => {
              navigate("/stream");
            }}
          >
            <Link to="/stream">
              <div
                style={{
                  position: "absolute",
                  left: "20%",
                }}
              >
                <Link to="#" onClick={() => console.log("on click tv")}>
                  <img
                    src="/img/page-2/play-tv-mobile.png"
                    alt=""
                    className="img-fluid globe-img "
                  />
                </Link>
              </div>

              <div>
                <div className="video-bg-choice-play-city">
                  <div className="img-box-choice-play-tv">
                    <img
                      src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/scr-app-football.gif"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="globe-tree-box">
                <img
                  src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/coco-tree-crop.gif"
                  alt=""
                  className="img-fluid globe-img"
                />
              </div>
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              flex: 1,
              paddingLeft: "200px",
            }}
          >
            {/* <div className="d-flex justify-content-center mt-5 position-relative">
              <div className="play-city-globe-img-box">
                <div className="position-relative"> */}
            <div className="leader-board-box-choice">
              <div className="position-absolute play-globe-arrow-box">
                <img
                  src="/img/page-2/arrow-crop.gif"
                  alt=""
                  className="img-fluid"
                />
              </div>

              <div className="">
                {/* <Link to="/leaderboard"> */}
                <img
                  src="https://scrappy-afe2cd64181944-prod.s3.ap-south-1.amazonaws.com/public/scrappy-news/GlobeAnimation.gif"
                  alt=""
                />
                {/* </Link> */}
                <div className="globe-signup-box-new">
                  <div className="desktop-signup">
                    <Link to="#" onClick={() => alert("Play Universe")}>
                      <img
                        src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/sign-up-crop.gif"
                        alt=""
                        useMap="#workmap"
                        className="img-fluid"
                      />
                    </Link>
                    <map name="workmap" className="">
                      <area
                        shape="rect"
                        coords="34,44,190,190"
                        alt="signup"
                        href="/signup"
                      />
                      <area
                        shape="rect"
                        coords="34,44,270,250"
                        alt="signin"
                        href="/signin"
                      />
                    </map>
                  </div>
                </div>
              </div>
            </div>
            {/* </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="globe-junk-box">
          <div className="position-relative">
            <div className="position-absolute-junk">
              <img
                src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/junk-crop.gif"
                alt=""
                className="img-fluid w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
