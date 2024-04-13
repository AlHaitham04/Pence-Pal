import React from 'react';
import { Link } from "react-router-dom";
import "../css/Dashboard.css"

function Dashboard(){
  return (
    <div>
      <Link to ="/" className="home">Home Page</Link>
    </div>
  );
};

export default Dashboard;
