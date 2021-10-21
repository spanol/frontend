import React from 'react';
import { useState, useEffect} from 'react';
import { Api } from '../../../Api/Api';

export const GenresList = () => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const loadGenresList = async () => {
            const response = await Api.buildApiGetRequest(Api.genreUrl());

            const results = await response.json();

            setGenres(results);
        };

        loadGenresList();
    }, []);

    return (
        <div>
            {genres.map((genres, index) => (
                <div key={"genre_list_" + index}>{genres.name}</div>
            ))}
        </div>
    );
};