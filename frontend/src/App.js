import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import Explore from "./Components/Explore/Explore";
import Notification from "./Components/Notification/Notification";
import Messages from "./Components/Messages/Messages";
import Profile from "./Components/Profile/Profile";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Logout from "./Components/Logout/Logout";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/home" element={<Home />}>
            <Route path="explore" element={<Explore />} />
            <Route path="notification" element={<Notification />} />
            <Route path="messages" element={<Messages />} />
            <Route path="bookmarks" element={<Bookmarks />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
