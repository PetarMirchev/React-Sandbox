import * as requestLibMyAxios from '../lib/request';

const baseUrl = 'http://localhost:3030/jsonstore/comments';
//similar logic to gameService.js !

export const create = async (gameId, username, text) => {
    const newComment = await requestLibMyAxios.post(baseUrl, {
        gameId,
        username,
        text,
    })

    return newComment;
};

// get all comments for selected (ID) game/product --> getAll(gameId)
export const getAll = async (gameId) => { 
    const result = await requestLibMyAxios.get(baseUrl);

    //return Object.values(result); // to return--> 'Test game', 'Fantasy', '112', ....
    
    //filter comments by current ID on game/item
   // TODO: temp solution until migration to collections service 
   return Object.values(result).filter(comment => comment.gameId === gameId);
};
