import React from "react";
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
import pinkBg from "../../assets/images/vertical-farm/pink-bg.png";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UpdateVerticalFarm } from "../../features/user/verticalFormSlice";
import Loading from "../../components/Loading";
import { toast } from "react-toastify";

export default function SkyFarmConstruciton() {
    const routeParams = useParams();
  const verticalFarmId = routeParams?.id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialData = {
    construction: "",
    planter: "",
    upcycleable_construction: "",
    upcycleable_planter: "",
  };

  const schema = Yup.object().shape({
    construction: Yup.string(),
    planter: Yup.string(),
    upcycleable_construction: Yup.string(),
    upcycleable_planter: Yup.string(),
  });

  const { loading, FramNotes } = useSelector((state) => state.verticalForm);

  const handleSubmit = (values, { resetForm }) => {
    const combinedData = {
      ...FramNotes,
      materials: { ...values },
      id: verticalFarmId,
    };
    dispatch(UpdateVerticalFarm(combinedData))
    .then((apiResponse) => {
        if (apiResponse?.payload?.status === 200) {
          toast.success("submitted");
          resetForm({ values: "" });
          navigate(`/scrappy-organic-farmers/${verticalFarmId}`)
        } else if (apiResponse?.payload?.status === 400) {
          const errorMessage = apiResponse?.payload?.data?.potrait  //remaning error handling.
            ? apiResponse?.payload?.data?.potrait[0]
            : "somthing went wrong";
          toast.error(errorMessage || "somthing went wrong");
        }
      })
      .catch((error) => {
        toast.error(error?.message || "server error.");
      });
  };


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
      <Box p={"50px"}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          height={"100%"}
        >
          <Link to={`/sky-farm-notes/${verticalFarmId}`}>
            <img src={arrowBackward} />
          </Link>

          <Stack
            flex={3}
            justifyContent={"center"}
            display={"flex"}
            direction={"column"}
            alignItems={"center"}
          >
            <img
              src={skyFarmNotes}
              style={{
                width: "277px",
                height: "69px",
              }}
            />
            <Box mt={4}>
              <Box
                sx={{
                  backgroundImage: `url(${skyFarmConstructionBG})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  paddingTop: 6,
                  paddingBottom: 6,
                  paddingLeft: 4,
                  paddingRight: 4,
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "white",
                    paddingTop: 6,
                    paddingBottom: 6,
                    paddingLeft: 4,
                    paddingRight: 4,
                    borderRadius: "8px",
                  }}
                >
                  <Formik
                    initialValues={initialData}
                    validationSchema={schema}
                    onSubmit={handleSubmit}
                  >
                    {({ values, errors, handleChange, handleSubmit }) => (
                      <form onSubmit={handleSubmit}>
                        <Typography fontSize={"20px"} mb={3}>
                          The structure of our farm is made of these sustainable
                          materials
                        </Typography>

                        <Typography
                          fontSize={"16px"}
                          mb={3}
                          fontWeight={"bold"}
                        >
                          Sky Farm Construction
                        </Typography>

                        <Typography
                          fontSize={"16px"}
                          mb={1}
                          variant="subtitle1"
                          color={"#393B3C"}
                        >
                          Sustainable Material
                        </Typography>

                        <TextField
                          id="outlined-basic"
                          variant="standard"
                          sx={{
                            "& .css-66dh3a-MuiInputBase-input-MuiInput-input:focus":
                              {
                                border: "1px dashed #393B3C",
                                borderRadius: "8px",
                              },
                            "& .css-66dh3a-MuiInputBase-input-MuiInput-input": {
                              border: "1px dashed #393B3C",
                              borderRadius: "8px",
                            },
                          }}
                          InputProps={{
                            // startAdornment: <AccountCircle />, // <== adjusted this
                            disableUnderline: true, // <== added this
                          }}
                          multiline
                          fullWidth
                          rows={2}
                          name="construction"
                          value={values.construction}
                          onChange={handleChange}
                        />

                        <Typography
                          fontSize={"16px"}
                          mb={3}
                          fontWeight={"bold"}
                        >
                          Pot, planter, hanging basket
                        </Typography>

                        <Typography
                          fontSize={"16px"}
                          mb={1}
                          variant="subtitle1"
                          color={"#393B3C"}
                        >
                          Sustainable Material
                        </Typography>

                        <TextField
                          id="outlined-basic"
                          variant="standard"
                          sx={{
                            "& .css-66dh3a-MuiInputBase-input-MuiInput-input:focus":
                              {
                                border: "1px dashed #393B3C",
                                borderRadius: "8px",
                              },
                            "& .css-66dh3a-MuiInputBase-input-MuiInput-input": {
                              border: "1px dashed #393B3C",
                              borderRadius: "8px",
                            },
                          }}
                          InputProps={{
                            // startAdornment: <AccountCircle />, // <== adjusted this
                            disableUnderline: true, // <== added this
                          }}
                          multiline
                          fullWidth
                          rows={2}
                          name="planter"
                          value={values.planter}
                          onChange={handleChange}
                        />
                        {/* <Box width={"100%"} display={"flex"} justifyContent={"flex-end"} mt={2}> */}
                        {/* <button
                                            type="submit"
                                            style={{
                                                backgroundImage: `url(${pinkBg})`,
                                                backgroundSize: "157px",
                                                backgroundRepeat: "space",
                                                backgroundPosition: "center",
                                                height: "44px",
                                                width: "157px",
                                                color: "#fff",
                                            }}
                                        >
                                            Save
                                        </button> */}

                        {/* </Box> */}

                        <Typography fontSize={"20px"} mb={3}>
                          The structure of our farm is made of these sustainable
                          materials
                        </Typography>

                        <Typography fontSize={"16px"} fontWeight={"bold"}>
                          Sky Farm Construction
                        </Typography>

                        <Typography
                          fontSize={"16px"}
                          mb={1}
                          variant="subtitle1"
                          color={"#393B3C"}
                        >
                          Upcycled Material AND what was it before you upcycled
                          it (bottle, pipe, bicycle) + how many have you
                          made/used/how much
                        </Typography>

                        <TextField
                          id="outlined-basic"
                          variant="standard"
                          sx={{
                            "& .css-66dh3a-MuiInputBase-input-MuiInput-input:focus":
                              {
                                border: "1px dashed #393B3C",
                                borderRadius: "8px",
                              },
                            "& .css-66dh3a-MuiInputBase-input-MuiInput-input": {
                              border: "1px dashed #393B3C",
                              borderRadius: "8px",
                            },
                          }}
                          InputProps={{
                            // startAdornment: <AccountCircle />, // <== adjusted this
                            disableUnderline: true, // <== added this
                          }}
                          multiline
                          fullWidth
                          rows={2}
                          name="upcycleable_construction"
                          value={values.upcycleable_construction}
                          onChange={handleChange}
                        />
                        {/* <Box width={"100%"} display={"flex"} justifyContent={"flex-end"} mt={2}> */}
                        {/* <button
                                            type="submit"
                                            style={{
                                                backgroundImage: `url(${pinkBg})`,
                                                backgroundSize: "157px",
                                                backgroundRepeat: "space",
                                                backgroundPosition: "center",
                                                height: "44px",
                                                width: "157px",
                                                color: "#fff",
                                            }}
                                        >
                                            Save
                                        </button> */}

                        {/* </Box> */}

                        <Typography fontSize={"16px"} fontWeight={"bold"}>
                          Sky Farm Construction
                        </Typography>

                        <Typography
                          fontSize={"16px"}
                          mb={1}
                          variant="subtitle1"
                          color={"#393B3C"}
                        >
                          + Upcycled Material AND what was it before you
                          upcycled it how many have you made/used/how much
                        </Typography>

                        <TextField
                          id="outlined-basic"
                          variant="standard"
                          sx={{
                            "& .css-66dh3a-MuiInputBase-input-MuiInput-input:focus":
                              {
                                border: "1px dashed #393B3C",
                                borderRadius: "8px",
                              },
                            "& .css-66dh3a-MuiInputBase-input-MuiInput-input": {
                              border: "1px dashed #393B3C",
                              borderRadius: "8px",
                            },
                          }}
                          InputProps={{
                            // startAdornment: <AccountCircle />, // <== adjusted this
                            disableUnderline: true, // <== added this
                          }}
                          multiline
                          fullWidth
                          rows={2}
                          name="upcycleable_planter"
                          value={values.upcycleable_planter}
                          onChange={handleChange}
                        />
                        <Box
                          width={"100%"}
                          display={"flex"}
                          justifyContent={"center    "}
                          mt={2}
                        >
                          <button
                            type="submit"
                            style={{
                              backgroundImage: `url(${pinkBg})`,
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
                        </Box>
                      </form>
                    )}
                  </Formik>
                </Box>
              </Box>
            </Box>
          </Stack>
          <Link to={`/scrappy-organic-farmers/${verticalFarmId}`}>
          <img src={arrowForward} />
          </Link>
        </Stack>
      </Box>
    </>
  );
}
