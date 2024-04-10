import React from 'react'
import Navbar from '../components/global/Navbar'
import { useNavigate } from 'react-router-dom'

const LeaderBoardBangalore = () => {

    const navigate = useNavigate()

  return (
    <>
     <div className="bg-sky-leaderboard">

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
            <div className="col-lg-3 mt-5 text-center" onClick={() => navigate(-1)}>
            <img src="/img/challenges/left-arrow.png" alt="" className="img-fluid leaderboard-img" />
            </div>
            <div className="col-lg-9 text-center">
            <div className="leader-board-mobile-img">
            <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/bangalore.png" alt="" className="img-fluid leaderboard-img" />
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

export default LeaderBoardBangalore