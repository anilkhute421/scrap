import React, { useEffect, useRef, useState } from "react";
import VerticalFarmHeader from "./VerticalFarmHeader";
import ScrappyResearchHeader from "../../assets/images/vertical-farm/scrappy-research.png";
import arrowForward from "../../assets/images/vertical-farm/arrow-forward.png";
import arrowBackward from "../../assets/images/vertical-farm/arrow-backward.png";
import researchWall from "../../assets/images/vertical-farm/research-wall.png";
import researchPostBox from "../../assets/images/vertical-farm/research-post.png";
import purpleBg from "../../assets/images/vertical-farm/purple-bg.png";
import pinkBg from "../../assets/images/vertical-farm/pink-bg.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createVerticalFarm, storeMap } from "../../features/user/verticalFormSlice";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";

export default function ScrappyResearchPost() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [directionDes, setDirectionDes] = useState();
  const [directionMapImage , setDirectionMapImage] = useState(null);
  const [directionMapFile , setDirectionMapFile] = useState(null);

  const { loading, schools , error , mapImg , verticalFarmData} = useSelector((state) => state.verticalForm);

  console.log(mapImg , 'mapImg');

  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log(selectedFile , 'selectedFile');
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setDirectionMapImage(selectedFile);
        setDirectionMapFile(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = () => {
    let FD = new FormData();
    FD.append("map", mapImg);
    FD.append("direction", directionDes);
    FD.append("direction_map", directionMapImage);
    FD.append("team_id", 44);  //change the id after team module is completed , because without team id verticalFarm is not created//
    dispatch(createVerticalFarm(FD))
  }

  useEffect(() => {
    if (verticalFarmData?.id) {
      toast.success('submitted');
      dispatch(storeMap(null));
      setDirectionMapImage(null);
      setDirectionMapFile(null);
      setDirectionDes('');
      navigate(`/field-research/${verticalFarmData?.id}`)
    } else if (error?.message) {
      toast.error(error.message || 'server error');
      // dispatch(storeMap(null));
      setDirectionMapImage(null);
      setDirectionMapFile(null);
      setDirectionDes('');
    }
  }, [verticalFarmData, error]);


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
          padding: "50px",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: "1",
            justifyContent: "center",
          }}
        >
          <Link to="/scrappy-research">
            <img src={arrowBackward} />
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: "3",
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
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px",
              paddingTop: "0px",
              marginTop: "20px",
              backgroundImage: `url(${researchWall})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <p
              style={{
                fontSize: "24px",
                marginTop: "30px",
                padding: "20px",
                backgroundColor: "#A6D9FF",
                borderRadius: "10px",
              }}
            >
              If you can and if you can’t find where you want to build your
              vertical farm on the map, draw it for us just so we can make sure
              we can find it and give us good directions to be able to find
              where you want to build.
            </p>
            <div>
              <input
                ref={fileInputRef}
                type="file"
                id="upload-input"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <img
                src={directionMapFile ? directionMapFile : researchPostBox}
                style={{
                  width: "246px",
                  height: "529px",
                  cursor: "pointer",
                }}
                onClick={handleImageClick}
                alt="Research Post Box"
              />
            </div>

            <div
              style={{
                width: "100%",
                padding: "20px",
                backgroundColor: "#D9EFFF",
                borderRadius: "10px",
              }}
            >
              <p
                style={{
                  fontSize: "20px",
                }}
              >
                Give us good directions
              </p>
              <input
                type="text"
                style={{
                  borderStyle: "dashed",
                  borderRadius: "10px",
                  height: "100px",
                  wordBreak: "break-all",
                }}
                onChange={(e) => setDirectionDes(e.target.value)}
              />
            </div>

            <div
              style={{
                marginTop: "20px",
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <button
                style={{
                  backgroundImage: `url(${purpleBg})`,

                  backgroundSize: "157px",
                  backgroundRepeat: "space",
                  backgroundPosition: "center",
                  height: "44px",
                  width: "157px",
                  color: "#fff",
                }}
              >
                Save
              </button>
              <button
                onClick={()=>handleSubmit()}
                type="submit"
                style={{
                  marginLeft: "20px",
                  backgroundImage: `url(${pinkBg})`,
                  backgroundSize: "157px",
                  backgroundRepeat: "space",
                  backgroundPosition: "center",
                  height: "44px",
                  width: "157px",
                  color: "#fff",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flex: "1",
            justifyContent: "center",
          }}
         onClick={()=>handleSubmit()}>
          {/* <Link to="/field-research"> */}
            <img src={arrowForward} />
          {/* </Link> */}
        </div>
      </div>
    </>
  );
}
