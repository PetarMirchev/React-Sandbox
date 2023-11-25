import React, { useContext, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import *  as authService from '../../services/authService';
import Path from "../../paths";
import AuthContext from '../../contexts/authContext';

const Logout = () => {

    const navigate = useNavigate();
    const { logoutHandler } = useContext(AuthContext);

    useEffect( () => {
        authService.logout()
            .then(() => {
                logoutHandler();
                navigate(Path.Home);// same as ---> navigate('/');
            }).catch(() => { navigate('/');})
    }, []);

  return  null;
}

export default Logout