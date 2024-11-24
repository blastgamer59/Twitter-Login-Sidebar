import React from "react";
import "./Logout.css";
import XIcon from "@mui/icons-material/X";
import { useNavigate } from "react-router-dom";
const Logout = () => {
    const navigate = useNavigate();
    const handlecancel = () => {
        navigate("/");
      };
    const handlelogout = () =>{
        navigate("/login");
    }
  return (
    <>
      <div className="container">
        <div className="image-container">
          <XIcon sx={{fontSize: 40}} className="logout-image" />
        </div>
        <h3 className="logout-h3">Log out of X?</h3>
        <p className="logout-p">
          You can always log back in at any <br /> time. If you just want to switch<br />
          accounts, you can do that by adding <br />an existing account.
        </p>
        <button onClick={handlelogout} className="logout-button">Log out</button>
        <button onClick={ handlecancel} className="logout-cancel-button">Cancel</button>
      </div>
    </>
  );
};

export default Logout;
