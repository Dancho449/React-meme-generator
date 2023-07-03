import React from "react"
import Pepe from "../images/Pepe-stare.png"

export default function Header() {
    return(
        <header className="top-header">
            <div className="logo">
                <img src={Pepe} className="meme-logo"/>
                <h2>Dancho's Meme-Generator</h2>
            </div>
            <h4>React Course - Project 3</h4>
        </header>
    )
}
/* "/images/Pepe-stare.png" */