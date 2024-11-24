import React from 'react'
import Sidebar from './Sidebar/Sidebar';
import Widget from './Widget/Widget';
import { Outlet } from "react-router-dom";
const Home = () => {
  const user = {
  displayName:"Pavan Kumar",
  username:"pavantalluri01",
 }
  return (
    <div>
      <Sidebar user={user} />
      <Outlet />
      <Widget />
    </div>
  )
}

export default Home;
