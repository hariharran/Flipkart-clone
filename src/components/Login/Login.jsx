import React, { useState } from "react";
import "./Login.css"
import { RxCross2 } from "react-icons/rx";
import supabase from "../../supabase";
import { useDispatch } from "react-redux";
import { setUser } from "../../slices/userslices";

const Login = ({ isopen, setClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginType, setLoginType] = useState(true);

  const dispatch = useDispatch();

  const signup = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
  
    if (error) {
      console.error("Error signing up:", error.message);
    } else {
      if (data && data.user) {
        console.log("Sign up successful. User data:", data.user);
      } else {
        console.error("Sign up was successful, but user data is null or undefined.");
      }
    }
  };
  
  const login = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
  
    if (error) {
      console.error("Error signing in:", error.message);
    } else {
      if (data && data.user) {
        dispatch(setUser(data.user));
      } else {
        console.error("Sign in was successful, but user data is null or undefined.");
      }
    }
  };
  

  return isopen ? (
    <div className="overlay">
      <div className="Login">
        <div className="left">
          <div className="left-container">
            <p className="title">Login</p>
            <p className="des">
              Get access to your Orders, Wishlist and Recommendations
            </p>
          </div>
        </div>
        <div className="right">
          <input
            type="email"
            className="input"
            placeholder="Enter Email "
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="input"
            placeholder="Enter Password "
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="termsandcon">
            By continuing, you agree to Flipkart's{" "}
            <span style={{ color: "blue" }}>Terms of Use</span> and
            <span style={{ color: "blue" }}> Privacy Policy.</span>{" "}
          </p>
          {loginType ? (
            <button className="btn" onClick={login}>
              Login
            </button>
          ) : (
            <button className="btn" onClick={signup}>
              Signup
            </button>
          )}
          {loginType ? (
            <p className="signup" onClick={() => setLoginType(false)}>
              New to Flipkart? Create an account
            </p>
          ) : (
            <p className="signup" onClick={() => setLoginType(true)}>
              Already an user? Login to an account
            </p>
          )}
        </div>
        <div className="close" onClick={() => setClose(false)}>
          <RxCross2 />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Login
;
