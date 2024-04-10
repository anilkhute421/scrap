import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/global/Navbar'

const ScrappyShop = () => {

  navigator.mediaDevices
    .getUserMedia({ audio: true, video: false })
    .then(function (stream) {
      playSound('https://scrappy-afe2cd64181944-prod.s3.ap-south-1.amazonaws.com/public/scrappy-news/wind.wav')
      playSound('https://scrappy-afe2cd64181944-prod.s3.ap-south-1.amazonaws.com/public/latin+beats.mp3')

    })
    .catch(function (err) {
      console.log("No mic for you!");
    });

  function playSound(url) {
    const audio = new Audio(url);
    audio.play();
  }


  return (
    <>
      <div className="bg-sky">

        <Navbar />


        <div className="d-flex justify-content-center">
          <div className="position-relative scrappy-shop-img-box">
            <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/scrap-shop-four.png" alt="" className="img-fluid" />



            {/* scrappy bag */}
            <div className="position-absolute scrapy-bag text-center">
              {/* <img src="/img/scrappy-shop/shop-bag-blue.png" alt="" className="img-fluid scrap-book-img" /> */}
              <img src="/img/scrappy-shop/bags-title.png" alt="" className="img-fluid scrap-book-img" />
              <div className="scrapy-shop-content d-flex justify-content-evenly">
              <img src="/img/scrappy-shop/green-bag-front.png" alt="" className="img-fluid scrapy-bag-img" />
              <img src="/img/scrappy-shop/green-bag-back.png" alt="" className="img-fluid scrapy-bag-img" />
                
                {/* <div className="ssh-right">
                  <b>Backpacks</b>
                  <div className='star-container'>
                    <div className="ssh-left me-1">
                      <img src="/img/scrappy-shop/star.png" alt="" className="img-fluid" />
                    </div>
                    <p>100 Stars</p>
                  </div>
                </div> */}
              </div>
            </div>
            {/* scrappy bag */}


            {/* scrappy Robo */}
            <div className="position-absolute scrapy-robo-two text-center">
              {/* <img src="/img/scrappy-shop/robo-shop.png" alt="" className="img-fluid scrap-book-img" /> */}
              <img src="/img/scrappy-shop/robot-title.png" alt="" className="img-fluid" />
              <div className="scrapy-shop-content d-flex justify-content-evenly">
              <img src="/img/scrappy-shop/robo-shop.png" alt="" className="img-fluid scrapy-robot-img" />
              <img src="/img/scrappy-shop/robot-back.png" alt="" className="img-fluid scrapy-robot-img" />

                {/* <div className="ssh-right">
                  <b>Robots</b>
                  <div className='star-container'>
                    <div className="ssh-left me-1">
                      <img src="/img/scrappy-shop/star.png" alt="" className="img-fluid" />
                    </div>
                    <p>300 Stars</p>
                  </div>
                </div> */}
              </div>
            </div>
            {/* scrappy Robo */}




            {/* scrappy tshirt */}
            <div className="position-absolute scrapy-tshirt text-center">
              {/* <img src="/img/scrappy-shop/shop-tshirt-blue.png" alt="" className="img-fluid scrap-book-img" /> */}
              <img src="/img/scrappy-shop/shirt-title.png" alt="" className="img-fluid scrap-book-img" />

              <div className="scrapy-shop-content d-flex justify-content-evenly">

              <img src="/img/scrappy-shop/yellow-shirt-front.png" alt="" className="img-fluid scrapy-shirt-img" />
              <img src="/img/scrappy-shop/yellow-shirt-back.png" alt="" className="img-fluid scrapy-shirt-img" />
                {/* <div className="ssh-right">
                  <b>T-shirts</b>
                  <div className='star-container'>
                    <div className="ssh-left me-1">
                      <img src="/img/scrappy-shop/star.png" alt="" className="img-fluid" />
                    </div>
                    <p>50 Stars</p>
                  </div>
                </div> */}
              </div>
            </div>
            {/* scrappy tshirt */}




            {/* scrappy book */}
            <div className="position-absolute scrapy-book text-center">
              <img src="/img/scrappy-shop/book-title.png" alt="" className="img-fluid scrap-book-img" />
              <div className="scrapy-shop-content d-flex justify-content-evenly">
              <img src="/img/scrappy-shop/book-front.png" alt="" className="img-fluid scrapy-book-img" />
              <img src="/img/scrappy-shop/book-back.png" alt="" className="img-fluid scrapy-book-img" />

                {/* <div className="ssh-right">
                  <b>Scrap Book</b>
                  <div className='star-container'>
                    <div className="ssh-left me-1">
                      <img src="/img/scrappy-shop/star.png" alt="" className="img-fluid" />
                    </div>
                    <p>25 Stars</p>
                  </div>
                </div> */}
              </div>
            </div>
            {/*  scrappy book */}

            <div className="download-btn position-absolute">
              <a href="https://scrappy-afe2cd64181944-prod.s3.ap-south-1.amazonaws.com/public/scrappy-news/robobook.pdf" download>
                <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/download-btn-new.png" alt="" className="img-fluid" />
              </a>
            </div>

          </div>
        </div>


      </div>
    </>
  )
}

export default ScrappyShop