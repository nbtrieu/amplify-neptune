import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { Navigation } from "./Navigation";
import { RegisterData } from "./Register";
import { Integration } from "./Integration";

export const Router = (props) => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<RegisterData />} />
        <Route path="/integration" element={<Integration />} />
      </Routes>
    </BrowserRouter>
  );
};
