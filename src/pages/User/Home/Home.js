import React, { useEffect, useState } from "react";
import  GameList  from "../../../components/games/GamesList/Gamelist";
import { JwtHandler } from "../../../jwt-handler/JwtHandler";
import './Home.css';

export function Home() {
    const [isLogged, setIsLogged] = useState(JwtHandler.isJwtValid);

    useEffect(() => {
        const handleOnJwtChange = () => {
            setIsLogged(JwtHandler.isJwtValid());
        };

        window.addEventListener("onJwtChange", handleOnJwtChange);

        // Função de limpeza
        return () => {
            window.removeEventListener("onJwtChange", handleOnJwtChange);
        };
    }, []);
    return (
        <div className="home">
            
            <div className="back">
                <h1>Games</h1>
                <div className="fav">   
                    
                    <div><GameList/></div>
                </div>
            </div>

            <div className="back">
                <div className="fav">
                    <h1 >Favorited games</h1>
                </div>            
                {isLogged ? (
                    <div>
                        <GameList/>
                    </div>  
                ) : (
                    <p className="login">You need to be logged in to see your favorited games!</p>
                )}
                
                
            </div>
        </div>
    )
}