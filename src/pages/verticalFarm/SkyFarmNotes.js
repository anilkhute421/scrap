import React, { useRef } from "react";
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
import { Link, useNavigate, useParams } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { storeFarmNotes } from "../../features/user/verticalFormSlice";


export default function SkyFarmNotes() {
    const routeParams = useParams();
  const verticalFarmId = routeParams?.id;
    const formref = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    

  const initialData = {
    length: "",
    width: "",
    height: "",
    levels: "",
    planters: "",
  };

  const schema = Yup.object().shape({
    length: Yup.string(),
    width: Yup.string(),
    height: Yup.string(),
    levels: Yup.string(),
    planters: Yup.string(),
  });

  const submitFormNotes = () => {
    console.log(formref , 'formref');
    if (formref.current) {
      formref.current.handleSubmit()
    }
  }

  const handleSubmit = (values, { resetForm }) => {
    dispatch(storeFarmNotes(values));
    navigate(`/sky-farm-construction/${verticalFarmId}`);
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
          <Link to={`/scrappy-design/${verticalFarmId}`}>
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
              <img
                src={skyFarmBeachBG}
                style={{
                  width: "100%",
                  height: "323px",
                }}
              />
              <Box
                sx={{
                  backgroundImage: `url(${skyFarmFormBG})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  position:"relative"

                }}
              >
                <Box
                  sx={{
                    paddingTop: 6,
                    paddingBottom: 6,
                    marginLeft: 4,
                    marginRight: 4,
                  }}
                >
                  <Typography fontSize={"20px"} mb={3}>
                    Upload the drawings of three things they’d like to eat, that
                    you’ll grow
                  </Typography>
                  <Formik
                    initialValues={initialData}
                    validationSchema={schema}
                    onSubmit={handleSubmit}
                    innerRef={formref} 
                  >
                    {({ values, errors, handleChange, handleSubmit ,  }) => (
                      <form onSubmit={handleSubmit}>
                        <Grid
                          container
                          rowSpacing={5}
                          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        >
                          <Grid item xs={6}>
                            <Stack direction={"column"}>
                              <label for="name">Length</label>
                              <input
                                name="length"
                                id="length"
                                style={{
                                  textDecoration: "none",
                                  backgroundColor: "#00000000",
                                  border: "none",
                                  outline: "none",
                                  border: "1px solid #00000000",
                                  borderBottom: "1px solid #000",
                                }}
                                placeholder="Enter length"
                                value={values.length}
                                onChange={handleChange}
                              />
                            </Stack>
                          </Grid>
                          <Grid item xs={6}>
                            <Stack direction={"column"}>
                              <label for="name">Width</label>
                              <input
                                name="width"
                                id="width"
                                style={{
                                  textDecoration: "none",
                                  backgroundColor: "#00000000",
                                  border: "none",
                                  outline: "none",
                                  border: "1px solid #00000000",
                                  borderBottom: "1px solid #000",
                                }}
                                placeholder="Enter width"
                                value={values.width}
                                onChange={handleChange}
                              />
                            </Stack>
                          </Grid>
                          <Grid item xs={6}>
                            <Stack direction={"column"}>
                              <label for="name">Height</label>
                              <input
                                name="height"
                                id="height"
                                style={{
                                  textDecoration: "none",
                                  backgroundColor: "#00000000",
                                  border: "none",
                                  outline: "none",
                                  border: "1px solid #00000000",
                                  borderBottom: "1px solid #000",
                                }}
                                placeholder="Enter height"
                                value={values.height}
                                onChange={handleChange}
                              />
                            </Stack>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          rowSpacing={5}
                          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                          mt={0.5}
                        >
                          <Grid item xs={6}>
                            <Stack direction={"column"}>
                              <p for="name">
                                Our farm has this many levels, shelves{" "}
                              </p>
                              <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="levels"
                                value={values.levels}
                                onChange={handleChange}
                              >
                                <FormControlLabel
                                  value="1"
                                  control={<Radio />}
                                  label="1"
                                />
                                <FormControlLabel
                                  value="2"
                                  control={<Radio />}
                                  label="2"
                                />
                                <FormControlLabel
                                  value="3"
                                  control={<Radio />}
                                  label="3"
                                />
                                <FormControlLabel
                                  value="More"
                                  control={<Radio />}
                                  label="more"
                                />
                              </RadioGroup>
                            </Stack>
                          </Grid>
                          <Grid item xs={6}>
                            <Stack direction={"column"}>
                              <p for="name">
                                Our farm has this many planters, posts{" "}
                              </p>
                              <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="planters"
                                value={values.planters}
                                onChange={handleChange}
                              >
                                <FormControlLabel
                                  value="1"
                                  control={<Radio />}
                                  label="1"
                                />
                                <FormControlLabel
                                  value="2"
                                  control={<Radio />}
                                  label="2"
                                />
                                <FormControlLabel
                                  value="3"
                                  control={<Radio />}
                                  label="3"
                                />
                                <FormControlLabel
                                  value="More"
                                  control={<Radio />}
                                  label="more"
                                />
                              </RadioGroup>
                            </Stack>
                          </Grid>
                        </Grid>
                        </form>
                    )}
                  </Formik>
                </Box>
              </Box>
            </Box>

          </Stack>
          <img src={arrowForward} onClick={() => submitFormNotes()}/>

        </Stack>
      </Box>
    </>
  );
}
