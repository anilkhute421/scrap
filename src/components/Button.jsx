import React from 'react'

const Button = ({btnName, title, type , onClick}) => {
  return (
    <div className='purpleBtn' onClick={onClick}>
      <button type={type} >
        <img src={`/Images/${btnName}.png`}  alt=""></img>
        <div className='buttonText'>
            <h5 className='text-white'>{title}</h5>
        </div>
      </button>
    </div>
  )
}

export default Button
