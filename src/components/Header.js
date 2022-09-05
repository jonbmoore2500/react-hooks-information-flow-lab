import React from "react";

function Header({onHandleDarkMode, isDarkMode}) {

    return (
    <header>
        <h2>Shopster</h2>
        <button onClick={onHandleDarkMode}>{isDarkMode ? "Dark" : "Light"} Mode</button>
    </header>
    )
}

export default Header;