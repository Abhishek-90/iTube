import "./ITubeApp.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VideoSearchResult from "./pages/VideoSearchResult";
import VideoStream from "./pages/VideoStream";

function ITubeApp() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/video-search-result/:search-query"
          element={<VideoSearchResult />}
        />
        <Route path="/video-stream/:id" element={<VideoStream />} />
      </Routes>
    </>
  );
}

export default ITubeApp;
