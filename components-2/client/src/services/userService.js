const URL = 'http://localhost:3030/jsonstore/users'; // call from Back-end API


export const getAll = async () => {

        const response = await fetch(URL);
        const result = await response.json();
    
        const data = Object.values(result);
    
        return data;
};



export const create = async (data) => {
    // server expects this type of data to resive for create:
    // {
    //     firstName,
    //     lastName,
    //     email,
    //     imageUrl,
    //     phoneNumber,
    //     createdAt,
    //     updatedAt,
    //     address: {
    //       country,
    //       city,
    //       street,
    //       streetNumber
    //     }
    //   }

    const body = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        imageUrl: data.imageUrl,
        phoneNumber: data.phoneNumber,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        address: {
            country: data.country,
            city: data.city,
            street: data.street,
            streetNumber: data.streetNumber,
        }
    };


    const response = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })

    const result = await response.json();
    console.log(result);
    return result;
};





export const getOne = async (userId) => {
    const response = await fetch(`${URL}/${userId}`);
    const result = await response.json();
    return result;
};



export const removeUser = async (userId) => {
    const response = await fetch(`${URL}/${userId}`, {
        method: 'DELETE',
    });
    
    const result = await response.json();
    return result;
};