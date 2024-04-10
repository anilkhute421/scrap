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
  Select,
  MenuItem,
  FormGroup,
  Checkbox,
} from "@mui/material";
import campaignAboutBg from "../../assets/images/campaign/campaign-about-bg.png";
import progressBar from "../../assets/images/campaign/progress-bar.png";
import map from "../../assets/images/campaign/map.png";
import tree from "../../assets/images/campaign/coconut-tree.png";
import scrappyLogo from "../../assets/images/campaign/scrappy-app-logo.png";
import layerBg from "../../assets/images/campaign/radio-layer-bg.png";
import secondlayerBg from "../../assets/images/campaign/second-layer-img.png";
import VerticalFarmHeader from "../verticalFarm/VerticalFarmHeader";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import PanoramaFishEyeRoundedIcon from "@mui/icons-material/PanoramaFishEyeRounded";
import topViewProblem from "../../assets/images/campaign/top-view-problem.png";
import rightViewProblem from "../../assets/images/campaign/right-view-problem.png";
import leftViewProblem from "../../assets/images/campaign/left-view-problem.png";
import datePickerTop from "../../assets/images/campaign/date-picket-top-img.png";
import datePickerBottom from "../../assets/images/campaign/date-picker-bottom-img.png";
import continueButton from "../../assets/images/campaign/continue-button-img.png";
import { Formik } from "formik";
import * as Yup from "yup";

