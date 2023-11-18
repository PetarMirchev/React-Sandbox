import * as requestLibMyAxios from '../lib/request';

const baseUrl = 'http://localhost:3030/jsonstore/comments';
//similar logic to gameService.js !

export const create = async (itemId, username, text) => {
    const newComment = await requestLibMyAxios.post(baseUrl, {
        gameId: itemId,
        username,
        text,
    })

    return newComment;
};