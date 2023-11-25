export const request = async (method, url, data) => {
    const response = await fetch(url, {
       method, 
    });

    if(!response.ok){
        throw new Error(response.message);
    }

    const result = await response.json()
    return result;
};

//Base Create Method --- up is part of this!
// export const create = async (gameData) => {
//     const baseUrl_1 = 'http://localhost:3030/jsonstore'
//     const response = await fetch(`${baseUrl_1}/games`, {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(gameData)
//     });

//     const result = await response.json();
//     return result;
// };


//******************************************************************************************************** */

//!custom helper logic for creating requests for server (simulates similar interface as AXIOS in use .get(...))
const buildOptions = (data) => { // support build request1 body & headers
    const options = {};

    if(data) {
        options.headers = {
            'content-type': 'application/json'
        };
        options.body = JSON.stringify(data);
    }

    return options;
};

const request1 = async (method, url, data) => {
    const response = await fetch(url, {
        ...buildOptions(data),
        method, // 'GET', 'POST'....
    });

    const result = await response.json();
    return result;
};

export const get = request1.bind( null, 'GET');
export const post = request1.bind(null, 'POST');
export const put = request1.bind(null, 'PUT');
export const remove = request1.bind(null, 'DELETE');
export const patch = request1.bind(null, 'PATCH');

//************************************************************************************************* */