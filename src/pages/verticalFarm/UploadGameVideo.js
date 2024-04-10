import React from 'react'
import VerticalFarmHeader from './VerticalFarmHeader'
import { Box, Stack, Typography, Button } from '@mui/material'
import uploadGameVideoBG from "../../assets/images/vertical-farm/upload-game-video-bg.png";
import mobile from "../../assets/images/vertical-farm/mobile.png";
import arrowForward from "../../assets/images/vertical-farm/arrow-forward.png";

export default function UploadGameVideo() {
    return (
        <div>
            <VerticalFarmHeader />
            <Box sx={{
                backgroundImage: `url(${uploadGameVideoBG})`,
                backgroundSize: "100vw",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <img src={arrowForward} style={{
                    width: "66px",
                    height: "67px",
                    position: "absolute",
                    right: "100px",
                    marginTop: "20px"
                }} />
                <Stack direction={"column"} alignItems={"center"}>
                    <img src={mobile} style={{
                        width: "542px",
                        height: "833px",
                    }} />
                    <Button sx={{
                        fontSize: "20px",
                        bottom: "149px",
                        right: "35px",
                        position: "relative",
                        color: "black",
                        fontWeight: "bold"
                    }}>Submit</Button>
                </Stack>
            </Box>
        </div>
    )
}
