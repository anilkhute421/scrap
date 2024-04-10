import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import campaignAboutBg from "../../assets/images/campaign/campaign-about-bg.png";
import humanImg from "../../assets/images/campaign/human-img.png";
import leftTree from "../../assets/images/campaign/about-tree-left.png";
import rightTree from "../../assets/images/campaign/about-tree-right.png";
import scrappyLogo from "../../assets/images/campaign/scrappy-app-logo.png";
import letsGoButton from "../../assets/images/campaign/lets-go-button.png";
import VerticalFarmHeader from "../verticalFarm/VerticalFarmHeader";

const AboutContainer = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${campaignAboutBg})`,
  backgroundSize: "100vw",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
}));

const LeftTreeContainer = styled("div")(({ theme }) => ({
  position: "relative",
  width: "460px",
}));

const LeftTreeImage = styled("img")(({ theme }) => ({
  width: "460px",
  height: "640px",
}));

const ScrappyLogoContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  width: "380px",
  top: "50%",
  left: "55%",
}));

const ScrappyLogoImage = styled("img")(({ theme }) => ({
  width: "300px",
  height: "290px",
}));

const ContentContainer = styled("div")(({ theme }) => ({
  width: "471px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "36px",
  color: "white",
  fontWeight: "500",
  fontFamily: "Open Sans",
  marginTop: "70px",
  lineHeight: "24px",
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: "30px",
  color: "white",
  fontWeight: "400",
  fontFamily: "DJB CHALK IT UP",
  marginTop: "30px",
  padding: "0px 35px",
}));

const ReadyText = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  color: "white",
  fontWeight: "700",
  fontFamily: "Gotham",
  marginTop: "30px",
  padding: "0px 35px",
  lineHeight: "30px",
}));

const LetsGoButton = styled("img")(({ theme }) => ({
  width: "340px",
  height: "80px",
  marginTop: "20px",
}));

const RightTreeContainer = styled("div")(({ theme }) => ({
  position: "relative",
  width: "460px",
}));

const RightTreeImage = styled("img")(({ theme }) => ({
  width: "460px",
  height: "780px",
}));

const HumanImgContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  width: "380px",
  top: "55%",
  right: "35%",
}));

const HumanImg = styled("img")(({ theme }) => ({
  width: "270px",
  height: "350px",
}));

export default function About() {
  return (
    <div>
      <VerticalFarmHeader />
      <AboutContainer>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <LeftTreeContainer>
            <LeftTreeImage src={leftTree} />
            <ScrappyLogoContainer>
              <ScrappyLogoImage src={scrappyLogo} />
            </ScrappyLogoContainer>
          </LeftTreeContainer>

          <ContentContainer>
            <Title>Create Scrappy Campaign</Title>
            <Description>
              We’ll ask you about your plans, your ideas, your targets, and, finally, about the difference you’re going to make with this challenge.
            </Description>
            <ReadyText>Ready?</ReadyText>
            <LetsGoButton src={letsGoButton} />
          </ContentContainer>

          <RightTreeContainer>
            <RightTreeImage src={rightTree} />
            <HumanImgContainer>
              <HumanImg src={humanImg} />
            </HumanImgContainer>
          </RightTreeContainer>
        </Stack>
      </AboutContainer>
    </div>
  );
}
