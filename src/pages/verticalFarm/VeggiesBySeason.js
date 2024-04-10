import React, { useDebugValue, useEffect } from 'react'
import VerticalFarmHeader from './VerticalFarmHeader'
import VeggiesBySeasonHead from "../../assets/images/vertical-farm/veggies-by-season.png";
import VeggiesBySeasonBG from "../../assets/images/vertical-farm/veggies-by-season-bg.png";
import { Box, Stack, Table, TableBody, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import arrowForward from "../../assets/images/vertical-farm/arrow-forward.png";
import arrowBackward from "../../assets/images/vertical-farm/arrow-backward.png";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import pinkBg from "../../assets/images/vertical-farm/pink-bg.png";
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCrops } from '../../features/user/verticalFormSlice';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#FFFCF2",
        color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        // backgroundColor: "#fff",
        borderRight: "1px solid grey",
        borderColor: theme.palette.divider,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    // '&:nth-of-type(odd)': {
    //     backgroundColor: theme.palette.action.red,
    // },
    // hide last border
    // '&:first-child td, &:first-child th': {
    //     backgroundColor:"red"
    // },
}));

function createData(
    id,
    name,
    calories,
    fat,
    carbs,
    protein,
    a,
    b,
    c,
    d
) {
    return {id, name, calories, fat, carbs, protein, a, b, c, d };
}

const rows = [
    createData(1,'Beetroot', "", "", "", "", "", "", "", ""),
    createData(2,'Onions', "", "", "", "", "", "", "", ""),
    createData(3,'Carrots', "", "", "", "", "", "", "", ""),
    createData(4,'Potato', "", "", "", "", "", "", "", ""),
    createData(5,'Spinach', "", "", "", "", "", "", "", ""),
];


