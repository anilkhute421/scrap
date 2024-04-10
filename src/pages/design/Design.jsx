import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavigationButton from '../../components/Navigation'
import { useParams } from 'react-router-dom'

const Design = ({onNext}) => {
    const navigate = useNavigate()
    const {paramChallengeId} = useParams()

    const prev = () => {
        if(paramChallengeId){
          navigate(`/research/${paramChallengeId}`)
        }
    }
    
  return (
    <div className='designCover'>
    <div className='designContent'>
        <h1 className='heading'>Scrappy Design</h1>
        <p>You know where you want to build your vertical farm, you know why, you know how many people want to eat leafy greens grown in your organic farm in the sky. </p>
        <p>Upload your design for your farm in the sky.</p>
    </div>
    <NavigationButton prevClick={prev} nextClick={onNext} />
    </div>
  )
}

export default Design
