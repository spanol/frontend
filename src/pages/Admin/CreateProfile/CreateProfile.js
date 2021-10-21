import { Api } from "../../../Api/Api";

export default function CreateProfile (props) {
    const handleSubmit = async event => {
        event.preventDefault();

        const Title = event.target.Title.value;
        const image = event.target.image.value;
        
    
        const payload = {
            Title,
            image,
            
            
        };
        console.log(payload);

        const response = await Api.buildApiPostRequest(
            Api.createProfilesurl(),
            payload,
            
        );


        if (response.status === 201) {

            props.history.push("/user");
        } else {
            //Error
        }
    }
    return (
        <div className="body_createUsu">           
            <div className="cardCreate">
                <div className="teste">
                    <h1 className="titleCreate">Add a new profile</h1>
                    <form className="form" onSubmit={handleSubmit}>
                        <div>
                            <label className="form__label" htmlFor="Name">
                                Name:
                            </label>
                        </div>

                        <div>
                            <input
                                className="form__input-text"
                                type="text"
                                id="Name"
                                name="Name"
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