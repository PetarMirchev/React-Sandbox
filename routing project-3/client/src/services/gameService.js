import { request } from '../lib/request';
import * as requestLibMyAxios from '../lib/request';

const baseUrl = 'http://localhost:3030/jsonstore/games';


//!custom request logic similar AXIOS lib calls
export const getAll = async () =>{
    const result = await requestLibMyAxios.get(baseUrl);

    return Object.values(result);
};


export const create = async (elementData) =>{
    const result = await requestLibMyAxios.post(baseUrl, elementData);

    return result;
};


export const getOne = async (elementId) =>{
    const result = await requestLibMyAxios.get(`${baseUrl}/${elementId}`);

    return result;
};









//************************************************************************************************ */
//Base Create Method (normal write request)
export const create_1 = async (gameData) => {
    const baseUrl_1 = 'http://localhost:3030/jsonstore'
    const response = await fetch(`${baseUrl_1}/games`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(gameData)
    });

    const result = await response.json();
    return result;
};

//!extend version whit simple 'request()' from lib->request
//Get all Games from Back-end
export const getAllData = async () => { 
    const baseUrl_1 = 'http://localhost:3030/jsonstore/games';

    const result = await request('GET', baseUrl_1);
    //console.log(result);

    return Object.values(result); // 'Test game', 'Fantasy', '112', ....
};
//************************************************************************************************ */