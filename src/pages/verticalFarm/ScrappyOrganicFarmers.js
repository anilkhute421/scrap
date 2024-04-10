import './verticalfarm.css'
import React from 'react'
import VerticalFarmHeader from './VerticalFarmHeader'
import scrappyOrganicFarmers from "../../assets/images/vertical-farm/scrappy-organic-farmers.png";
import scrappyOrganicFarmersHead from "../../assets/images/vertical-farm/scrappy-organic-farmers-head.png";
import arrowForward from "../../assets/images/vertical-farm/arrow-forward.png";
import football from "../../assets/images/vertical-farm/football.png";
import scrappy from "../../assets/images/vertical-farm/scrappy.png";
import { Link, useParams } from 'react-router-dom';

export default function ScrappyOrganicFarmers() {
    const routeParams = useParams();
  const verticalFarmId = routeParams?.id;
    return (
        <div>
            <VerticalFarmHeader />
            <div style={{
                display: "flex",
                flexDirection: "row",
                padding: "30px",
                paddingLeft: "60px",
                paddingRight: "60px",
            }}>
                <div style={{
                    display: "flex",
                    flex: "3",
                    justifyContent: "center",
                    marginTop: "25px"
                }}>
                    <img src={scrappyOrganicFarmers} style={{
                        height: "80vh"
                    }} />
                </div>
                <div style={{
                    display: "flex",
                    flex: "7",
                    flexDirection: "column",
                    padding: "10px"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}>
                        <img src={scrappyOrganicFarmersHead} style={{
                            width: "580px",
                            height: "138px"
                        }} />
                        <Link to={`/veggies-by-season/${verticalFarmId}`}>
                            <img src={arrowForward} />
                        </Link>
                    </div>

                    <p style={{
                        fontSize: "24px",
                        marginTop: "20px"
                    }}>
                        What will you plant and grow?
                    </p>

                    <p style={{
                        fontSize: "24px",
                        marginTop: "8px"
                    }}>

                        Remember to look back at your field notes about what people wanted you to grow before you make your plan.

                    </p>
                    <p style={{
                        fontSize: "24px",
                        marginTop: "8px"
                    }}>

                        Upload your plan for the seasons of the year where in the world your farm will be

                    </p>
                </div>
            </div>
        </div>
    )
}
