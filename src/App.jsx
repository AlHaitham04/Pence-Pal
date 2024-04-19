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
      <Modal/>
    </>
  );
}

export default App;
