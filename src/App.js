import React from "react";
import { Route, Routes } from "react-router-dom";
import FindIdPage from "./page/FindIdPage";
import FindPwPage from "./page/FindPwPage";
import LoginPage from "./page/LoginPage";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/login/find_id" element={<FindIdPage />} />
      <Route path="/login/find_pw" element={<FindPwPage />} />
    </Routes>
  );
};

export default App;
