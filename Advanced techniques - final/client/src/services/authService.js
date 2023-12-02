import * as requestLibMyAxios from '../lib/request';

const baseUrl = 'http://localhost:3030/users';


export const register = async ( email, password ) => {
    await requestLibMyAxios.post(`${baseUrl}/register`, {
        email,
        password,
    })
};


export const login = async ( email, password ) => {
    const result = await requestLibMyAxios.post(`${baseUrl}/login`, {
        email,
        password
    });

    return result;
};



export const logout = async () =>{
    try {

        await requestLibMyAxios.get(`${baseUrl}/logout`);

    } catch (error) {
        console.log(error, `error in logout logic`);
    }
};

