import React from 'react'
import { useNavigate } from 'react-router-dom';
import {NavFooter} from '../components/Navigation'
import { useParams } from 'react-router-dom';



const Game = () => {
  const navigate = useNavigate()
  const {paramChallengeId} = useParams()

  const next = () => {
    navigate(`/upload-video/${paramChallengeId}`);
  }
  const goBack = () => {
    navigate(`/publish/${paramChallengeId}`);

  }
  return (
    <>
    <div className='gameCover'>
      <div className='gotoLastPage' onClick={next}></div>
    </div>
      <NavFooter  nextClick={next} prevClick={goBack}/>
    </>
  )
}

export default Game
