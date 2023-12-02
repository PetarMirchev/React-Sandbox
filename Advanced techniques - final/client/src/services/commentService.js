import * as requestLibMyAxios from '../lib/request';

const baseUrl = 'http://localhost:3030/data/comments';

// const baseUrl = 'http://localhost:3030/jsonstore/comments';
//similar logic to gameService.js !

export const create = async (gameId, text) => {
    const newComment = await requestLibMyAxios.post(baseUrl, {
        gameId,
        // username,
        text,
    })

    return newComment;
};

// get all comments for selected (ID) game/product --> getAll(gameId)
export const getAll = async (gameId) => { 
    const query = new URLSearchParams({
        where: `gameId="${gameId}"`,
        load: `owner=_ownerId:users`,
    });

    const result = await requestLibMyAxios.get(`${baseUrl}?${query}`);

    return result;

//    // TODO: temp solution until migration to collections service 
//    return Object.values(result).filter(comment => comment.gameId === gameId);
};


//******************************************************************************************** */

//! ?????????????????????????????????????
export const getByGameId = (gameId) => {
    const relations = encodeURIComponent(`user=_ownerId:users`);
    const search = encodeURIComponent(`gameId="${gameId}"`);

    return requestLibMyAxios.get(`${baseUrl}?where=${search}&load=${relations}`);
};



