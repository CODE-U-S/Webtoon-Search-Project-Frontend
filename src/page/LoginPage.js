import React from "react";
import Login from "../components/auth/Login";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";

function LoginPage() {
  return (
    <div>
      <Navbar />
      <Login />
      <Footer />
    </div>
  );
}

export default LoginPage;
