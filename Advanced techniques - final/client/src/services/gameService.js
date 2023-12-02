import * as requestLibMyAxios from '../lib/request';

const baseUrl = 'http://localhost:3030/data/games';



//!custom request logic similar AXIOS lib calls
export const getAllData = async () =>{
    const result = await requestLibMyAxios.get(baseUrl);

    return Object.values(result); // 'Test game', 'Fantasy', '112', ....
};


export const getOne = async (elementId) =>{
    const result = await requestLibMyAxios.get(`${baseUrl}/${elementId}`);

    return result;
};


export const getLatest = async () => {
    const query = new URLSearchParams({
        offset: 0,
        pageSize: 3,
    });

    const result = await requestLibMyAxios.get(`${baseUrl}?${query}`);
    
    return result;
};

//*************************************************************************************************** */


export const create = async (elementData) =>{
    const result = await requestLibMyAxios.post(baseUrl, elementData);

    return result; 
};


export const edit = async (elementId, elementData) => {
    const result = await requestLibMyAxios.put(`${baseUrl}/${elementId}`, elementData);

    return result; 
};


export const remove = async (elementId) =>  requestLibMyAxios.remove(`${baseUrl}/${elementId}`);










