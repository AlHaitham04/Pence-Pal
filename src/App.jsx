import Modal from './Modal';
import './css/App.css';
import logo from './images/dashboard.png';
import logo1 from './images/month.png';
import logo2 from './images/statistics.png';
import logo3 from './images/stocks.png';
import { Link } from "react-router-dom";

import Header from './Components/Header';

function App() {
  return (
    <>
      <Header/>
      <div className="main-container">
        <Modal/>
      </div>
      
      <div className="container3">
        
        <h3>This Month <br /> £932.12 <br />Remaining</h3>
        <ul>
          <li>
            <img src={logo} alt="dashboard" className="dashboardImg" />
            <Link to ="/dashboard">Dashboard</Link>
          </li>

          <li>
            <img src={logo1} alt="month" className="monthImg" />
            <Link to ="/thismonth">This Month</Link>
          </li>

          <li>
            <img src={logo2} alt="statistics" className="statisticsImg" />
            <Link to ="/statistics">Statistics</Link>
          </li>

          <li>
            <img src={logo3} alt="stocks" className="stocksImg" />
            <Link to ="/stocks">Stocks</Link>
          </li>

        </ul>
      </div>
    </>
  );
}

export default App;
