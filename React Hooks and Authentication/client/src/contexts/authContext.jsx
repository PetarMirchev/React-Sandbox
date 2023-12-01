import React, { createContext } from 'react';
import { useNavigate } from 'react-router-dom';

import * as authService from '../services/authService';
import usePersistedState from '../hooks/usePersistedState';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate();
    const [ auth, setAuth ] = usePersistedState('auth', {}); //(key, defaultValue)


    const loginSubmitHandler = async ( values ) => {
        //first step - login user in the server and get session ID from server
        const result = await authService.login(values.email, values.password);

        // second step - set information in custom hook to be saved & check if is still in youse
        setAuth(result);

        // third step - save token in 'localStorage --> 'accessToken''
        localStorage.setItem('accessToken', result.accessToken);

        navigate('/'); // or (Path.Home) whiteout magic strings!
    };


    const registerSubmitHandler = async ( values ) => {
        const result = await authService.register(values.email, values.password);

        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);

        navigate('/'); //Path.Home
    };
    

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
    };


    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username:  auth.username || auth.email,
        email: auth.email,
        userId: auth._id,
        isAuthenticated: !!auth.accessToken,
    }

  return (
    <AuthContext.Provider value={values}>
        {children}
    </AuthContext.Provider>
  );
};

AuthContext.displayName = 'AuthContext';

export default AuthContext;