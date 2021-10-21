import { Api } from "../../../Api/Api";

export default function CreateGenre (props) {
    const handleSubmit = async event => {
        event.preventDefault();

        const name = event.target.name.value;
        
    
        const payload = {
            name,
        };

        console.log(payload);

        const response = await Api.buildApiPostRequest(
            Api.createGenreUrl(),
            payload,
            
        );

        

        if (response.status === 201) {
            

            props.history.push("/");
        } else {
            //Error
        }
    }
    return (
        <div className="body_createUsu">           
            <div className="cardCreate">
                <div className="teste">
                    <h1 className="tituloCreate">Add a new genre</h1>
                    <form className="form" onSubmit={handleSubmit}>
                        <div>
                            <label className="form__label" htmlFor="name">
                                name:
                            </label>
                        </div>

                        <div>
                            <input
                                className="form__input-text"
                                type="text"
                                id="name"
                                name="name"
                            />
                        </div>               
                                        
                    
                        <div>
                            <input className="form__submit" type="submit" value="Criar" />
                        </div>

                    </form>
                </div>
            </div>
        </div>
        
    )
}