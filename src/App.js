import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate, Outlet } from "react-router-dom"
import SignupHome from './pages/auth/SignupHome';
import Signup from './pages/auth/Signup';
import SendOtp from './pages/auth/SendOtp';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignupSchool from './pages/auth/SignupSchool';
import ProtectedRoute from './pages/auth/ProtectedRoute';
import SignupPublicSchool from './pages/auth/SignupPublicSchool';
import SignupPriviateSchool from './pages/auth/SignupPriviateSchool';
import ProfileSelect from './pages/auth/ProfileSelect';
import AddSchool from './components/normal/AddSchool';
import ThankYou from './pages/Thankyou';

import {Auth, API } from 'aws-amplify'

import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import ResendOtp from './pages/auth/ResendOtp';
import ProfileSelectSuccess from './pages/auth/ProfileSelectSuccess';
import Privacy from './pages/Privacy';
import PlayCity from './components/normal/PlayCity';
import AuthHome from './pages/auth/AuthHome';
import AboutUs from './pages/AboutUs';
import Stream from './pages/Stream';
import Challenges from './pages/Challenges';
import ScrapyShop from './pages/ScrapyShop';
import LeaderBoard from './pages/LeaderBoard';
import LeaderBoardMumbai from './pages/LeaderBoardMumbai';
import LeaderBoardBangalore from './pages/LeaderBoardBangalore';
import Choice from './pages/Choice';
import VerticalFarmHome from './pages/verticalFarm/VerticalFarmHome';
import { useSelector } from 'react-redux';
import { getUserFromLocalStorage} from './utils/localStorage';
import { useEffect, useState } from 'react';
import useLocalStorage from './components/global/useLocalstorage';
import ScrappyResearch from './pages/verticalFarm/ScrappyResearch';
import ScrappyResearchPost from './pages/verticalFarm/ScrappyResearchPost';
import FieldResearchNotes from './pages/verticalFarm/FieldResearchNotes';
import WhoWeMetForm from './pages/verticalFarm/WhoWeMetForm';
import ScrappyDesign from './pages/verticalFarm/ScrappyDesign';
import SkyFarmNotes from './pages/verticalFarm/SkyFarmNotes';
import SkyFarmConstruciton from './pages/verticalFarm/SkyFarmNotesConstruction';
import ScrappyOrganicFarmers from './pages/verticalFarm/ScrappyOrganicFarmers';
import VeggiesBySeason from './pages/verticalFarm/VeggiesBySeason';
import FruitsBySeason from './pages/verticalFarm/FruitsBySeason ';
import ScrappyMakeBuild from './pages/verticalFarm/ScrappyMakeBuild';
import BuiltYourFarm from './pages/verticalFarm/BuiltYourFarm';
import UploadYourFarm from './pages/verticalFarm/UploadYourFarm';
import UploadYourGame from './pages/verticalFarm/UploadYourGame';
import UploadGameVideo from './pages/verticalFarm/UploadGameVideo';
import EachLevelStages from './pages/verticalFarm/EachLevelStages';
import UpCycledMaterials from './pages/verticalFarm/UpCycledMaterials';
import SustainableDesign from './pages/verticalFarm/SustainableDesign';
import FirstSkyFarm from './pages/verticalFarm/FirstSkyFarm';
import FirstSkyFarmCrop from './pages/verticalFarm/FirstSkyFarmCrop';
import About from './pages/campaign/About';
import ScrappyProfile from './pages/campaign/ScrappyProfile';
import ScrappyProfileCom from './pages/campaign/ScrappyProfileComp';

Amplify.configure(awsExports);
Auth.configure(awsExports)


function PublicRoute({ token }) {
  if (token) {
    return <Navigate to="/signup-school" replace />;
  }
  return <Outlet />;
}

// This function is used for Authentication when user's credentials will be invalid.
function PrivateRoute({ token }) {
  if (!token) {
    return <Navigate to="/" />
  };
  return <Outlet />;
}


