import React, { useRef, useState } from "react";
import VerticalFarmHeader from "./VerticalFarmHeader";
import {
  Box,
  Stack,
  Typography,
  Grid,
  FormControlLabel,
  TextField,
  RadioGroup,
  Radio,
} from "@mui/material";
import arrowForward from "../../assets/images/vertical-farm/arrow-forward.png";
import arrowBackward from "../../assets/images/vertical-farm/arrow-backward.png";
import skyFarmNotes from "../../assets/images/vertical-farm/sky-farm-notes.png";
import skyFarmBeachBG from "../../assets/images/vertical-farm/sky-farm-beach-bg.png";
import skyFarmFormBG from "../../assets/images/vertical-farm/sky-farm-form-bg.png";
import skyFarmConstructionBG from "../../assets/images/vertical-farm/sky-farm-construction-bg.png";
import purpleBg from "../../assets/images/vertical-farm/purple-bg.png";
import uploadYourFarmHeadBG from "../../assets/images/vertical-farm/upload-your-farm-head-bg.png";
import track from "../../assets/images/vertical-farm/track.png";
import vintagePaperPlane from "../../assets/images/vertical-farm/vintage-paper-plane.png";
import ourVerticalFarmFrame from "../../assets/images/vertical-farm/our-vertical-farm-frame.png";
import ourVerticalFarmFieldNotes from "../../assets/images/vertical-farm/our-vertical-farm-field-notes.png";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { fieldNotes } from "../../features/user/verticalFormSlice";
import reactangle from "../../assets/images/vertical-farm/rectangle-border.png";
import fieldBook from "../../assets/images/vertical-farm/field-book.png";
import flagFirst from "../../assets/images/vertical-farm/level-first.png";

export default function UploadYourFarm() {
  const routeParams = useParams();
  const verticalFarmId = routeParams?.id;
  const [selectedImage, setSelectedImage] = useState("");
  const [noteImage, setNoteImage] = useState("");
  const fileInputRef = useRef(null);
  const fileNoteInputRef = useRef(null);
  const dispatch = useDispatch();

  const handleImageUpload = (uplodeType) => (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (uplodeType === "image") {
          setSelectedImage(reader.result);
          const FD = new FormData();
          FD.append("type", 1);
          FD.append("image", file);
          FD.append("id", verticalFarmId);
          dispatch(fieldNotes(FD))
            .then((apiResponse) => {
              if (apiResponse?.payload?.status === 200) {
                toast.success("submitted");
                // setSelectedImage('');
                if (fileInputRef.current) {
                  fileInputRef.current.value = "";
                }
              } else if (apiResponse?.payload?.status === 400) {
                //error handling is pending.
                const errorMessage = apiResponse?.payload?.data?.image
                  ? apiResponse?.payload?.data?.image[0]
                  : apiResponse?.payload?.data?.name[0];
                toast.error(errorMessage || "somthing went wrong");
              }
            })
            .catch((error) => {
              toast.error(error?.message || "server error.");
            });
        } else if (uplodeType === "noteImage") {
          setNoteImage(reader.result);
          const FD = new FormData();
          FD.append("type", 1);
          FD.append("note_image", file);
          FD.append("id", verticalFarmId);
          dispatch(fieldNotes(FD))
            .then((apiResponse) => {
              if (apiResponse?.payload?.status === 200) {
                toast.success("submitted");
                if (fileNoteInputRef.current) {
                  fileNoteInputRef.current.value = "";
                }
              } else if (apiResponse?.payload?.status === 400) {
                //error handling is pending.
                const errorMessage = apiResponse?.payload?.data?.image
                  ? apiResponse?.payload?.data?.image[0]
                  : apiResponse?.payload?.data?.name[0];
                toast.error(errorMessage || "somthing went wrong");
              }
            })
            .catch((error) => {
              toast.error(error?.message || "server error.");
            });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageRemove = (uplodeType) => () => {
    console.log(uplodeType, "uplodeType");
    if (uplodeType === "image") {
      setSelectedImage(null);
    } else if (uplodeType === "noteImage") {
      setNoteImage(null);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <>
      <VerticalFarmHeader />
      <Box p={"50px"}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          height={"100%"}
        >
          <Link to={`/built-your-farm/${verticalFarmId}`}>
            <img src={arrowBackward} />
          </Link>

          <Stack
            flex={3}
            justifyContent={"center"}
            display={"flex"}
            direction={"column"}
            alignItems={"center"}
          >
            <div
              style={{
                backgroundImage: `url(${uploadYourFarmHeadBG})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "375px",
                height: "128px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography mb={1}>Upload photo and field notes (1/7)</Typography>
              <img
                src={track}
                style={{
                  width: "288px",
                  height: "24px",
                }}
              />
            </div>

            <Box mt={4}>
              <Box
                sx={{
                  backgroundImage: `url(${vintagePaperPlane})`,
                  backgroundSize: "802px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: "802px",
                }}
                pt={8}
                pb={8}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <img
                    src={ourVerticalFarmFrame}
                    style={{
                      width: "330px",
                      height: "400px",
                    }}
                  />

                  <div style={{ position: "absolute", top: -25, left: 250 }}>
                    <img
                      src={flagFirst}
                      alt="Selected"
                      style={{ wdth: "126px", height: "100px" }}
                    />
                  </div>

                  <div style={{ position: "absolute", top: 150, left: 316 }}>
                    {selectedImage ? (
                      <>
                        <button
                          onClick={handleImageRemove("image")}
                          style={{
                            background: "none",
                            border: "none",
                            color: "black",
                            cursor: "pointer",
                          }}
                        >
                          Remove
                        </button>
                        <div>
                          <img
                            src={selectedImage}
                            alt="Selected"
                            style={{ wdth: "126px", height: "100px" }}
                          />
                        </div>
                      </>
                    ) : (
                      <p>Upload their image</p>
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
                      marginTop: "30px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    Upload
                    <input
                      ref={fileInputRef}
                      type="file"
                      id="upload-input"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleImageUpload("image")}
                    />
                  </label>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <img
                    src={reactangle}
                    style={{
                      width: "315px",
                      height: "290px",
                      marginTop: "50px",
                    }}
                  />

                  <div style={{ position: "absolute", top: 110, left: 340 }}>
                    {noteImage ? (
                      <>
                        <button
                          onClick={handleImageRemove("noteImage")}
                          style={{
                            background: "none",
                            border: "none",
                            color: "black",
                            cursor: "pointer",
                          }}
                        >
                          Remove
                        </button>
                        <div>
                          <img
                            src={noteImage}
                            alt="Selected"
                            style={{ width: "126px", height: "100px" }}
                          />
                        </div>
                      </>
                    ) : (
                      <img
                        src={fieldBook}
                        style={{
                          width: "119px",
                          height: "162px",
                          //   marginTop: "50px",
                        }}
                      />
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
                      marginTop: "16px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    Upload
                    <input
                      ref={fileNoteInputRef}
                      type="file"
                      id="upload-input"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleImageUpload("noteImage")}
                    />
                  </label>
                </Box>
              </Box>
            </Box>
          </Stack>
          <Link to={`/each-level-stages/${verticalFarmId}`}>
            <img src={arrowForward} />
          </Link>
        </Stack>
      </Box>
    </>
  );
}
