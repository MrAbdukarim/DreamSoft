import React from "react";
import Navbar from './Navbar.jsx'

function HomePage() {
    const text = "Hi World!";

    return (
        <>
            <Navbar/>
            <h1>{text}</h1>
        </>
    )
}

export default HomePage