export default function ScrappyProfileCom() {
  const [age, setAge] = React.useState("");


  //working on create campaign , formik filed adds pending and create campaign api incomplete.

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const initialData = {
    time: "",
    // what_problem: "",
    // other: "",
  };

  const schema = Yup.object().shape({
    // what_problem: Yup.string(),
    // other: Yup.string(),
  });

  const handleSubmit = (values, { resetForm }) => {
    // navigate('/scarppy-profile-completed');
    console.log(values, "jjbjb");
  };

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
                position: "relative",
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
                    src={map}
                    style={{
                      width: "537px",
                      height: "208px",
                      marginTop: "15px",
                      zIndex: "9",
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
                  backgroundImage: `url(${secondlayerBg})`,
                  backgroundSize: "951px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "top",
                  width: "951px",
                  height: "410px",
                  paddingTop: "20px",
                  position: "absolute",
                  top: "12%",
                }}
              >
                <Stack direction={"column"} alignItems={"center"}>
                  <div
                    style={{
                      marginTop: "50px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
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
                      select everything you think you might need!
                    </Typography>
                    <FormGroup
                      sx={{ zIndex: 99, display: "flex", flexDirection: "row" }}
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<PanoramaFishEyeRoundedIcon />}
                            checkedIcon={<CircleRoundedIcon color="primary" />}
                            name="time"
                            value={values.time}
                            onChange={handleChange}
                          />
                        }
                        label="Time"
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
                        control={
                          <Checkbox
                            icon={<PanoramaFishEyeRoundedIcon />}
                            checkedIcon={<CircleRoundedIcon color="primary" />}
                            name="Stuff"
                            value={values.Stuff}
                            onChange={handleChange}
                          />
                        }
                        label="Stuff"
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
                        control={
                          <Checkbox
                            icon={<PanoramaFishEyeRoundedIcon />}
                            checkedIcon={<CircleRoundedIcon color="primary" />}
                            name="Children"
                            value={values.Children}
                            onChange={handleChange}
                          />
                        }
                        label="Children"
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
                        control={
                          <Checkbox
                            icon={<PanoramaFishEyeRoundedIcon />}
                            checkedIcon={<CircleRoundedIcon color="primary" />}
                            name="helpChildren"
                            value={values.helpChildren}
                            onChange={handleChange}
                          />
                        }
                        label="Access to grown-ups who have the skills to help children"
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
                        control={
                          <Checkbox
                            icon={<PanoramaFishEyeRoundedIcon />}
                            checkedIcon={<CircleRoundedIcon color="primary" />}
                            name="permission"
                            value={values.permission}
                            onChange={handleChange}
                          />
                        }
                        label="Permission from my parents's family"
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
                        control={
                          <Checkbox
                            icon={<PanoramaFishEyeRoundedIcon />}
                            checkedIcon={<CircleRoundedIcon color="primary" />}
                            name="loveSchool"
                            value={values.loveSchool}
                            onChange={handleChange}
                          />
                        }
                        label="Id love my scholl to be part of it"
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
                    </FormGroup>
                    <FormControl
                      variant="standard"
                      sx={{
                        m: 1,
                        minWidth: 500,
                        mr: 36,
                        "& .css-m5hdmq-MuiInputBase-root-MuiInput-root-MuiSelect-root":
                          { marginTop: "0px" },
                      }}
                    >
                      <label style={{ marginBottom: "0px" }}>Select Team</label>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={age}
                        onChange={handleChange}
                        label="jbjk"
                        //   sx={{ mt:0 }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>

                    {/* <label style={{ marginBottom:"0px" }}>Email *</label> */}
                    <TextField
                      id="standard-basic"
                      label="Campaign name"
                      variant="standard"
                      name="campaignName"
                      value={values.campaignName}
                      onChange={handleChange}
                      sx={{
                        width: "53%",
                        //   marginLeft:"30px",
                        mr: 35,
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
                  </div>
                </Stack>
              </Box>
              <Box
                sx={{
                  backgroundImage: `url(${layerBg})`,
                  backgroundSize: "951px",
                  backgroundRepeat: "no-repeat",
                  // backgroundPosition: "top",
                  width: "951px",
                  height: "290px",
                  paddingTop: "20px",
                  marginTop: "330px",
                }}
              >
                <Stack direction={"column"} alignItems={"center"} spacing={2}>
                  <Typography
                    style={{
                      fontFamily: "Gotham",
                      fontWeight: "400px",
                      fontSize: "18px",
                      lineHeight: "20px",
                      color: "#181818",
                      marginTop: "15px",
                    }}
                  >
                    Do you know the email ID of your school by chance or a key
                    contact person and her phone number?
                  </Typography>

                  <TextField
                    id="standard-basic"
                    label="Email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    variant="standard"
                    sx={{
                      width: "53%",
                      //   marginLeft:"30px",
                      //   mr:35,
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

                  <TextField
                    id="standard-basic"
                    label="Name of principal, teacher at my school"
                    variant="standard"
                    name="school_principal_name"
                    value={values.school_principal_name}
                    onChange={handleChange}
                    sx={{
                      width: "53%",
                      //   marginLeft:"30px",
                      //   mr:35,
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
                  // backgroundSize: "951px",
                  backgroundRepeat: "no-repeat",
                  // backgroundPosition: "top",
                  width: "951px",
                  height: "290px",
                }}
              >
                <Stack direction={"column"} alignItems={"center"} spacing={2}>
                  <Typography
                    style={{
                      fontFamily: "Gotham",
                      fontWeight: "400px",
                      fontSize: "18px",
                      lineHeight: "20px",
                      color: "#181818",
                      marginTop: "35px",
                    }}
                  >
                    Where do you see this problem the most?
                  </Typography>

                  <TextField
                    id="standard-basic"
                    label="Place"
                    variant="standard"
                    name="where_problem"
                    value={values.where_problem}
                    onChange={handleChange}
                    sx={{
                      width: "53%",
                      //   marginLeft:"30px",
                      //   mr:35,
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

                  <TextField
                    id="standard-basic"
                    label="Description"
                    variant="standard"
                    sx={{
                      width: "53%",
                      //   marginLeft:"30px",
                      //   mr:35,
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
                  // backgroundSize: "951px",
                  backgroundRepeat: "no-repeat",
                  // backgroundPosition: "top",
                  width: "951px",
                  height: "290px",
                  // paddingTop: "20px"
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
                      marginTop: "30px",
                    }}
                  >
                    What is your plan? What do you want to do to solve the
                    problem?
                  </Typography>

                  <TextField
                    id="standard-basic"
                    variant="standard"
                    name="plan"
                    value={values.plan}
                    onChange={handleChange}
                    multiline
                    rows={2}
                    sx={{
                      width: "87%",
                      "& .css-66dh3a-MuiInputBase-input-MuiInput-input:focus": {
                        backgroundColor: "#fff",
                        border: "1px dashed #000",
                      },
                      "& .css-66dh3a-MuiInputBase-input-MuiInput-input": {
                        backgroundColor: "#fff",
                        border: "1px dashed #000",
                        borderRadius: "15px",
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
              <Box
                sx={{
                  backgroundImage: `url(${secondlayerBg})`,
                  backgroundSize: "951px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "top",
                  width: "951px",
                  height: "410px",
                  paddingTop: "20px",
                  // position: "absolute",
                  // top: "18%",
                }}
              >
                <Stack
                  direction={"column"}
                  alignItems={"center"}
                  sx={{ mt: 3 }}
                  spacing={4}
                >
                  <Typography
                    style={{
                      fontFamily: "Gotham",
                      fontWeight: "400px",
                      fontSize: "18px",
                      lineHeight: "20px",
                      color: "#181818",
                      marginTop: "5px",
                    }}
                  >
                    Where do you see this problem the most?
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Gotham",
                      fontWeight: "400px",
                      fontSize: "12px",
                      lineHeight: "15px",
                      color: "#181818",
                      marginTop: "5px",
                    }}
                  >
                    These photos need to be of the place where you encountered
                    the problem
                  </Typography>
                  <img
                    src={topViewProblem}
                    style={{
                      width: "300px",
                      height: "60px",
                      marginTop: "35px",
                    }}
                  />
                  <img
                    src={rightViewProblem}
                    style={{
                      width: "300px",
                      height: "60px",
                      marginTop: "20px",
                    }}
                  />
                  <img
                    src={leftViewProblem}
                    style={{
                      width: "300px",
                      height: "60px",
                      marginTop: "20px",
                    }}
                  />
                </Stack>
              </Box>

              <Box
                sx={{
                  backgroundImage: `url(${datePickerTop})`,
                  backgroundSize: "951px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "top",
                  width: "951px",
                  height: "200px",
                  paddingTop: "20px",
                  // position: "absolute",
                  // top: "18%",
                }}
              >
                <Stack
                  direction={"column"}
                  alignItems={"center"}
                  sx={{ mt: 3 }}
                  spacing={4}
                >
                  <Typography
                    style={{
                      fontFamily: "Gotham",
                      fontWeight: "400px",
                      fontSize: "18px",
                      lineHeight: "20px",
                      color: "#181818",
                      marginTop: "20px",
                    }}
                  >
                    When does your challenge begin?
                  </Typography>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker />
                  </LocalizationProvider>
                </Stack>
              </Box>

              <Stack sx={{ height: "200px" }}>
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
                    style={{
                      width: "250px",
                      height: "60px",
                      marginTop: "70px",
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
