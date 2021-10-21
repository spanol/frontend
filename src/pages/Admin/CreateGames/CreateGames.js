import React, { useEffect, useState } from 'react'
import { Api } from '../../../Api/Api';
import Select from "react-select";

import '../CreateGames/CreateGames.css';

export default function CreateJogos(props) {
    const [genres, setgenres] = useState([]);
    
    const [genresIds, setgenresIds] = useState([]);

    useEffect(() => {
        const loadgenres = async () => {
            const response = await Api.buildApiGetRequest(
                Api.readAllgenrelistUrl(),
                true
            );

            const results = await response.json();

            setgenres(results);
        };

        loadgenres();
    }, []);

    const handleSubmit = async event => {
        event.preventDefault();

        const title = event.target.title.value;
        const gamecover = event.target.gamecover.value;
        const description = event.target.description.value;
        const year = +event.target.year.value;
        const nota = +event.target.nota.value;
        const trailerurl = event.target.trailerurl.value;
        const gameplayurl = event.target.gameplayurl.value;

        const payload = {
            title,
            gamecover,
            description,
            year,
            nota,
            trailerurl,
            gameplayurl,
        };

        const response = await Api.buildApiPostRequest(
            Api.createGameUrl(),
            payload,
            true
            
        );

        const body = await response.json();

        if (response.status === 201) {
            const id = body.id;

            props.history.push(`/games/view/${id}`);
        } else {
            //Error
        }
    };

    const options = genres.map(genres => ({
        value: genres.id, 
        label: genres.name
    }))

    const handlegenresChange =(selectedOption) => {
        setgenresIds(selectedOption.map(option => option.value));
      }

    return (
        <div className="body_create">           
            <div className="cardCreate">
                <div className="teste">
                    <h1 className="titleCreate">Adicionar Novo Jogo</h1>
                    <form className="form" onSubmit={handleSubmit}>
                        <div>
                            <label className="form__label" htmlFor="title">
                                title:
                            </label>
                        </div>

                        <div>
                            <input
                                className="form__input-text"
                                type="text"
                                id="title"
                                name="title"
                            />
                        </div>

                        <div>
                            <label className="form__label" htmlFor="gamecover">
                                gamecover:
                            </label>
                        </div>

                        <div>
                            <input
                                className="form__input-text"
                                type="text"
                                id="gamecover"
                                name="gamecover"
                            />
                        </div>

                        <div>
                            <label className="form__label" htmlFor="description">
                                Description:
                            </label>
                        </div>

                        <div>
                            <input
                                className="form__input-text"
                                type="text"
                                id="description"
                                name="description"
                            />
                        </div>
                        
                        <div>
                            <label className="form__label" htmlFor="year">
                                year:
                            </label>
                        </div>

                        <div>
                            <input
                                className="form__input-text"
                                type="number"
                                id="year"
                                name="year"
                            />
                        </div>

                        <div>
                            <label className="form__label" htmlFor="nota">
                                Nota:
                            </label>
                        </div>

                        <div>
                            <input
                                className="form__input-text"
                                type="number"
                                id="nota"
                                name="nota"
                            />
                        </div>

                        <div>
                            <label className="form__label" htmlFor="trailerurl">
                                trailerurl:
                            </label>
                        </div>

                        <div>
                            <input
                                className="form__input-text"
                                type="text"
                                id="trailerurl"
                                name="trailerurl"
                            />
                        </div>

                        <div>
                            <label className="form__label" htmlFor="gamePlay">
                                GamePlay:
                            </label>
                        </div>

                        <div>
                            <input
                                className="form__input-text"
                                type="text"
                                id="gameplayurl"
                                name="gameplayurl"
                            />
                        </div>

                        <div>
                            <label className="form__label" htmlFor="genresIds">genres</label>
                            <br />
                        </div>

                        <div className="selectGenero"
                            type="number"
                            id="genresIds"
                            name="genresIds">
                            <Select isMulti options={options} onChange={handlegenresChange}/>
                        </div>

                        <div>
                            <input className="form__submit" type="submit" value="Add" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
