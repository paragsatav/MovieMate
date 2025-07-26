import React from "react";
import "./darkmode.css";

const DarkMode = () => {
    const setDarkTheme = () => {
        document.querySelector("body").setAttribute("data-theme", "dark");
        localStorage.setItem("selectedTheme", "dark")
    };

    const setLightTheme = () => {
        document.querySelector("body").setAttribute("data-theme", "light");
        localStorage.setItem("selectedTheme", "light")
    };

    const selectedTheme = localStorage.getItem("selectedTheme");

    if(selectedTheme === "light"){
        setLightTheme()
    } else {
        setDarkTheme()
    }

    const toggleTheme = (e) => {
        if(e.target.checked) {
            setDarkTheme()
        } else {
            setLightTheme()
        }
    }
    return (
        <>
            <input type="checkbox" id="darkmodeToggle" 
            onChange={toggleTheme} defaultChecked={selectedTheme !== "light"}/>
            <label for="darkmodeToggle"></label>
        </>
    );
}

export default DarkMode;