import React, { useEffect, useRef, useState } from 'react'

const Sound = () => {
    // const audioRef = useRef();
    // function handlePlay() {
    //     const audio = audioRef.current;
    //     audio.play();
    // }


  


    return (
        <>
            <audio ref={audioRef} loop>
                <source src="https://scrappy-afe2cd64181944-prod.s3.ap-south-1.amazonaws.com/public/scrappy-news/garbage-metalcreeks.wav" type="audio/mpeg" />
            </audio>
            <button onClick={handlePlay}>
              Play
            </button>
        </>
    );
}


export default Sound