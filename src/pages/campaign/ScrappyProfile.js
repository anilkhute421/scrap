import React from "react";
// import VerticalFarmHeader from './VerticalFarmHeader'
import {
  Box,
  Chip,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
  styled,
  Grid,
  FormControl,
  FormLabel,
  TextField,
} from "@mui/material";
import campaignAboutBg from "../../assets/images/campaign/campaign-about-bg.png";
import progressBar from "../../assets/images/campaign/progress-bar.png";
import reqTexImg from "../../assets/images/campaign/required-text-img.png";
import tree from "../../assets/images/campaign/coconut-tree.png";
import scrappyLogo from "../../assets/images/campaign/scrappy-app-logo.png";
import layerBg from "../../assets/images/campaign/radio-layer-bg.png";
import VerticalFarmHeader from "../verticalFarm/VerticalFarmHeader";
import continueButton from "../../assets/images/campaign/continue-button-img.png";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { storeProfile } from "../../features/campaign/campaignSlice";
import { useNavigate } from "react-router-dom";

export default function ScrappyProfile() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialData = {
    problem: "",
    what_problem: "",
    other: "",
  };

  const schema = Yup.object().shape({
    problem: Yup.string(),
    what_problem: Yup.string(),
    other: Yup.string(),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(storeProfile(values));
    navigate('/scarppy-profile-completed');
  };


  const { profileData } =
    useSelector((state) => state.campaign);

    console.log(profileData , 'profileData');

  return (
    <div>
      <VerticalFarmHeader />
      <Formik
        initialValues={initialData}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                backgroundImage: `url(${campaignAboutBg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                style={{ padding: "0px 20px" }}
                width={"100%"}
              >
                <img
                  src={scrappyLogo}
                  style={{
                    width: "314px",
                    height: "314px",
                    marginTop: "30px",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={progressBar}
                    style={{
                      width: "375px",
                      height: "128px",
                      marginTop: "40px",
                    }}
                  />
                  <img
                    src={reqTexImg}
                    style={{
                      width: "345px",
                      height: "70px",
                      //   marginTop: "30px",
                    }}
                  />
                </div>
                <img
                  src={tree}
                  style={{
                    width: "220px",
                    height: "304px",
                    marginTop: "30px",
                  }}
                />
              </Stack>
              <Box
                sx={{
                  backgroundImage: `url(${layerBg})`,
                  backgroundSize: "951px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "top",
                  width: "951px",
                  height: "331px",
                  paddingTop: "20px",
                }}
              >
                <Stack direction={"column"} alignItems={"center"}>
                  <Typography
                    style={{
                      fontFamily: "Gotham",
                      fontWeight: "400px",
                      fontSize: "18px",
                      lineHeight: "20px",
                      color: "#181818",
                      marginTop: "10px",
                    }}
                  >
                    What problem do you want to solve?
                  </Typography>

                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="problem"
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                      value={values.problem}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="sanitation"
                        control={<Radio />}
                        label="Sanitation"
                        sx={{
                          backgroundColor: "white",
                          borderRadius: "100px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "4px 8px 4px 8px",
                          margin: "10px",
                        }}
                      />
                      <FormControlLabel
                        value="climate-change"
                        control={<Radio />}
                        label="Climate Change"
                        sx={{
                          backgroundColor: "white",
                          borderRadius: "100px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "4px 8px 4px 8px",
                          margin: "10px",
                        }}
                      />
                      <FormControlLabel
                        value="clear-water"
                        control={<Radio />}
                        label="Clear Water"
                        sx={{
                          backgroundColor: "white",
                          borderRadius: "100px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "4px 8px 4px 8px",
                          margin: "10px",
                        }}
                      />
                      <FormControlLabel
                        value="garbage"
                        control={<Radio />}
                        label="Garbage"
                        sx={{
                          backgroundColor: "white",
                          borderRadius: "100px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "4px 8px 4px 8px",
                          margin: "10px",
                        }}
                      />
                      <FormControlLabel
                        value="plastic"
                        control={<Radio />}
                        label="Plastic"
                        sx={{
                          backgroundColor: "white",
                          borderRadius: "100px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "4px 8px 4px 8px",
                          margin: "10px",
                        }}
                      />
                      <FormControlLabel
                        value="nature"
                        control={<Radio />}
                        label="Nature"
                        sx={{
                          backgroundColor: "white",
                          borderRadius: "100px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "4px 8px 4px 8px",
                          margin: "10px",
                        }}
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Other"
                        sx={{
                          backgroundColor: "white",
                          borderRadius: "100px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "4px 8px 4px 8px",
                          margin: "10px",
                        }}
                      />
                    </RadioGroup>
                  </FormControl>

                  <TextField
                    id="standard-basic"
                    label="Other (please specify)"
                    variant="standard"
                    name="other"
                    value={values.other}
                    onChange={handleChange}
                    sx={{
                      width: "87%",
                      "& .css-1x51dt5-MuiInputBase-input-MuiInput-input:focus":
                        {
                          textDecoration: "none",
                          backgroundColor: "#00000000",
                          border: "1px solid #00000000",
                          borderBottom: "1px solid #000",
                        },
                      "& .css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                        textDecoration: "none",
                        backgroundColor: "#00000000",
                        border: "1px solid #00000000",
                        borderBottom: "1px solid #000",
                      },
                    }}
                  />
                </Stack>
              </Box>
              <Box
                sx={{
                  backgroundImage: `url(${layerBg})`,
                  backgroundSize: "951px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "top",
                  width: "951px",
                  height: "290px",
                  paddingTop: "20px",
                }}
              >
                <Stack direction={"column"} alignItems={"center"} spacing={4}>
                  <Typography
                    style={{
                      fontFamily: "Gotham",
                      fontWeight: "400px",
                      fontSize: "18px",
                      lineHeight: "20px",
                      color: "#181818",
                      marginTop: "10px",
                    }}
                  >
                    What problem do you want to solve in: Garbage?
                  </Typography>

                  <TextField
                    id="standard-basic"
                    variant="standard"
                    multiline
                    rows={2}
                    name="what_problem"
                    value={values.what_problem}
                    onChange={handleChange}
                    sx={{
                      width: "87%",
                      "& .css-66dh3a-MuiInputBase-input-MuiInput-input:focus": {
                        backgroundColor: "#fff",
                        border: "1px dashed #000",
                      },
                      "& .css-66dh3a-MuiInputBase-input-MuiInput-input": {
                        backgroundColor: "#fff",
                        border: "1px dashed #000",
                      },
                      "& .css-1rb63tl-MuiInputBase-root-MuiInput-root:after": {
                        borderBottom: "none",
                      },
                      "& .css-1rb63tl-MuiInputBase-root-MuiInput-root:before": {
                        borderBottom: "none",
                      },
                      "& .css-1rb63tl-MuiInputBase-root-MuiInput-root:hover": {
                        borderBottom: "none",
                      },
                    }}
                  />
                </Stack>
              </Box>
              <Stack sx={{ mb: 5 }}>
                <button
                  style={{
                    width: "250px",
                    height: "60px",
                    marginTop: "15px",
                    padding: 0,
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={handleSubmit}
                >
                  <img
                    src={continueButton}
                    alt="Continue Button"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </button>
              </Stack>
            </Box>
          </form>
        )}
      </Formik>
    </div>
  );
}
