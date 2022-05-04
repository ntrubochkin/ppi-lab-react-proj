import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context/AppContext';
import { privateRoutes, publicRoutes } from '../router/AppRoutes';
import Loader from './UI/loader/Loader';

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if(isLoading) {
        return <Loader/>
    }

    return (
        <Routes>
            {isAuth ?
                privateRoutes.map(r => 
                    <Route exact={r.exact} path={r.path} element={r.component} key={r.path}/>
                )
                :
                publicRoutes.map(r => 
                    <Route exact={r.exact} path={r.path} element={r.component} key={r.path}/>
                )
            }
        </Routes>
    );
};

export default AppRouter;