function App() {

  const [token, setToken] = useState('');
  // const [theme, setTheme] = useLocalStorage("user", "N,A");
   
  useEffect(()=>{

    const getToken = getUserFromLocalStorage();

    const newToken = getToken?.meta?.access_token ;
      setToken(newToken);
    
  },[token])


  return (
    <>
      <Routes>
        {/* <Route path="/home" element={ <SignupHome />  } /> */}

        <Route element={<PublicRoute token={token} />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={ <AuthHome /> } />
        <Route path="/signup" element={ <Signup /> } />
        <Route path="/signin" element={ <Login /> } />
        <Route path="/forgot-password" element={ <ForgotPassword /> } />

      </Route>

      {/* <Route element={<PrivateRoute token={token} />}> */}

      <Route path="*" element={'not found'} />

        <Route path="/choice" element={ <Choice /> } />
        <Route path="/vertical-farm" element={ <VerticalFarmHome /> } />
        <Route path="/scrappy-research" element={ <ScrappyResearch /> } />
        <Route path="/scrappy-research-post" element={ <ScrappyResearchPost /> } />
        <Route path="/field-research/:id" element={ <FieldResearchNotes /> } />
        <Route path="/who-we-met/:id" element={ <WhoWeMetForm /> } />
        <Route path="/scrappy-design/:id" element={ <ScrappyDesign /> } />
        <Route path="/sky-farm-notes/:id" element={ <SkyFarmNotes/> } />
        <Route path="/sky-farm-construction/:id" element={ <SkyFarmConstruciton/> } />
        <Route path="/scrappy-organic-farmers/:id" element={ <ScrappyOrganicFarmers/> } />
        <Route path="/veggies-by-season/:id" element={ <VeggiesBySeason/> } />
        <Route path="/fruits-by-season" element={ <FruitsBySeason/> } />
        <Route path="/scrappy-make-build/:id" element={ <ScrappyMakeBuild/> } />
        <Route path="/built-your-farm/:id" element={ <BuiltYourFarm/> } />
        <Route path="/upload-your-farm/:id" element={ <UploadYourFarm/> } />
        <Route path="/each-level-stages/:id" element={ <EachLevelStages/> } />
        <Route path="/up-cycled-materials/:id" element={ <UpCycledMaterials/> } />
        <Route path="/sustainable-design/:id" element={ <SustainableDesign/> } />
        <Route path="/first-sky-farm/:id" element={ <FirstSkyFarm/> } />
        <Route path="/first-sky-farm-crop/:id" element={ <FirstSkyFarmCrop/> } />
        <Route path="/upload-your-game/:id" element={ <UploadYourGame/> } />
        <Route path="/upload-game-video/:id" element={ <UploadGameVideo/> } />
        <Route path="/campaign-about" element={ <About/> } />
        <Route path="/scarppy-profile" element={ <ScrappyProfile/> } />
        <Route path="/scarppy-profile-completed" element={ <ScrappyProfileCom/> } />
        <Route path="/reset-password" element={ <ResetPassword /> } />
        <Route path="/resend-otp" element={ <ResendOtp /> } />
        {/* <Route path="/otp" element={ <SendOtp /> } /> */}
        <Route path="/profile-success" element={ <ProfileSelectSuccess /> } />
        <Route path="/signup-school" element={ <SignupSchool /> } />
        <Route path="/signup-public-school" element={ <SignupPublicSchool /> } />
        <Route path="/signup-priviate-school" element={ <SignupPriviateSchool /> } />
        <Route path="/profile" element={ <ProfileSelect /> } />
        <Route path="/add-school" element={ <AddSchool /> } />
        <Route path="/thank-you" element={ <ThankYou /> } />
        <Route path="/privacy-policy" element={ <Privacy /> } />
        <Route path="/play-city" element={ <PlayCity /> } />
        <Route path="/about-us" element={ <AboutUs /> } />
        <Route path="/stream" element={ <Stream /> } />
        <Route path="/challenges" element={ <Challenges /> } />
        <Route path="/scrappy-shop" element={ <ScrapyShop /> } />
        <Route path="/leaderboard" element={ <LeaderBoard /> } />
        <Route path="/leaderboard-mumbai" element={ <LeaderBoardMumbai /> } />
        <Route path="/leaderboard-bangalore" element={ <LeaderBoardBangalore /> } />

        {/* </Route> */}
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;