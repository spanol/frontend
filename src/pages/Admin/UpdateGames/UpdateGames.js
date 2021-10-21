import React, { useEffect, useState } from "react";
import { Api } from "../../../Api/Api";

export default function Updategame(props) {
    const id = props.match.params.id;

    const [game, setgame] = useState(undefined);

    useEffect(() => {
        const loadgame = async () => {
            const response = await Api.buildApiGetRequest(Api.readByIdUrl(id));

            const results = await response.json();

            setgame(results);
        };

        loadgame();
    }, [id]);

    if (!game) {
        return <div>Loading...</div>;
    }

    const handleSubmit = async event => {
        // Previne o comportamento padrão do submit, que no caso do form é o refresh
        event.preventDefault();

        // Obtém os dados dos inputs
        const gamecover = event.target.gamecover.value;
        const description = event.target.description.value;
        const year = +event.target.year.value;
        const nota = +event.target.nota.value;
        const trailerurlurl = event.target.trailerurlurl.value;
        const gameplayurlurl = event.target.gameplayurlurl.value;

        // Constrói um payload com esses dados
        const payload = {
            gamecover,
            description,
            year,
            nota,
            trailerurlurl,
            gameplayurlurl,
        };

        // Faz uma requisição no backend
        const response = await Api.buildApiPatchRequest(
            Api.updateGameUrl(id),
            payload,
            true
        );

        const body = await response.json();

        if (response.status === 200) {
            // game updated successfully

            const id = body.id;

            props.history.push(`/game/view/${id}`);
        } else {
            // Error
        }
    };
    console.log('passou');
    return (
        <div className="update_body">
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <label className="form__label" htmlFor="trailerurlurl">
                        trailerurlurl:
                    </label>
                </div>

                <div>
                    <input
                        className="form__input-text"
                        type="text"
                        id="trailerurlurl"
                        name="trailerurlurl"
                        defaultValue={game.trailerurlurl}
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
                        defaultValue={game.gamecover}
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
                        defaultValue={game.description}
                    />
                </div>

                <div>
                    <label className="form__label" htmlFor="year">
                        Year:
                    </label>
                </div>

                <div>
                    <input
                        className="form__input-text"
                        type="number"
                        id="year"
                        name="year"
                        defaultValue={game.year}
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
                        defaultValue={game.nota}
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
                        defaultValue={game.trailerurl}
                    />
                </div>

                <div>
                    <label className="form__label" htmlFor="gameplayurl">
                        gameplayurl:
                    </label>
                </div>

                <div>
                    <input
                        className="form__input-text"
                        type="text"
                        id="gameplayurl"
                        name="gameplayurl"
                        defaultValue={game.gameplayurl}
                    />
                </div>

                <div>
                    <input
                        className="form__submit button button--primary"
                        type="submit"
                        value="Salvar"
                    />
                </div>
            </form>
        </div>
    );
}