export default function VeggiesBySeason() {
  const dispatch = useDispatch();
  const routeParams = useParams();
  const verticalFarmId = routeParams?.id;
  const [cropEdited, setCropEdited] = React.useState({});
  const { loading, cropData } =
    useSelector((state) => state.verticalForm);
    const veggiessData = cropData?.data?.crops;

  useEffect(()=>{
    dispatch(getCrops(verticalFarmId));
  },[])


const onCropMonthSelect = (cropToEdit)=>{
    if (cropEdited.name != cropToEdit.name) {
        setCropEdited({
            id:cropToEdit.id,
            name: cropToEdit.name,
            months:[cropToEdit.month]
        });
        return;
    }
    const crop = {...cropEdited};
    if (!crop.months.includes(cropToEdit.month)) {
        const months = [...crop.months, cropToEdit.month];
        crop.months = months;
        setCropEdited(crop);
    }else{
        const months = [...crop.months];
        crop.months = months.filter((m)=>m!=cropToEdit.month);
        setCropEdited(crop);
    }
    console.log('CurrentCrop===========>', crop);
};

    return (
        <>
            <VerticalFarmHeader />
            <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} height={"100%"} m={"50px"}>
                <Link to={`/scrappy-organic-farmers/${verticalFarmId}`}>
                <img src={arrowBackward} />
                </Link>
                <Stack flex={3} justifyContent={"center"} display={"flex"} direction={"column"} alignItems={"center"}>

                    <div style={{
                        backgroundImage: `url(${VeggiesBySeasonBG})`,
                        backgroundSize: "524px",
                        backgroundRepeat: "space",
                        backgroundPosition: "center",
                        width: "524px",
                        height: "116px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"

                    }}>
                        <img src={VeggiesBySeasonHead} style={{
                            width: "328px",
                            height: "69px",

                        }} />
                    </div>

                    <Box mt={4}>

                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align="left"></StyledTableCell>
                                        <StyledTableCell align="left">Jan</StyledTableCell>
                                        <StyledTableCell align="center">Feb</StyledTableCell>
                                        <StyledTableCell align="center">Mar</StyledTableCell>
                                        <StyledTableCell align="center">Apr</StyledTableCell>
                                        <StyledTableCell align="center">May</StyledTableCell>
                                        <StyledTableCell align="center">Jun</StyledTableCell>
                                        <StyledTableCell align="center">Jul</StyledTableCell>
                                        <StyledTableCell align="center">Aug</StyledTableCell>
                                        <StyledTableCell align="center">Sep</StyledTableCell>
                                        <StyledTableCell align="center">Oct</StyledTableCell>
                                        <StyledTableCell align="center">Nov</StyledTableCell>
                                        <StyledTableCell align="center">Dec</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows?.map((row) => (
                                        <StyledTableRow key={row.name}>
                                            <StyledTableCell component="th" scope="row" style={{
                                                backgroundColor: "#FFFCF2",

                                            }}>
                                                {row.name}
                                            </StyledTableCell>
                                            <StyledTableCell align="center" sx={{
                                                backgroundColor:(cropEdited.name == row.name && cropEdited.months.includes('Jan')?'#009CA6':'white')
                                            }} onClick={() => {
                                                onCropMonthSelect({ id:row.id, name: row.name, month: "Jan" });
                                            }}></StyledTableCell>
                                            <StyledTableCell align="center" sx={{
                                                backgroundColor:(cropEdited.name == row.name && cropEdited.months.includes('Feb')?'#009CA6':'white')
                                            }} onClick={() => {
                                                onCropMonthSelect({ id:row.id,name: row.name, month: "Feb" });
                                            }}></StyledTableCell>
                                            <StyledTableCell align="center" sx={{
                                                backgroundColor:(cropEdited.name == row.name && cropEdited.months.includes('Mar')?'#009CA6':'white')
                                            }} onClick={() => {
                                                onCropMonthSelect({ id:row.id,name: row.name, month: "Mar" });
                                            }}></StyledTableCell>
                                            <StyledTableCell align="center" sx={{
                                                backgroundColor:(cropEdited.name == row.name && cropEdited.months.includes('Apr')?'#009CA6':'white')
                                            }} onClick={() => {
                                                onCropMonthSelect({ id:row.id,name: row.name, month: "Apr" });
                                            }}></StyledTableCell>
                                            <StyledTableCell align="center" sx={{
                                                backgroundColor:(cropEdited.name == row.name && cropEdited.months.includes('May')?'#009CA6':'white')
                                            }} onClick={() => {
                                                onCropMonthSelect({ id:row.id,name: row.name, month: "May" });
                                            }}></StyledTableCell>
                                            <StyledTableCell align="center" sx={{
                                                backgroundColor:(cropEdited.name == row.name && cropEdited.months.includes('Jun')?'#009CA6':'white')
                                            }} onClick={() => {
                                                onCropMonthSelect({ id:row.id,name: row.name, month: "Jun" });
                                            }}></StyledTableCell>
                                            <StyledTableCell align="center" sx={{
                                                backgroundColor:(cropEdited.name == row.name && cropEdited.months.includes('Jul')?'#009CA6':'white')
                                            }} onClick={() => {
                                                onCropMonthSelect({ id:row.id,name: row.name, month: "Jul" });
                                            }}></StyledTableCell>
                                            <StyledTableCell align="center" sx={{
                                                backgroundColor:(cropEdited.name == row.name && cropEdited.months.includes('Aug')?'#009CA6':'white')
                                            }} onClick={() => {
                                                onCropMonthSelect({ id:row.id,name: row.name, month: "Aug" });
                                            }}></StyledTableCell>
                                            <StyledTableCell align="center" sx={{
                                                backgroundColor:(cropEdited.name == row.name && cropEdited.months.includes('Sep')?'#009CA6':'white')
                                            }} onClick={() => {
                                                onCropMonthSelect({ id:row.id,name: row.name, month: "Sep" });
                                            }}></StyledTableCell>
                                            <StyledTableCell align="center" sx={{
                                                backgroundColor:(cropEdited.name == row.name && cropEdited.months.includes('Oct')?'#009CA6':'white')
                                            }} onClick={() => {
                                                onCropMonthSelect({ id:row.id,name: row.name, month: "Oct" });
                                            }}></StyledTableCell>
                                            <StyledTableCell align="center" sx={{
                                                backgroundColor:(cropEdited.name == row.name && cropEdited.months.includes('Nov')?'#009CA6':'white')
                                            }} onClick={() => {
                                                onCropMonthSelect({ id:row.id,name: row.name, month: "Nov" });
                                            }}></StyledTableCell>
                                            <StyledTableCell align="center" sx={{
                                                backgroundColor:(cropEdited.name == row.name && cropEdited.months.includes('Dec')?'#009CA6':'white')
                                            }} onClick={() => {
                                                onCropMonthSelect({ id:row.id,name: row.name, month: "Dec" });
                                            }}></StyledTableCell>
                                            
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Box width={"100%"} display={"flex"} justifyContent={"center"} mt={2}>
                            <button
                                style={{
                                    backgroundImage: `url(${pinkBg})`,
                                    backgroundSize: "157px",
                                    backgroundRepeat: "space",
                                    backgroundPosition: "center",
                                    height: "44px",
                                    width: "157px",
                                    color: "#fff",
                                }}
                                onClick={()=>{
                                    console.log('Add Vegetables Button======>', cropEdited);
                                }}
                            >
                                Add Vegetables
                            </button>

                        </Box>
                    </Box>
                </Stack>
                <Link to={`/scrappy-make-build/${verticalFarmId}`}>
                <img src={arrowForward} />
                </Link>

            </Stack>

        </>
    )
}
