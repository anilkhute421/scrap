import Header from '../../layout/Header'
import {NavFooter} from '../../components/Navigation'

const Notes = ({onNext, onPrev}) => {
  return (
    <>
      <Header title={'Why'}/>
    <div className='notesPage'>
      <h1 className='heading'>Scrappy Research</h1>
      <div className="bookImage">
      <img src="https://scrappy-afe2cd64144028-staging.s3.ap-south-1.amazonaws.com/public/public/book.webp"  alt=""></img>
      </div>
    <div className='container'>
        <h6>Field Notes.</h6>
        <p>Share your field notes from your field research, people you met, interviewed, found out more about</p>
    </div>
    </div>
    <NavFooter prevClick={onPrev} nextClick={onNext} />
    </>
  )
}

export default Notes
