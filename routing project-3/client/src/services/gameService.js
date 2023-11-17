import { request } from '../lib/request';

// const baseUrl = 'http://localhost:3030/jsonstore/games';
const baseUrl1 = 'http://localhost:3030/jsonstore'




//Base Create Method
export const create = async (gameData) => {
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


//Get all Games from DB
export const getAll = async () => { 
    const baseUrl_1 = 'http://localhost:3030/jsonstore/games';

    const result = await request('GET', baseUrl_1);
    console.log(result);

    return Object.values(result); // 'Test game', 'Fantasy', '112', ....
};