import "./verticalfarm.css";
import React from "react";
import VerticalFarmHeader from "./VerticalFarmHeader";
import scrappyText from "../../assets/images/vertical-farm/scrappy-text.png";
import scrappyDesImg from "../../assets/images/vertical-farm/scrappy-design.png";
import arrowForward from "../../assets/images/vertical-farm/arrow-forward.png";
import { Link, useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

export default function ScrappyDesign() {
  const routeParams = useParams();
  const verticalFarmId = routeParams?.id;
  return (
    <Box>
      <VerticalFarmHeader />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          padding: "30px",
          paddingLeft: "90px",
          paddingRight: "120px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flex: "3",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            sx={{
              height: "80vh",
            }}
            alt=""
            src={scrappyDesImg}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flex: "7",
            flexDirection: "column",
            padding: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Box
            component="img"
            sx={{
              width: "369px",
                height: "69px",
            }}
            alt=""
            src={scrappyText}
          />
            <Link to={`/sky-farm-notes/${verticalFarmId}`}>
              <Box
            component="img"
            alt="The house from the offer."
            src={arrowForward}
          />
            </Link>
          </Box>

          <Typography
          variant="body1"
            sx={{
              fontSize: "24px",
              marginTop: "8px",
            }}
          >
            You know where you want to build your vertical farm, you know why,
            you know how many people want to eat leafy greens grown in your
            organic farm in the sky.Upload your design for your farm in the sky.
          </Typography>

          <Typography
          variant="body1"
            sx={{
              fontSize: "24px",
              marginTop: "20px",
            }}
          >
            Upload your design for your farm in the sky.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
