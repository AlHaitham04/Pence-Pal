import "../css/Sidebar.css";
import { Link } from "react-router-dom";

import { FaRegCalendarDays } from "react-icons/fa6";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoIosStats } from "react-icons/io";
import { AiOutlineStock } from "react-icons/ai";



function Sidebar({show}) {
    return (
            <div className = {show ? "sidebar active" : "sidebar"}>
                <h3>This Month <br /> £932.12 <br />Remaining</h3>
                <ul>
                    <Link to ="/dashboard"><AiOutlineDashboard className="icon" />Dashboard</Link>
                    <Link to ="/thismonth"><FaRegCalendarDays className="icon" />This Month</Link>
                    <Link to ="/statistics"><IoIosStats className="icon" />Statistics</Link>
                    <Link to ="/stocks"><AiOutlineStock className="icon" />Stocks</Link>
                </ul>
        </div>
    )
}

export default Sidebar
