import React from "react";
import "./style.css"

function Nav() {
    return (
        <nav className="navbar navbar-light navbar-expand-lg" style={{ backgroundColor: "#1E5631" }}>
            <a className="navbar-brand" href="/">Timber Creek</a>

            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Leasing Profile</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Payments</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Maintence Request</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;