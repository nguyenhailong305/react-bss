import React from "react";
import Button from "../../common/button/Button"; 
import Input from "../../common/input/Input";
import "./login.scss";

const Login = () => {
  return (
    <div class="container">
      <div class="box__container">
        <div className="header__container">
          <h2>SOIOT SYSTEM</h2>
        </div>
        <div class="input__container">
          <Input type="text" placeholder="Enter your name" size="large" />
          <Input type="text" placeholder="Enter your email" size="large" />
        </div>
        <div class="button__container">
          <Button large>LOGIN</Button>
          <p className="button__text">or create new account</p>
        </div> 
      </div>
    </div>
  );
};

export default Login;
