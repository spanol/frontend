import React from 'react';
import { useState, useEffect} from 'react';
import { Api } from '../../../Api/Api';
import GamesCard from '../GamesCard/GamesCard';
import './JogosList.css'

export const UsersList = () => {
    const [Users, setUsers] = useState([]);

    useEffect(() => {
        const loadUsersList = async () => {
            const response = await Api.buildApiGetRequest(Api.readAllUsersUrl());

            const results = await response.json();

            setUsers(results);
        };

        loadUsersList();
    }, []);

    return (
        <div className="cardList">
            
            {Users.map((profiles) =>
            <div profiles={profiles} key={profiles.id}/>
            )}
        </div>
    );
};