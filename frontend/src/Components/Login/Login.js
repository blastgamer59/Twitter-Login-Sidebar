import React from "react";
import "./Login.css";
import Xlogo from "../../Components/Images/xlogo.jpg";
import Googleimage from "../../Components/Images/googlelogo.png";
import { FaApple } from "react-icons/fa";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import XIcon from "@mui/icons-material/X";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import Tooltip from "@mui/material/Tooltip";
const style = {
  position: "absolute",
  top: "49%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "white",
  border: "none",
  boxShadow: 24,
  p: 4,
};
const style1 = {
  position: "absolute",
  top: "49%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "white",
  border: "none",
  boxShadow: 24,
  p: 4,
};
const Login = () => {
  const [open, setopen] = useState(false);
  const [open1, setopen1] = useState(false);
  const navigate = useNavigate();
  const handleopen = () => {
    setopen(true);
  };
  const handleclose = () => {
    setopen(false);
  };
  const handleopen1 = () => {
    setopen1(true);
  };
  const handleclose1 = () => {
    setopen1(false);
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [month, setmonth] = useState("");
  const [day, setday] = useState("");
  const [year, setyear] = useState("");
  const [password, setpassword] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [currentSignInStep, setCurrentSignInStep] = useState(1);
  const isFormValid = () => {
    return name && email && month && day && year;
  };
  const isPasswordValid = () => {
    return username && password;
  };
  const handleSubmit = () => {
    alert("Account created successfully!");
    navigate("/");
  };
  const handlelogin = ()=>{
    alert("Login Successfully!");
    navigate("/");
  }
  return (
    <>
      <div className="login-container">
        <div className="image-container">
          <img src={Xlogo} className="image" alt="" />
        </div>
        <div className="form-container">
          <div className="form-box">
            <h1 className="heading">Happening now</h1>
            <h4 className="heading-2">Join today.</h4>
            <button className="google-button">
              <img
                src={Googleimage}
                className="google-icon"
                alt="google-icon"
              />
              Sign up with Google
            </button>
            <button className="apple-button">
              <FaApple className="apple-icon" />
              Sign up with Apple
            </button>
            <div className="hr-with-text">
              <span>or</span>
            </div>
            <button onClick={handleopen} className="create-account-button">
              Create account
            </button>
            <Modal
              open={open}
              onClose={handleclose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className="create-account-modal" sx={style}>
                <div className="modal-heading">
                  <Tooltip title="Close">
                    <CloseIcon
                      onClick={handleclose}
                      className="modal-close-icon"
                    />
                  </Tooltip>
                  <XIcon fontSize="medium" className="modal-x-icon" />
                </div>
                {currentStep === 1 ? (
                  <>
                    <div className="modal-heading-h2">
                      <h2>Create your account</h2>
                    </div>
                    <form>
                      <TextField
                        id="name"
                        sx={{ marginBottom: 3.5, marginLeft: 3, marginTop: 4 }}
                        label="Name"
                        variant="outlined"
                        className="textfeild-1"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                      />
                      <TextField
                        id="email"
                        sx={{ marginBottom: 4, marginLeft: 3 }}
                        label="Email"
                        variant="outlined"
                        className="textfeild-1"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                      />
                      <h5 className="modal-h5">Date of birth</h5>
                      <p className="modal-p">
                        This will not be shown publicly. Confirm your own age,
                        even if
                        <br />
                        this account is for a business, a pet, or something
                        else.
                      </p>
                      <div className="dob-container">
                        <select
                          className="modal-select-1"
                          value={month}
                          onChange={(e) => setmonth(e.target.value)}
                        >
                          <option value="">Month</option>
                          <option>January</option>
                          <option>February</option>
                          <option>March</option>
                          <option>April</option>
                          <option>May</option>
                          <option>June</option>
                          <option>July</option>
                          <option>August</option>
                          <option>September</option>
                          <option>October</option>
                          <option>November</option>
                          <option>December</option>
                        </select>
                        <select
                          className="modal-select-2"
                          value={day}
                          onChange={(e) => setday(e.target.value)}
                        >
                          <option value="">Day</option>
                          {Array.from({ length: 31 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {i + 1}
                            </option>
                          ))}
                        </select>
                        <select
                          className="modal-select-2"
                          value={year}
                          onChange={(e) => setyear(e.target.value)}
                        >
                          <option value="">Year</option>
                          {Array.from({ length: 100 }, (_, i) => (
                            <option key={i} value={2024 - i}>
                              {2024 - i}
                            </option>
                          ))}
                        </select>
                      </div>
                    </form>
                    <div
                      style={{
                        borderTop: "2px solid rgba(0, 0, 0, 0.1)",
                        boxShadow: "0 -3px 5px rgba(0, 0, 0, 0.1)",
                        margin: "20px 0",
                      }}
                    />
                    <button
                      className="modal-next-button"
                      disabled={!isFormValid()}
                      onClick={() => setCurrentStep(2)}
                      style={{
                        cursor: isFormValid() ? "pointer" : "not-allowed",
                        opacity: isFormValid() ? 1 : 0.6,
                      }}
                    >
                      Next
                    </button>
                  </>
                ) : (
                  <>
                    <div className="modal-heading-h2">
                      <h2>Set your password</h2>
                    </div>
                    <form>
                      <TextField
                        id="username"
                        sx={{ marginBottom: 0, marginLeft: 3, marginTop: 4 }}
                        label="Username"
                        type="username"
                        variant="outlined"
                        className="textfeild-1"
                        value={username}
                        onChange={(e) => setusername(e.target.value)}
                      />
                      <TextField
                        id="password"
                        sx={{ marginBottom: 20, marginLeft: 3, marginTop: 4 }}
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        variant="outlined"
                        className="textfeild-1"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                      />
                      <span
                        onClick={handleClickShowPassword}
                        style={{
                          position: "absolute",
                          top: "44%",
                          right: "135px",
                          transform: "translateY(-50%)",
                          cursor: "pointer",
                        }}
                      >
                        {showPassword ? (
                          <VisibilityOffOutlinedIcon />
                        ) : (
                          <VisibilityOutlinedIcon />
                        )}
                      </span>
                    </form>
                    <div
                      style={{
                        borderTop: "2px solid rgba(0, 0, 0, 0.1)",
                        boxShadow: "0 -3px 5px rgba(0, 0, 0, 0.1)",
                        margin: "20px 0",
                      }}
                    />
                    <button
                      className="modal-next-button"
                      disabled={!isPasswordValid()}
                      onClick={handleSubmit}
                      style={{
                        cursor: isPasswordValid() ? "pointer" : "not-allowed",
                        opacity: isPasswordValid() ? 1 : 0.6,
                      }}
                    >
                      Submit
                    </button>
                  </>
                )}
              </Box>
            </Modal>
            <p className="paragraph">
              By signing up, you agree to the{" "}
              <a className="paragraph-link" href="https://x.com/en/tos">
                Terms of Servies
              </a>{" "}
              and{" "}
              <a className="paragraph-link" href="https://x.com/en/privacy">
                Privacy <br /> Policy
              </a>{" "}
              including,{" "}
              <a
                className="paragraph-link"
                href="https://help.x.com/en/rules-and-policies/x-cookies"
              >
                Cookie use
              </a>
            </p>
            <h2 className="heading-h2">Already have an account?</h2>
            <button onClick={handleopen1} className="signin-button">
              Sign in
            </button>
            <Modal
              open={open1}
              onClose={handleclose1}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className="create-account-modal" sx={style1}>
                <div className="modal-heading">
                  <Tooltip title="Close">
                    <CloseIcon
                      onClick={handleclose1}
                      className="modal-close-icon"
                    />
                  </Tooltip>
                  <XIcon fontSize="medium" className="modal-x-icon" />
                </div>
                {currentSignInStep === 1 ? (
                  <>
                    <div className="modal1-heading-h2">
                      <h2>Sign in to X</h2>
                    </div>
                    <button className="modal-google-button">
                      <img
                        src={Googleimage}
                        className="google-icon"
                        alt="google-icon"
                      />
                      Sign up with Google
                    </button>
                    <button className="modal-apple-button">
                      <FaApple className="apple-icon" />
                      Sign up with Apple
                    </button>
                    <div className="modal-hr-with-text">
                      <span>or</span>
                    </div>
                    <form>
                      <TextField
                        id="email"
                        sx={{
                          marginBottom: 2,
                          marginLeft: 12.5,
                          marginTop: 1.5,
                        }}
                        label="Email"
                        variant="outlined"
                        className="modal1-textfeild-1"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                      />
                    </form>
                    <button
                      onClick={() => setCurrentSignInStep(2)}
                      className="modal1-next-button"
                    >
                      Next
                    </button>
                    <button className="modal-forgotpassword-button">
                      Forgot password?
                    </button>
                    <div className="modal1-link">
                      <p className="modal1-para">Don't have an account?</p>
                      <a className="modal-signup-link" href="/login">
                        Sign up
                      </a>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="modal-heading-h2">
                      <h2>Enter your password</h2>
                    </div>
                    <form>
                      <TextField
                        id="email"
                        sx={{ marginBottom: 4, marginLeft: 3, marginTop: 4 }}
                        label="Email"
                        variant="outlined"
                        className="textfeild-1"
                        value={email}
                        disabled
                      />
                      <TextField
                        id="password"
                        sx={{ marginBottom: 23, marginLeft: 3 }}
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        variant="outlined"
                        className="textfeild-1"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                      />
                      <span
                        onClick={handleClickShowPassword}
                        style={{
                          position: "absolute",
                          top: "42.5%",
                          right: "135px",
                          transform: "translateY(-50%)",
                          cursor: "pointer",
                        }}
                      >
                        {showPassword ? (
                          <VisibilityOffOutlinedIcon />
                        ) : (
                          <VisibilityOutlinedIcon />
                        )}
                      </span>
                    </form>
                    <button onClick={ handlelogin} className="modal-login-button">Log in</button>
                    <div className="modal2-link">
                      <p className="modal2-para">Don't have an account?</p>
                      <a className="modal-signup-link" href="/login">
                        Sign up
                      </a>
                    </div>
                  </>
                )}
              </Box>
            </Modal>
          </div>
        </div>
      </div>

      <footer className="footers">
        <div className="footer-links">
          <a href="https://about.x.com/en">About</a>
          <a href="https://help.x.com/en/using-x/download-the-x-app">
            Download the X app
          </a>
          <a href="https://x.com/en/tos">Terms of Service</a>
          <a href="https://x.com/en/privacy">Privacy Policy </a>
          <a href="https://help.x.com/en/rules-and-policies/x-cookies">
            Cookie Policy
          </a>
          <a href="https://help.x.com/en/resources/accessibility">
            Accessibility
          </a>
          <a href="https://business.x.com/en/help/troubleshooting/how-x-ads-work.html">
            Adds info
          </a>
          <a href="https://blog.x.com/">Blog</a>
          <a href="https://careers.x.com/en">Carrers</a>
          <a href="https://about.x.com/en/who-we-are/brand-toolkit">
            Brand Resources
          </a>
          <a href="https://business.x.com/en/advertising.html?ref=gl-tw-tw-twitter-advertise">
            Advertising
          </a>
          <a href="https://business.x.com/">Marketing</a>
          <a href="https://business.x.com/?ref=web-twc-ao-gbl-twitterforbusiness&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=twitterforbusiness">
            X for Business
          </a>
          <a href="https://developer.x.com/en">Developers</a>
          <a href="https://x.com/i/directory/profiles">Directory</a>
          <a href="https://x.com/settings/account/personalization">Settings</a>
          <p className="link-para">2024 X Corp</p>
        </div>
      </footer>
    </>
  );
};
export default Login;
