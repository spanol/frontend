import React, { useEffect, useState } from 'react'
import { Api } from '../../../Api/Api';
import '../Gameview/Gameview.css'
import LinkButton from "../../../components/LinkButton/LinkButton";
import GamesCard from '../../../components/games/GamesCard/GamesCard';



export default function GameView(props) {
    const id = props.match.params.id;
    
    const [game, setgame] = useState([]);


    useEffect(() => {
        const loadgameList = async () => {
            const response = await Api.buildApiGetRequest(Api.readOneGameUrl(id), true);

            const results = await response.json();

            setgame(results);
        };

        loadgameList();
    }, [id]);

    if (!game) {
        return <div>Loading...</div>;
    }

    console.log(game);    
    

    return (
        <div className="games">
            <div className="view">
                <div className="card_b">
                    <GamesCard game={game} />
                    <LinkButton
                        to={"/games/update/" + id}
                        className="form__submit"
                    >
                        Edit
                    </LinkButton>

                    <LinkButton
                        to={"/games/delete/" + id}
                        className="button button--danger"
                    >
                        Delete
                    </LinkButton>
            
                </div>
                <div className="span">
                    <label>
                        Description: 
                        <p>{game.description}</p>
                    </label><br/>
                    <label>Year: <p>{game.ano}</p></label><br/>
                    <label>Nota: <p>{game.nota}/10</p></label><br/>
                    <label>trailerurl: </label><br/>
                    <iframe width="560" height="350" src={`https://www.youtube.com/embed/${game.trailerurl}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe><br/>
                    <label>gameplayurl: </label><br/>
                    <iframe width="560" height="350" src={`https://www.youtube.com/embed/${game.gameplayurl}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe><br/>
                </div>

            </div>
            

            
        </div>
    )
}
