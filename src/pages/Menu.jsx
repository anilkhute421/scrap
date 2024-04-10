import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';


const Menu = () => {
    const navigate = useNavigate();
    const {challenge_id, group_id, student_id} = useParams()
    const research = () => {
      if(challenge_id){
        navigate(`/research/${challenge_id}/${group_id}/${student_id}`)
      }
    }
  return (
    <div className='menuCover'>
        <div className='menu'>
          <div className='menuNext'>
            <img src="https://scrappy-afe2cd64144028-staging.s3.ap-south-1.amazonaws.com/public/public/nextWhite.png" onClick={research} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Menu
