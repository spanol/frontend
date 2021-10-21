import React from 'react'
import { useHistory } from 'react-router'
// import { Api } from '../../../Api/Api';
import '../GamesCard/GamesCard.css'

export default function gamesCard({game}) {
    
    
    const history = useHistory();

    const handleClick = () => {
        history.push(`/games/view/${game.id}`);
    };

    return (
        <div className="body">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            
            <div className="container">
                <div className="card" onClick={handleClick}>
                    <div className="imgBx">
                    <img src={game.gamecover} alt={game.title + "'s image"}/>
                    </div>
                    <div className="contentBx">
                    <h2>{game.title}</h2>
                    <div className="size">
                        <h3>Nota :</h3>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                    </div>
                    <h3 className="year">{game.ano}</h3>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}
