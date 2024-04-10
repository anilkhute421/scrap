import React from 'react'

const Plan = ({onNext, onPrev}) => {

  return (
    <div className='planCoverPage'>
        <div className='planCard'>
            <h1 className='heading'>Scrappy Organic Farmers, what’s your farming plan</h1>
            <p>What will you plant & grow?</p>
            <p>Remember to look back at your field notes about what people wanted you to grow before you make your plan.</p>
            <p>Upload your plan for the seasons of the year where in the world your farm will be</p>
            <div className='d-flex justify-content-between'>
                <img src="https://scrappy-afe2cd64144028-staging.s3.ap-south-1.amazonaws.com/public/public/prev.png" alt="" className='next' onClick={onPrev} />
                <img src="https://scrappy-afe2cd64144028-staging.s3.ap-south-1.amazonaws.com/public/public/next.png" alt="" className='next' onClick={onNext} />
            </div>
        </div>
    </div>
  )
}

export default Plan
