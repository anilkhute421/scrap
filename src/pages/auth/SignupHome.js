import React from 'react'
import { Link } from "react-router-dom";

const SignupHome = () => {
  return (
   <>
    <div className="signup-bg">
     <div className="globe-img-box">
      <Link to="/leaderboard" onClick={()=> alert("Play Universe")}> 
      <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/globe-reveal-croped.gif" alt="" className="img-fluid globe-img" />
      </Link>
      </div>
      <div className="globe-junk-box">
      <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/junk-crop.gif" alt="" className="img-fluid globe-img" />
      </div>
      <div className="globe-tree-box">
      <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/coco-tree-crop.gif" alt="" className="img-fluid globe-img" />
      </div>
      <div className="globe-arrow-box">
      <img src="/img/page-2/arrow-crop.gif" alt="" className="img-fluid  arrow-img" />
      </div>
      <div className="globe-playtv-box">
      <Link to="#" onClick={()=> alert("Play TV")}> 
      <img src="/img/page-2/play-tv-crop.gif" alt="" className="img-fluid globe-img d-none d-lg-block" />
      </Link>
      <Link to="#" onClick={()=> alert("Play TV")}> 
      <img src="/img/page-2/play-tv-mobile.png" alt="" className="img-fluid globe-img d-block d-lg-none" />
      </Link>
      </div>
      <div className="globe-signup-box">
       <div className="desktop-signup">
       <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/sign-up-crop.gif" alt=""  useMap="#workmap" className="img-fluid globe-signup-img-desktop d-none d-lg-block" />
        <map name="workmap" className=''>
        <area shape="rect" coords="34,44,190,190" alt="signup" href="/signup" />
        <area shape="rect" coords="34,44,270,250" alt="signin" href="/signin" />
        </map>
       
       </div>
      <img src="/img/page-2/sign-up-in-mobile.png" alt="" useMap="#workmapmobile" className="img-fluid  d-sm-block d-md-none" />
      <map name="workmapmobile">
        <area shape="rect" coords="30,29,240,70" alt="signup" href="/signup"  />
        <area shape="rect" coords="34,44,190,190" alt="signin"  href="/signin" />
        </map>
      </div>
      <div className="globe-tv-slider-box">
      <img src="/img/page-2/tv-slider.png" alt="" className="img-fluid globe-img" />
      </div>
      <div className="globe-scr-football-box">
      <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/scr-app-football.gif" alt="" className="img-fluid globe-img" />
      </div>
    </div>
   </>
  )
}

export default SignupHome