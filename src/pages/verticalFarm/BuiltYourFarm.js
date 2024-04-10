import React, { useState } from "react";
import VerticalFarmHeader from "./VerticalFarmHeader";
import { Box, Stack, Typography } from "@mui/material";
import builtYourFarmBG from "../../assets/images/vertical-farm/built-your-farm-bg.png";
import veggies from "../../assets/images/vertical-farm/veggies.png";
import haveYouBuiltHead from "../../assets/images/vertical-farm/have-you-built-your-farm-head.png";
import haveYouBuiltBG from "../../assets/images/vertical-farm/have-you-built-your-farm-bg.png";
import arrowForward from "../../assets/images/vertical-farm/arrow-forward.png";
import uploadImage from "../../assets/images/vertical-farm/upload-image.png";
import uploadNotes from "../../assets/images/vertical-farm/upload-notes.png";
import uploadeButton from "../../assets/images/vertical-farm/uploade-button.png";
import buttonOrangeMetalBG from "../../assets/images/vertical-farm/metalbg_orange.png";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { createBuilt } from "../../features/user/verticalFormSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading";

export default function BuiltYourFarm() {
  const routeParams = useParams();
  const verticalFarmId = routeParams?.id;
  const [PortraitImage, setPortraitImage] = useState("");
  const [PortraitFile, setPortraitFile] = useState("");
  const dispatch = useDispatch();
  const handleImageUpload = (uplodeType) => (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPortraitFile(file);
        setPortraitImage(reader.result);
        const FD = new FormData();
        FD.append("type", +uplodeType);
        FD.append("media", file);
        FD.append("id", verticalFarmId);
        dispatch(createBuilt(FD))
          .then((apiResponse) => {
            if (apiResponse?.payload?.status === 200) {
              toast.success("submitted");
            } else if (apiResponse?.payload?.status === 400) {   //error handling is pending.
              const errorMessage = apiResponse?.payload?.data?.image
                ? apiResponse?.payload?.data?.image[0]
                : apiResponse?.payload?.data?.name[0];
              toast.error(errorMessage || "somthing went wrong");
            }
          })
          .catch((error) => {
            toast.error(error?.message || "server error.");
          });
      };
      reader.readAsDataURL(file);
    }
  };

  const { loading } =
    useSelector((state) => state.verticalForm);


  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <div>
      <VerticalFarmHeader />
      <Box
        sx={{
          backgroundImage: `url(${builtYourFarmBG})`,
          backgroundSize: "100vw",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Stack direction={"row"} justifyContent={"space-between"}>
          <img
            src={veggies}
            style={{
              width: "288px",
              height: "228px",
              marginTop: "-18px",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                backgroundImage: `url(${haveYouBuiltBG})`,
                backgroundSize: "277",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "277px",
                height: "270px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "-50px",
              }}
            >
              <img
                src={haveYouBuiltHead}
                style={{
                  width: "212px",
                  height: "80px",
                  marginTop: "60px",
                }}
              />
            </div>
            <Typography color={"white"} mt={2} fontSize={"16px"}>
              If no, not to worry, we’ve got your plan, we’ll get back to you.
            </Typography>

            <Typography color={"white"} mt={2} fontSize={"16px"}>
              If yes, super, please upload 10 photos 1 and a 1 minute video
            </Typography>
          </div>
          <Link to={`/upload-your-farm/${verticalFarmId}`}>
            <img
              src={arrowForward}
              style={{
                height: "85px",
                width: "85px",
                marginRight: "50px",
                marginTop: "50px",
              }}
            />
          </Link>
        </Stack>
        <Box>
          <Stack
            direction={"row"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
          >
        <label htmlFor="upload-image">
            <img
              src={uploadImage}
              style={{
                width: "350px",
                height: "626px",
              }}
            />
            </label>
            <input
              //   ref={fileInputRef}
              type="file"
              id="upload-image"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageUpload("1")}
            />
            <button
              type="submit"
              style={{
                backgroundImage: `url(${buttonOrangeMetalBG})`,
                backgroundSize: "292px",
                backgroundRepeat: "space",
                backgroundPosition: "center",
                height: "45px",
                width: "292px",
                color: "#fff",
              }}
            >
              CLICK HERE TO START UPLOADING
            </button>

            <label htmlFor="upload-input">
              <div style={{ position: "relative" }}>
                <img
                  src={uploadNotes}
                  style={{
                    width: "350px",
                    height: "626px",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "380px",
                    left: "55px",
                  }}
                >
                  <img
                    src={uploadeButton}
                    style={{
                      width: "247px",
                      height: "80px",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>
            </label>
            <input
              //   ref={fileInputRef}
              type="file"
              id="upload-input"
              accept="video/*"
              style={{ display: "none" }}
              onChange={handleImageUpload("2")}
            />
          </Stack>
        </Box>
      </Box>
    </div>
  );
}
