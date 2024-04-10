import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProfileSelectSuccess = () => {

    const { avatar } = useSelector((state) => state?.user)
    const { user } = useSelector((state) => state?.user)
    const navigate = useNavigate()


  return (
    <div className="school-signup-bg-new">
    <div className="container pt-5">

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

        <div className="signup-school-top-box-one">
          <button type='submit'> <img src="/img/signup-school/right-arrow.png" alt="" className="img-fluid" onClick={() => navigate('/')} /> </button>
        </div>
      </div>
      {/* top btns end */}

      <div className="d-flex justify-content-center mt-5">
      <div className="position-relative">
        <div className="close-icon">
            <img src="/img/page-4/close.png" alt="" className="img-fluid" />
        </div>
      <img src="/img/page-4/red-tv.png" alt="" className="img-fluid" />
      <div className="user-profile-img-container">
        <img src={avatar?.avatarNetworkImage} alt="" className="img-fluid" />
      </div>
      <div className="user-profile-description">
        <p> Hey {user?.firstName} Great choice. </p>
        <p> You're ready to be scrappy.</p>
      </div>
      </div>
      </div>


    </div>
  </div>
  )
}

export default ProfileSelectSuccess