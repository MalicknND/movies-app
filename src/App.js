import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LikePage from "./pages/LikePage";
import BackToTopButton from "./components/Back/BackToTop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<LikePage />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <BackToTopButton />
    </BrowserRouter>
  );
}

export default App;
