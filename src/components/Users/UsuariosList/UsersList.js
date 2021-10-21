import React from 'react';
import { useState, useEffect} from 'react';
import { Api } from '../../../Api/Api';



export const UsuariosList = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const loadUsuariosList = async () => {
            const response = await Api.buildApiGetRequest(Api.readAllUrl());

            const results = await response.json();

            setUsuarios(results);
        };

        loadUsuariosList();
    }, []);

    return (
        <div>
            {usuarios.map((usuarios, index) => (
                <div key={"usuarios_list_" + index}>{usuarios.nome}</div>
            ))}
        </div>
    );
};