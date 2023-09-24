import "@mantine/core/styles.css";


import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import FoodMain from "./pages/FoodMain";
import PlaceToVisitMain from "./pages/PlaceToVisitMain";
import SportsMain from "./pages/SportsMain";
import Map from './components/Map';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Outlet} from "react-router-dom";
import Places from "./pages/Places";
import Suggest from "./components/Suggest";
import { FooterSocial } from "./components/FooterSocial";

function App() {

  const philadelphiaCenter = { lat: 39.9526, lng: -75.1652 };
  const locations = [
    { id: 1, name: 'Terrakawa', lat: 39.955391, lng: -75.154480 },
    { id: 2, name: 'Chu Shang', lat: 39.953812, lng: -75.155762 },
    // Add more locations as needed
  ];

  return (

      <div className="h-full">

          <Header />

          <LandingPage />

          <PlaceToVisitMain />

          <FoodMain />

          <SportsMain />

          {/* <Suggest/> */}

          <FooterSocial />


        </div>

  );
}

export default App;
