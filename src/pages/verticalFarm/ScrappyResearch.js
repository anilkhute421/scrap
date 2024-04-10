import React, { useEffect, useRef, useState } from "react";
import VerticalFarmHeader from "./VerticalFarmHeader";
import ScrappyResearchHeader from "../../assets/images/vertical-farm/scrappy-research.png";
import arrowForward from "../../assets/images/vertical-farm/arrow-forward.png";
import arrowBackward from "../../assets/images/vertical-farm/arrow-backward.png";
import rectangeleBrownBg from "../../assets/images/vertical-farm/rectangle567.png";
import rectangeleCreamBg from "../../assets/images/vertical-farm/rectangle568.png";
import rectangeleBrownBgSmall from "../../assets/images/vertical-farm/rectangle569.png";
import mapFrame from "../../assets/images/vertical-farm/map-frame.png";
import map from "../../assets/images/vertical-farm/map.png";
import purpleBg from "../../assets/images/vertical-farm/purple-bg.png";
import pinkBg from "../../assets/images/vertical-farm/pink-bg.png";
import { useDispatch, useSelector } from "react-redux";
import { getSchool, storeMap } from "../../features/user/verticalFormSlice";
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";
import ScrappyResearchBG from "../../assets/images/vertical-farm/scrappy-research-bg.png";

export default function ScrappyResearch() {
    const dispatch = useDispatch();
    const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(storeMap(file));
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageRemove = () => {
    dispatch(storeMap(null));
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // reader.result

  useEffect(()=>{
    dispatch(getSchool());
  },[])

  const { loading, schools , error , mapImg } = useSelector((state) => state.verticalForm);

  console.log(mapImg , 'schools');

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  

  return (
    <>
      <VerticalFarmHeader />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          padding: "50px",
        }}
      >
        <Link to='/vertical-farm'>
        <img src={arrowBackward} />
        </Link>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={ScrappyResearchHeader}
            style={{
              width: "325px",
              height: "69px",
            }}
          />
          <div
            style={{
              backgroundImage: `url(${ScrappyResearchBG})`,
              backgroundSize: "834px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "962px",
              width: "834px",
              display:"flex",
              flexDirection:"column",
              justifyContent:"center",
              alignItems:"center",
            }}
          >
            <p
              style={{
                fontSize: "24px",
                marginTop: "30px",
                padding: "20px",
                backgroundImage: `url(${rectangeleBrownBg})`,
                backgroundSize: "666px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "110px",
                width: "666px",
              }}
            >
              You have done your research, you know where you want to build your
              Vertical Farm
            </p>

            <div
              style={{
                backgroundImage: `url(${rectangeleCreamBg})`,
                backgroundSize: "666px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "390px",
                width: "666px",
              }}
            >
              <p
                style={{
                  fontSize: "24px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  paddingTop: "20px",
                }}
              >
                Upload a map pin of where you want to build your vertical farm
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                <div
                  style={{
                    backgroundImage: `url(${mapFrame})`,
                    backgroundSize: "255px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    height: "255px",
                    width: "255px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  {selectedImage && (
                    <div style={{ position: "absolute", top: 40, right: 35 }}>
                      <button
                        onClick={handleImageRemove}
                        style={{
                          background: "none",
                          border: "none",
                          color: "black",
                          cursor: "pointer",
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  )}
                  {selectedImage ? (
                    <img
                      src={selectedImage}
                      alt="Selected"
                      style={{ wdth: "126px", height: "100px" }}
                    />
                  ) : (
                    <img src={map} alt="" />
                  )}
                </div>

                <label
                  style={{
                    backgroundImage: `url(${purpleBg})`,
                    backgroundSize: "157px",
                    backgroundRepeat: "space",
                    backgroundPosition: "center",
                    height: "44px",
                    width: "157px",
                    color: "#fff",
                    marginLeft: "60px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  Upload Image
                  <input
                    ref={fileInputRef}
                    type="file"
                    id="upload-input"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageUpload}
                  />
                </label>
              </div>
            </div>

            <div
              style={{
                backgroundImage: `url(${rectangeleBrownBgSmall})`,
                backgroundSize: "666px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "188px",
                width: "666px",
              }}
            >
              <p
                style={{
                  fontSize: "24px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  paddingTop: "20px",
                }}
              >
                If it's in your school or nearby, search for your school first
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    width: "30%",
                  }}
                >
                  <label htmlFor="schoolName">School Name</label>
                  <select
                    name="schoolName"
                    id="schoolName"
                    style={{
                      textDecoration: "none",
                      backgroundColor: "#00000000",
                      border: "1px solid #00000000",
                      borderBottom: "1px solid #000",
                    }}
                    placeholder="Enter School Name"
                  >
                    {/* <option value="a">A</option>
                    <option value="b">B</option> */}
                        <option value="">Select</option>
                    {  schools?.data?.map((schoolName)=>{
                        return (
                        <option key={schoolName.id} value={schoolName.id}>{schoolName.name}</option> 
                    )})}
                  </select>
                </div>

                <button
                  style={{
                    backgroundImage: `url(${pinkBg})`,
                    backgroundSize: "157px",
                    backgroundRepeat: "space",
                    backgroundPosition: "center",
                    height: "44px",
                    width: "157px",
                    color: "#fff",
                    marginLeft: "60px",
                  }}
                >
                  Search School
                </button>
              </div>
            </div>
          </div>
        </div>
        <Link to="/scrappy-research-post">
         <img src={arrowForward} />
        </Link>
      </div>
    </>
  );
}
