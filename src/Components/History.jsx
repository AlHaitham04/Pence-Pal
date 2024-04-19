import "../css/History.css";
import { Link } from "react-router-dom";



function History({show}) {
    return (
            <div className = {show ? "history active" : "history"}>
                <h3>Recent Transactions</h3>
                <ul class="transaction-list">
                    <li>Travel £2000</li>
                    <li>Rent £550</li>
                    <li>Groceries £21.99</li>
                    <li>Rent £600</li>
                    <li>Travel £12.99</li>
                    <li>Rent £1100</li>
                </ul>
        </div>
    )
}

export default History
