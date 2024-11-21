import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";


const Nav = ({libraryStatus, setLibraryStatus, showSnowfall, setShowSnowfall, modebg, mode}) =>{            
       return(
        <nav>
            <h1>Spotify clone</h1>  
            <div className="buttons">
            <button onClick={() => {setShowSnowfall(!showSnowfall); modebg()}} className={mode? "dark-mode":"light-mode"}>{mode? "Light" : "Dark"}</button>
            <button onClick={()=> setLibraryStatus(!libraryStatus)} className={`btn ${mode ? "dark-mode":"light-mode"}`}>Library<FontAwesomeIcon icon={faMusic} /></button>
            </div>
        </nav>
    )
}
export default Nav;