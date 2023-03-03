import "./ITubeApp.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VideoSearchResult from "./pages/VideoSearchResult";
import VideoStream from "./pages/VideoStream";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import styled from "styled-components";

function ITubeApp() {
  return (
    <AppContainer>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result/*" element={<VideoSearchResult />} />
        <Route path="/stream/*" element={<VideoStream />} />
      </Routes>
      <Footer />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 100vw;
`;

export default ITubeApp;
