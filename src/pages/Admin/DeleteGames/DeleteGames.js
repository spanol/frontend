import React from "react";
import { Api } from "../../../Api/Api";
import '../DeleteGames/deletegame.css'

export default function DeleteGame(props) {
    const id = props.match.params.id;

    const handleDelete = async event => {
        const response = await Api.buildApiDeleteRequest(Api.deleteGameUrl(id));

        if (response.status === 204) {
            
            props.history.push(`/`);
        } else {
            // Error
        }
    };

    return (
        <div className="confirma-Delete">
            <div >
                <h2 className="confirm">Are you sure that you want to delete this item?</h2>
                <br />
                <br />
                <div className="buttonDelete">
                    <button
                        className="button button--danger"
                        onClick={handleDelete}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
}