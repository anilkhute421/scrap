import {React, useState} from 'react'
import { useParams } from 'react-router-dom';
import {NavFooter} from '../../components/Navigation'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import FormControl from '../../components/FormControl'
import {Formik} from 'formik';
import * as Yup from 'yup';
import { Modal } from 'react-bootstrap';
import { API, graphqlOperation} from 'aws-amplify'
import {updateChallengeActivity} from '../../graphql/mutations'


const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required('required'),
});

const Fruits = ({formData,setFormData, allData, onPrev, challengeID}) => {
    const {paramChallengeId} = useParams()
    const [show, setShow] = useState(false)
    const navigate = useNavigate()


  
    const nextClick = async() => {
      let count = 0;
      let error = false

      if(formData.length > 0){
        formData.map((item) => {
          if(item.month.length === 0 && !error){
            alert('Please select month.')
            error = true
            return false
          }else{
            count++
          }
        })
        
        if(formData.length === count){
          if(challengeID){
            const payload = {
                id: challengeID,
                design: JSON.stringify(allData)
            }
                try{
                    await API.graphql(graphqlOperation(updateChallengeActivity, { input: payload }));
                    navigate(`/build/${challengeID}`)
                } catch (err) {
                    console.log('Error creating post: ', err);
                }
        }
          // const payload = {
          //   id: paramChallengeId,
          //   design: JSON.stringify(allData)}
          //   try{
          //       await API.graphql(graphqlOperation(updateChallengeActivity, { input: payload }));
          //       navigate(`/build/${paramChallengeId}`)
          //   } catch (err) {
          //       console.log('Error creating post: ', err);
          //   }
        }
      }else{
        alert('Please add fruits.')
      }
    
    }

    const selectMonth = (id, month) => {
      const temp = [];
      formData.map((item, key) => {
        if(item.id === id){
          if(item.month.includes(month)){
            const index = item.month.indexOf(month)
            item.month.splice(index, 1)
            temp.push(item)
          }else{
            item.month.push(month)
            temp.push(item)
          }
        }else{
          temp.push(item)
        }
      })
      setFormData((prev) => ({...prev, fruits: temp}))
    }
    
    const closeModal = () => {
      setShow(false)
    }

    function generateRandomString(length) {
      var result = '';
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }



    const onSubmit = (data) => {
      if(data.name){
        if (!data.name.replace(/\s/g, '').length){
          alert("Please enter valid name")
        }else{
          setFormData((prev) => ({...prev, fruits: [...prev.fruits, {id: generateRandomString(10), name: data.name, month: []}]}))
        }
      }else{
        alert('Please enter name')
        return false
      }
    }

    const deleteRow = (item) =>{
      const filter = formData.filter((data) => data.id !== item.id)
      setFormData((prev) => ({...prev, fruits: filter}))
    }


  return (
    <div className='vegetablesCoverPage'>
      {}
    <div className='label d-flex justify-content-center position-relative'>
        <img src="https://scrappy-afe2cd64144028-staging.s3.ap-south-1.amazonaws.com/public/public/label.png" alt="" className='mt-4' />
        <h1 className='heading'>Veggies by season</h1>
    </div>
    {/* <div className='conatiner px-3 pt-5'>
        <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h6>
    </div> */}
    <div className='calendar'>
        <div className="addVegetables pe-4">
            <table className='w-100'>
              <thead>
                <th>Fruits</th>
                <th>Jan</th>
                <th>Feb</th>
                <th>Mar</th>
                <th>Apr</th>
                <th>May</th>
                <th>Jun</th>
                <th>July</th>
                <th>Aug</th>
                <th>Sep</th>
                <th>Oct</th>
                <th>Nov</th>
                <th>Dec</th>
              </thead>
              <tbody>
              {formData.map((item, key) => (
                  <tr key={key}>
                  <td className={`cell1`}>{item.name}</td>
                  <td className={`cell ${item.month.includes(1) && 'active'}`} onClick={(e) => selectMonth(item.id, 1)}></td>
                  <td className={`cell ${item.month.includes(2) && 'active'}`} onClick={() => selectMonth(item.id, 2)}></td>
                  <td className={`cell ${item.month.includes(3) && 'active'}`} onClick={() => selectMonth(item.id, 3)}></td>
                  <td className={`cell ${item.month.includes(4) && 'active'}`} onClick={() => selectMonth(item.id, 4)}></td>
                  <td className={`cell ${item.month.includes(5) && 'active'}`} onClick={() => selectMonth(item.id, 5)}></td>
                  <td className={`cell ${item.month.includes(6) && 'active'}`} onClick={() => selectMonth(item.id, 6)}></td>
                  <td className={`cell ${item.month.includes(7) && 'active'}`} onClick={() => selectMonth(item.id, 7)}></td>
                  <td className={`cell ${item.month.includes(8) && 'active'}`} onClick={() => selectMonth(item.id, 8)}></td>
                  <td className={`cell ${item.month.includes(9) && 'active'}`} onClick={() => selectMonth(item.id, 9)}></td>
                  <td className={`cell ${item.month.includes(10) && 'active'}`} onClick={() => selectMonth(item.id, 10)}></td>
                  <td className={`cell ${item.month.includes(11) && 'active'}`} onClick={() => selectMonth(item.id, 11)}></td>
                  <td className={`cell ${item.month.includes(12) && 'active'}`} onClick={() => selectMonth(item.id, 12)}></td> 
                  <td style={{border: 'none'}}>
                          <img src="/images/trash.png" alt="" className='deleteVegiesRow' onClick={() => deleteRow(item)} />
                        </td>
                  </tr>
              ))
               }
               </tbody>
            </table>
        </div>
    </div>
    <Button btnName={'pinkBtn'} title={'Add Fruits'} onClick={() => setShow(true)} />
    <NavFooter prevClick={onPrev} nextClick={nextClick} />
    {/* Add Vegetable Modal */}
    <Modal show={show} className='modalContent'>
      <Modal.Body>
      <Formik
            initialValues={formData}
            validationSchema={SignupSchema}
            onSubmit={onSubmit}
            >
            {({handleChange, handleSubmit, errors, touched, values }) => (
            <form onSubmit={handleSubmit}>
              <h6>Add the name of the fruit</h6>
              <FormControl type="text" name="name" placeholder={'Enter Fruit\'s name'} value={values.name} onChange={handleChange}></FormControl>
              {errors.name && touched.name ? (<div className='required'>{errors.name}</div>) : null}
              <Button btnName={'pinkBtn'} type={'submit'} title={'Save'} />
              <Button btnName={'purpleBtn'} type={'button'} title={'Close'} onClick={closeModal} />
            </form>
            )}
            </Formik>
      </Modal.Body>
    </Modal>
</div>
  )
}

export default Fruits
