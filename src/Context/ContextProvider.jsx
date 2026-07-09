import React, { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    notification: false,
    userProfile: false,
};

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);

    const [isClicked, setIsClicked] = useState(initialState);

    const [screenSize, setScreenSize] = useState(undefined);

    const [currentColor, setCurrentColor] = useState(
        localStorage.getItem("colorMode") || "#03C9D7"
    );

    const [currentMode, setCurrentMode] = useState(
        localStorage.getItem("themeMode") || "Light"
    );

    const [themeSettings, setThemeSettings] = useState(false);

    useEffect(() => {
        document.documentElement.style.setProperty(
            "--theme-color",
            currentColor
        );
    }, [currentColor]);

    const setMode = (e) => {
        const mode = e.target.value;

        setCurrentMode(mode);

        localStorage.setItem("themeMode", mode);
    };

    const setColor = (color) => {
        console.log("Changing color to:", color);

        setCurrentColor(color);

        localStorage.setItem("colorMode", color);
    };

    const handleClick = (clicked) => {
        setIsClicked({
            ...initialState,
            [clicked]: true,
        });
    };

    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,

                isClicked,
                setIsClicked,

                screenSize,
                setScreenSize,

                currentColor,
                setCurrentColor,

                currentMode,
                setCurrentMode,

                themeSettings,
                setThemeSettings,

                handleClick,
                setMode,
                setColor,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);