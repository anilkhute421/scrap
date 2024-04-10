import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";


const Navbar = () => {

  const navigate = useNavigate()

  const [lightMode, setLightMode ] = React.useState(false)

  const handleImgClick = (e) => {
    e.preventDefault();
    setLightMode(prevMode => !prevMode);
   navigate('/scrappy-shop');
  }

  console.log(lightMode, "LIGHTMODE");

  return (
    <>
       <div className="container">
       <div className="position-relative play-city-nav mobile-nav">

        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
        <div className="nav-menu-home"></div> 
        {/* <img src="/img/menu/menu-about-us.png" alt="" className="img-fluid nav-img nav-menu-about" /> */}
        </NavLink>

        <NavLink
          to="/about-us"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
        <div className="nav-menu-about"></div> 
        {/* <img src="/img/menu/menu-about-us.png" alt="" className="img-fluid nav-img nav-menu-about" /> */}
        </NavLink>

        <NavLink
          to="/stream"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
       <div className="nav-menu-stream"></div> 
       {/* <img src="/img/menu/menu-stream.png" alt="" className="img-fluid nav-img nav-menu-stream" /> */}
        </NavLink>

        <NavLink
          to="/play-city"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
       <div className="nav-menu-news"></div> 
         {/* <img src="/img/menu/play-city-news.png" alt="" className="img-fluid nav-img" /> */}
        </NavLink>


        <NavLink
          to="/challenges"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
           <div className="nav-menu-challenge"></div> 
         {/* <img src="/img/menu/menu-challenges.png" alt="" className="img-fluid nav-img" /> */}
        </NavLink>

        <NavLink
             to="/scrappy-shop"
             className={({ isActive, isPending }) =>
               isPending ? "pending" : isActive ? "active" : ""
             }
           >
        <div className="nav-menu-shop"></div> 
             {/* <img 
               onClick={handleImgClick}
               src={lightMode ? "/img/navbar/color-scrappy-shop.png" : "/img/menu/menu-scrappy-shop.png"}
               alt="" 
               className="img-fluid nav-img" 
             /> */}
           </NavLink>

        </div>
       </div>
    </>
  )
}

export default Navbar