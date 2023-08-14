import React,{useState,useEffect} from 'react'
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { loginRoute } from "../utils/APIRoutes";
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";


export default function Login() {
  const navigate =useNavigate();
  const [values,setValues] = useState({username:"",password:""});

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
 
  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/");
    }
  }, []);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    const { username, password } = values;
    if (username === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    } else if (password === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      const { username, password } = values;
      const { data } = await axios.post(loginRoute, {
        username,
        password,
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
  };

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
        <form className="login-form" action="" onSubmit={ (event) => handleSubmit(event)}>
          <h3 className="login-head"><i className="bi bi-person me-2"></i>SIGN IN</h3>
          <div className="mb-3">
            <label className="form-label">USERNAME</label>
            <input className="form-control" name="username" type="text" placeholder="Email" onChange={(e) => handleChange(e)} autofocus />
          </div>
          <div className="mb-3">
            <label className="form-label">PASSWORD</label>
            <input className="form-control" type="password" name="password" placeholder="Password" onChange={(e) => handleChange(e)} />
          </div>
          {/* <div className="mb-3">
            <div className="utility">
              <div className="form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" /><span className="label-text" >Stay Signed in</span>
                </label>
              </div>
              <p className="semibold-text mb-2"><a href="#" data-toggle="flip">Forgot Password ?</a></p>
            </div>
          </div> */}
          <div className="mb-3 btn-container d-grid">
            <button type="submit" className="btn btn-primary btn-block"><i className="bi bi-box-arrow-in-right me-2 fs-5"></i>SIGN IN</button>
          </div>
        </form>
        <form className="forget-form" action="index.html">
          <h3 className="login-head"><i className="bi bi-person-lock me-2"></i>Forgot Password ?</h3>
          <div className="mb-3">
            <label className="form-label">EMAIL</label>
            <input className="form-control" name="" type="text" placeholder="Email" />
          </div>
          <div className="mb-3 btn-container d-grid">
            <button className="btn btn-primary btn-block"><i className="bi bi-unlock me-2 fs-5"></i>RESET</button>
          </div>
          <div className="mb-3 mt-3">
            <p className="semibold-text mb-0"><a href="#" data-toggle="flip"><i className="bi bi-chevron-left me-1"></i> Back to Login</a></p>
          </div>
        </form>
      </div>
    </section>
    </FormContainer>
    <ToastContainer/>
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