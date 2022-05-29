
import React from "react";
import Button from "../components/Buttons"

const Header = () => {
    return (
        <nav className="Header">

            <a href="/">
                <button className="StreamBtn">Stream</button>
            </a>

            <input type="text" className="HeaderSearch" placeholder="Search..." />

            <div>
                <Button className="logoutBtn" color="#444" text="Logout" shape="round" />
            </div>
        </nav>
    );
};

export default Header;
