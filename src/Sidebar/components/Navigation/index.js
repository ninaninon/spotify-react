import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";

import spotifyLogo from "../../../assets/icons/logo-spotify.png";



const Navigation = () => {
    return(

        <nav class="sidebar__navigation">
            <div class="logo">
                <a href="">
                    <img src={spotifyLogo} alt="logo do spotify" />
                </a>
            </div>
                <ul>
                    <li>
                        <a href="">
                        <span><FontAwesomeIcon icon={faHome} /></span>
                            <span>Início</span>

                        </a>
                    </li>
                    <li>
                        <a href="">
                        <span><FontAwesomeIcon icon={faSearch} /></span>
                            <span>Buscar</span> 
                        </a>
                    </li>
                </ul>
             
        </nav>
    )
}

export {Navigation};