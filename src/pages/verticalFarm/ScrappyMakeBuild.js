import React from 'react'
import arrowForward from "../../assets/images/vertical-farm/arrow-forward.png";
import scrappyMakeBuildBG from "../../assets/images/vertical-farm/scrappy-make-build.png";
import { Box } from '@mui/material';
import VerticalFarmHeader from './VerticalFarmHeader';
import { Link, useParams } from 'react-router-dom';

export default function ScrappyMakeBuild() {
  const routeParams = useParams();
  const verticalFarmId = routeParams?.id;
  return (
    <>
      <VerticalFarmHeader />

      <Box pl={6} pr={6} pt={2}>

        <Box display={"flex"} justifyContent={"flex-end"} sx={{
          backgroundImage: `url(${scrappyMakeBuildBG})`,
          backgroundSize: "410px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "687px",
        }}>
         <Link to={`/built-your-farm/${verticalFarmId}`}>
          <img src={arrowForward} style={{
            height: "85px",
            width: "85px"
          }} />
          </Link>
        </Box>
      </Box>
    </>
  )
}
