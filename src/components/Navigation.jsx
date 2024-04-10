import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navigation = ({prevClick, nextClick}) => {
  return (
    <div className=''>
         <div className='navigationButtons'>
            <img src="https://scrappy-afe2cd64144028-staging.s3.ap-south-1.amazonaws.com/public/public/prev.png" className='prev' alt="" onClick={prevClick}></img>
        </div>
        <div className='navigationButtons'>
            <img src="https://scrappy-afe2cd64144028-staging.s3.ap-south-1.amazonaws.com/public/public/next.png" className='next' alt="" onClick={nextClick}></img>
        </div>
    </div>
  )
}

export default Navigation

export const NavFooter = ({prevClick, nextClick}) => {
  const navigate = useNavigate()

  const exitChallenge = () => {
    navigate('/exit-challenge')
  }

  return (
    <div className='navigationBar'>
      <div><img src="https://scrappy-afe2cd64144028-staging.s3.ap-south-1.amazonaws.com/public/public/prevWhite.png" className='prev' alt="" onClick={prevClick} ></img></div>
      <div><img src="https://scrappy-afe2cd64144028-staging.s3.ap-south-1.amazonaws.com/public/public/home.png" className='prev' alt="" onClick={exitChallenge} style={{width: '40px', marginTop: '10px'}} ></img></div>
      <div><img src="https://scrappy-afe2cd64144028-staging.s3.ap-south-1.amazonaws.com/public/public/nextWhite.png" className='prev' alt="" onClick={nextClick} ></img></div>
    </div>
  )
}
