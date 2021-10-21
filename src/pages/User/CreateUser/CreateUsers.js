import { Api } from "../../../Api/Api";

export default function createuserUrl (props) {
    const handleSubmit = async event => {
        event.preventDefault();
        const username = event.target.username.value;
        const name = event.target.name.value;
        const surname = event.target.surname.value;
        const cpf = event.target.cpf.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
    
        const payload = {
            username,
            name,
            surname,
            cpf,
            email,
            password,
            
        };
        console.log(payload);

        const response = await Api.buildApiPostRequest(
            Api.createuserUrl(),
            payload,
            
        );

        const body = await response.json();

        if (response.status === 201) {
            const id = body.id;

            props.history.push(`/games/view/${id}`);
        } else {
            //Error
        }
    }
    return (
        <div className="CreateUser">           
            <div className="cardCreate">
                <div className="test">
                    <h1 className="tituloCreate">Add a new game</h1>
                    <form className="form" onSubmit={handleSubmit}>
                        <div>
                       
                        <div>
                            <label className="form__label" htmlFor="username">
                            username:
                            </label>
                        </div>

                        <div>
                            <input
                                className="form__input-text"
                                type="text"
                                id="username"
                                name="username"
                            />
                        </div>

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
                            <label className="form__label" htmlFor="surname">
                                surname:
                            </label>
                        </div>

                        <div>
                            <input
                                className="form__input-text"
                                type="text"
                                id="surname"
                                name="surname"
                            />
                        </div>
                        <div>
                            <label className="form__label" htmlFor="cpf">
                                CPF:
                            </label>
                        </div>

                        <div>
                            <input
                                className="form__input-text"
                                type="text"
                                id="cpf"
                                name="cpf"
                            />
                        </div>

                        <div>
                            <label className="form__label" htmlFor="email">
                                Email:
                            </label>
                        </div>

                        <div>
                            <input
                                className="form__input-text"
                                type="text"
                                id="email"
                                name="email"
                            />
                        </div>
                        
                        <div>
                            <label className="form__label" htmlFor="password">
                                password:
                            </label>
                        </div>

                        <div>
                            <input
                                className="form__input-text"
                                type="text"
                                id="password"
                                name="password"
                            />
                        </div>
                                          

                        
                        <div className="buttonCriarPerfil">
                            <input className="form__submit" type="submit" value="Create" />
                        </div>

                    </form>
                </div>
            </div>
        </div>
        
    )
}