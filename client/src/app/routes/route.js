import ROUTES from './names';
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from '../../pages/home';
import Trackopedie from '../../pages/trackopedie';
import Login from '../../pages/auths/login';
const AppRoute = () => {
    return (
      <Routes>
         <Route path={ROUTES.HOME} element={<Home />} />
         <Route path={ROUTES.TRACKOPEDIE} element={<Trackopedie />} />
         <Route path={ROUTES.LOGIN} element={<Login />} />
      </Routes>
      
      
    );
  };
  
  export default AppRoute;