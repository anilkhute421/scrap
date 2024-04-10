import './verticalfarm.css'
import React from 'react'
import scrappyLogo from "../../assets/images/vertical-farm/scrappy-logo.png";
import notificaiton from "../../assets/images/vertical-farm/notificaiton.png";
export default function VerticalFarmHeader() {
    return (
        <div className='vertical-farm-header'>
            <img src={scrappyLogo} className='ms-5' />
            <div style={{
                display: "flex",
                width: "30%",
                flexDirection: "row",
                justifyContent: "space-between",
                marginRight: "30px",
                alignItems:"center"
            }}>
                <label>Home</label>
                <label>Create</label>
                <label>Scrappy Shop</label>
                <label>Profile</label>
                <img src={notificaiton} />
            </div>
        </div>
    )
}
