import React from "react";
import Group265 from "../assets/Group265.png";
import Group264 from "../assets/Group264.png";

const Register = () => {
  return (
    <div className="flex justify-between">
      <div className="w-1/2 h-screen px-50 py-25">
        <h1>Register</h1>
        <img src={Group264} alt="Register Background" />
      </div>
      <div>
        <img src={Group265} alt="Register Group" />
      </div>
    </div>
  );
};

export default Register;
