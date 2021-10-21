import React from 'react';
import { useState, useEffect} from 'react';
import { Api } from '../../Api/Api';
import LinkButton from '../../components/LinkButton/LinkButton';
import './Profiles.css'

export const ProfilesList = (props) => {
    const id = props.match.params.id;

    const [users, setusers] = useState([]);

    useEffect(() => {
        const loadusersList = async () => {
            const response = await Api.buildApiGetRequest(Api.readByIdusersUrl(id), true);

            const results = await response.json();

            setusers(results);
        };

        loadusersList();
    }, [id]);

    return (
        <div className="Profilediv">
            
            <div className="backProfile">
                <h1>Profiles</h1>
                <div>
                    <p>{users.profiles}</p>                    
                </div>

                
            </div>

            <div>
                <LinkButton className="form__submit" to="/profiles/create" value="Create a new profile" >Create a profile</LinkButton>
            </div>

            
        </div>
    )
}