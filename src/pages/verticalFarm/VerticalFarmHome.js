import './verticalfarm.css'
import React from 'react'
import VerticalFarmHeader from './VerticalFarmHeader'
import urbanVerticalFarmCover from "../../assets/images/vertical-farm/urban-vertical-farm-cover.png";
import playCity from "../../assets/images/vertical-farm/play-city.png";
import arrowForward from "../../assets/images/vertical-farm/arrow-forward.png";
import football from "../../assets/images/vertical-farm/football.png";
import scrappy from "../../assets/images/vertical-farm/scrappy.png";
import { Link } from 'react-router-dom';

export default function VerticalFarmHome() {
    return (
        <div>
            <VerticalFarmHeader />
            <div style={{
                display: "flex",
                flexDirection: "row",
                padding: "30px",
                paddingLeft: "30px",
                paddingRight: "60px",
            }}>
                <div style={{
                    display: "flex",
                    flex: "3",
                    justifyContent: "center",
                }}>
                    <img src={urbanVerticalFarmCover} style={{
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
                        <img src={playCity} style={{
                            width: "259px"
                        }} />
                        <Link to="/scrappy-research">
                          <img src={arrowForward} />
                        </Link>
                    </div>

                    <p style={{
                        fontSize: "24px",
                        marginTop: "20px"
                    }}>
                        Urban Vertical Farm Challenge Scrappy Researchers, Designers, Builders, Infinite Game Players
                    </p>

                    <p style={{
                        fontSize: "24px",
                        marginTop: "8px"
                    }}>
                        We’re delighted you’re here to submit your challenge.
                    </p>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-end"
                    }}>
                        <label style={{
                            fontSize: "24px"
                        }}>Be</label>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}>
                            <img src={scrappy} />

                            <img src={football} style={{
                                width: "25px"
                            }} />
                        </div>
                        <label style={{
                            fontSize: "24px"
                        }}>keep playing.</label>
                    </div>

                </div>
            </div>
        </div>
    )
}
