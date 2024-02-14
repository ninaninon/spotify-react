import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faBook } from "@fortawesome/free-solid-svg-icons";

const Library = () => {
    return(
        <div class="library">
                <div class="library__content">
                    <button class="library__button">
                        <span> <FontAwesomeIcon icon={faBook} /></span>
                        <span>Sua biblioteca</span>
                    </button>
                    <span class="fa-plus"> <FontAwesomeIcon icon={faPlus} /></span>
                </div>

                <section class="section-playlist">
                    <div class="section-playlist__content">
                        <span class="text title">Crie sua primeira playlist</span>
                        <span class="text subtitle">É fácil, vamos te ajudar</span>
                        <button class="section-playlist__button">
                            <span>Criar playlist</span>
                        </button>
                    </div>
                </section>

                <section class="section-podcast">
                  <div class="section-podcast__content">
                    <span class="text title">Que tal seguir um podcast novo?</span>
                    <span class="text subtitle">Avisaremos você sobre novos episódios</span>
                    <button class="section-podcast__button">
                      <span>Explorar podcast</span>
                    </button>
                  </div>
                </section>

                <div class="cookies">
                    <a href="">Cookies</a>
                </div>

                <div class="languages">
                    <button class="languages__button">
                        <span class="fa fa-globe"></span>
                        <span>Portugês do Brasil</span>
                    </button>
                </div>
            </div>
        
    )
    
}

export {Library}

