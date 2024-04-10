import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, History } from "swiper";
// import Swiper JS
// import Swiper styles
import 'swiper/css';
import { useNavigate } from 'react-router-dom';
import { avatarImages } from '../../utils/avatars';
import { useDispatch, useSelector } from 'react-redux';
import { selectAvatar } from '../../features/user/userSlice';
import { addUserImageToLocalStorage } from '../../utils/localStorage';

const ProfileSelect = () => {
    const [slideView,setSlideView] = useState(6)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
     window.innerWidth < 600 && setSlideView(3)
     window.innerWidth < 325 && setSlideView(2)
    }, [])

    const [selectImage, setSelectImage] = useState({})

    const handleSelectImage = (avatarImageId) =>{
       const userProfileImg =  avatarImages.find((item) => item.avatarImageId === avatarImageId)
       setSelectImage(userProfileImg)
       addUserImageToLocalStorage(userProfileImg)
       dispatch(selectAvatar(userProfileImg))
       if(selectImage){
         navigate('/profile-success')
       }
    }



  return (
    <>
     <div className="signup-bg">


        <div className="bg-silver">
        <div className='container pt-5'>
            {/* top btns start */}
         <div className="signup-school-top-box d-flex justify-content-between">
            <div className="signup-school-top-box-one">
            <button onClick={() => navigate(-1)}>
            <img src="/img/signup-school/left-arrow.png" alt="" className="img-fluid" />
            </button>
            </div>
            

            <div className="signup-school-top-box-one">
            <div className="position-relative">
            <img src="/img/signup-school/bg-white.png" alt="" className="img-fluid" />
            <div className="position-absolute scrappy-profile">
            <p>Building Your Scrappy Profile!</p>
            </div>
            </div>
            </div>

            <div className="signup-school-top-box-one" onClick={()=> navigate('/')}> 
            <button type='submit'> <img src="/img/signup-school/right-arrow.png" alt="" className="img-fluid" /> </button>  
            </div>
            </div>
            {/* top btns end */}
         </div>
        </div>
        

    <section className="profile-cards-bg">
     <div className="ps-bg  container pt-5 pb-5">
            <Swiper
        slidesPerView={slideView}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
         {
            avatarImages.map((avatarImage) =>{
               return (
                  <SwiperSlide key={avatarImage?.avatarImageId}>
                  <div className="img-slider-box position-relative">
                  <img src="/img/signup-school/profile-card.png" alt="" className="img-fluid" />
                  <div className="slider-img-card position-absolute">
                  <img src={avatarImage?.avatarNetworkImage} alt="" className="img-fluid" onClick={()=> handleSelectImage(avatarImage?.avatarImageId)} />
                  </div>
                  </div>
                  </SwiperSlide>
               )
            })
         }
       
      
      </Swiper>

        </div>
        </section>

         <div className="bg-green-profile-card"></div>
         <div className="bg-yellow-profile-card"></div>

         <div className="bg-profilecard-red bg-danger">
         <div className="container">
        <div className="row d-flex justify-content-end">
           <img src="/img/signup-school/robo-msg.png" alt="" className="img-fluid robo-msg" />
         </div>
        </div>
         </div>
         <img src="https://tcw-scrappy-web.s3.ap-south-1.amazonaws.com/public/gold-bottom.png" alt="" className="img-fluid w-100" />
        </div>
    </>
  )
}

export default ProfileSelect