import { NavLink } from "react-router-dom";
import '../styles/Navbar.css'
export default function Navbar() {
    console.log("Navbar Rendered");

    return (
        <nav style={{ color: '#FF7276', marginBottom: "2rem" }}>
            <NavLink className="nav-item" to="/home">Home</NavLink>

        </nav>
    )
}