import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
// import Logo from "../assets/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerRoute } from "../utils/APIRoutes";


export default function Register() {
  const navigate = useNavigate();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone:"",
  });

  // useEffect(() => {
  //   if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
  //     navigate("/");
  //   }
  // }, []);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleValidation = () => {
    const { password, confirmPassword, username, email } = values;
    if (password !== confirmPassword) {
      toast.error(
        "Password and confirm password should be same.",
        toastOptions
      );
      return false;
    } else if (username.length < 3) {
      toast.error(
        "Username should be greater than 3 characters.",
        toastOptions
      );
      return false;
    } else if (password.length < 8) {
      toast.error(
        "Password should be equal or greater than 8 characters.",
        toastOptions
      );
      return false;
    } else if (email === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { email, username, password,phone } = values;
      const { data } = await axios.post(registerRoute, {
        username,
        email,
        password,
        phone,
      });

      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user)
        );
        navigate("/");
      }
    }
  }
  return (
    <>
    <FormContainer>
    <section className="material-half-bg">
      <div className="cover"></div>
    </section>
    <section className="login-content">
      <div className="logo">
        <h1>Virtual Study Room</h1>
      </div>
      <div className="login-box">
        <form className="login-form" action="" onSubmit={(event) => {handleSubmit(event)}}>
          <h3 className="login-head"><i className="bi bi-person me-2"></i>SIGN UP</h3>
          <div className="mb-3">
            <label className="form-label">USERNAME</label>
            <input className="form-control" type="text" name="username" placeholder="username" onChange={(e) => handleChange(e)} autofocus />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input className="form-control" name="email" type="email" placeholder="email" onChange={(e) => handleChange(e)} />
          </div>
          <div className="mb-3">
            <label className="form-label">PASSWORD</label>
            <input className="form-control" name="password" type="password" placeholder="Password" onChange={(e) => handleChange(e)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input className="form-control" type="password" name="confirmPassword" placeholder="confirmpassword" onChange={(e) => handleChange(e)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input className="form-control" name="phone" type="text" placeholder="Phone" onChange={(e) => handleChange(e)} />
          </div>
          <div className="mb-3 btn-container d-grid">
            <button type="submit" className="btn btn-primary btn-block"><i className="bi bi-box-arrow-in-right me-2 fs-5"></i>SIGN UP</button>
          </div>
        </form>
      </div>
    </section>
    </FormContainer>
    <ToastContainer />
    </>
  )
}

const FormContainer=styled.div`
a {
  color: rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 1));
  text-decoration: underline;
}
.material-half-bg {
  height: 100vh;
  background-color: #e7e7e7;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}
.material-half-bg .cover {
  background-color: #00695C;
  height: 50vh;
}
.login-content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  min-height: 100vh;
}
.login-content .logo {
  margin-bottom: 40px;
  font-family: "Niconne";
  color: #fff;
}
.login-content .logo h1, .login-content .logo .h1 {
  font-size: 52px;
  font-weight: 400;
}
.login-content .login-box {
  position: relative;
  min-width: 350px;
  min-height: 390px;
  background-color: #fff;
  -webkit-box-shadow: 0px 29px 147.5px 102.5px rgba(0, 0, 0, 0.05), 0px 29px 95px 0px rgba(0, 0, 0, 0.16);
          box-shadow: 0px 29px 147.5px 102.5px rgba(0, 0, 0, 0.05), 0px 29px 95px 0px rgba(0, 0, 0, 0.16);
  -webkit-perspective: 800px;
          perspective: 800px;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}
.login-content .login-box .login-head {
  margin-top: 0;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;
  text-align: center;
}
.login-content .login-box label {
  color: #666;
  font-weight: 700;
}
.login-content .login-box .utility {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 1px;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
.login-content .login-box .btn-container {
  text-align: center;
  margin-bottom: 0;
}
.login-content .login-box .login-form, .login-content .login-box .forget-form {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 40px;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}
.login-content .login-box .forget-form {
  opacity: 0;
  -webkit-transform: rotateY(180deg);
          transform: rotateY(180deg);
}
.login-content .login-box.flipped {
  min-height: 300px;
}
.login-content .login-box.flipped .login-form {
  opacity: 0;
  -webkit-transform: rotateY(-180deg);
          transform: rotateY(-180deg);
}
.login-content .login-box.flipped .forget-form {
  opacity: 1;
  -webkit-transform: rotateY(0deg);
          transform: rotateY(0deg);
}

@media (max-width: 351px) {
  .login-content .login-box {
    min-width: 100%;
  }
  .login-content .login-box .login-form, .login-content .login-box .forget-form {
    width: 100%;
  }
}
`;