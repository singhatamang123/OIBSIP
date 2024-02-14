import React, { useState } from "react";
import LoginForm from "./loginForm";
import styles from "./authForm.module.scss";
import SignupForm from "./signupForm";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const handleClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className={styles.authForm} onClick={handleClick}>
      <div className={styles.tabs}>
        <h2
          onClick={() => setIsLogin(true)}
          className={isLogin ? styles.active : ""}
        >
          Login
        </h2>
        <h2
          onClick={() => setIsLogin(false)}
          className={!isLogin ? styles.active : ""}
        >
          Sign Up
        </h2>
      </div>

      <p>
        We will offer you a gift on your birthday, store delivery address, and
        tell you about promotions
      </p>

      {isLogin ? <LoginForm /> : <SignupForm />}
    </div>
  );
};

export default AuthForm;
