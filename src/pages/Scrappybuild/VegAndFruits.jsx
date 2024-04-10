import {useState, useContext, useEffect} from 'react'
import {NavFooter} from '../../components/Navigation'
import Button from '../../components/Button';
import { API, graphqlOperation} from 'aws-amplify'
import {updateChallengeActivity} from '../../graphql/mutations'

const VegAndFruits = ({formData, setFormData, onPrev, onNext, challengeID}) => {
    const [style, setStyle] = useState({});

    setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${95}%`
		}
		setStyle(newStyle);
	}, 200);

  const next = async () => {
    if(challengeID){
      const payload = {
        id: challengeID,
        build: JSON.stringify(formData)}
        try{
            await API.graphql(graphqlOperation(updateChallengeActivity, { input: payload }));
            onNext()
        } catch (err) {
            console.log('Error creating post: ', err);
        }
    }
  }
 
    const selectMonth = (id, month) => {
        const temp = [];
        formData.vegetables?.map((item, key) => {
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
        setFormData((prev) => ({...prev, vegetables: temp}))
      }

      const selectMonth2 = (id, month) => {
        const temp = [];
        formData.fruits?.map((item, key) => {
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


  return (
    <>
    <div className='verticalFarmCover'>
        <div className="flowers">
            <div className='MyContainer'  style={{height: '92vh'}}>
                <div className='paperLable'>
                    <img src="https://scrappy-afe2cd64144028-staging.s3.ap-south-1.amazonaws.com/public/public/paperLabel.webp" alt="" />
                    <p className='uploadText'>Upload photo and field notes</p>
                    <div className="progressBar">
                        <div className="progress-done" style={style}>
                        </div>
                    </div>
                </div>
                <div className="verticalLabel text-black text-start">
                    <p className=' px-5'>Select the vegetable to start adding photos and field notes.</p>
                    <div className='calendar px-5 overflow-auto' >
                        <div className="addVegetables pe-4">
                            <table className='w-100'>
                            <thead>
                                <th>Vegetables</th>
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
                            {formData.vegetables?.map((item, key) => (
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
                                </tr>
                            ))
                            }
                            </table>
                        </div>
                    </div>
                </div>
                <div className="verticalLabel text-black text-start">
                    <p className=' px-5 pt-3'>Select the fruit to start adding photos and field notes.</p>
                    <div className='calendar px-5 overflow-auto' >
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
                            {formData.fruits?.map((item, key) => (
                                <tr key={key}>
                                <td className={`cell1`}>{item.name}</td>
                                <td className={`cell ${item.month.includes(1) && 'active'}`} onClick={(e) => selectMonth2(item.id, 1)}></td>
                                <td className={`cell ${item.month.includes(2) && 'active'}`} onClick={() => selectMonth2(item.id, 2)}></td>
                                <td className={`cell ${item.month.includes(3) && 'active'}`} onClick={() => selectMonth2(item.id, 3)}></td>
                                <td className={`cell ${item.month.includes(4) && 'active'}`} onClick={() => selectMonth2(item.id, 4)}></td>
                                <td className={`cell ${item.month.includes(5) && 'active'}`} onClick={() => selectMonth2(item.id, 5)}></td>
                                <td className={`cell ${item.month.includes(6) && 'active'}`} onClick={() => selectMonth2(item.id, 6)}></td>
                                <td className={`cell ${item.month.includes(7) && 'active'}`} onClick={() => selectMonth2(item.id, 7)}></td>
                                <td className={`cell ${item.month.includes(8) && 'active'}`} onClick={() => selectMonth2(item.id, 8)}></td>
                                <td className={`cell ${item.month.includes(9) && 'active'}`} onClick={() => selectMonth2(item.id, 9)}></td>
                                <td className={`cell ${item.month.includes(10) && 'active'}`} onClick={() => selectMonth2(item.id, 10)}></td>
                                <td className={`cell ${item.month.includes(11) && 'active'}`} onClick={() => selectMonth2(item.id, 11)}></td>
                                <td className={`cell ${item.month.includes(12) && 'active'}`} onClick={() => selectMonth2(item.id, 12)}></td> 
                                </tr>
                            ))
                            }
                            </table>
                        </div>
                    </div>
                </div>
                    {/* <Button btnName={'purpleBtn'} title={'Preview'} /> */}
                    {/* <Button btnName={'pinkBtn'} title={'Save Details'} /> */}
            </div>
        </div>
    </div>
    <NavFooter prevClick={onPrev} nextClick={next} />
    </>
  )
}

export default VegAndFruits
