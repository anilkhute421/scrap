import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const Index = () => {
  const navigate = useNavigate();
  const {challenge_id, group_id, student_id} = useParams()


  useEffect(() => {
    setTimeout(() => {
      if(challenge_id){
        navigate(`/playcity/${challenge_id}/${group_id}/${student_id}`);
      }
    }, 2000)
  },[navigate])
  return (
    <>
      <HomePage />
    </>
  )
}

export default Index

export const HomePage = () => {
    return (
      <><img src="https://scrappy-afe2cd64144028-staging.s3.ap-south-1.amazonaws.com/public/public/cover1.webp" className='coverImage' alt=""></img></>
    )
}

export const PlayCity = () => {
    return (
      <>
        <h1>PlayCity</h1>
      </>
    )
}
