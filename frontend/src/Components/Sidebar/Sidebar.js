import React, { useState } from "react";
import XIcon from "@mui/icons-material/X";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { Avatar } from "@mui/material";
import Googleimage from "../../Components/Images/googlelogo.png";
import { FaApple } from "react-icons/fa";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ShowChartIcon from '@mui/icons-material/ShowChart';
import "./Sidebar.css";
import Customlink from "./Customlink";
import Sidebaroption from "./Sidebaroption";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import Tooltip from "@mui/material/Tooltip";
import ListAltIcon from "@mui/icons-material/ListAlt";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
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
const Sidebar = ({ user }) => {
  const [anchorE1, setanchorE1] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null);
  const [open1, setopen1] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [currentSignInStep, setCurrentSignInStep] = useState(1);
  const open = Boolean(anchorE1);
  const openMoreMenu = Boolean(anchorE2);
  const [loggedinuser] = [0];
  const navigate = useNavigate();
  const handleClick = (event) => {
    setanchorE1(event.currentTarget);
  };
  const handleClose = () => {
    setanchorE1(null);
  };
  const handleMoreMenuClick = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const handleMoreMenuClose = () => {
    setAnchorE2(null);
  };
  const handlelogout = () => {
    navigate("/logout");
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
  const result = user?.username?.split("@")[0];
  return (
    <>
      <div className="sidebar">
        <XIcon className="sidebar-xicon" />
        <Customlink to="/home/feed">
          <Sidebaroption active Icon={HomeOutlinedIcon} text="Home" />
        </Customlink>
        <Customlink to="/home/explore">
          <Sidebaroption Icon={SearchIcon} text="Explore" />
        </Customlink>
        <Customlink to="/home/notification">
          <Sidebaroption Icon={NotificationsNoneIcon} text="Notifications" />
        </Customlink>
        <Customlink to="/home/messages">
          <Sidebaroption Icon={MailOutlineIcon} text="Messages" />
        </Customlink>
        <Customlink to="/home/bookmarks">
          <Sidebaroption Icon={BookmarkBorderIcon} text="Bookmarks" />
        </Customlink>
        <Customlink to="/subcription">
          <Sidebaroption Icon={WorkspacePremiumIcon} text="Subcription" />
        </Customlink>
        <Customlink to="/home/profile">
          <Sidebaroption Icon={PersonOutlineOutlinedIcon} text="Profile" />
        </Customlink>
        <Sidebaroption Icon={MoreHorizIcon} text="More"  onClick={handleMoreMenuClick} />
        <Menu
        id="more-menu"
        anchorEl={anchorE2}
        open={openMoreMenu}
        onClose={handleMoreMenuClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "white",
            width: "320px",
            color: "black",
            boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
          },
        }}
      >
        <MenuItem onClick={handleMoreMenuClose}>
          <ListAltIcon className="moresidebar-icon" /> Lists
        </MenuItem>
        <MenuItem onClick={handleMoreMenuClose}>
          <AnalyticsOutlinedIcon className="moresidebar-icon" /> Analytics
        </MenuItem>
        <MenuItem onClick={handleMoreMenuClose}>
          <SettingsOutlinedIcon className="moresidebar-icon" /> Settings and Privacy
        </MenuItem>
        <MenuItem onClick={handleMoreMenuClose}>
          <PeopleOutlineIcon className="moresidebar-icon" /> Communities
        </MenuItem>
        <MenuItem onClick={handleMoreMenuClose}>
          <ElectricBoltIcon className="moresidebar-icon" /> Verified Orgs
        </MenuItem>
        <MenuItem onClick={handleMoreMenuClose}>
          <WorkOutlineIcon className="moresidebar-icon" /> Jobs
        </MenuItem>
        <MenuItem onClick={handleMoreMenuClose}>
        <ShowChartIcon  className="moresidebar-icon" /> Ads
        </MenuItem>
      </Menu>
        <button variant="outlined" className="sidebar-tweet-button">
          Post
        </button>
        <button
          className="profile-button"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <div className="Profile__info">
            <Avatar
              src={
                loggedinuser[0]?.profileImage
                  ? loggedinuser[0].profileImage
                  : user && user.photoURL
              }
            />
            <div className="user__info">
              <h4>
                {loggedinuser[0]?.name
                  ? loggedinuser[0].name
                  : user && user.displayName}
              </h4>
              <h5>@{result}</h5>
            </div>
          </div>
          <MoreHorizIcon />
        </button>
        <Menu
          id="basic-menu"
          anchorEl={anchorE1}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          sx={{
            "& .MuiPaper-root": {
              backgroundColor: "white",
              width: "280px",
              color: "black",
              boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
              borderRadius: "10px",
            },
          }}
        >
          <MenuItem
            onClick={handleopen1}
            sx={{
              "&:hover": {
                backgroundColor: "#f0f0f0",
                color: "#1976d2",
              },
              fontSize: "18px",
            }}
          >
            Add an existing account
          </MenuItem>
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
                  <button className="modal-login-button">
                    Log in
                  </button>
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
          <MenuItem
            sx={{
              "&:hover": {
                backgroundColor: "#f0f0f0",
                color: "#1976d2",
              },
              fontSize: "18px",
            }}
            onClick={handlelogout}
          >
            Log out @{result}
          </MenuItem>
        </Menu>
      </div>
    </>
  );
};

export default Sidebar;
