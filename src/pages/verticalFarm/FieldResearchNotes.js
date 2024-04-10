import './verticalfarm.css'
import React from 'react'
import VerticalFarmHeader from './VerticalFarmHeader'
import fieldBook from "../../assets/images/vertical-farm/field-book.png";
import playCity from "../../assets/images/vertical-farm/field-research-notes.png";
import arrowForward from "../../assets/images/vertical-farm/arrow-forward.png";
import { Link, useParams } from 'react-router-dom';

export default function FieldResearchNotes() {
    const routeParams = useParams();
    const verticalFarmId = routeParams?.id

    return (
        <div>
            <VerticalFarmHeader />
            <div style={{
                display: "flex",
                flexDirection: "row",
                padding: "30px",
                paddingLeft: "90px",
                paddingRight: "120px",
            }}>
                <div style={{
                    display: "flex",
                    flex: "3",
                    justifyContent: "center",
                }}>
                    <img src={fieldBook} style={{
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
                            width: "369px",
                            height: "69px"
                        }} />
                        <Link to={`/who-we-met/${verticalFarmId}`}>
                        <img src={arrowForward} />
                        </Link>
                    </div>

                    <p style={{
                        fontSize: "24px",
                        marginTop: "20px",
                        fontWeight: "bold"
                    }}>
                        Field Notes
                    </p>

                    <p style={{
                        fontSize: "24px",
                        marginTop: "8px"
                    }}>
                        Share your field notes from your field research, people you met, interviewed, found out more about
                    </p>
                </div>
            </div>
        </div>
    )
}
