import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./page/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
