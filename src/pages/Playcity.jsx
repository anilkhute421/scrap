import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavigationButton from '../components/Navigation'
import { useParams } from 'react-router-dom';


const Playcity = () => {
    const {challenge_id, group_id, student_id} = useParams()
    const navigate = useNavigate()
    const prev = () => {
        navigate('/')
    }
    const next = () => {
        if(challenge_id){
            navigate(`/menu/${challenge_id}/${group_id}/${student_id}`)
        }
    }
  return (
    <div className='playCityCover'>
        <div className='d-flex justify-content-center'>
        <img src="https://scrappy-afe2cd64144028-staging.s3.ap-south-1.amazonaws.com/public/public/playcity.png" className='playcityImage' alt=""></img>
        </div>
        <div className='mt-4'>
            <p>Urban Vertical Farm Challenge Scrappy Researchers, Designers, Builders, Infinite Game Players</p>
            <p>We’re delighted you’re here to submit your challenge.</p>
            <p>Be <span className='diagnoalText'>Scrappy<img src='https://scrappy-afe2cd64144028-staging.s3.ap-south-1.amazonaws.com/public/public/football.png' alt=''></img></span> Keep playing</p>
        </div>
        <NavigationButton prevClick={prev} nextClick={next} />
    </div>
  )
}

export default Playcity
