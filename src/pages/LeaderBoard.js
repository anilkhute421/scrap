import React from 'react'
import Navbar from '../components/global/Navbar'
import { Link } from 'react-router-dom'

const LeaderBoard = () => {

  return (
    <>
      <div className="bg-sky-leaderboard bg-sky-leaderboard-flow">

            
            <div className="position-relative">
            <div className="container-fluid">
              <div className="d-flex justify-content-space-between">
                <div className="">
                  <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/clouds.gif" alt="" className="img-fluid" />
                </div>
                <div className="">
                    <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/clouds.gif" alt="" className="img-fluid" />
                </div>
                <div className="">
                    <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/clouds.gif" alt="" className="img-fluid" />
                </div>
              </div>
            </div>

            <div className="position-absolute w-100 leaderboard-top">
              <Navbar />

              <div className="container">
              <div className="row">
              <div className="col-lg-6 text-center">
              <Link to="/leaderboard-mumbai">
              <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/challenge-one.png" alt="" className="img-fluid leaderboard-img-left" />
              </Link>
              </div>
              <div className="col-lg-6 text-center">
              <div className="leader-board-mobile-img">
              <Link to="/leaderboard-bangalore">
              <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/challeng-two.png" alt="" className="img-fluid leaderboard-img-right" />
              </Link>
              </div>
              </div>
              </div>
              </div>
                </div>

               
                <div className="container-fluid">
              <div className="d-flex justify-content-space-between">
                <div className="">
                  <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/clouds.gif" alt="" className="img-fluid" />
                </div>
                <div className="">
                    <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/clouds.gif" alt="" className="img-fluid" />
                </div>
                <div className="">
                    <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/clouds.gif" alt="" className="img-fluid" />
                </div>
              </div>
            </div>


            </div>



       

      </div>
    </>
  )
}

export default LeaderBoard