import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { ReactDOM } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "./components/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [passsword, setPassword] = useState();
  // const [login, setLogin] = useState({
  //   email: "",
  //   password: "",
  // });
  // const handlechange = (e) => {
  //   const { name, value } = e.target;
  //   setLogin({ ...login, [name]: value });
  //   console.log("Email " + login.email);
  //   console.log("Password " + login.password);
  //   console.log(e.target);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "" || passsword.trim() === "") {
      toast.error("Enter All Fields");
    }
    else if(passsword.trim().length<8){
      toast.error("password should contain 8 characters")
    } 
    else {
      dispatch(
        login({
          email: email,
          passsword: passsword,
        })
      );
      toast.success("Welcome");
      setTimeout(() => {
        navigate("/admin");
      }, 1000);
    }
  };

  // const Login = (e) => {
  //   e.preventDefault();
  //   if (email === "" || password === "") {
  //     toast.error("Enter all fields");
  //   } else if (password.length < 8) {
  //     toast.error("password should contain 8 character");
  //   } else {
  //     navigate("/s");
  //   }
  // };
  return (
    <div className="cover5">
      <div className="cover">
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <form onSubmit={(e) => handleSubmit(e)}>
          <h1>login</h1>
          <div>
            <input
              type="text"
              placeholder="username"
              className="lusername"
              name="email"
              id="mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <PersonIcon className="icon1" />
          </div>
          <div>
            <input
              type="password"
              placeholder="password"
              className="paa"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <LockIcon className="icon2" />
          </div>
          <div>
            <input type="checkbox" className="qt" />
            Remember me
          </div>
          <button type="submit" className="btn">
            login
          </button>
          <div className="ls">
            Don't have an account?
            <span className="sp" onClick={() => navigate("/s")}>
              signup
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
