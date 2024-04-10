import React from 'react'
import VerticalFarmHeader from './VerticalFarmHeader'
import { Box, Stack } from '@mui/material'
import uploadYourGameBG from "../../assets/images/vertical-farm/upload-your-game-bg.png";
import uploadYourGameHead from "../../assets/images/vertical-farm/upload-your-game-head.png";
import playCity from "../../assets/images/vertical-farm/play-city.png";
import uploadYourGameBall from "../../assets/images/vertical-farm/upload-your-game-ball.png";
import arrowForward from "../../assets/images/vertical-farm/arrow-forward.png";
import uploadYourGameBoard from "../../assets/images/vertical-farm/upload-your-game-board.png";
import { Link, useParams } from 'react-router-dom';

export default function UploadYourGame() {
    const routeParams = useParams();
  const verticalFarmId = routeParams?.id;
    return (
        <div>
            <VerticalFarmHeader />
            <Box sx={{
                backgroundImage: `url(${uploadYourGameBG})`,
                backgroundSize: "100vw",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                display:"flex",
                flexDirection:"column",
                alignItems:"center"
            }}>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} mt={3}>
                    <Stack direction={"column"} spacing={1} alignItems={"center"}>
                        <img src={playCity} style={{
                            width: "236px",
                            height: "51px",
                        }} />

                        <img src={uploadYourGameHead} style={{
                            width: "322px",
                            height: "50px",
                        }} />
                    </Stack>
                    <img src={uploadYourGameBall} style={{
                        width: "66px",
                        height: "67px",
                    }} />
                    <Link to={`/upload-game-video/${verticalFarmId}`}>
                    <img src={arrowForward} style={{
                        width: "66px",
                        height: "67px",
                        position: "absolute",
                        right: "100px"
                    }} />
                    </Link>
                </Stack>
                <img src={uploadYourGameBoard} style={{
                    width: "589px",
                    height: "743px",
                    marginTop:"20px"
                }} />
            </Box>
        </div>
    )
}
