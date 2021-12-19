import React, { useState, useEffect } from "react";
import styles from "../styles/login.module.css";
import LeminCaptcha from "./LeminCaptcha";
import axios from "axios";
import {
  leminCroppedCaptcha,
} from "@leminnow/react-lemin-cropped-captcha";

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    errorMessage: "",
  });
  
  const [passwordShown, setPasswordShown] = useState(false);

  useEffect(() => {
    let isLoggedIn = JSON.parse(localStorage.getItem("logged"))
    if(isLoggedIn===true) {
      window.location.href="/home"
    }
 }, [])

  const handleSubmit =  (e) => {
    e.preventDefault();

    if (!user.password || !user.username) {
      setUser({ ...user, errorMessage: "please fill required fields" });
    } else {
      if (user.username !== "user" || user.password !== "user12345") {
        setUser({ ...user, errorMessage: "username or password is incorrect!"});
      } else { 
        getCaptchaValue()
      }
    }
  };

  function getCaptchaValue() {
    setUser({...user, errorMessage:""})
    const values = leminCroppedCaptcha
      .getCaptcha("CROPPED_ca3f0ae_71257d582794475cb70509a98a46a7b9")
      .getCaptchaValue();
    let options = {
      private_key: process.env.REACT_APP_LEMIN_KEY,
      challenge_id: values.challenge_id,
      answer: values.answer,
    };

     axios
      .post("https://api.leminnow.com/captcha/v1/cropped/validate", options)
      .then((response) => {
        console.log({
          success: response.data.success,
          message: response.data.message,
          code: response.data.code,
        });
        setTimeout(() => {
            if(response.data.success){
                localStorage.setItem("logged", JSON.stringify(true));
                window.location.href = "/home"
            }
            else{
                setUser({ ...user, errorMessage: "CAPTCHA answer has not been verified" });
            }
        }, 100);
      })
      .catch((error) => {
        setUser({ ...user, errorMessage: "CAPTCHA answer has not been verified" });
      });
  }
 

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <div className={styles.loginMain}>
      <div className={styles.banner1}>
        <p>Nothing is behind this door</p>
      </div>
      <div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <span>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={(e) =>
              setUser({ ...user, username: e.target.value, errorMessage: "" })
            }
            autoFocus
          />
       <i className="bi bi-eye" style={{visibility:"hidden"}}></i>
          </span>
          <label htmlFor="password">Password:</label>
          <span>
            <input
            type={passwordShown ? "text" : "password"} 
            name="password"
            value={user.password}
            onChange={(e) =>
              setUser({ ...user, password: e.target.value, errorMessage: "" })
            }
          
          />
           {passwordShown && <i className="bi bi-eye-slash" onClick={togglePassword} style={{color:"black", fontWeight:"bolder"}}></i>} 
           {!passwordShown && <i className="bi bi-eye" onClick={togglePassword} style={{color:"black", fontWeight:"bolder"}}></i>} 
           </span>
            
        
          <button type="submit">Login</button>
          
        </form>
        {user.errorMessage && (
            <p className={styles.errorMessage}>{user.errorMessage}</p>
          )}
        {!user.errorMessage && (
            <p className={styles.placeError}>placeholder</p>
          )}
        <LeminCaptcha />
      </div>
      <div className={styles.banner2}>
        <p>Or maybe not, i don't know</p>
      </div>
    </div>
  );
}

export default React.memo(Login);
