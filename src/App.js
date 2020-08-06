import React from "react";
import CardMembers from "./components/home/BestMembers/BestMembers";
import BestMembers from "./components/dashboard/dashboardBestMembers/DashboardBestMembersPage/DashboardBestMembersPage";
import "./App.css";

function App() {
  return (
  <div className="App">
    <CardMembers />
    <BestMembers />
     </div>
  );
}

export default App;
